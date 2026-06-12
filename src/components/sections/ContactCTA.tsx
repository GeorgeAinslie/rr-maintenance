import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

export function ContactCTA() {
  return (
    <section
      aria-label="Call to action"
      className="bg-forest py-12 sm:py-16"
    >
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-none border border-cream/15 bg-white/6 px-6 py-10 sm:px-10 sm:py-12">
            <div className="relative max-w-2xl">
              <p className="text-xs uppercase tracking-[0.2em] text-cream/50">
                Ready to start?
              </p>
              <h2 className="mt-3 font-serif text-3xl text-cream sm:text-4xl">
                Get a clear quote for your next project
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-cream/70 sm:text-base">
                Whether it&apos;s a garden refresh, rental turnaround, or ongoing
                maintenance plan, tell us what you need and we&apos;ll respond
                promptly.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/#contact" size="lg">
                  Request a quote
                </Button>
                <Button href={`tel:${siteConfig.phone}`} variant="ghost" size="lg">
                  Call {siteConfig.phoneDisplay}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
