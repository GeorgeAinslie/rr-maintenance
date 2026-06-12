import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { benefits } from "@/lib/site";

export function Benefits() {
  return (
    <section id="benefits" className="bg-forest-dark py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why RR Maintenance"
            title="Premium care, without the premium hassle"
            description="We combine multi-trade capability with the communication and finish you'd expect from a specialist team, reliable, tidy, and focused on results."
          />
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 0.07}>
              <div className="h-full rounded-none border border-cream/10 bg-white/5 p-5 transition-colors hover:border-cream/18">
                <h3 className="font-serif text-xl text-cream">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">
                  {benefit.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
