"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-cream/15 bg-forest/80 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <Link
          href="/"
          className="group flex items-center"
          aria-label={`${siteConfig.name} home`}
        >
          <span className="sr-only">{siteConfig.name}</span>
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-cream/75 transition-colors hover:text-cream"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/#contact" size="sm">
            Get a quote
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-4 flex-col gap-1">
            <span
              className={cn(
                "h-0.5 bg-cream transition-transform",
                menuOpen && "translate-y-1.5 rotate-45",
              )}
            />
            <span
              className={cn(
                "h-0.5 bg-cream transition-opacity",
                menuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-0.5 bg-cream transition-transform",
                menuOpen && "-translate-y-1.5 -rotate-45",
              )}
            />
          </div>
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-0 top-16 z-40 bg-forest/95 backdrop-blur-xl transition-all duration-300 lg:hidden",
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <Container className="flex h-[calc(100vh-4rem)] flex-col gap-2 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-2xl border border-cream/10 bg-white/5 px-5 py-4 text-lg text-cream"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-auto space-y-3 pt-6">
            <Button href={`tel:${siteConfig.phone}`} className="w-full">
              Call {siteConfig.phoneDisplay}
            </Button>
            <Button href="/#contact" variant="ghost" className="w-full">
              Get a quote
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}
