import { memo, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS_CONTENT } from '@/shared/data/site-content'
import { Section } from '@/shared/components/ui/section'
import { Container } from '@/shared/components/ui/container'
import { OptimizedImage } from '@/shared/components/common/optimized-image'
import { Button } from '@/shared/components/ui/button'

const ProjectGalleryItem = memo(function ProjectGalleryItem({ title, image, slug }) {
  return (
    <Link to={`/projects/${slug}`} className="group block cursor-pointer space-y-3">
      <div className="relative overflow-hidden rounded-lg">
        <OptimizedImage
          src={image}
          alt={title}
          className="aspect-square w-full transition-transform duration-500 group-hover:scale-105"
          wrapperClassName="bg-secondary"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {/* Teal circular badge */}
          <div
            className="flex h-28 w-28 items-center justify-center rounded-full text-center text-sm font-semibold text-white shadow-lg"
            style={{
              background: 'radial-gradient(circle at 40% 35%, #A2D6E6, #5BB5D0 60%, #2F6F86)',
            }}
          >
            View More
          </div>
        </div>
      </div>
      <h3 className="text-center text-[length:var(--text-body)] font-semibold">{title}</h3>
    </Link>
  )
})

const PROJECT_SEGMENTS = ['Commercial', 'Residential']

const formatFilterLabel = (value) =>
  value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')

const SegmentCard = memo(function SegmentCard({ title, description, count, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group rounded-2xl border border-border bg-white p-8 text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg"
    >
      <p className="text-[length:var(--text-overline)] font-semibold tracking-widest text-primary">PROJECT TYPE</p>
      <h2 className="mt-3 text-3xl font-bold text-foreground transition-colors group-hover:text-primary md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-[length:var(--text-body)] text-foreground/[var(--opacity-secondary)]">{description}</p>
      <p className="mt-6 inline-flex rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-foreground/80">
        {count} projects
      </p>
    </button>
  )
})

export function ProjectsPage() {
  const { projects } = PROJECTS_CONTENT
  const [selectedSegment, setSelectedSegment] = useState(null)
  const [selectedFilters, setSelectedFilters] = useState([])

  const projectsBySegment = useMemo(
    () =>
      PROJECT_SEGMENTS.reduce((acc, segment) => {
        acc[segment] = projects.filter((project) => project.segment === segment)
        return acc
      }, {}),
    [projects],
  )

  const visibleProjects = useMemo(() => {
    if (!selectedSegment) {
      return []
    }

    const segmentProjects = projectsBySegment[selectedSegment] ?? []

    if (selectedFilters.length === 0) {
      return segmentProjects
    }

    return segmentProjects.filter((project) => {
      const projectFilters = project.filters ?? []
      return selectedFilters.every((activeFilter) => projectFilters.includes(activeFilter))
    })
  }, [projectsBySegment, selectedFilters, selectedSegment])

  const availableFilters = useMemo(() => {
    if (!selectedSegment) {
      return []
    }

    const segmentProjects = projectsBySegment[selectedSegment] ?? []
    const uniqueFilters = new Set()

    segmentProjects.forEach((project) => {
      ;(project.filters ?? []).forEach((filter) => uniqueFilters.add(filter))
    })

    return [...uniqueFilters].sort((a, b) => a.localeCompare(b))
  }, [projectsBySegment, selectedSegment])

  const toggleFilter = (filter) => {
    setSelectedFilters((prev) =>
      prev.includes(filter) ? prev.filter((item) => item !== filter) : [...prev, filter],
    )
  }

  const handleSegmentSelect = (segment) => {
    setSelectedSegment(segment)
    setSelectedFilters([])
  }

  const handleBackToSegments = () => {
    setSelectedSegment(null)
    setSelectedFilters([])
  }

  return (
    <Section background="white" className="pt-24 md:pt-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[length:var(--text-overline)] font-semibold tracking-widest text-primary">OUR PROJECTS</p>
          <h1 className="mt-4 text-5xl font-bold md:text-6xl">Projects and Gallery</h1>
          <p className="mt-6 text-[length:var(--text-body-lg)] text-foreground/[var(--opacity-secondary)]">
            Start by choosing a project type, then refine the gallery using filters like timber, low-e, and more.
          </p>
        </div>

        {!selectedSegment && (
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
            <SegmentCard
              title="Commercial"
              description="Offices, storefronts, and business spaces focused on comfort and performance."
              count={projectsBySegment.Commercial?.length ?? 0}
              onClick={() => handleSegmentSelect('Commercial')}
            />
            <SegmentCard
              title="Residential"
              description="Homes and living spaces where warmth, noise control, and style all matter."
              count={projectsBySegment.Residential?.length ?? 0}
              onClick={() => handleSegmentSelect('Residential')}
            />
          </div>
        )}

        {selectedSegment && (
          <>
            <div className="mt-12 flex flex-col gap-4 rounded-xl border border-border bg-secondary/30 p-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[length:var(--text-overline)] font-semibold tracking-widest text-primary">SELECTED TYPE</p>
                <h2 className="mt-2 text-2xl font-bold md:text-3xl">{selectedSegment} Projects</h2>
              </div>
              <Button variant="outline" size="sm" onClick={handleBackToSegments}>
                Change Type
              </Button>
            </div>

            <div className="mt-6 rounded-xl border border-border bg-white p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-sm font-semibold tracking-wide text-foreground/80">Filter Projects</h3>
                {selectedFilters.length > 0 && (
                  <Button variant="ghost" size="sm" onClick={() => setSelectedFilters([])}>
                    Clear Filters
                  </Button>
                )}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {availableFilters.map((filter) => {
                  const isActive = selectedFilters.includes(filter)
                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => toggleFilter(filter)}
                      className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                        isActive
                          ? 'border-primary bg-primary text-white'
                          : 'border-border bg-secondary/60 text-foreground/75 hover:border-primary/40 hover:text-foreground'
                      }`}
                    >
                      {formatFilterLabel(filter)}
                    </button>
                  )
                })}
              </div>
            </div>

            {visibleProjects.length > 0 ? (
              <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {visibleProjects.map((project) => (
                  <ProjectGalleryItem
                    key={project.slug}
                    title={project.title}
                    image={project.image}
                    slug={project.slug}
                  />
                ))}
              </div>
            ) : (
              <div className="mt-10 rounded-xl border border-dashed border-border bg-secondary/20 p-10 text-center">
                <p className="text-[length:var(--text-body)] text-foreground/70">
                  No projects match the selected filters. Try removing one or more filters.
                </p>
              </div>
            )}
          </>
        )}
      </Container>
    </Section>
  )
}
