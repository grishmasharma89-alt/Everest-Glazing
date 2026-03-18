import { Outlet } from 'react-router-dom'
import { RouteScrollTop } from '@/shared/components/common/route-scroll-top'
import { Footer } from '@/shared/components/layout/footer'
import { Header } from '@/shared/components/layout/header'
import { ToastProvider } from '@/shared/components/ui/toast-provider'

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <RouteScrollTop />
      <Header />
      <main className="w-full flex-1">
        <Outlet />
      </main>
      <Footer />
      <ToastProvider />
    </div>
  )
}
