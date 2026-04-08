import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@/shared/lib/utils'

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
  const contentRef = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const content = contentRef.current
    if (!wrapper || !content) return

    if (isOpen) {
      const height = content.scrollHeight
      wrapper.style.height = '0px'
      wrapper.style.opacity = '0'
      requestAnimationFrame(() => {
        wrapper.style.transition = 'height 400ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms ease'
        wrapper.style.height = `${height}px`
        wrapper.style.opacity = '1'
      })
    } else {
      const height = content.scrollHeight
      wrapper.style.height = `${height}px`
      wrapper.style.opacity = '1'
      requestAnimationFrame(() => {
        wrapper.style.transition = 'height 350ms cubic-bezier(0.4, 0, 0.2, 1), opacity 250ms ease'
        wrapper.style.height = '0px'
        wrapper.style.opacity = '0'
      })
    }
  }, [isOpen])

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
            'shrink-0 text-xl transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
            isOpen && 'rotate-45',
          )}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        ref={wrapperRef}
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className="overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div ref={contentRef} className="pb-5">
          <p className="max-w-3xl text-[length:var(--text-body-sm)] leading-[var(--leading-body)] text-foreground/[var(--opacity-muted)] sm:text-[length:var(--text-body)]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}
