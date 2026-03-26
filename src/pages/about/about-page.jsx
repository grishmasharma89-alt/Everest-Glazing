import { COMPANY } from '@/shared/lib/constants'
import { Section } from '@/shared/components/ui/section'
import { Container } from '@/shared/components/ui/container'
import { OptimizedImage } from '@/shared/components/common/optimized-image'
import { CTASection } from '@/shared/components/sections/cta-section'
import { LinkButton } from '@/shared/components/ui/link-button'
import aboutImage from '@/shared/data/images/pexels-kseniachernaya-5768107.jpg'

export function AboutPage() {
  const primaryPhoneHref = `tel:${COMPANY.phone.replace(/\s/g, '')}`
  const aboutStats = [
    { value: '5+', label: 'Years Experience' },
    { value: '140+', label: 'Projects Guided' },
    { value: '4', label: 'Core Upgrade Types' },
    { value: '700+', label: 'Happy Clients' },
  ]

  return (
    <>
      <Section background="white" className="pt-28 sm:pt-32">
        <Container>
          <div className="mx-auto max-w-5xl text-center">
            <div className="mt-6">
              <p className="type-overline text-primary">About Us</p>
              <h1 className="mt-3 type-h2 text-foreground sm:type-h1">Crafting Better Living</h1>
              <p className="mx-auto mt-5 max-w-3xl type-body text-foreground/70 sm:text-(length:--text-body-lg)">
                We are a Canberra-based team delivering premium retrofit double-glazing solutions with a calm,
                detail-led approach. We combine practical performance upgrades with cleaner finishes,
                better comfort, and a customer experience that feels clear from first quote to final handover.
              </p>
              <div className="mt-7 flex justify-center">
                <LinkButton to="/contact" variant="primary" size="default">
                  Enquire
                </LinkButton>
              </div>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {aboutStats.map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-4xl font-light tracking-tight text-foreground/35 sm:text-5xl">{item.value}</p>
                  <p className="mt-3 type-overline text-foreground/65">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="none" background="white" className="pt-0">
        <div className="overflow-hidden">
          <OptimizedImage
            src={aboutImage}
            alt="About Everest Double Glazing"
            className="aspect-[16/8.8] w-full object-cover"
            wrapperClassName="bg-secondary"
          />
        </div>
      </Section>

      <Section background="white" className="py-14 sm:py-16">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-light leading-tight text-foreground/75 sm:text-5xl">
              Beauty happens with thoughtful design, practical glazing expertise, and precise execution.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl type-body text-foreground/65">
              We work with homeowners to create warmer, quieter, and more refined living spaces through
              retrofit double glazing solutions that are measured, specified, and installed with care.
            </p>
            <div className="mt-8 flex justify-center">
              <LinkButton to="/contact" variant="primary-outline" size="default">
                Meet Our Team
              </LinkButton>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="light" className="py-14 sm:py-16">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <h2 className="text-3xl font-light text-foreground/80 sm:text-5xl">
                What&apos;s different when you work with us?
              </h2>
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-5 type-body text-foreground/70">
                <p>
                  We deliver practical, premium retrofit glazing solutions that improve comfort,
                  efficiency, and long-term property value. Our work is guided by clear advice,
                  honest recommendations, and an installation process that respects the home you already have.
                </p>
                <p>
                  Every project is approached with the same focus on precision, communication, and finish.
                  That means fewer surprises, cleaner execution, and an upgrade that feels considered rather than rushed.
                </p>
              </div>

              <div className="space-y-5 type-body text-foreground/70">
                <p>
                  Our vision is to set a higher standard for retrofit glazing across ACT, NSW, and Victoria
                  while maintaining honest pricing and dependable workmanship. We want clients to feel they are
                  working with a complete solution provider, not just an installer.
                </p>
                <p>
                  By combining Australian-made products with detail-driven project delivery, we help create
                  homes that look more refined, perform better across the seasons, and feel more comfortable every day.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="white" className="pt-0">
        <div className="border-y border-primary-300/20 bg-surface-sunken/45 py-10 sm:py-14">
          <Container>
            <div className="mx-auto max-w-6xl">
              <div className="max-w-3xl">
                <p className="type-overline text-primary">Our Direction</p>
                <h2 className="mt-3 type-h3 text-foreground">Built around clarity, comfort, and lasting quality</h2>
                <p className="mt-4 type-body text-foreground/70">
                  Our approach combines practical retrofit expertise with a calm, premium customer experience. We focus on solutions that improve everyday living while respecting the character of each home.
                </p>
              </div>

              <div className="mt-8 grid gap-8 border-t border-primary-300/20 pt-8 lg:grid-cols-2 lg:gap-10">
                <div className="min-w-0">
                  <p className="type-label text-foreground/55">Mission</p>
                  <h3 className="mt-2 text-(length:--text-h5) font-semibold text-foreground">Deliver practical premium upgrades</h3>
                  <p className="mt-4 type-body text-foreground/70">
                    Deliver practical, premium retrofit glazing solutions that improve comfort, efficiency,
                    and long-term property value.
                  </p>
                  <p className="mt-3 type-body text-foreground/70">
                    We focus on clear guidance, reliable timelines, and workmanship that homeowners can trust
                    for years to come.
                  </p>
                </div>

                <div className="min-w-0 border-t border-primary-300/20 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                  <p className="type-label text-foreground/55">Vision</p>
                  <h3 className="mt-2 text-(length:--text-h5) font-semibold text-foreground">Set a higher standard for retrofit glazing</h3>
                  <p className="mt-4 type-body text-foreground/70">
                    Expand trusted retrofit services across ACT, NSW, and Victoria while maintaining honest
                    pricing and high workmanship standards.
                  </p>
                  <p className="mt-3 type-body text-foreground/70">
                    Our goal is to set a benchmark for modern glazing upgrades that combine performance,
                    visual quality, and a smooth customer experience.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Section>

      <CTASection
        label="Talk to us"
        title="Planning a retrofit upgrade?"
        subtitle="Our team can inspect your current frames and provide a clear recommendation."
        primaryCta={{ label: 'Get Free Quote', to: '/contact' }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: primaryPhoneHref }}
        background="white"
        spacing="sm"
        className="-mt-6"
        light={false}
        primaryVariant="primary"
        secondaryVariant="primary-outline"
      />
    </>
  )
}
