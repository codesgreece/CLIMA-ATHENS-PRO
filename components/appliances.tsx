import { AirVent, CookingPot, Refrigerator, WashingMachine, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { appliances, type ApplianceIcon } from "@/lib/site";

const icons: Record<ApplianceIcon, LucideIcon> = {
  fridge: Refrigerator,
  cooker: CookingPot,
  washer: WashingMachine,
  ac: AirVent,
};

export function Appliances() {
  return (
    <section className="py-16 sm:py-24" aria-labelledby="appliances-heading">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading id="appliances-heading" title="ΚΑΙ ΟΙ ΣΥΣΚΕΥΕΣ ΣΑΣ ΣΕ ΚΑΛΑ ΧΕΡΙΑ." />
        <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {appliances.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <li key={item.label} className="h-full">
                <Reveal delay={index * 0.04} className="h-full">
                  <div className="group lift flex h-full min-h-36 flex-col items-start justify-between rounded-2xl border border-white/10 bg-card p-5 transition duration-200 hover:-translate-y-1 hover:border-accent/40">
                    <Icon className="icon-float size-7 text-accent" strokeWidth={1.5} aria-hidden="true" />
                    <span className="mt-6 text-base font-semibold tracking-[0.08em] text-text">{item.label}</span>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
        <p className="mt-6 text-lg text-muted">Βλάβες και επισκευές κατόπιν συνεννόησης.</p>
      </div>
    </section>
  );
}
