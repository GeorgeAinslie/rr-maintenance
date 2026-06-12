import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/site";

export function Process() {
  return (
    <section
      id="process"
      className="bg-forest py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="A clear, professional workflow"
            description="From first enquiry to final tidy-up, we keep things simple, transparent, and easy to trust."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 0.08}>
              <article className="relative h-full rounded-none border border-cream/12 bg-white/5 p-6">
                {index < processSteps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute -right-3 top-1/2 hidden h-px w-6 bg-cream/20 lg:block"
                  />
                )}
                <p className="font-serif text-4xl text-cream/25">{step.step}</p>
                <h3 className="mt-4 font-serif text-2xl text-cream">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">
                  {step.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
