import { useParams, Link } from 'react-router-dom'
import { Section } from '@/shared/components/ui/section'
import { Container } from '@/shared/components/ui/container'
import { OptimizedImage } from '@/shared/components/common/optimized-image'
import { PROJECTS_CONTENT } from '@/shared/data/site-content'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = PROJECTS_CONTENT.projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <Section background="white" className="pt-28">
        <Container>
          <p className="text-center text-foreground/60">Project not found.</p>
          <div className="mt-6 text-center">
            <Link to="/projects" className="text-primary underline">Back to Projects</Link>
          </div>
        </Container>
      </Section>
    )
  }

  return (
    <Section background="white" className="pt-24 pb-20 md:pt-28">
      <Container>
        {/* Back link */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-foreground/50 hover:text-primary transition-colors"
        >
          ← Back to Projects
        </Link>

        {/* Project title */}
        <div className="mt-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            {project.location}
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">{project.title}</h1>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-start">
          {/* Landscape image */}
          <div className="overflow-hidden rounded-xl">
            <OptimizedImage
              src={project.image}
              alt={project.title}
              className="aspect-video w-full object-cover"
              wrapperClassName="bg-secondary"
            />
          </div>

          {/* Two descriptive paragraphs */}
          <div className="min-w-0 space-y-6">
            <p className="text-[length:var(--text-body)] leading-relaxed text-foreground/80">
              {project.description}
            </p>
            <p className="text-[length:var(--text-body)] leading-relaxed text-foreground/80">
              {project.details}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
