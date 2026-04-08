import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Section } from '@/shared/components/ui/section'
import { Container } from '@/shared/components/ui/container'
import { OptimizedImage } from '@/shared/components/common/optimized-image'
import { LinkButton } from '@/shared/components/ui/link-button'
import { CTASection } from '@/shared/components/sections/cta-section'
import { PROJECTS_CONTENT } from '@/shared/data/site-content'
import { COMPANY } from '@/shared/lib/constants'

const formatFilterLabel = (value) =>
  value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = PROJECTS_CONTENT.projects.find((p) => p.slug === slug)
  const primaryPhoneHref = `tel:${COMPANY.phone.replace(/\s/g, '')}`

  const relatedProjects = useMemo(() => {
    if (!project) return []
    return PROJECTS_CONTENT.projects
      .filter((p) => p.slug !== slug)
      .slice(0, 3)
  }, [project, slug])

  if (!project) {
    return (
      <Section background="white" className="pt-28">
        <Container>
          <p className="text-center type-body text-foreground/60">Project not found.</p>
          <div className="mt-6 text-center">
            <LinkButton to="/projects" variant="primary-outline" size="default">
              Back to Projects
            </LinkButton>
          </div>
        </Container>
      </Section>
    )
  }

  return (
    <div>
      {/* ── Hero image — full-width ── */}
      <Section spacing="none" className="pt-20 sm:pt-24">
        <Container>
          <div className="mx-auto max-w-7xl">
            {/* Back link */}
            <Link
              to="/projects"
              className="mb-6 inline-flex items-center gap-2 text-base font-medium text-foreground/60 transition-colors hover:text-primary"
            >
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M10 3L5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All Projects
            </Link>

            {/* Hero image */}
            <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-lg-val)] sm:rounded-[2rem]">
              <OptimizedImage
                src={project.image}
                alt={project.title}
                width={1200}
                height={600}
                className="aspect-[2/1] w-full object-cover sm:aspect-[5/2]"
                wrapperClassName="bg-secondary"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Project Info ── */}
      <Section background="white">
        <Container>
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-16">
              {/* Main content */}
              <div>
                <p className="type-overline text-primary">{project.location} · {project.type}</p>
                <h1 className="mt-3 text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">{project.title}</h1>

                {/* Filter badges */}
                {project.filters?.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.filters.map((f) => (
                      <span
                        key={f}
                        className="rounded-full border border-primary-300/35 bg-primary/7 px-3.5 py-1.5 text-[length:var(--text-body-sm)] font-semibold tracking-wide text-primary"
                      >
                        {formatFilterLabel(f)}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-8 max-w-4xl space-y-7 text-[length:var(--text-body-lg)] leading-[1.8] text-foreground/85">
                  <p>{project.description}</p>
                  <p>{project.details}</p>
                </div>

                <div className="mt-10">
                  <LinkButton to="/contact" variant="primary" size="default">
                    Discuss a Similar Project
                  </LinkButton>
                </div>
              </div>

              {/* Sidebar — project meta */}
              <div className="lg:sticky lg:top-28">
                <div className="rounded-2xl border border-primary-300/20 bg-secondary/30 p-7">
                  <h3 className="type-overline text-primary">Project Details</h3>
                  <dl className="mt-5 space-y-5">
                    <div>
                      <dt className="text-[length:var(--text-body)] font-medium text-foreground/55">Location</dt>
                      <dd className="mt-1 text-[length:var(--text-body-lg)] font-semibold text-foreground">{project.location}</dd>
                    </div>
                    <div className="h-px bg-border" />
                    <div>
                      <dt className="text-[length:var(--text-body)] font-medium text-foreground/55">Project Type</dt>
                      <dd className="mt-1 text-[length:var(--text-body-lg)] font-semibold text-foreground">{project.type}</dd>
                    </div>
                    <div className="h-px bg-border" />
                    <div>
                      <dt className="text-[length:var(--text-body)] font-medium text-foreground/55">Segment</dt>
                      <dd className="mt-1 text-[length:var(--text-body-lg)] font-semibold text-foreground">{project.segment}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Related Projects ── */}
      {relatedProjects.length > 0 && (
        <Section background="light" className="border-t border-primary-300/20">
          <Container>
            <div className="mx-auto max-w-6xl">
              <div className="text-center">
                <p className="type-overline text-primary">More Work</p>
                <h2 className="mt-3 type-h2 text-foreground">Other Projects</h2>
              </div>
              <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProjects.map((rp) => (
                  <Link key={rp.slug} to={`/projects/${rp.slug}`} className="hover-lift group block">
                    <div className="overflow-hidden rounded-2xl border border-primary-300/15 bg-white shadow-[var(--shadow-sm-val)]">
                      <div className="overflow-hidden">
                        <OptimizedImage
                          src={rp.image}
                          alt={rp.title}
                          width={500}
                          height={333}
                          className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          wrapperClassName="bg-secondary"
                        />
                      </div>
                      <div className="p-5">
                        <p className="text-[length:var(--text-overline)] font-medium tracking-wider text-primary/70">{rp.location}</p>
                        <h3 className="mt-1.5 text-[length:var(--text-body-lg)] font-semibold text-foreground">{rp.title}</h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* ── CTA ── */}
      <CTASection
        className="mb-16 sm:mb-20"
        label="Get Started"
        title="Ready to start your retrofit project?"
        subtitle="We'll inspect your current frames and provide a clear recommendation — no obligation."
        primaryCta={{ label: 'Get Free Quote', to: '/contact' }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: primaryPhoneHref }}
      />
    </div>
  )
}
