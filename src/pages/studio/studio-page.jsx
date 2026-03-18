import { Section } from '@/shared/components/ui/section'
import { Container } from '@/shared/components/ui/container'
import { Heading } from '@/shared/components/ui/heading'

export function StudioPage() {
  return (
    <Section background="white" className="pt-28 sm:pt-32">
      <Container>
        <Heading
          label="Studio"
          title="Studio Story"
          subtitle="Placeholder for showcase, marquee, awards, and brand narrative sections."
          level="h1"
        />
      </Container>
    </Section>
  )
}
