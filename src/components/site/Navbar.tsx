import { useEffect, useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Choose Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-[0_6px_30px_-12px_rgb(13_46_94/0.15)] border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between py-3">
        <a href="#home" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-foreground/70 transition-colors hover:text-primary hover:bg-primary-soft"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full gradient-primary px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
          >
            <PhoneCall className="h-4 w-4" />
            Talk to an Expert
          </a>
          <button
            aria-label="Toggle menu"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-navy"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white/95 backdrop-blur-xl">
          <div className="container-x flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-foreground/80 hover:bg-primary-soft hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-5 py-3 text-sm font-semibold text-white"
            >
              <PhoneCall className="h-4 w-4" /> Talk to an Expert
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
