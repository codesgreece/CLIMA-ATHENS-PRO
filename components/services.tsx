import { AirVent, ArrowRight, Droplets, Fan, Wrench, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { services, type ServiceIcon } from "@/lib/site";
import { cardClass } from "@/lib/ui";

const icons: Record<ServiceIcon, LucideIcon> = {
  install: AirVent,
  service: Fan,
  bio: Droplets,
  repair: Wrench,
};

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-16 sm:py-24" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          id="services-heading"
          title="ΟΙ ΥΠΗΡΕΣΙΕΣ ΜΑΣ"
          subtitle="Λύσεις για κλιματισμό, ψύξη και οικιακές συσκευές."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            const priceIsQuote = service.price === "ΚΑΤΟΠΙΝ ΣΥΝΕΝΝΟΗΣΗΣ";

            return (
              <Reveal key={service.title} delay={index * 0.05} className="h-full">
                <article className={`group ${cardClass}`}>
                  <div className="mb-5 flex size-12 items-center justify-center rounded-xl border border-white/10 bg-ink text-accent">
                    <Icon className="icon-float size-6" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-text">{service.title}</h3>
                  <p className="mt-2 text-sm font-medium tracking-wide text-muted">{service.kicker}</p>
                  {service.items.length > 0 ? (
                    <ul className="mt-4 space-y-2 text-base leading-relaxed text-text">
                      {service.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <p className={`mt-auto pt-6 ${priceIsQuote ? "text-lg" : "text-4xl"} font-semibold tracking-tight text-accent`}>
                    <span className="sr-only">{service.priceLabel}: </span>
                    {service.price}
                  </p>
                  {service.note ? <p className="mt-2 text-base text-muted">{service.note}</p> : null}
                  {service.cta ? (
                    <a
                      href={service.cta.href}
                      className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold tracking-[0.08em] text-accent"
                    >
                      {service.cta.label}
                      <ArrowRight className="size-4 transition duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                    </a>
                  ) : null}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
