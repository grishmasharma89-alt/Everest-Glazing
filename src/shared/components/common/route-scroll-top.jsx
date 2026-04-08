import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToTop } from '@/shared/hooks/use-smooth-scroll'

export function RouteScrollTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    scrollToTop()
  }, [pathname])

  return null
}
