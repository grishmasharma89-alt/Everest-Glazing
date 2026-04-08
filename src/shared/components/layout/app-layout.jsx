import { Outlet } from 'react-router-dom'
import { RouteScrollTop } from '@/shared/components/common/route-scroll-top'
import { PageIntro } from '@/shared/components/common/page-intro'
import { PageTransition } from '@/shared/components/common/page-transition'
import { ScrollProgressBar, BackToTopButton } from '@/shared/components/common/scroll-enhancements'
import { Footer } from '@/shared/components/layout/footer'
import { Header } from '@/shared/components/layout/header'
import { ToastProvider } from '@/shared/components/ui/toast-provider'
import { useSmoothScroll } from '@/shared/hooks/use-smooth-scroll'

export function AppLayout() {
  useSmoothScroll()

  return (
    <PageIntro>
      <div className="noise-overlay flex min-h-screen flex-col bg-background text-foreground">
        <ScrollProgressBar />
        <RouteScrollTop />
        <Header />
        <main className="w-full flex-1">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
        <Footer />
        <BackToTopButton />
        <ToastProvider />
      </div>
    </PageIntro>
  )
}
