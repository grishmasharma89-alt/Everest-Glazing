Act as a senior React frontend architect, UI/UX system designer, and performance-focused developer.

We already completed the reusable component system. Now the next goal is to finish the website in the most efficient, scalable, and maintainable way.

Important working style:
- Work in clear phases.
- Do not jump to random UI corrections first.
- Set up global systems before page polishing.
- Make everything reusable and centrally manageable.
- Any design choice that may need client revision later must be controlled from one place.
- The site must remain easy to update, easy to theme, and easy to maintain.

Main requirement:
Create the project so colors, fonts, spacing, shadows, radius, max-widths, transitions, and reusable text styles are controlled centrally. If the client wants a full color change later, it should require minimal edits, ideally in one file or one token layer only.

Use the following execution phases in order.

==================================================
PHASE 1 — DESIGN TOKEN FOUNDATION
==================================================

Goal:
Create one central design system so all visual decisions come from reusable tokens, not hardcoded scattered values.

Tasks:
1. Create a global theme/token system for:
   - brand colors
   - neutral colors
   - semantic colors (success, warning, error, info)
   - text colors
   - background colors
   - border colors
   - spacing scale
   - font families
   - font sizes
   - font weights
   - line heights
   - border radius
   - shadows
   - max-width/container sizes
   - z-index scale
   - transition durations/easing
   - section spacing
   - button heights/paddings
   - input heights/paddings

2. Store them in the best central place depending on stack:
   - Tailwind config theme extension if using Tailwind
   - CSS variables in a global theme file
   - or both: Tailwind mapped to CSS variables for maximum flexibility

3. Make sure:
   - no repeated hardcoded hex values across components
   - no random font-size values scattered everywhere
   - no inconsistent padding or radius
   - all reusable visual values come from tokens

4. Set up theme architecture so future client changes are easy:
   - primary brand swap should update whole site
   - heading/body font can be changed centrally
   - button style remains consistent globally
   - backgrounds and cards remain tied to semantic tokens

Deliverables:
- theme token file(s)
- updated Tailwind config if needed
- global CSS variable structure
- short documentation of how to change theme later

Success checkpoint:
A full visual restyle should be possible with minimal token edits.

==================================================
PHASE 2 — TYPOGRAPHY & CONTENT STYLE SYSTEM
==================================================

Goal:
Create reusable text rules so the site has one strong visual language.

Tasks:
1. Define typography roles:
   - display / hero title
   - h1
   - h2
   - h3
   - body-large
   - body
   - body-small
   - caption
   - label
   - overline / eyebrow

2. Create reusable text/heading utility patterns:
   - section heading style
   - card title style
   - card description style
   - button text style
   - metadata / label text style

3. Ensure:
   - heading hierarchy is semantic and consistent
   - body text has readable line-height
   - spacing between heading/subtitle/body is standardized
   - no random text classes repeated inconsistently

4. Decide global font loading strategy:
   - minimal fonts only
   - preload if needed
   - optimize for performance

Deliverables:
- typography scale
- reusable heading/text style system
- updated Heading component if needed
- documented type rules

Success checkpoint:
All text across the site feels like one system, not individual sections designed separately.

==================================================
PHASE 3 — DATA / CONTENT ARCHITECTURE
==================================================

Goal:
Remove hardcoded repeated content from components and pages.

Tasks:
1. Create central data files for:
   - navigation links
   - hero content
   - services
   - benefits
   - trust badges
   - testimonials
   - projects/gallery items
   - faq items
   - footer links
   - contact details
   - company info
   - CTA content blocks

2. Keep components dumb and reusable:
   - components should receive data via props
   - avoid burying business content inside component code

3. Standardize schemas for content objects:
   - title
   - description
   - icon
   - image
   - href
   - badge
   - stats
   - CTA labels
   - etc.

4. Prepare data structure so future CMS or JSON replacement is easy.

Deliverables:
- centralized data files
- cleaned components using data props
- reduced hardcoded text inside UI components

Success checkpoint:
Most website copy and repeatable content can be updated without touching component logic.

==================================================
PHASE 4 — PAGE COMPOSITION USING ONLY THE SYSTEM
==================================================

Goal:
Build the actual final website pages only using the new component system.

Tasks:
1. Assemble pages from reusable components only.
2. Do not introduce messy one-off components unless truly necessary.
3. Create all required pages/sections such as:
   - Home
   - About
   - Services
   - Projects/Gallery
   - Testimonials
   - FAQ
   - Contact
   - legal/supporting pages if required

4. Validate whether the existing components are flexible enough.
5. If a component feels too rigid, improve the component instead of hacking around it in the page.

Deliverables:
- all main pages composed
- consistent section order
- content mapped from central data files

Success checkpoint:
The whole site is functional and complete using the design system and reusable components.

==================================================
PHASE 5 — GLOBAL LAYOUT & NAVIGATION BEHAVIOR
==================================================

Goal:
Stabilize the site shell and cross-page experience.

Tasks:
1. Finalize:
   - header behavior
   - sticky/fixed navigation
   - mobile menu
   - footer layout
   - section anchors / smooth scroll if used
   - CTA button consistency
   - page spacing consistency

2. Check:
   - active link states
   - mobile nav close behavior
   - external link handling
   - toast provider placement
   - route/page wrappers if needed

Deliverables:
- fully wired app layout
- stable header/footer/nav behavior
- consistent shell across all pages

Success checkpoint:
The site feels complete structurally before visual micro-polish.

==================================================
PHASE 6 — RESPONSIVE SYSTEM PASS
==================================================

Goal:
Make layout quality strong on all screen sizes before polish.

Tasks:
1. Test and refine:
   - small mobile
   - regular mobile
   - tablet
   - laptop
   - wide desktop

2. Check:
   - container widths
   - text wrapping
   - hero stacking
   - card grids
   - form layout
   - button wrapping
   - footer columns
   - image cropping
   - section padding

3. Standardize breakpoints and responsive spacing logic.

Deliverables:
- refined responsive layouts
- cleaned breakpoint usage
- no broken sections on common screen sizes

Success checkpoint:
The site works correctly on all major viewport ranges before visual beautification.

==================================================
PHASE 7 — INTERACTION & UX BEHAVIOR PASS
==================================================

Goal:
Make the site feel polished and usable.

Tasks:
1. Finalize interaction behavior for:
   - accordions
   - forms
   - toasts
   - loading states
   - image fallback
   - hover states
   - focus states
   - disabled states
   - CTA interactions

2. Keep motion subtle and premium.
3. Do not add noisy or heavy animation.
4. Ensure conversion-focused clarity:
   - important actions stand out
   - contact flow feels reassuring
   - testimonial/trust areas support confidence

Deliverables:
- polished interactive states
- smoother UX behavior
- consistent action feedback patterns

Success checkpoint:
The site feels intentional and trustworthy, not just visually assembled.

==================================================
PHASE 8 — ACCESSIBILITY & SEMANTIC HARDENING
==================================================

Goal:
Make the site professionally built and inclusive.

Tasks:
1. Audit:
   - heading order
   - aria labels where needed
   - keyboard navigation
   - focus visibility
   - form labels
   - link/button semantics
   - color contrast
   - image alt text
   - reduced motion support if relevant

2. Replace any non-semantic shortcuts.
3. Ensure components are accessible by default.

Deliverables:
- improved semantic markup
- keyboard-friendly interactions
- strong accessible component defaults

Success checkpoint:
The site is usable beyond just mouse-based visual interaction.

==================================================
PHASE 9 — PERFORMANCE & ASSET OPTIMIZATION
==================================================

Goal:
Make the static site fast and production strong.

Tasks:
1. Optimize:
   - images to WebP/AVIF where practical
   - proper dimensions to avoid layout shift
   - lazy loading below the fold
   - font loading
   - dependency weight
   - component rerender behavior
   - bundle size
   - dead code removal

2. Verify:
   - no unnecessary third-party scripts
   - memoization is used only where helpful
   - no over-rendering from unstable props
   - skeleton/loader usage is sensible

Deliverables:
- optimized assets
- smaller bundle where possible
- stable layout and loading behavior

Success checkpoint:
The site performs well and feels lightweight.

==================================================
PHASE 10 — SEO, TRUST, AND PRODUCTION READINESS
==================================================

Goal:
Prepare the site for real deployment.

Tasks:
1. Add:
   - title/meta description
   - Open Graph tags
   - favicon
   - robots.txt
   - sitemap
   - canonical tags if needed
   - structured business/contact schema if relevant

2. Add trust-building details:
   - company info consistency
   - clear CTAs
   - contact clarity
   - service area details if needed
   - trust badges/reviews if available

3. Check:
   - no broken links
   - no console errors
   - no missing assets
   - external links safe
   - final production build passes

Deliverables:
- SEO setup
- deployment readiness
- final technical checklist

Success checkpoint:
The site is ready for live hosting and sharing.

==================================================
PHASE 11 — FINAL UI POLISH
==================================================

Goal:
Only now do visual corrections and micro-refinements.

Tasks:
1. Refine:
   - spacing rhythm
   - hierarchy clarity
   - alignment
   - card consistency
   - hover polish
   - CTA prominence
   - section transitions
   - premium feel details

2. Do not restructure the whole system now.
3. Polish only after system, responsiveness, accessibility, and performance are stable.

Deliverables:
- final premium visual pass
- stronger UI consistency
- client-ready presentation quality

Success checkpoint:
The site looks polished without needing structural rework.

==================================================
PHASE 12 — HANDOFF & CHANGE-FRIENDLY DOCUMENTATION
==================================================

Goal:
Make future edits easy for client requests or future development.

Tasks:
1. Document:
   - where to change colors
   - where to change fonts
   - where to change spacing
   - where to update content
   - where to update services/projects/testimonials
   - where contact information lives
   - how to replace images
   - how to adjust CTA text globally

2. Keep documentation short and practical.

Deliverables:
- concise maintenance notes
- clear map of editable files
- client-change friendly structure

Success checkpoint:
A future developer can update branding/content quickly without reverse engineering the project.

==================================================
WORKING RULES
==================================================

- Do one phase at a time.
- Before moving to the next phase, verify the current phase is stable.
- Avoid random UI changes before the relevant phase.
- Prefer centralized control over hardcoded scattered styling.
- If the client changes brand color or fonts, the update should be easy and low-risk.
- Reuse existing components wherever possible.
- Improve the system, do not patch around it.
- Write production-ready code only.
- Keep bundle size and complexity low.
- Maintain accessibility and performance as first-class priorities.