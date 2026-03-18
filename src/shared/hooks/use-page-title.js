import { useEffect } from 'react'

/**
 * Hook for managing page title and meta tags dynamically
 * Usage: usePageTitle('Services', 'Retrofit Double Glazing Services')
 */
export function usePageTitle(title, description) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | Everest Double Glazing`
    }

    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', description)
      }
    }
  }, [title, description])
}
