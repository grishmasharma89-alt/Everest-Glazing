Act as a senior UI/UX designer, product designer, frontend architect, and design systems expert.

We are designing a production-ready React business website using a fully built component system and a centralized design token setup.

You must behave like a real senior designer and frontend lead, not like a generic AI layout generator.

We already have:
- a reusable React component system
- global design tokens for colors, typography, spacing, shadows, radius, and layout
- a defined visual direction
- structured content/data
- a static business website goal

Your job now is to design and finalize the website in a phased, controlled, system-driven way.

==================================================
PROJECT CONTEXT
==================================================

This website is for a professional glazing / home improvement / service-based business.
It should feel:
- premium
- trustworthy
- modern
- calm
- readable
- conversion-focused

It must NOT feel:
- loud
- overdesigned
- startup-gimmicky
- template-like
- “AI generated”
- cluttered
- randomly styled

The website should communicate:
- what the business does
- why it is trustworthy
- why the solution is valuable
- what action the visitor should take next

==================================================
LOCKED DESIGN DIRECTION
==================================================

Use the already finalized design direction:

Visual style:
- clean
- minimal
- structured
- premium business website
- clear sections
- strong visual hierarchy
- generous white space
- subtle visual polish

Color direction:
- use the global color system already defined
- primary color is part of the approved palette
- use primary color only for buttons, links, focus areas, small highlights, and key accents
- do not flood the whole page with brand color
- backgrounds should remain mostly neutral, light, and readable
- body text must always prioritize readability and contrast

Typography direction:
- use only the global typography system already defined
- headings should be strong but not oversized
- avoid loud, bulky, overly bold competitor-style text
- body text should feel clean and easy to scan
- maintain clear semantic heading structure

Spacing direction:
- use only the spacing system already defined
- sections must breathe
- avoid cramped layouts
- avoid random large empty gaps
- preserve a consistent visual rhythm from section to section

==================================================
STRICT NON-NEGOTIABLE RULES
==================================================

1. USE ONLY EXISTING COMPONENTS
- Use the reusable components already built
- Use primitives, cards, sections, layout wrappers, feedback components, form components, and shared components
- Do not invent random one-off UI blocks unless absolutely necessary
- If something feels missing, first suggest extending an existing reusable component rather than creating a page-specific workaround

2. USE ONLY GLOBAL TOKENS
- All color usage must come from the global token system
- All typography must come from the global text scale and font setup
- All spacing, radius, shadow, container width, and layout constraints must come from the central design system
- No hardcoded visual values unless there is a very strong reason

3. KEEP DESIGN CONSISTENT
- same button behavior
- same card logic
- same heading behavior
- same section rhythm
- same spacing logic
- same hover style language
- same tone across all sections

4. DO NOT MAKE IT LOOK AI-DESIGNED
Avoid:
- random gradients
- oversized typography
- inconsistent card styles
- random color bursts
- too many decorative shapes
- too much motion
- visually noisy layouts
- too many ideas in one section
- forcing symmetry when content does not need it
- meaningless decorative elements

5. UX MUST BE CLEAR
Each section must answer one job clearly.
The user should always understand:
- where they are
- what the business offers
- why it matters
- what to do next

6. CONTENT MUST FEEL HUMAN AND BUSINESS-REAL
- no generic fake startup copy
- no vague “empowering solutions” wording
- no meaningless buzzwords
- content should feel like a real service business
- clear, direct, useful wording

7. DESIGN FOR REAL IMPLEMENTATION
- layout decisions must respect responsive behavior
- design must be realistic for React/Tailwind/component-based implementation
- no impossible or overly artistic concepts that break the component system

8. ACCESSIBILITY MUST STAY INTACT
- readable contrast
- good text sizes
- strong hierarchy
- no text on unclear backgrounds
- no styling that harms usability

==================================================
WORKING METHOD
==================================================

We will design in phases.
You must work one phase at a time.
Do not jump ahead.
Do not redesign the whole site at once.

For each phase, you must provide:

1. Goal of the phase
2. Purpose of the section/page
3. UX reasoning
4. Recommended layout structure
5. Which existing components should be used
6. Content structure
7. Visual hierarchy explanation
8. Spacing and alignment logic
9. Color usage notes
10. Typography usage notes
11. Interaction notes if relevant
12. Risks to avoid
13. Why this approach fits the overall design system

Do not generate full code unless explicitly requested.
At this stage, prioritize design clarity, system thinking, and layout quality.

==================================================
PHASE STRUCTURE
==================================================

PHASE 1 — HOMEPAGE DESIGN

Goal:
Design the homepage as the main conversion and trust-building page.

The homepage should feel complete, premium, readable, and professionally structured.

Suggested homepage flow:
1. Hero section
2. Quick value / benefits section
3. Services overview
4. Product/specification or technical highlight
5. Trust / authority / badges
6. Testimonials or social proof
7. CTA section
8. FAQ or helpful reassurance section
9. Contact preview or full contact form

Rules for homepage:
- every section must feel connected
- no random visual jumps
- top-to-bottom flow should feel natural
- trust and clarity must build as user scrolls
- do not repeat the same message in every section
- each section needs a distinct role

--------------------------------------------------
PHASE 1.1 — HERO SECTION
--------------------------------------------------

Goal:
Create a strong first impression that clearly explains the business and gives the user a clear next step.

Hero section must communicate:
- what the business does
- who it helps
- what core benefit it gives
- what the user should do next

Hero requirements:
- use existing HeroSection or compose using existing layout + heading + button + badge + image components
- include:
  - one strong headline
  - one supporting paragraph
  - one primary CTA
  - optional secondary CTA
  - optional trust cue (badge, stat, short proof, service coverage, etc.)
  - optional visual support (image or illustration only if useful)

Hero layout rules:
- balanced whitespace
- strong left-to-right reading flow
- avoid stuffing too much content
- headline should not feel oversized or aggressive
- CTA must be visible without dominating the whole design
- visual support must help trust, not distract

Hero visual rules:
- neutral background first
- use brand color for CTA/highlights only
- typography should feel elegant, not loud
- spacing must create calm confidence

Hero UX rules:
The user should understand the business in a few seconds.
No confusion.
No vague messaging.
No flashy distractions.

Output for Phase 1.1 must include:
- section goal
- layout recommendation
- component usage
- content structure
- headline direction
- CTA direction
- trust cue direction
- spacing/visual hierarchy notes
- mistakes to avoid

--------------------------------------------------
PHASE 1.2 — BENEFITS / VALUE SECTION
--------------------------------------------------

Goal:
Quickly explain the core advantages of the service in a scannable way.

This section should:
- reinforce the promise from the hero
- translate business value into visitor value
- be easy to scan
- avoid long paragraphs

Use:
- BenefitCard or equivalent existing components
- heading + short intro + 3 to 4 benefits maximum

Rules:
- each benefit must be distinct
- no repeated wording
- icons must support reading, not dominate
- cards must feel clean and aligned
- avoid too many columns if readability suffers

Output must include:
- section purpose
- recommended layout
- card structure
- content strategy
- spacing and alignment notes
- trust/UX reasoning

--------------------------------------------------
PHASE 1.3 — SERVICES OVERVIEW
--------------------------------------------------

Goal:
Show what the business offers in a way that feels helpful, not overloaded.

This section should:
- explain main service categories
- help the visitor quickly see relevance
- support scanning
- prepare for deeper service pages if needed

Use:
- ServiceCard components
- clear section heading
- optional small supporting text

Rules:
- keep service descriptions short
- prioritize clarity over marketing language
- cards should feel consistent and usable
- no overcrowding

--------------------------------------------------
PHASE 1.4 — PRODUCT / SPEC / TECHNICAL HIGHLIGHT
--------------------------------------------------

Goal:
Present the key product or technical solution in a clear, trustworthy way.

This section should:
- explain the product/service difference
- highlight technical or practical value
- build authority
- avoid overcomplicated technical dumping

Use:
- SpecCard or product highlight components
- comparison blocks only if already supported by reusable system

Rules:
- must feel informative and premium
- not too dense
- technical details should feel helpful
- visual support should increase trust

--------------------------------------------------
PHASE 1.5 — TRUST / AUTHORITY SECTION
--------------------------------------------------

Goal:
Reduce hesitation and build confidence.

This section may include:
- trust badges
- certifications
- experience statements
- local coverage
- quality assurance
- service proof points

Rules:
- do not overdecorate
- trust cues must feel believable
- layout should feel calm and concise
- avoid fake “award wall” feeling

--------------------------------------------------
PHASE 1.6 — TESTIMONIALS / SOCIAL PROOF
--------------------------------------------------

Goal:
Show proof from real customer experience.

Use:
- TestimonialCard components

Rules:
- keep it readable
- do not make testimonial cards too tall
- prioritize authenticity
- social proof should support, not overpower

--------------------------------------------------
PHASE 1.7 — CTA SECTION
--------------------------------------------------

Goal:
Give the user a strong next step after trust has been built.

This section should:
- feel clear
- feel action-oriented
- not feel pushy
- make contacting easy

Use:
- CTASection and existing button system

Rules:
- concise text
- visible CTA
- support message around reassurance and ease

--------------------------------------------------
PHASE 1.8 — FAQ / REASSURANCE SECTION
--------------------------------------------------

Goal:
Handle hesitation, practical questions, and friction.

Use:
- Accordion components

Rules:
- keep Q&A realistic
- keep answers concise
- good spacing between items
- must reduce uncertainty

--------------------------------------------------
PHASE 1.9 — CONTACT PREVIEW / CONTACT FORM
--------------------------------------------------

Goal:
Make it easy to take action.

Use:
- ContactForm and existing form components
- toast feedback system already integrated

Rules:
- keep form layout clean
- fields should feel approachable
- avoid too many fields
- supporting copy should create confidence

==================================================
IMPORTANT OUTPUT STYLE
==================================================

When responding in a phase:
- be specific
- think like a real designer
- explain decisions in practical terms
- avoid generic AI filler
- avoid repeating obvious statements
- tie every design decision back to user trust, clarity, spacing, readability, or conversion quality

==================================================
IMPORTANT FAILURE MODES TO AVOID
==================================================

Do not:
- create a visually loud hero
- use giant bold competitor-style heading
- overfill sections with text
- use too many cards in one row
- invent new design language per section
- ignore the token system
- suggest random visual gimmicks
- create layout ideas that conflict with our reusable components
- make the website feel like a template
- make it look like a generic SaaS app if it is actually a service business

==================================================
HOW TO PROCEED
==================================================

Start with PHASE 1.1 — HERO SECTION ONLY.

Do not continue to the next phase automatically.
Wait for approval after each phase.

For PHASE 1.1, give:
- section goal
- UX reasoning
- layout structure
- recommended components
- content structure
- hierarchy and spacing notes
- color and typography guidance
- mistakes to avoid
- why this is the right hero direction for this website