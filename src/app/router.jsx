import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from '@/shared/components/layout/app-layout'
import { AboutPage } from '@/pages/about/about-page'
import { ContactPage } from '@/pages/contact/contact-page'
import { FaqPage } from '@/pages/faq/faq-page'
import { HomePage } from '@/pages/home/home-page'
import { HowItWorksPage } from '@/pages/how-it-works/how-it-works-page'
import { LegalsPage } from '@/pages/legals/legals-page'
import { ReviewsPage } from '@/pages/reviews/reviews-page'
import { ServiceAreasPage } from '@/pages/service-areas/service-areas-page'
import { ServicesPage } from '@/pages/services/services-page'
import { WhyChooseUsPage } from '@/pages/why-choose-us/why-choose-us-page'
import { ProjectDetailPage } from '@/pages/projects/project-detail-page'
import { ProjectsPage } from '@/pages/projects/projects-page'
import { BlogPage } from '@/pages/blog/blog-page'
import { BlogPostPage } from '@/pages/blog/blog-post-page'

export function AppRouterProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />} path="/">
          <Route element={<HomePage />} index />
          <Route element={<AboutPage />} path="about" />
          <Route element={<ServicesPage />} path="services" />
          <Route element={<HowItWorksPage />} path="how-it-works" />
          <Route element={<WhyChooseUsPage />} path="why-choose-us" />
          <Route element={<ProjectsPage />} path="projects" />
          <Route element={<ProjectsPage />} path="works" />
          <Route element={<ProjectDetailPage />} path="projects/:slug" />
          <Route element={<ProjectDetailPage />} path="works/:slug" />
          <Route element={<ReviewsPage />} path="reviews" />
          <Route element={<FaqPage />} path="faq" />
          <Route element={<ServiceAreasPage />} path="service-areas" />
          <Route element={<ContactPage />} path="contact" />
          <Route element={<BlogPage />} path="blog" />
          <Route element={<BlogPostPage />} path="blog/:slug" />
          <Route element={<Navigate replace to="/about" />} path="studio" />
          <Route element={<LegalsPage />} path="legals" />
          <Route element={<Navigate replace to="/" />} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
