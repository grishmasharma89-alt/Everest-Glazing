import { useState } from 'react'

/**
 * Hook for basic form validation
 * Usage: const { errors, validate } = useFormValidation(schema)
 */
export function useFormValidation(schema) {
  const [errors, setErrors] = useState({})

  const validate = (formData) => {
    const newErrors = {}

    Object.keys(schema).forEach((field) => {
      const rule = schema[field]
      const value = formData[field]

      if (rule.required && (!value || value.trim() === '')) {
        newErrors[field] = `${field} is required`
      } else if (rule.pattern && value && !rule.pattern.test(value)) {
        newErrors[field] = rule.message || `Invalid ${field}`
      } else if (rule.minLength && value && value.length < rule.minLength) {
        newErrors[field] = `${field} must be at least ${rule.minLength} characters`
      }
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  return { errors, validate, setErrors }
}
