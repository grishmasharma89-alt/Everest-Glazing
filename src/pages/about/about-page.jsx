import { COMPANY } from '@/shared/lib/constants'
import { Section } from '@/shared/components/ui/section'
import { Container } from '@/shared/components/ui/container'
import { OptimizedImage } from '@/shared/components/common/optimized-image'
import { CTASection } from '@/shared/components/sections/cta-section'
import { LinkButton } from '@/shared/components/ui/link-button'
import aboutImage from '@/shared/data/images/ResAlm2.jpg'

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
                Everest Double Glazing and Window Repairs is a Canberra-based specialist in retrofit double glazing,
                delivering premium upgrades that enhance comfort, efficiency, and style without replacing existing frames.
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
          <div className="mx-auto max-w-5xl">
            <p className="type-overline text-primary">Main About Us Description</p>
            <h2 className="mt-3 text-3xl font-light leading-tight text-foreground/75 sm:text-5xl">
              Premium retrofit glazing for homeowners who value comfort, efficiency, and lasting quality.
            </h2>
            <div className="mt-6 space-y-4 type-body text-foreground/70">
              <p>
                Everest Double Glazing and Window Repairs specializes in retrofitting double glazing to upgrade
                existing windows with modern, energy-efficient solutions. Our process improves insulation,
                reduces outside noise, and strengthens home security while preserving the character of your
                current window frames.
              </p>
              <p>
                As a cost-effective alternative to full window replacement, retrofit double glazing delivers
                high-performance results with less disruption. We transform existing windows into refined,
                functional features that support year-round comfort.
              </p>
              <p>
                With over 5 years of glazing experience, we combine craftsmanship, precision, and efficient
                delivery to produce exceptional outcomes at honest, competitive pricing.
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <LinkButton to="/contact" variant="primary-outline" size="default">
                Book a Quote
              </LinkButton>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="light" className="py-14 sm:py-16">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <p className="type-overline text-primary">Why Choose Us</p>
                <ul className="mt-4 space-y-3 type-body text-foreground/70">
                  <li>100% Australian-made products for dependable quality and consistency.</li>
                  <li>Faster turnaround enabled by local sourcing and manufacturing.</li>
                  <li>Locally owned and operated in ACT with honest, transparent pricing.</li>
                  <li>Professional workmanship backed by 5+ years of glazing experience.</li>
                  <li>AS1288 compliant installations completed with precision and care.</li>
                  <li>10-year guarantee for long-term confidence and peace of mind.</li>
                  <li>A luxury investment in comfort, efficiency, acoustic control, and style.</li>
                </ul>
              </div>

              <div>
                <p className="type-overline text-primary">Company Details</p>
                <div className="mt-4 space-y-3 type-body text-foreground/70">
                  <p>
                    Canberra-based emerging local business focused on premium retrofit glazing.
                  </p>
                  <p>
                    Warehouse based in Beard ACT for responsive operations and streamlined delivery.
                  </p>
                  <p>
                    Servicing Canberra and regional NSW with reliable scheduling and consistent workmanship.
                  </p>
                </div>
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
                <h2 className="mt-3 type-h3 text-foreground">Built on quality, trust, and local expertise</h2>
                <p className="mt-4 type-body text-foreground/70">
                  We deliver premium retrofit double glazing that improves thermal performance, reduces noise,
                  and elevates daily comfort while preserving the original aesthetic of each home.
                </p>
              </div>

              <div className="mt-8 grid gap-8 border-t border-primary-300/20 pt-8 lg:grid-cols-2 lg:gap-10">
                <div className="min-w-0">
                  <p className="type-label text-foreground/55">Mission Statement</p>
                  <h3 className="mt-2 text-(length:--text-h5) font-semibold text-foreground">Deliver energy-efficient upgrades with uncompromising quality</h3>
                  <p className="mt-4 type-body text-foreground/70">
                    Our mission is to provide precision-led retrofit double glazing solutions that maximise
                    comfort, energy efficiency, and property value, while exceeding customer expectations
                    through clear communication, honest pricing, and dependable workmanship.
                  </p>
                </div>

                <div className="min-w-0 border-t border-primary-300/20 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                  <p className="type-label text-foreground/55">Vision Statement</p>
                  <h3 className="mt-2 text-(length:--text-h5) font-semibold text-foreground">Grow across NSW and Victoria without compromising service excellence</h3>
                  <p className="mt-4 type-body text-foreground/70">
                    Our vision is to become a trusted benchmark for premium retrofit glazing across ACT,
                    NSW, and Victoria by scaling responsibly, maintaining AS1288-compliant standards,
                    and delivering the same high level of craftsmanship on every project.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Section>

      <CTASection
        label="Call to Action"
        title="Ready to upgrade your windows without replacing your frames?"
        subtitle="Contact Everest Double Glazing today to book your quote and discover the premium retrofit solution for your home."
        primaryCta={{ label: 'Book Your Free Quote', to: '/contact' }}
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
