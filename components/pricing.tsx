import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { prices } from "@/lib/site";
import { cardClass } from "@/lib/ui";

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 border-y border-white/10 bg-ink-2 py-16 sm:py-24" aria-labelledby="pricing-heading">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading id="pricing-heading" title="ΔΙΑΦΑΝΕΙΣ ΤΙΜΕΣ. ΚΑΘΑΡΗ ΔΟΥΛΕΙΑ." />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {prices.map((price, index) => (
            <Reveal key={price.title} delay={index * 0.06} className="h-full">
              <article className={cardClass}>
                <p className="text-5xl font-semibold tracking-tight text-accent">
                  <span className="sr-only">Τιμή </span>
                  {price.amount}
                </p>
                <h3 className="mt-4 text-lg font-semibold tracking-[0.08em] text-text">{price.title}</h3>
                <ul className="mt-3 space-y-1 text-base text-muted">
                  {price.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
