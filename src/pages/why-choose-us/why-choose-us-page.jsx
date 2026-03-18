import { Link } from 'react-router-dom'
import { WHY_CHOOSE_US_CONTENT } from '@/shared/data/site-content'
import { COMPANY } from '@/shared/lib/constants'

export function WhyChooseUsPage() {
  const { reasons } = WHY_CHOOSE_US_CONTENT
  const primaryPhoneHref = `tel:${COMPANY.phone.replace(/\s/g, '')}`
  return (
    <div className="bg-black pt-28 text-white sm:pt-32">
      <section className="mx-auto max-w-[var(--container-max)] px-[var(--container-px)] py-12 lg:py-16">
        <p className="type-overline text-white/70">Why Choose Everest</p>
        <h1 className="mt-4 max-w-5xl type-h1">
          Honest, reliable, economic, and local.
          <br />
          Clear Choice for Comfort.
        </h1>
      </section>

      <section className="mx-auto max-w-[var(--container-max)] px-[var(--container-px)] pb-16 lg:pb-20">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div className="rounded-xl border border-white/20 bg-white/5 p-4 type-body leading-[var(--leading-snug)] text-white/88" key={reason}>
              {reason}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            className="inline-flex rounded-full border border-white px-6 py-2.5 type-label tracking-[var(--tracking-wide)] transition hover:bg-white hover:text-black"
            to="/contact"
          >
            Get Free Quote
          </Link>
          <a
            className="inline-flex rounded-full border border-white/60 px-6 py-2.5 type-label tracking-[var(--tracking-wide)] transition hover:bg-white hover:text-black"
            href={primaryPhoneHref}
          >
            Call Now
          </a>
        </div>
      </section>
    </div>
  )
}
