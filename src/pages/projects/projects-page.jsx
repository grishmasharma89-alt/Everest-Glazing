import { memo, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS_CONTENT } from '@/shared/data/site-content'
import { COMPANY } from '@/shared/lib/constants'
import { Section } from '@/shared/components/ui/section'
import { Container } from '@/shared/components/ui/container'
import { OptimizedImage } from '@/shared/components/common/optimized-image'
import { CTASection } from '@/shared/components/sections/cta-section'
import { useScrollReveal } from '@/shared/hooks/use-scroll-reveal'
import residentialSegmentImage from '@/shared/data/images/image.png'
import commercialSegmentImage from '@/shared/data/images/imgi_176_aluminium-glass-glazing.jpg'

const SEGMENTS = [
  {
    key: 'Residential',
    title: 'Residential',
    subtitle: 'Homes & Living Spaces',
    description: 'Warmth, noise control, and style upgrades for houses and apartments across Canberra and surrounding areas.',
    image: residentialSegmentImage,
  },
  {
    key: 'Commercial',
    title: 'Commercial',
    subtitle: 'Offices & Business Spaces',
    description: 'Performance glazing for storefronts, offices, and commercial properties focused on comfort and efficiency.',
    image: commercialSegmentImage,
  },
]

const formatFilterLabel = (value) =>
  value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

const ProjectCard = memo(function ProjectCard({ title, image, slug, location, type }) {
  return (
    <Link to={`/projects/${slug}`} className="hover-lift group block">
      <div className="overflow-hidden rounded-2xl border border-primary-300/15 bg-white shadow-[var(--shadow-sm-val)] transition-shadow duration-300 group-hover:shadow-[var(--shadow-lg-val)]">
        <div className="relative overflow-hidden">
          <OptimizedImage
            src={image}
            alt={title}
            width={600}
            height={400}
            className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            wrapperClassName="bg-secondary"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-[length:var(--text-overline)] font-semibold tracking-wider text-primary opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
            View Project
          </span>
        </div>
        <div className="p-5">
          <p className="text-[length:var(--text-overline)] font-medium tracking-wider text-primary/70">{location} · {type}</p>
          <h3 className="mt-1.5 text-[length:var(--text-body-lg)] font-semibold text-foreground">{title}</h3>
        </div>
      </div>
    </Link>
  )
})

export function ProjectsPage() {
  const [activeSegment, setActiveSegment] = useState(null)
  const [selectedFilters, setSelectedFilters] = useState([])
  const scopeRef = useScrollReveal([activeSegment, selectedFilters.join('|')])
  const { projects } = PROJECTS_CONTENT
  const primaryPhoneHref = `tel:${COMPANY.phone.replace(/\s/g, '')}`

  const segmentProjects = useMemo(() => {
    if (!activeSegment) return []
    let result = projects.filter((p) => p.segment === activeSegment)
    if (selectedFilters.length > 0) {
      result = result.filter((p) =>
        selectedFilters.every((f) => (p.filters ?? []).includes(f)),
      )
    }
    return result
  }, [projects, activeSegment, selectedFilters])

  const availableFilters = useMemo(() => {
    if (!activeSegment) return []
    const pool = projects.filter((p) => p.segment === activeSegment)
    const unique = new Set()
    pool.forEach((p) => (p.filters ?? []).forEach((f) => unique.add(f)))
    return [...unique].sort((a, b) => a.localeCompare(b))
  }, [projects, activeSegment])

  const toggleFilter = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter],
    )
  }

  const handleSelectSegment = (key) => {
    setActiveSegment(key)
    setSelectedFilters([])
  }

  const handleBack = () => {
    setActiveSegment(null)
    setSelectedFilters([])
  }

  const segmentData = SEGMENTS.find((s) => s.key === activeSegment)

  return (
    <div ref={scopeRef}>
      {/* ── Hero ── */}
      <Section spacing="none" background="white" className="pt-28 sm:pt-32">
        <Container>
          <div className="mx-auto max-w-5xl pb-10 text-center sm:pb-14">
            <p className="reveal type-overline text-primary">Our Projects</p>
            <h1 className="reveal mt-3 type-h2 text-foreground sm:type-h1">
              Projects &amp; Gallery
            </h1>
            <p className="reveal mx-auto mt-5 max-w-3xl type-body text-foreground/[var(--opacity-muted)] sm:text-[length:var(--text-body-lg)]">
              {activeSegment
                ? `Explore our ${activeSegment.toLowerCase()} retrofit projects across Canberra and surrounding regions.`
                : 'Choose your project type to explore before-and-after outcomes across Canberra, Queanbeyan, and surrounding regions.'}
            </p>
          </div>
        </Container>
      </Section>

      {/* ── Segment Selection — shown when no segment chosen ── */}
      {!activeSegment && (
        <Section background="white" spacing="none" className="pb-[var(--section-spacing-lg)]">
          <Container>
            <div className="reveal-stagger mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
              {SEGMENTS.map((seg) => {
                const count = projects.filter((p) => p.segment === seg.key).length
                return (
                  <button
                    key={seg.key}
                    type="button"
                    onClick={() => handleSelectSegment(seg.key)}
                    className="hover-lift group relative overflow-hidden rounded-[2rem] text-left shadow-[var(--shadow-md-val)] transition-shadow duration-300 hover:shadow-[var(--shadow-lg-val)]"
                  >
                    {/* Background image */}
                    <img
                      src={seg.image}
                      alt=""
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      width={900}
                      height={675}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
                      <p className="text-[length:var(--text-overline)] font-medium tracking-wider text-primary-300">{seg.subtitle}</p>
                      <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{seg.title}</h2>
                      <p className="mt-3 max-w-sm text-[length:var(--text-body-sm)] leading-relaxed text-white/70">{seg.description}</p>
                      <div className="mt-5 flex items-center gap-3">
                        <span className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
                          {count} {count === 1 ? 'project' : 'projects'}
                        </span>
                        <span className="flex items-center gap-1.5 text-sm font-semibold text-primary-300 transition-colors group-hover:text-white">
                          Browse
                          <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </Container>
        </Section>
      )}

      {/* ── Active segment — toolbar + gallery ── */}
      {activeSegment && (
        <>
          {/* Toolbar */}
          <Section spacing="none" background="light" className="border-y border-primary-300/20 py-5">
            <Container>
              <div className="mx-auto max-w-6xl">
                {/* Top row: back + segment name + count */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:border-primary/30 hover:text-foreground"
                  >
                    <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M10 3L5 8l5 5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Change Type
                  </button>

                  <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    {segmentData?.title}
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                      {segmentProjects.length}
                    </span>
                  </span>

                  {selectedFilters.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setSelectedFilters([])}
                      className="ml-auto text-sm font-medium text-primary hover:underline"
                    >
                      Clear filters
                    </button>
                  )}
                </div>

                {/* Filter chips */}
                {availableFilters.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {availableFilters.map((filter) => {
                      const isActive = selectedFilters.includes(filter)
                      return (
                        <button
                          key={filter}
                          type="button"
                          onClick={() => toggleFilter(filter)}
                          className={`rounded-full border px-3.5 py-1.5 text-[length:var(--text-body-sm)] font-medium transition-colors ${
                            isActive
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-border bg-white text-foreground/60 hover:border-primary/30 hover:text-foreground'
                          }`}
                        >
                          {formatFilterLabel(filter)}
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
            </Container>
          </Section>

          {/* Gallery Grid */}
          <Section background="white">
            <Container>
              <div className="mx-auto max-w-6xl">
                {segmentProjects.length > 0 ? (
                  <div className="reveal-stagger grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                    {segmentProjects.map((project) => (
                      <ProjectCard
                        key={project.slug}
                        title={project.title}
                        image={project.image}
                        slug={project.slug}
                        location={project.location}
                        type={project.type}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="reveal rounded-2xl border border-dashed border-border bg-secondary/30 px-8 py-16 text-center">
                    <p className="type-body text-foreground/60">
                      No projects match the selected filters. Try removing a filter.
                    </p>
                  </div>
                )}
              </div>
            </Container>
          </Section>
        </>
      )}

      {/* ── CTA ── */}
      <CTASection
        className="mb-16 sm:mb-20"
        label="Start Your Project"
        title="Have a retrofit project in mind?"
        subtitle="We'll inspect your windows and provide a clear recommendation — no obligation."
        primaryCta={{ label: 'Get Free Quote', to: '/contact' }}
        secondaryCta={{ label: `Call ${COMPANY.phone}`, href: primaryPhoneHref }}
      />
    </div>
  )
}
