import { Section } from '@/shared/components/ui/section'
import { Container } from '@/shared/components/ui/container'
import { Heading } from '@/shared/components/ui/heading'

export function LegalsPage() {
  return (
    <Section background="white" className="pt-28 sm:pt-32">
      <Container>
        <Heading
          label="Legals"
          title="Legal Information"
          subtitle="Privacy policy, terms of service, and compliance information."
          level="h1"
          maxWidth="max-w-3xl"
        />
        <p className="mt-8 type-body text-foreground/[var(--opacity-muted)]">
          This page is reserved for legal content including your privacy policy, terms and conditions,
          and any compliance statements required for your business.
        </p>
      </Container>
    </Section>
  )
}
