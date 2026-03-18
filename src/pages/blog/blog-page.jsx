import { Section } from '@/shared/components/ui/section'
import { Container } from '@/shared/components/ui/container'
import { Heading } from '@/shared/components/ui/heading'
import { CardShell } from '@/shared/components/ui/card-shell'

export function BlogPage() {
  return (
    <Section background="white" className="pt-28 sm:pt-32">
      <Container>
        <Heading
          label="Blog"
          title="Blog and Articles"
          subtitle="Educational content for energy efficiency, retrofit planning, and glazing maintenance."
          level="h1"
        />
        <CardShell className="mt-8">
          <p className="type-body text-black/72">
            This page is ready for content feed integration and card-based post listing.
          </p>
        </CardShell>
      </Container>
    </Section>
  )
}
