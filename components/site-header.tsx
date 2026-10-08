"use client";

import { Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useId, useRef, useState } from "react";
import { mobileNav, nav, site } from "@/lib/site";
import { headerButtonClass, primaryButtonClass } from "@/lib/ui";
import { Wordmark } from "@/components/wordmark";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const focusable = panel?.querySelectorAll<HTMLElement>("a, button");
    focusable?.[0]?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !focusable?.length) return;

      const items = Array.from(focusable);
      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#top" className="rounded-md" aria-label={site.name}>
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Κύρια">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-wide text-muted transition-colors hover:text-text"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href={site.phoneHref} className={headerButtonClass}>
          <Phone className="phone-nudge size-4" aria-hidden="true" />
          {site.cta}
        </a>

        <button
          ref={buttonRef}
          type="button"
          className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl border border-white/10 text-text md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          <span className="sr-only">{open ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}</span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="fixed inset-0 z-50 flex flex-col bg-ink px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4 md:hidden"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: 8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between">
              <p id={titleId} className="text-sm font-medium tracking-[0.16em] text-muted">
                ΜΕΝΟΥ
              </p>
              <button
                type="button"
                className="inline-flex size-12 items-center justify-center rounded-xl border border-white/10"
                onClick={close}
              >
                <X className="size-5" aria-hidden="true" />
                <span className="sr-only">Κλείσιμο μενού</span>
              </button>
            </div>
            <nav className="mt-8 flex flex-col" aria-label="Κινητό">
              {mobileNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="flex min-h-14 items-center border-b border-white/10 text-2xl font-semibold tracking-tight text-text"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a href={site.phoneHref} className={`${primaryButtonClass} mt-auto`}>
              <Phone className="phone-nudge size-5" aria-hidden="true" />
              <span className="flex flex-col items-start leading-tight">
                <span>{site.cta}</span>
                <span className="text-sm font-medium tracking-normal">{site.phoneDisplay}</span>
              </span>
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
