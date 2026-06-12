import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navLinks, siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cream/15 bg-black/15">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-serif text-2xl text-cream">{siteConfig.name}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/70">
              Reliable property care across Surrey, landscaping, maintenance,
              and multi-trade support with a clean, premium finish.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-cream/50">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/75 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-cream/50">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-cream/75">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="transition-colors hover:text-cream"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-cream"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-cream/10 pt-6 text-sm text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Landscaping & property maintenance in Surrey.</p>
        </div>
      </Container>
    </footer>
  );
}
