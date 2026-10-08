import { Check } from "lucide-react";
import { trustItems } from "@/lib/site";

export function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-ink-2" aria-label="Περιοχή και είδος εξυπηρέτησης">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 md:flex-row md:items-center md:justify-between md:py-6">
        <p className="text-sm font-semibold tracking-[0.16em] text-text">ΕΠΑΓΓΕΛΜΑΤΙΚΗ ΕΞΥΠΗΡΕΤΗΣΗ</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-3">
          {trustItems.map((item) => (
            <li key={item} className="flex items-center gap-2 text-base text-text">
              <Check className="size-4 shrink-0 text-accent" strokeWidth={2.25} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
