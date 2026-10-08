import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { reasons } from "@/lib/site";
import { cardClass } from "@/lib/ui";

export function WhyUs() {
  return (
    <section className="py-16 sm:py-24" aria-labelledby="why-heading">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading id="why-heading" title="ΓΙΑΤΙ CLIMA ATHENS PRO" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <Reveal key={reason.index} delay={index * 0.05} className="h-full">
              <article className={cardClass}>
                <p className="text-sm font-semibold tracking-[0.18em] text-accent">{reason.index}</p>
                <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-text">{reason.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{reason.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
