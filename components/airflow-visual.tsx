const flows = [
  "M 250 176 C 340 146, 430 138, 568 176",
  "M 250 250 C 360 236, 458 286, 586 236",
  "M 250 328 C 348 362, 462 332, 552 314",
];

export function AirflowVisual() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-2" aria-hidden="true">
      <span className="pointer-events-none absolute left-3 top-3 size-4 border-l border-t border-accent/40" />
      <span className="pointer-events-none absolute right-3 top-3 size-4 border-r border-t border-accent/40" />
      <span className="pointer-events-none absolute bottom-3 left-3 size-4 border-b border-l border-accent/40" />
      <span className="pointer-events-none absolute bottom-3 right-3 size-4 border-b border-r border-accent/40" />

      <svg viewBox="0 0 640 480" className="h-64 w-full sm:h-80 md:h-auto" role="presentation">
        <defs>
          <pattern id="air-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M28 0H0V28" stroke="rgba(184,241,255,0.07)" strokeWidth="1" />
          </pattern>
          <radialGradient id="air-glow" cx="32%" cy="52%" r="38%">
            <stop offset="0%" stopColor="#65D9FF" stopOpacity="0.18" />
            <stop offset="70%" stopColor="#65D9FF" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#65D9FF" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="640" height="480" fill="#0B1117" />
        <rect width="640" height="480" fill="url(#air-grid)" />
        <rect width="640" height="480" fill="url(#air-glow)" />

        <g stroke="rgba(245,247,250,0.28)" strokeWidth="1.25">
          <rect x="72" y="132" width="156" height="216" rx="16" />
          <rect x="94" y="158" width="112" height="164" rx="8" stroke="rgba(101,217,255,0.55)" />
          <circle cx="150" cy="240" r="26" />
          <path d="M150 220 V260 M130 240 H170" stroke="rgba(101,217,255,0.55)" />
        </g>
        {Array.from({ length: 8 }, (_, index) => (
          <path
            key={index}
            d={`M104 ${176 + index * 18} H196`}
            stroke="rgba(184,241,255,0.32)"
            strokeWidth="1"
          />
        ))}

        {flows.map((path) => (
          <g key={path}>
            <path d={path} stroke="rgba(101,217,255,0.18)" strokeWidth="1.4" />
            <path d={path} className="flow-line" stroke="#65D9FF" strokeWidth="1.35" strokeLinecap="round" />
            <circle r="2.1" fill="#B8F1FF" className="particle" style={{ offsetPath: `path('${path}')` }} />
            <circle
              r="1.6"
              fill="#65D9FF"
              className="particle particle-slow particle-delay"
              style={{ offsetPath: `path('${path}')` }}
            />
          </g>
        ))}

        <circle cx="248" cy="250" r="3" fill="#65D9FF" />
      </svg>
      <p className="absolute bottom-4 left-5 text-[11px] font-medium tracking-[0.22em] text-muted">ΡΟΗ ΑΕΡΑ</p>
    </div>
  );
}
