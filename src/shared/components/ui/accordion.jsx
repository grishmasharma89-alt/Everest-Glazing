import { useCallback, useState } from 'react'
import { cn } from '@/shared/lib/utils'

/**
 * Accordion — disclosure list for FAQ pages.
 * Pure React state, no external dependency. Accessible with aria attributes.
 */
export function Accordion({ items, className, allowMultiple = false }) {
  const [openIndices, setOpenIndices] = useState(new Set())

  const toggle = useCallback(
    (index) => {
      setOpenIndices((prev) => {
        const next = new Set(allowMultiple ? prev : [])
        if (prev.has(index)) {
          next.delete(index)
        } else {
          next.add(index)
        }
        return next
      })
    },
    [allowMultiple],
  )

  return (
    <div className={cn('divide-y divide-border', className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          isOpen={openIndices.has(index)}
          onToggle={toggle}
          {...item}
        />
      ))}
    </div>
  )
}

function AccordionItem({ question, answer, index, isOpen, onToggle }) {
  const panelId = `accordion-panel-${index}`
  const triggerId = `accordion-trigger-${index}`

  return (
    <div>
      <button
        id={triggerId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => onToggle(index)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-[length:var(--text-body)] font-medium transition hover:text-foreground/75 sm:text-[length:var(--text-body-lg)]"
      >
        <span>{question}</span>
        <span
          className={cn(
            'shrink-0 text-xl transition-transform duration-200',
            isOpen && 'rotate-45',
          )}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={cn(
          'grid transition-all duration-[var(--duration-normal)]',
          isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <p className="max-w-3xl text-[length:var(--text-body-sm)] leading-[var(--leading-body)] text-foreground/[var(--opacity-muted)] sm:text-[length:var(--text-body)]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function AccordionContent({ className, children, ...props }) {
  return (
    <div
      className={cn('pb-4 text-gray-600', className)}
      {...props}
    >
      {children}
    </div>
  )
}
