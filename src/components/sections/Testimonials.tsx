import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section
      id="reviews"
      className="bg-forest py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Reviews"
            title="Trusted by homeowners across Surrey"
            description="A few words from recent customers. Replace names and quotes with verified reviews as they come in."
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08}>
              <figure className="flex h-full flex-col rounded-none border border-cream/12 bg-white/5 p-6 shadow-lg shadow-black/10">
                <div className="mb-4 flex gap-1 text-amber-200/80" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <blockquote className="flex-1 font-serif text-lg leading-snug text-cream">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-cream/10 pt-4">
                  <p className="text-sm font-medium text-cream">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-cream/55">{testimonial.location}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
