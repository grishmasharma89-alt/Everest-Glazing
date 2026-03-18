import { memo } from 'react'
import { Link } from 'react-router-dom'
import { OptimizedImage } from '@/shared/components/common/optimized-image'
import { Badge } from '@/shared/components/ui/badge'

/**
 * ProjectCard — displays a project with image, title, type, location.
 * Links to project detail page. Memoized for grid performance.
 */
export const ProjectCard = memo(function ProjectCard({
  title,
  type,
  location,
  image,
  slug,
}) {
  const content = (
    <article className="group space-y-4">
      <div className="overflow-hidden rounded-xl">
        <OptimizedImage
          src={image}
          alt={title}
          className="aspect-[4/3] w-full transition-transform duration-[var(--duration-slow)] group-hover:scale-105"
          wrapperClassName="bg-secondary"
        />
      </div>
      <div>
        <h3 className="text-[length:var(--text-body-lg)] font-semibold">{title}</h3>
        <div className="mt-1.5 flex flex-wrap items-center gap-2">
          {type && <Badge variant="outline">{type}</Badge>}
          {location && (
            <span className="text-[length:var(--text-caption)] text-foreground/[var(--opacity-subtle)]">{location}</span>
          )}
        </div>
      </div>
    </article>
  )

  if (slug) {
    return <Link to={`/projects/${slug}`}>{content}</Link>
  }

  return content
})
