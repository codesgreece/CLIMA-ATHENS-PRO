import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { coverageNodes } from "@/lib/site";

const attica =
  "M 98 396 C 89.8 385.2, 63.2 326.3, 66 294 C 68.8 261.7, 89.2 226.5, 115 202 C 140.8 177.5, 180.0 165.3, 221 147 C 262.0 128.7, 315.8 105.8, 361 92 C 406.2 78.2, 453.8 61.0, 492 64 C 530.2 67.0, 566.8 83.8, 590 110 C 613.2 136.2, 626.8 185.7, 631 221 C 635.2 256.3, 619.0 289.8, 615 322 C 611.0 354.2, 605.7 381.8, 607 414 C 608.3 446.2, 617.5 482.8, 623 515 C 628.5 547.2, 641.3 577.8, 640 607 C 638.7 636.2, 631.5 679.2, 615 690 C 598.5 700.8, 564.2 685.8, 541 672 C 517.8 658.2, 496.5 630.0, 476 607 C 455.5 584.0, 433.2 555.5, 418 534 C 402.8 512.5, 397.3 494.2, 385 478 C 372.7 461.8, 357.7 446.2, 344 437 C 330.3 427.8, 312.5 427.7, 303 423 C 293.5 418.3, 291.0 414.3, 287 409 C 283.0 403.7, 283.2 400.8, 279 391 C 274.8 381.2, 278.5 360.7, 262 350 C 245.5 339.3, 204.5 325.5, 180 327 C 155.5 328.5, 128.7 347.5, 115 359 C 101.3 370.5, 106.2 406.8, 98 396 Z";

const salamina =
  "M 139 359 C 147.8 354.5, 167.0 346.2, 180 350 C 193.0 353.8, 208.7 369.8, 217 382 C 225.3 394.2, 230.7 410.0, 230 423 C 229.3 436.0, 222.7 450.0, 213 460 C 203.3 470.0, 187.0 484.5, 172 483 C 157.0 481.5, 132.5 464.0, 123 451 C 113.5 438.0, 114.3 417.3, 115 405 C 115.7 392.7, 123.0 384.7, 127 377 C 131.0 369.3, 130.2 363.5, 139 359 Z";

const labelClass: Record<(typeof coverageNodes)[number]["place"], string> = {
  above: "bottom-3 left-1/2 -translate-x-1/2",
  below: "top-3 left-1/2 -translate-x-1/2",
  start: "right-3 top-1/2 -translate-y-1/2",
  end: "left-3 top-1/2 -translate-y-1/2",
};

export function ServiceArea() {
  return (
    <section id="area" className="scroll-mt-24 border-y border-white/10 bg-ink-2 py-16 sm:py-24" aria-labelledby="area-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div>
          <SectionHeading
            id="area-heading"
            title="ΕΞΥΠΗΡΕΤΗΣΗ ΣΕ ΟΛΗ ΤΗΝ ΑΤΤΙΚΗ"
            subtitle="Αναλαμβάνουμε εργασίες σε όλη την Αττική και τη Σαλαμίνα."
          />
          <p className="mt-5 text-base text-muted">Ενδεικτικά σημεία μέσα στην περιοχή εξυπηρέτησης.</p>
        </div>

        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink">
            <span className="pointer-events-none absolute left-3 top-3 size-4 border-l border-t border-accent/40" />
            <span className="pointer-events-none absolute right-3 top-3 size-4 border-r border-t border-accent/40" />
            <span className="pointer-events-none absolute bottom-3 left-3 size-4 border-b border-l border-accent/40" />
            <span className="pointer-events-none absolute bottom-3 right-3 size-4 border-b border-r border-accent/40" />
            <p className="absolute right-5 top-4 text-[11px] font-medium tracking-[0.2em] text-muted">Β</p>

            <svg viewBox="40 40 660 700" className="h-auto w-full" aria-hidden="true">
              <defs>
                <pattern id="map-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M32 0H0V32" stroke="rgba(184,241,255,0.06)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect x="40" y="40" width="660" height="700" fill="#071018" />
              <rect x="40" y="40" width="660" height="700" fill="url(#map-grid)" />
              <path d="M70 620 C 140 560, 180 640, 250 590" stroke="rgba(101,217,255,0.16)" strokeWidth="1" fill="none" />
              <path d="M520 180 C 590 220, 620 160, 670 210" stroke="rgba(101,217,255,0.14)" strokeWidth="1" fill="none" />
              <path d={attica} fill="#2A3D50" stroke="#65D9FF" strokeWidth="2.2" />
              <path d={salamina} fill="#35556E" stroke="#B8F1FF" strokeWidth="2.2" />
              <path d={attica} className="coverage" fill="#65D9FF" />
              <path d={salamina} className="coverage" fill="#65D9FF" />
            </svg>

            <ul className="absolute inset-0" aria-label="Σημεία κάλυψης">
              {coverageNodes.map((node, index) => (
                <li
                  key={node.name}
                  className="absolute"
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  <span className="relative block size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent">
                    <span
                      className="node-ping absolute inset-0 rounded-full border border-accent"
                      style={{ animationDelay: `${index * 0.35}s` }}
                    />
                  </span>
                  <span
                    className={`absolute whitespace-nowrap text-[13px] font-medium tracking-wide text-text ${labelClass[node.place]}`}
                  >
                    {node.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
