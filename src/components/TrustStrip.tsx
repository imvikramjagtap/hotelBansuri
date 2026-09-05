import {
  IconClock,
  IconGoogle,
  IconLeaf,
  IconParty,
} from "@/components/Icons";
import { restaurant } from "@/lib/restaurant";

/** Sits between hero and Why — pulled up so it floats on the seam. */
export function TrustStrip() {
  const r = restaurant;

  return (
    <section
      id="trust"
      aria-label="At a glance"
      className="relative z-20 -mt-20 px-4 sm:-mt-24 sm:px-6 lg:-mt-20"
    >
      <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-night-soft/95 px-4 py-6 shadow-2xl shadow-black/40 backdrop-blur-md sm:px-8 sm:py-7">
        <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-4">
          <a
            href={r.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-center"
          >
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange transition group-hover:bg-brand-orange group-hover:text-night sm:h-11 sm:w-11">
              <IconGoogle className="h-5 w-5" />
            </div>
            <p className="font-display text-2xl font-bold text-cream-on-dark sm:text-3xl">
              {r.rating}
            </p>
            <p className="mt-1 text-[0.6rem] uppercase tracking-wider text-cream-on-dark/55 sm:text-[0.65rem]">
              Google rating
            </p>
          </a>
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange sm:h-11 sm:w-11">
              <IconClock className="h-5 w-5" />
            </div>
            <p className="font-display text-2xl font-bold text-cream-on-dark sm:text-3xl">
              15 hrs
            </p>
            <p className="mt-1 text-[0.6rem] uppercase tracking-wider text-cream-on-dark/55 sm:text-[0.65rem]">
              Open daily
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange sm:h-11 sm:w-11">
              <IconLeaf className="h-5 w-5" />
            </div>
            <p className="font-display text-2xl font-bold text-cream-on-dark sm:text-3xl">
              100%
            </p>
            <p className="mt-1 text-[0.6rem] uppercase tracking-wider text-cream-on-dark/55 sm:text-[0.65rem]">
              Vegetarian
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-leaf/25 text-leaf sm:h-11 sm:w-11">
              <IconParty className="h-5 w-5" />
            </div>
            <p className="font-display text-2xl font-bold text-cream-on-dark sm:text-3xl">
              Hall
            </p>
            <p className="mt-1 text-[0.6rem] uppercase tracking-wider text-cream-on-dark/55 sm:text-[0.65rem]">
              Party &amp; birthday
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
