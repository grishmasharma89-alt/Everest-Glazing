import { REVIEWS_CONTENT } from '@/shared/data/site-content'
import { COMPANY } from '@/shared/lib/constants'
import { HeroSection } from '@/shared/components/sections/hero-section'
import { Section } from '@/shared/components/ui/section'
import { Container } from '@/shared/components/ui/container'
import { Heading } from '@/shared/components/ui/heading'
import { CardShell } from '@/shared/components/ui/card-shell'
import { TestimonialsSection } from '@/shared/components/sections/testimonials-section'
import { CTASection } from '@/shared/components/sections/cta-section'

export function ReviewsPage() {
  const { headlineReviews, supportReviews, reviewStats } = REVIEWS_CONTENT
  const primaryPhoneHref = `tel:${COMPANY.phone.replace(/\s/g, '')}`

  return (
    <>
      <HeroSection
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2000&q=80"
        title="Real homeowner feedback on warmth, comfort, and quiet"
        subtitle="Stories from retrofit double glazing projects across Canberra and surrounding areas."
        primaryCta={{ label: 'Get Free Quote', to: '/contact' }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: primaryPhoneHref }}
        className="pt-20"
      />

      <Section background="light">
        <Container>
          <Heading label="Results" title="Measured outcomes clients notice most" level="h2" />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {reviewStats.map((stat) => (
              <CardShell key={stat.label}>
                <p className="type-h3">{stat.value}</p>
                <p className="mt-2 type-label text-black/60">{stat.label}</p>
              </CardShell>
            ))}
          </div>
        </Container>
      </Section>

      <TestimonialsSection
        label="Featured Reviews"
        title="What clients say after installation"
        testimonials={headlineReviews.map((item) => ({
          quote: item.quote,
          name: item.person,
          location: item.profile,
          photo: item.avatar,
          rating: 5,
        }))}
        background="white"
      />

      <TestimonialsSection
        label="More Stories"
        title="Additional local customer outcomes"
        testimonials={supportReviews.map((item) => ({
          quote: item.quote,
          name: item.person,
          location: item.profile,
          photo: item.avatar,
          rating: 5,
        }))}
        background="dark"
      />

      <CTASection
        label="Your quote"
        title="Ready to improve comfort at your property?"
        subtitle="Book a free measure and let us recommend the best retrofit option for your windows."
        primaryCta={{ label: 'Request Free Quote', to: '/contact' }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: primaryPhoneHref }}
      />
    </>
  )
}
