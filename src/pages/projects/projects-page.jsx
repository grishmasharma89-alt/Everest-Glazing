import { memo } from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS_CONTENT } from '@/shared/data/site-content'
import { Section } from '@/shared/components/ui/section'
import { Container } from '@/shared/components/ui/container'
import { OptimizedImage } from '@/shared/components/common/optimized-image'

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

export function ProjectsPage() {
  const { projects } = PROJECTS_CONTENT

  return (
    <Section background="white" className="pt-24 md:pt-28">
      <Container>
        {/* Title section - matching the provided design */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[length:var(--text-overline)] font-semibold tracking-widest text-primary">
            OUR PROJECTS
          </p>
          <h1 className="mt-4 text-5xl font-bold md:text-6xl">Projects and Gallery</h1>
          <p className="mt-6 text-[length:var(--text-body-lg)] text-foreground/[var(--opacity-secondary)]">
            Explore our latest retrofit installations across Canberra and surrounding regions. Each project
            showcases our commitment to quality workmanship and customer satisfaction.
          </p>
        </div>

        {/* Gallery grid - 6 items */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((project) => (
            <ProjectGalleryItem key={project.slug} title={project.title} image={project.image} slug={project.slug} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
