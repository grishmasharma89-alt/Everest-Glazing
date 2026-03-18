import { useCallback, useRef, useState } from 'react'
import { toast } from 'sonner'
import { FormField } from '@/shared/components/ui/form-field'
import { Input } from '@/shared/components/ui/input'
import { Textarea } from '@/shared/components/ui/textarea'
import { Select } from '@/shared/components/ui/select'
import { Button } from '@/shared/components/ui/button'
import { Spinner } from '@/shared/components/ui/spinner'
import { useFormValidation } from '@/shared/hooks/use-form-validation'
import { submitContactForm } from '@/shared/lib/api'
import { SERVICE_AREAS } from '@/shared/lib/constants'

const VALIDATION_SCHEMA = {
  name: { required: true },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Enter a valid email address',
  },
  phone: {
    required: true,
    pattern: /^[\d\s()+-]{8,}$/,
    message: 'Enter a valid phone number',
  },
  message: { required: true, minLength: 10 },
}

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  suburb: '',
  service: '',
  message: '',
}

/**
 * ContactForm — validated contact/quote form with sonner toast feedback.
 * Composes FormField + Input + Textarea + Select + Button + Spinner.
 */
export function ContactForm({ className }) {
  const formRef = useRef(null)
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { errors, validate } = useFormValidation(VALIDATION_SCHEMA)

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }, [])

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault()

      if (!validate(formData)) return

      setIsSubmitting(true)
      try {
        await submitContactForm(formData)
        toast.success('Message sent! We\'ll be in touch shortly.')
        setFormData(INITIAL_FORM)
        formRef.current?.reset()
      } catch {
        toast.error('Something went wrong. Please try again or call us directly.')
      } finally {
        setIsSubmitting(false)
      }
    },
    [formData, validate],
  )

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={className}
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Name" required error={errors.name}>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            autoComplete="name"
          />
        </FormField>

        <FormField label="Email" required error={errors.email}>
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </FormField>

        <FormField label="Phone" required error={errors.phone}>
          <Input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="04XX XXX XXX"
            autoComplete="tel"
          />
        </FormField>

        <FormField label="Suburb">
          <Select name="suburb" value={formData.suburb} onChange={handleChange}>
            <option value="">Select area</option>
            {SERVICE_AREAS.map((area) => (
              <option key={area} value={area}>{area}</option>
            ))}
          </Select>
        </FormField>

        <FormField label="Service" className="sm:col-span-2">
          <Select name="service" value={formData.service} onChange={handleChange}>
            <option value="">What do you need?</option>
            <option value="retrofit">Retrofit Double Glazing</option>
            <option value="secondary">Secondary Glazing</option>
            <option value="vacuum">Vacuum Insulated Glass</option>
            <option value="other">Other / Not Sure</option>
          </Select>
        </FormField>

        <FormField label="Message" required error={errors.message} className="sm:col-span-2">
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            rows={5}
          />
        </FormField>
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Spinner size="sm" /> Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  )
}
