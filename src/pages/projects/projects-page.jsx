import { PROJECTS_CONTENT } from '@/shared/data/site-content'
import { COMPANY } from '@/shared/lib/constants'
import { HeroSection } from '@/shared/components/sections/hero-section'
import { Section } from '@/shared/components/ui/section'
import { Container } from '@/shared/components/ui/container'
import { Heading } from '@/shared/components/ui/heading'
import { ProjectCard } from '@/shared/components/cards/project-card'
import { Badge } from '@/shared/components/ui/badge'
import { CTASection } from '@/shared/components/sections/cta-section'

export function ProjectsPage() {
  const primaryPhoneHref = `tel:${COMPANY.phone.replace(/\s/g, '')}`
  const { hero, categories, projects } = PROJECTS_CONTENT

  return (
    <>
      <HeroSection
        image="https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=2000&q=80"
        title={hero.title}
        subtitle={hero.subtitle}
        primaryCta={{ label: 'Get Free Quote', to: '/contact' }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: primaryPhoneHref }}
        className="pt-20"
      />

      <Section background="light">
        <Container>
          <Heading label="Categories" title="Project types we regularly deliver" level="h2" />
          <div className="mt-8 flex flex-wrap gap-2.5">
            {categories.map((category) => (
              <Badge key={category} variant="outline">{category}</Badge>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <Heading
            label="Gallery"
            title="Recent retrofit upgrades"
            subtitle="Browse completed projects across timber and aluminium frame installations."
            level="h2"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        label="Your project"
        title="Want your property to be the next success story?"
        subtitle="Book a free measure and we will scope the right retrofit approach for your frames."
        primaryCta={{ label: 'Book Free Measure', to: '/contact' }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: primaryPhoneHref }}
      />
    </>
  )
}
