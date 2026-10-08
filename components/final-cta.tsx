import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { primaryButtonClass } from "@/lib/ui";

export function FinalCta() {
  return (
    <section id="contact" className="scroll-mt-24 px-5 pb-16 sm:pb-24" aria-labelledby="contact-heading">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-card px-6 py-10 sm:px-10 sm:py-14">
        <span className="pointer-events-none absolute left-3 top-3 size-4 border-l border-t border-accent/40" />
        <span className="pointer-events-none absolute right-3 top-3 size-4 border-r border-t border-accent/40" />
        <span className="pointer-events-none absolute bottom-3 left-3 size-4 border-b border-l border-accent/40" />
        <span className="pointer-events-none absolute bottom-3 right-3 size-4 border-b border-r border-accent/40" />
        <h2 id="contact-heading" className="text-3xl font-semibold tracking-tight text-text sm:text-5xl">
          ΧΡΕΙΑΖΕΣΤΕ ΨΥΚΤΙΚΟ;
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
          Επικοινωνήστε μαζί μας για εγκατάσταση, service ή επισκευή.
        </p>
        <a href={site.phoneHref} className={`${primaryButtonClass} mt-8 min-h-16 text-lg`}>
          <Phone className="phone-nudge size-5" aria-hidden="true" />
          {site.cta}
        </a>
        <a href={site.phoneHref} className="mt-4 block text-3xl font-semibold tracking-wide text-accent sm:text-4xl">
          {site.phoneDisplay}
        </a>
      </div>
    </section>
  );
}
