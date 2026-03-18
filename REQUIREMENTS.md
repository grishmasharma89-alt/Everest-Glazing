# Everest Double Glazing Website - Requirements & Architecture

## 1. REQUIRED PAGES

### Primary Pages (Must Have)
- [x] **Home Page** - Hero + Problem/Solution + Benefits + CTA
- [x] **About Us** - Company story, mission, vision, highlights
- [x] **Services** - 6 service types with specs
- [x] **How It Works** - 5-step retrofit process (visual)
- [x] **Why Choose Us** - Key differentiators & benefits
- [x] **Projects / Gallery** - Before/After + process images
- [x] **Reviews** - Customer testimonials + Google reviews
- [x] **FAQ** - Common questions answered
- [x] **Service Areas** - SEO page with location-specific content
- [x] **Contact / Free Quote** - Contact form + phone + quote options

### Secondary Pages
- [ ] **Blog / Articles** - For future SEO growth (structure only)
- [ ] **Legals / Privacy** - Privacy policy + terms (currently placeholder)
- [ ] **Work Detail** - Individual project pages (currently placeholder)

---

## 2. REQUIRED COMPONENTS

### Layout Components
- **Header/Navigation**
  - [ ] Fixed header with phone/quote CTA buttons
  - [ ] Simple navigation menu (no complex dropdowns)
  - [ ] Mobile hamburger (simple, not animated)
  - [ ] Logo + branding
  - **Removed:** Custom cursor, dynamic theme switching, time zone display

- **Footer**
  - [ ] Company info + contact details
  - [ ] Quick links navigation
  - [ ] Trust badges (Fully Insured, AS1288 Compliant, etc.)
  - [ ] Social media links
  - [ ] Copyright + legal links

- **Page Layout**
  - [ ] Consistent spacing and padding
  - [ ] Max-width container (1700px like current)
  - [ ] Responsive grid system

### Content Components
- **Hero Section**
  - [ ] Large headline
  - [ ] Subheading with key benefits
  - [ ] Background image (optimized)
  - [ ] CTA buttons (Get Quote + Call Now)

- **Service Card**
  - [ ] Title
  - [ ] Icon or image
  - [ ] Description
  - [ ] CTA link

- **Benefit Card**
  - [ ] Icon
  - [ ] Title
  - [ ] Short description

- **Product Specification Card**
  - [ ] Product name
  - [ ] U-Value (thermal performance)
  - [ ] Thickness
  - [ ] Components breakdown
  - [ ] Acoustic reduction (Rw)
  - [ ] Price range (optional)

- **Testimonial Card**
  - [ ] Customer photo
  - [ ] Quote
  - [ ] Customer name
  - [ ] Location
  - [ ] Star rating

- **Project Card**
  - [ ] Before image (lazy-loaded)
  - [ ] After image (lazy-loaded)
  - [ ] Project title
  - [ ] Location
  - [ ] Project type
  - [ ] Link to details

- **Trust Badge**
  - [ ] Icon
  - [ ] Label
  - [ ] Brief description

- **CTA Section**
  - [ ] Heading
  - [ ] Subheading
  - [ ] Primary button (Free Quote)
  - [ ] Secondary button (Call Now)

- **FAQ Item**
  - [ ] Question (accordion trigger)
  - [ ] Answer (hidden/shown)

---

## 3. SECURITY REQUIREMENTS

### Code Security
- [ ] **No hardcoded secrets** - All sensitive data in environment variables
  - API keys
  - Form endpoints
  - Analytics IDs
- [ ] **External links safe** - All external links have `rel="noopener noreferrer"` + `target="_blank"`
- [ ] **Form protection**
  - CSRF tokens on forms
  - Input sanitization (if accepting user-generated content)
  - Rate limiting on contact form
- [ ] **No unnecessary third-party scripts**
  - Only include essential: Analytics, form service, maybe reviews API
  - Defer non-critical scripts
- [ ] **Dependencies audited** - `npm audit` passes, no vulnerable packages

### Hosting & Server Security
- [ ] **HTTPS enabled** - SSL certificate configured
- [ ] **Security headers** configured:
  ```
  Content-Security-Policy: default-src 'self'
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  ```
- [ ] **robots.txt** configured
- [ ] **sitemap.xml** generated
- [ ] **No directory listing** enabled

### Data Privacy
- [ ] **Privacy Policy** clear and accessible
- [ ] **Contact form data** handled securely
- [ ] **Google Analytics** configured with privacy best practices
- [ ] **No tracking without consent** (if required by law)

---

## 4. FRONTEND REACT OPTIMIZED CODE STRUCTURE

### Directory Structure
```
src/
├── app/
│   └── router.jsx                 # React Router v7 config
├── pages/
│   ├── home/
│   │   └── home-page.jsx
│   ├── about/
│   │   └── about-page.jsx
│   ├── services/
│   │   └── services-page.jsx
│   ├── how-it-works/
│   │   └── how-it-works-page.jsx
│   ├── why-choose-us/
│   │   └── why-choose-us-page.jsx
│   ├── projects/
│   │   ├── projects-page.jsx
│   │   └── project-detail-page.jsx
│   ├── reviews/
│   │   └── reviews-page.jsx
│   ├── faq/
│   │   └── faq-page.jsx
│   ├── service-areas/
│   │   └── service-areas-page.jsx
│   ├── contact/
│   │   └── contact-page.jsx
│   ├── blog/
│   │   ├── blog-page.jsx
│   │   └── blog-post-page.jsx
│   └── legals/
│       └── legals-page.jsx
├── shared/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header.jsx
│   │   │   ├── footer.jsx
│   │   │   └── app-layout.jsx
│   │   ├── sections/
│   │   │   ├── hero-section.jsx
│   │   │   ├── benefits-section.jsx
│   │   │   ├── cta-section.jsx
│   │   │   └── testimonials-section.jsx
│   │   ├── cards/
│   │   │   ├── service-card.jsx
│   │   │   ├── project-card.jsx
│   │   │   ├── testimonial-card.jsx
│   │   │   ├── spec-card.jsx
│   │   │   └── benefit-card.jsx
│   │   ├── ui/
│   │   │   ├── button.jsx
│   │   │   ├── accordion.jsx
│   │   │   └── form-input.jsx
│   │   └── common/
│   │       ├── optimization-image.jsx
│   │       ├── trust-badges.jsx
│   │       └── route-scroll-top.jsx
│   ├── hooks/
│   │   ├── use-lazy-load.js         # Intersection Observer
│   │   ├── use-page-title.js        # SEO title management
│   │   └── use-form-validation.js   # Form validation
│   ├── lib/
│   │   ├── utils.js                # cn() utility
│   │   ├── constants.js            # App-wide constants
│   │   └── api.js                  # API calls (form submissions)
│   └── styles/
│       └── index.css               # Global styles
├── main.jsx
└── index.css
```

### Code Quality Standards

#### Component Structure
```jsx
// Example optimized component
function ServiceCard({ title, description, icon, link }) {
  return (
    <article className="space-y-4 rounded-lg border bg-white p-6">
      {icon && <img src={icon} alt="" width={48} height={48} />}
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <a href={link} className="inline-block text-blue-600 hover:underline">
        Learn more →
      </a>
    </article>
  )
}
export default ServiceCard
```

#### Performance Checklist
- [ ] **Code splitting** - Use React.lazy() for non-critical pages
  ```jsx
  const BlogPage = lazy(() => import('@/pages/blog/blog-page'))
  ```
- [ ] **Memoization** - Use React.memo for cards, lists
  ```jsx
  export const ProjectCard = memo(function ProjectCard({ project }) {
    // component code
  })
  ```
- [ ] **Image optimization**
  - Use `.webp` format with `.jpg` fallback
  - Implement responsive images with `srcset`
  - Lazy load below-the-fold images
  ```jsx
  <img 
    src="project.jpg" 
    srcSet="project.webp 1x, project.jpg 1x"
    loading="lazy"
    alt="Project description"
    width={600}
    height={400}
  />
  ```
- [ ] **CSS optimization**
  - Keep Tailwind CSS only (no extra CSS libraries)
  - Tree-shake unused styles
  - Use CSS variables for theming (already in index.css)
- [ ] **Bundle size**
  - Tree-shake unused GSAP plugins (only include ScrollTrigger if needed)
  - Remove custom cursor entirely (adds 5KB+)
  - Remove unused dependencies
  - Target: **< 200KB gzipped** (excluding images)

#### Naming Conventions
- **Files:** `kebab-case.jsx` (e.g., `service-card.jsx`)
- **Components:** `PascalCase` function names
- **CSS classes:** Follow Tailwind; use `data-*` attributes for JS hooks
  ```jsx
  <div data-service-card data-type="retrofit">
  ```

#### Props & State Management
- [ ] Use props for data passing (no Redux needed for static site)
- [ ] Keep component state minimal
- [ ] Use React Router for global routing state
- [ ] Environment variables for config:
  ```
  VITE_CONTACT_FORM_ENDPOINT=https://api.example.com/contact
  VITE_PHONE_NUMBER=+61497182848
  ```

#### SEO & Accessibility
- [ ] **Semantic HTML** - Use `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`
- [ ] **Headings hierarchy** - One H1 per page, properly nested H2/H3
- [ ] **Alt text** - Descriptive for all images
- [ ] **ARIA labels** - For interactive components (buttons, links, forms)
- [ ] **Keyboard navigation** - All interactive elements accessible via keyboard
- [ ] **Color contrast** - WCAG AA standard (4.5:1 for text)

---

## 5. WHAT MAKES A STATIC PORTFOLIO LOOK PROFESSIONAL

### 1. Fast Loading ⚡
**Goal:** Page loads in < 2 seconds

**Tactics:**
- **Small bundle size**
  - [ ] Remove `gsap` animations (use CSS instead)
  - [ ] Remove custom cursor (saves 5KB)
  - [ ] Remove unused libraries
  - [ ] Current target: `100-150KB` gzipped JS
  - Verify with: `npm run build` then check `dist/` size

- **Optimized images**
  - [ ] Use `.webp` format with `.jpg` fallback
  - [ ] Compress images (TinyPNG, ImageOptim)
  - [ ] Responsive images: `srcSet` for different screen sizes
  - [ ] Max image size: `<50KB` per image
  - [ ] Use optimized image component (lazy loading)

- **Lazy loading**
  - [ ] Images below the fold use `loading="lazy"`
  - [ ] Non-critical routes use code splitting
  - [ ] Testimonials section lazy-loads images
  - [ ] Project gallery lazy-loads preview images

- **Proper font loading**
  - [ ] Use system fonts or 1-2 Google Fonts max
  - [ ] Use `font-display: swap` for fallback
  - [ ] Preload critical fonts
  - [ ] Current: Inter font (good choice)

- **No useless animations**
  - [ ] Remove GSAP ScrollTrigger parallax animations
  - [ ] Remove custom cursor
  - [ ] Allow simple fade-in on page load (CSS only, < 0.3s)
  - [ ] No hover animations on touch devices

**Verification:**
```bash
npm run build
# Check /dist folder size
# Use Lighthouse: Score > 90 for Performance
```

---

### 2. Clean Structure 🏗️

**Clear folder structure**
- [ ] Pages grouped by feature
- [ ] Shared components by type (layout, cards, ui)
- [ ] Consistent naming (`kebab-case.jsx`)
- [ ] No single-file components in root

**Reusable components**
- [ ] Create `<ServiceCard>` for all service displays
- [ ] Create `<ProjectCard>` for all project displays
- [ ] Create `<Button>` primitive (already exists)
- [ ] Create `<SectionContainer>` for consistent spacing
- [ ] Create `<OptimizedImage>` for all images (lazy loading)

**Proper naming**
- [ ] Components describe what they are: `ServiceCard`, not `Card1`
- [ ] Files match component name: `service-card.jsx`
- [ ] Props are descriptive: `title`, `description`, not `text1`, `text2`
- [ ] No cryptic abbreviations

**Easy to maintain**
- [ ] Single responsibility per component
- [ ] Props documented with JSDoc
- [ ] Consistent code style (use ESLint)
- [ ] Reusable content in constants/data files

**Responsive design**
- [ ] Mobile-first approach in Tailwind
- [ ] Test on: 320px, 768px, 1024px, 1440px breakpoints
- [ ] No horizontal scrolling on mobile
- [ ] Touch targets: min 44px × 44px

---

### 3. Good Security Basics 🔒

**No exposed secrets**
- [ ] No API keys in code
- [ ] No email addresses hardcoded
- [ ] All config in `.env.local` (gitignored)
- [ ] Example: Create `.env.example` with dummy values

**Safe external links**
- [ ] All `<a>` with `target="_blank"` have `rel="noopener noreferrer"`
- [ ] Phone links use `tel:` protocol
- [ ] Email links use `mailto:` protocol
- [ ] Google Maps links use `target="_blank"`

Example:
```jsx
<a 
  href="https://maps.google.com?q=Beard+ACT" 
  target="_blank" 
  rel="noopener noreferrer"
>
  View on Map
</a>
```

**No random third-party scripts**
- [ ] Only include essential:
  - Google Analytics (optional, with consent)
  - Form service (Formspree, Netlify Forms, etc.)
  - Reviews API (if pulling Google reviews)
- [ ] Defer non-critical scripts: `<script defer>`
- [ ] No ad networks or tracking pixels

**Security headers**
- [ ] Set via hosting platform (Netlify, Vercel, etc.)
- [ ] Use Vite plugin if self-hosted

**Sanitize form inputs**
- [ ] If accepting file uploads: validate file type & size
- [ ] If accepting text: escape HTML special characters
- [ ] Use library like `xss` if rendering user content

---

### 4. Professional UX 👥

**Smooth but not excessive**
- [ ] Page scroll is smooth (CSS `scroll-behavior: smooth`)
- [ ] No parallax or complex animations (distracting)
- [ ] Hover effects on buttons (underline, color change)
- [ ] Transitions: `transition-colors duration-200` (snappy, not sluggish)

**Strong hero section**
- [ ] Large headline (36-56px on desktop, 24-32px on mobile)
- [ ] Compelling subheading (supporting message)
- [ ] High-quality background image (optimized)
- [ ] Prominent CTA buttons (Call Now + Get Quote)
- [ ] Clear contrast between text and background

Current: Good but too animated. Simplify.

**Clear CTA buttons**
- [ ] Primary CTA: "Get Free Quote" (blue/brand color)
- [ ] Secondary CTA: "Call Now" (white/outline)
- [ ] CTAs in header, hero, and throughout page
- [ ] Buttons should be 44px+ tall (touch-friendly)
- [ ] Hover state visible and obvious

**Good spacing and typography**
- [ ] Line-height: 1.5-1.6 for body text
- [ ] Font size: 16px minimum for body (mobile)
- [ ] Margin between sections: 4rem (64px) or 6rem (96px)
- [ ] Padding inside cards: 1.5rem (24px) or 2rem (32px)
- [ ] Use Tailwind's spacing scale consistently

**Consistent colors**
- [ ] Primary: Brand blue (hero, CTAs, links)
- [ ] Secondary: Brand accent (maybe orange for highlights)
- [ ] Neutral: Black, white, grays (text, backgrounds)
- [ ] Define in Tailwind config, not hardcoded
- [ ] Dark backgrounds for contrast (home page hero is black – good)

**Mobile-friendly**
- [ ] Hamburger menu on < 768px
- [ ] Touch-friendly buttons (44px minimum)
- [ ] No horizontal scrolling
- [ ] Text readable without zoom
- [ ] Images scale properly

---

### 5. SEO + Discoverability 🔍

**Correct meta tags per page**
- [ ] Unique `<title>` (50-60 characters)
  ```jsx
  <title>Double Glazing Retrofit Canberra | Everest Double Glazing</title>
  ```
- [ ] Unique `<meta name="description">` (150-160 characters)
  ```jsx
  <meta name="description" 
    content="Retrofit double glazing for Canberra homes. No frame replacement needed. Energy efficient, noise reduction, 10-year warranty." />
  ```

**Open Graph tags** (for social sharing)
```jsx
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
<meta property="og:url" content="..." />
<meta property="og:type" content="website" />
```

**Sitemap**
- [ ] Generate `sitemap.xml` with all pages
- [ ] Submit to Google Search Console
- [ ] Vite plugin: `vite-plugin-sitemap`

**robots.txt**
```
User-agent: *
Allow: /
Disallow: /admin
Sitemap: https://everestdoubleglazing.com.au/sitemap.xml
```

**Semantic HTML**
- [ ] Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- [ ] Not `<div>` for everything
- [ ] Proper heading hierarchy: H1 → H2 → H3 (no H2 after H1→H3)

**Accessible headings and alt text**
- [ ] One H1 per page (usually in hero)
- [ ] Use H2 for main sections
- [ ] All images have descriptive `alt` text
- [ ] Alt text = what the image shows: "Before retrofit: single glazing windows"
- [ ] Decorative images: `alt=""` (empty)

**Structured data**
- [ ] Add JSON-LD schema for:
  - Organization (name, logo, contact, location)
  - LocalBusiness (address, phone, hours)
  - BreadcrumbList (for navigation)
  - FAQPage (for FAQ)
  - Review/AggregateRating (for testimonials)

Example:
```jsx
<script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Everest Double Glazing",
    "image": "...",
    "description": "...",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AU",
      "streetAddress": "1/30 Tantalum Street",
      "addressLocality": "Beard",
      "postalCode": "2620"
    },
    "telephone": "+61497182848"
  })}
</script>
```

---

## IMPLEMENTATION ROADMAP

### Phase 1: Foundation (Week 1)
- [ ] Remove unnecessary features (animations, cursor, dynamic theming)  
- [ ] Fix lint error in header
- [ ] Create optimized image component
- [ ] Set up environment variables
- [ ] Restructure folders per architecture above
- [ ] Create reusable card components

### Phase 2: Content & Components (Week 2)
- [ ] Complete placeholder pages (Legals, Work Detail)
- [ ] Add testimonial cards with real reviews
- [ ] Add product specification cards with U-Values
- [ ] Create simple before/after gallery (replace carousel)
- [ ] Add service area SEO pages
- [ ] Move CTAs to header

### Phase 3: Performance & SEO (Week 3)
- [ ] Optimize all images (webp, compression)
- [ ] Implement lazy loading
- [ ] Add meta tags and Open Graph
- [ ] Generate sitemap and robots.txt
- [ ] Add JSON-LD schema markup
- [ ] Run Lighthouse audit (target > 90)

### Phase 4: Polish & Launch (Week 4)
- [ ] Security audit (dependencies, headers)
- [ ] Mobile testing across devices
- [ ] Form submission setup
- [ ] Analytics setup
- [ ] Final QA and bug fixes

---

## SUCCESS METRICS

- ✅ Lighthouse Performance: **> 90**
- ✅ Page Load Time: **< 2 seconds**
- ✅ Bundle Size: **< 150KB gzipped** (JS only)
- ✅ Mobile Responsive: **Works on 320px - 1440px**
- ✅ All CTAs functional: **3+ places to call/quote**
- ✅ Zero security issues: **npm audit passes**
- ✅ SEO ready: **all meta tags, schema, sitemap, robots.txt**
