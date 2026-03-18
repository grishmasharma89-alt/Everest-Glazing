import { Section } from '@/shared/components/ui/section'
import { Container } from '@/shared/components/ui/container'
import { Heading } from '@/shared/components/ui/heading'
import { BenefitCard } from '@/shared/components/cards/benefit-card'

/**
 * BenefitsSection — grid of benefit cards with heading block.
 * Reused on Home, Services, Why Choose Us pages.
 */
export function BenefitsSection({
  label,
  title,
  subtitle,
  benefits = [],
  columns = 3,
  background = 'default',
}) {
  const gridCols = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <Section background={background}>
      <Container>
        <Heading label={label} title={title} subtitle={subtitle} />
        <div className={`mt-8 grid gap-4 lg:mt-12 ${gridCols[columns] || gridCols[3]}`}>
          {benefits.map((benefit, idx) => (
            <BenefitCard key={idx} {...benefit} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
