import { Section } from '@/shared/components/ui/section'
import { Container } from '@/shared/components/ui/container'
import { Heading } from '@/shared/components/ui/heading'
import { TestimonialCard } from '@/shared/components/cards/testimonial-card'

/**
 * TestimonialsSection — grid of testimonial cards with heading.
 * Reused on Home, Reviews pages.
 */
export function TestimonialsSection({
  label = 'Reviews',
  title,
  subtitle,
  testimonials = [],
  background = 'default',
}) {
  return (
    <Section background={background}>
      <Container>
        <Heading label={label} title={title} subtitle={subtitle} />
        <div className="mt-8 grid gap-4 lg:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} {...testimonial} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
