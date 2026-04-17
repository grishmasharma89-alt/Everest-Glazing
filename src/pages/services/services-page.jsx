import { useState } from 'react'
import { HOME_CONTENT } from '@/shared/data/site-content'
import { COMPANY } from '@/shared/lib/constants'
import { cn } from '@/shared/lib/utils'
import { Section } from '@/shared/components/ui/section'
import { Container } from '@/shared/components/ui/container'
import { Accordion } from '@/shared/components/ui/accordion'
import { CTASection } from '@/shared/components/sections/cta-section'
import { LinkButton } from '@/shared/components/ui/link-button'
import { Thermometer, VolumeOff, DollarSign, Home, Microscope, Ruler, ShieldCheck, Recycle, ChevronDown } from 'lucide-react'

const categoryDetails = {
  'Double Glazing': {
    label: 'Double Glaze',
    description:
      'Double-glaze glass consists of two panes of glass separated by a layer of gas. It is primarily used in windows and doors to enhance insulation, reduce energy consumption and improve comfort in buildings.',
    highlights: [
      { icon: Thermometer, title: 'Thermal Insulation', text: 'Keeps homes warmer in winter and cooler in summer.' },
      { icon: VolumeOff, title: 'Noise Reduction', text: 'Minimizes outside noise for peaceful indoor living.' },
      { icon: DollarSign, title: 'Cost-Effective', text: 'More affordable than full window replacement.' },
      { icon: Home, title: 'Frame Preservation', text: 'Works with your existing window frames.' },
    ],
    structure: [
      { question: 'Two Glass Panes', answer: 'Two sheets of glass are placed parallel to each other.' },
      { question: 'Spacer', answer: 'A spacer bar keeps the panes apart and is often made of aluminium or thermoplastic.' },
      { question: 'Gap Between Panes', answer: 'The space between the glass panes is filled with air or an inert gas like argon for enhanced insulation.' },
      { question: 'Sealing', answer: 'The edges of the unit are sealed to prevent gas leakage and moisture entry.' },
    ],
    benefits: [
      { question: 'Improved Thermal Insulation', answer: 'Reduces heat loss. The added glazing layer creates an insulating air gap that helps keep your home warmer in winter and cooler in summer. Lower energy requirements for heating and cooling can also reduce your energy bills.' },
      { question: 'Noise Reduction', answer: 'Double glazing significantly minimizes outside noise, creating a quieter and more peaceful indoor environment, especially in urban or high-traffic areas.' },
      { question: 'Enhanced Comfort', answer: 'By reducing drafts and maintaining indoor temperature, retrofit double glazing improves overall comfort in your living spaces.' },
      { question: 'Cost-Effective Solution', answer: 'Retrofitting is often more affordable than replacing entire window units while offering similar benefits in energy efficiency and comfort.' },
      { question: 'Preserves Existing Frames', answer: 'Retrofit double glazing works with your existing window frames, making it an excellent option for homes with historic or aesthetic windows that you wish to retain.' },
      { question: 'Increased Property Value', answer: 'Enhanced energy efficiency and noise reduction can make your property more appealing to buyers, increasing its market value.' },
      { question: 'Environmentally Friendly', answer: 'By improving energy efficiency, retrofit double glazing reduces your carbon footprint and supports a more sustainable lifestyle.' },
      { question: 'UV Protection', answer: 'Many double-glazing options include coatings that block harmful UV rays, protecting furniture, flooring, and artwork from fading over time.' },
      { question: 'Customizable Options', answer: 'Retrofit double glazing can be tailored to specific requirements, such as acoustic glass for maximum soundproofing or low-emissivity glass for enhanced thermal performance.' },
    ],
  },
  'Vaccum Glass': {
    label: 'Vacuum Glass',
    description:
      'Vacuum insulated glass is an advanced form of double glazing that uses a vacuum between two glass panes to deliver superior insulation performance. By eliminating air and gas between the panes, it significantly reduces heat transfer and sound transmission.',
    highlights: [
      { icon: Microscope, title: 'Advanced Technology', text: 'Vacuum gap eliminates conduction and convection.' },
      { icon: Ruler, title: 'Ultra-Thin Profile', text: 'Much thinner than traditional double glazing.' },
      { icon: ShieldCheck, title: 'Superior Insulation', text: 'Best-in-class thermal and acoustic performance.' },
      { icon: Recycle, title: 'Eco-Friendly', text: 'Reduces carbon emissions through energy efficiency.' },
    ],
    structure: [
      { question: 'Two Glass Panes', answer: 'Two high-quality glass sheets are positioned parallel to each other, similar to traditional double glazing.' },
      { question: 'Vacuum Gap', answer: 'Instead of air or gas, the space between the panes is completely evacuated to create a vacuum. This eliminates conduction and convection, the main causes of heat loss.' },
      { question: 'Micro Spacers (Support Pillars)', answer: 'Tiny, nearly invisible micro spacers are placed between the panes to prevent them from collapsing under atmospheric pressure while maintaining the vacuum gap.' },
      { question: 'Edge Sealing', answer: 'The edges are hermetically sealed using advanced sealing technology to maintain the vacuum over a long period and prevent any air leakage.' },
      { question: 'Low-E Coating (Optional)', answer: 'One or both panes may include low-emissivity coatings to further enhance thermal performance by reflecting heat back into the room.' },
    ],
    benefits: [
      { question: 'Superior Thermal Insulation', answer: 'The vacuum eliminates heat transfer through air or gas, providing significantly better insulation than standard double glazing. This high energy efficiency reduces the need for heating and cooling and can lower energy bills.' },
      { question: 'Outstanding Noise Reduction', answer: 'The vacuum layer effectively blocks sound waves, offering enhanced acoustic insulation and making it ideal for homes in busy, urban, or high-traffic environments.' },
      { question: 'Ultra-Thin Profile', answer: 'Vacuum glass achieves high insulation performance with a much thinner profile compared to traditional double glazing, making it suitable where space or frame depth is limited.' },
      { question: 'Enhanced Comfort', answer: 'It maintains stable indoor temperatures by minimizing heat loss and drafts, creating a more consistent and comfortable living environment year-round.' },
      { question: 'Retrofit Friendly', answer: 'Its slim design allows it to be installed into existing window frames without major modifications, making it well suited to upgrading older windows while preserving their original look.' },
      { question: 'Condensation Reduction', answer: 'The superior insulation reduces temperature differences on glass surfaces, helping minimize condensation buildup.' },
      { question: 'Durability and Longevity', answer: 'Advanced sealing supports long-term performance with minimal degradation and strong resistance to moisture and environmental factors.' },
      { question: 'Environmentally Friendly', answer: 'Vacuum insulated glass improves energy efficiency, reducing carbon emissions and supporting more sustainable building practices.' },
      { question: 'UV Protection', answer: 'Optional coatings can block harmful UV rays, helping protect furniture, flooring, and artwork from fading.' },
      { question: 'High-End Performance Solution', answer: 'It is considered a premium glazing option due to its advanced technology and superior performance compared with conventional double glazing.' },
    ],
  },
}

export function ServicesPage() {
  const categories = HOME_CONTENT.showcaseItems.slice(0, 2)
  const primaryPhoneHref = `tel:${COMPANY.phone.replace(/\s/g, '')}`
  const [activeIndex, setActiveIndex] = useState(0)
  const [showAllBenefits, setShowAllBenefits] = useState(false)

  const INITIAL_BENEFITS_COUNT = 6

  const handleTabSwitch = (index) => {
    setActiveIndex(index)
    setShowAllBenefits(false)
  }

  const activeCategory = categories[activeIndex]
  const details = categoryDetails[activeCategory?.title]

  return (
    <>
      {/* Hero */}
      <Section spacing="none" background="white" className="pt-28 sm:pt-32">
        <Container>
          <div className="mx-auto max-w-5xl text-center pb-10 sm:pb-12">
            <p className="type-overline text-primary">Our Categories</p>
            <h1 className="mt-3 type-h2 text-foreground sm:type-h1">Explore Our Glass Solutions</h1>
            <p className="mx-auto mt-5 max-w-3xl type-body sm:text-(length:--text-body-lg) text-foreground/(--opacity-muted)">
              From double glazing to advanced vacuum glass, each solution is built to improve comfort, efficiency, and style for your home.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="mx-auto max-w-3xl">
            <div className="flex justify-center gap-2 rounded-full border border-primary-300/20 bg-secondary/40 p-1.5">
              {categories.map((cat, index) => {
                const catDetails = categoryDetails[cat.title]
                return (
                  <button
                    key={cat.title}
                    type="button"
                    onClick={() => handleTabSwitch(index)}
                    className={cn(
                      'flex-1 rounded-full px-5 py-2.5 type-overline tracking-(--tracking-wide) transition-all duration-200',
                      activeIndex === index
                        ? 'bg-primary text-white shadow-sm'
                        : 'text-foreground/60 hover:bg-primary/10 hover:text-primary-700',
                    )}
                  >
                    {catDetails?.label || cat.title}
                  </button>
                )
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Active Category Content */}
      {details && (
        <Section spacing="none" background="white" className="py-14 sm:py-20">
          <Container>
            <div className="mx-auto max-w-6xl">
              {/* Image + Intro */}
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <div className="overflow-hidden rounded-2xl border border-primary-300/20 bg-secondary/20">
                  <img
                    src={activeCategory.image}
                    alt={activeCategory.title}
                    className="aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div>
                  <p className="type-overline text-primary">{details.label}</p>
                  <h2 className="mt-3 type-h3 text-foreground">{activeCategory.title}</h2>
                  <p className="mt-4 type-body text-foreground/(--opacity-muted)">
                    {details.description}
                  </p>
                  <LinkButton to="/contact" variant="primary" size="default" className="mt-6">
                    Get a Quote
                  </LinkButton>
                </div>
              </div>

              {/* Highlight Cards */}
              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {details.highlights.map((h) => (
                  <div
                    key={h.title}
                    className="rounded-2xl border border-primary-300/20 bg-surface-sunken/40 px-5 py-5 text-center"
                  >
                    <h.icon className="mx-auto size-7 text-primary" strokeWidth={1.5} />
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-foreground">{h.title}</p>
                    <p className="mt-2 text-sm text-foreground/(--opacity-muted)">{h.text}</p>
                  </div>
                ))}
              </div>

              {/* Structure — Accordion */}
              <div className="mt-12">
                <h3 className="type-overline text-foreground">Structure</h3>
                <div className="mt-4">
                  <Accordion key={`structure-${activeIndex}`} items={details.structure} />
                </div>
              </div>

              {/* Key Benefits — Compact grid with show more */}
              <div className="mt-12">
                <h3 className="type-overline text-foreground">Key Benefits</h3>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {(showAllBenefits ? details.benefits : details.benefits.slice(0, INITIAL_BENEFITS_COUNT)).map((b) => (
                    <div
                      key={b.question}
                      className="group rounded-2xl border border-primary-300/20 bg-surface-sunken/30 px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white hover:shadow-lg"
                    >
                      <p className="text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">{b.question}</p>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/(--opacity-muted)">{b.answer}</p>
                    </div>
                  ))}
                </div>
                {details.benefits.length > INITIAL_BENEFITS_COUNT && (
                  <div className="mt-6 flex justify-center">
                    <button
                      type="button"
                      onClick={() => setShowAllBenefits((prev) => !prev)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-primary-300/30 px-5 py-2 text-sm font-medium text-primary transition-colors duration-200 hover:bg-primary/10"
                    >
                      {showAllBenefits ? 'Show Less' : `Show All ${details.benefits.length} Benefits`}
                      <ChevronDown
                        className={cn(
                          'size-4 transition-transform duration-200',
                          showAllBenefits && 'rotate-180',
                        )}
                      />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* CTA */}
      <CTASection
        label="Get Started"
        title="Ready to upgrade your windows?"
        subtitle="Contact Everest Double Glazing today to book your quote and discover the right glass solution for your home."
        primaryCta={{ label: 'Book Your Free Quote', to: '/contact' }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: primaryPhoneHref }}
        background="white"
        spacing="sm"
        light={false}
        primaryVariant="primary"
        secondaryVariant="primary-outline"
      />
    </>
  )
}
