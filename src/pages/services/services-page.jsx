import { HOME_CONTENT } from '@/shared/data/site-content'
import { Section } from '@/shared/components/ui/section'
import { Container } from '@/shared/components/ui/container'
import { CardShell } from '@/shared/components/ui/card-shell'

export function ServicesPage() {
  const categories = HOME_CONTENT.showcaseItems.slice(0, 2)

  const categoryDetails = {
    'Double Glazing': [
      'Two panes separated by an insulating gap to reduce heat transfer.',
      'Helps soften outside noise and improve year-round comfort.',
      'A practical choice for homes seeking energy savings and visual clarity.',
      'Works well in living areas, bedrooms, and larger window openings.',
    ],
    'Vaccum Glass': [
      'Ultra-thin glazing with a vacuum-sealed space for advanced insulation.',
      'Designed for high performance where slim profiles matter most.',
      'Supports better thermal control without adding bulky depth.',
      'Ideal for premium upgrades and spaces requiring maximum efficiency.',
    ],
  }

  return (
    <>
      <Section spacing="none" background="white" className="pt-28 sm:pt-32">
        <Container>
          <div className="mx-auto max-w-5xl text-center pb-12 sm:pb-14">
            <p className="type-overline text-primary">Our Categories</p>
            <h1 className="mt-3 type-h2 text-foreground sm:type-h1">Explore Our Glass Solutions</h1>
            <p className="mx-auto mt-5 max-w-4xl type-body sm:text-[length:var(--text-body-lg)] text-foreground/[var(--opacity-muted)]">
              We offer a range of modern glass options designed for performance and style. From double glazing to advanced vacuum glass, each solution is built to improve comfort and efficiency. Find the right fit for your space with designs that combine durability, clarity, and energy savings.
            </p>
            <div className="mx-auto mt-6 h-px w-full max-w-3xl bg-primary-300/35" />
          </div>
        </Container>
      </Section>

      <Section spacing="none" background="white" className="pb-[var(--section-spacing-lg)]">
        <Container>
          <div className="mx-auto max-w-6xl space-y-10 sm:space-y-14">
            {categories.map((category, index) => {
              const isImageFirst = index % 2 === 0
              const details = categoryDetails[category.title] || []

              return (
                <div
                  key={category.title}
                  className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
                >
                  <div className={isImageFirst ? '' : 'lg:order-2'}>
                    <CardShell className="overflow-hidden rounded-[2rem] border border-primary-300/20 bg-white p-0 shadow-[var(--shadow-md-val)]">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="aspect-[4/4.2] w-full object-cover"
                        loading="lazy"
                      />
                    </CardShell>
                    <p className="mt-4 text-center text-[length:var(--text-body-lg)] font-medium text-foreground">{category.title}</p>
                  </div>

                  <div className={isImageFirst ? '' : 'lg:order-1'}>
                    <p className="type-overline text-primary">{index === 0 ? 'Double Glaze' : 'Vacuum Glass'}</p>
                    <h2 className="mt-3 type-h3 text-foreground">{category.title}</h2>
                    <div className="mt-5 space-y-4">
                      {details.map((detail) => (
                        <p key={detail} className="border-b border-primary-300/20 pb-3 type-body text-foreground/[var(--opacity-muted)] last:border-b-0">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>
    </>
  )
}
