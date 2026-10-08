import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { primaryButtonClass } from "@/lib/ui";
import { Wordmark } from "@/components/wordmark";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-2">
        <div>
          <Wordmark />
          <p className="mt-4 max-w-sm text-base leading-relaxed text-muted">
            Επαγγελματικές υπηρεσίες ψύξης, κλιματισμού και επισκευών.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 text-base">
          <p className="text-text">
            <span className="text-muted">Περιοχή: </span>
            {site.area}
          </p>
          <p>
            <span className="text-muted">Τηλέφωνο: </span>
            <a href={site.phoneHref} className="font-semibold tracking-wide text-text">
              {site.phoneDisplay}
            </a>
          </p>
          <a href={site.phoneHref} className={`${primaryButtonClass} mt-2`}>
            <Phone className="phone-nudge size-4" aria-hidden="true" />
            {site.cta}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-sm text-muted">
          © 2026 CLIMA ATHENS PRO
          <span className="mx-2" aria-hidden="true">
            ·
          </span>
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
