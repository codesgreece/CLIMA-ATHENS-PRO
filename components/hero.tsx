import { Phone } from "lucide-react";
import { AirflowVisual } from "@/components/airflow-visual";
import { Wordmark } from "@/components/wordmark";
import { site } from "@/lib/site";
import { primaryButtonClass, secondaryButtonClass } from "@/lib/ui";

export function Hero() {
  return (
    <section id="top" className="scroll-mt-24" aria-labelledby="hero-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-14 pt-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-14 md:pb-20 md:pt-14">
        <div>
          <p className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-left text-[11px] font-medium leading-snug tracking-[0.08em] text-muted sm:text-xs">
            <span className="relative flex size-2 shrink-0" aria-hidden="true">
              <span className="status-dot absolute inline-flex size-full rounded-full bg-accent" />
              <span className="relative size-2 rounded-full bg-accent" />
            </span>
            ΕΞΥΠΗΡΕΤΗΣΗ ΣΕ ΟΛΗ ΤΗΝ ΑΤΤΙΚΗ & ΣΑΛΑΜΙΝΑ
          </p>

          <div className="mt-7">
            <Wordmark size="lg" />
          </div>

          <p className="mt-5 text-xs font-medium tracking-[0.22em] text-muted">PROFESSIONAL HVAC SERVICES</p>

          <h1
            id="hero-heading"
            className="mt-4 text-[2.75rem] font-semibold leading-[1.02] tracking-tight text-text sm:text-6xl lg:text-7xl"
          >
            Ψύξη.
            <br />
            Θέρμανση.
            <br />
            Επισκευή.
          </h1>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-pretty text-muted">
            Επαγγελματικές εγκαταστάσεις κλιματιστικών, service και επισκευές οικιακών συσκευών με άμεση
            εξυπηρέτηση.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={site.phoneHref} className={primaryButtonClass}>
              <Phone className="phone-nudge size-5" aria-hidden="true" />
              {site.cta}
            </a>
            <a href="#services" className={secondaryButtonClass}>
              ΔΕΙΤΕ ΤΙΣ ΥΠΗΡΕΣΙΕΣ
            </a>
          </div>

          <a href={site.phoneHref} className="group mt-7 inline-flex min-h-14 flex-col justify-center rounded-md">
            <span className="text-xs font-medium tracking-[0.2em] text-muted">ΤΗΛΕΦΩΝΟ</span>
            <span className="mt-1 flex items-center gap-2 text-3xl font-semibold tracking-wide text-text">
              <Phone className="phone-nudge size-6 text-accent" aria-hidden="true" />
              {site.phoneDisplay}
            </span>
          </a>
        </div>

        <AirflowVisual />
      </div>
    </section>
  );
}
