import { useParams } from 'react-router-dom'
import { Section } from '@/shared/components/ui/section'
import { Container } from '@/shared/components/ui/container'
import { Heading } from '@/shared/components/ui/heading'
import { CardShell } from '@/shared/components/ui/card-shell'

export function BlogPostPage() {
  const { slug } = useParams()

  return (
    <Section background="white" className="pt-28 sm:pt-32">
      <Container>
        <Heading label="Blog Post" title={`Blog Post: ${slug}`} level="h1" />
        <CardShell className="mt-8">
          <p className="type-body text-black/72">
            This route is prepared for long-form article rendering with reusable typography and card
            sections.
          </p>
        </CardShell>
      </Container>
    </Section>
  )
}
