import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export function MobileCallBar() {
  return (
    <a
      href={site.phoneHref}
      className="fixed inset-x-0 bottom-0 z-40 flex min-h-[4.75rem] flex-col items-center justify-center border-t border-white/10 bg-accent px-4 pt-2 pb-[max(0.7rem,env(safe-area-inset-bottom))] text-ink md:hidden"
    >
      <span className="flex items-center gap-2 text-sm font-semibold tracking-[0.12em]">
        <Phone className="phone-nudge size-4" aria-hidden="true" />
        {site.cta}
      </span>
      <span className="text-lg font-semibold tracking-wide">{site.phoneDisplay}</span>
    </a>
  );
}
