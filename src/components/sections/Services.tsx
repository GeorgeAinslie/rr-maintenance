import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/site";

const icons = ["◆", "◇", "○", "□", "△", "▣"];

export function Services() {
  return (
    <section id="services" className="bg-forest-dark py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="What we do"
            description="RR Maintenance provides landscaping and property maintenance across Surrey. Choose a one-off job or ongoing support, all delivered with tidy, respectful workmanship."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.06}>
              <article className="group h-full rounded-none border border-cream/12 bg-white/5 p-6 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-cream/20 hover:bg-white/7">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <span
                    aria-hidden
                    className="inline-flex h-10 w-10 items-center justify-center rounded-none border border-cream/12 bg-white/5 font-serif text-sm text-cream/70"
                  >
                    {icons[index]}
                  </span>
                  <span className="text-xs uppercase tracking-[0.18em] text-cream/40">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-cream">{service.title}</h3>
                <p className="mt-2 text-sm text-cream/65">{service.description}</p>
                <ul className="mt-5 space-y-2 border-t border-cream/10 pt-5 text-sm text-cream/75">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-cream/35">,</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-none border border-cream/12 bg-white/6 p-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-serif text-xl text-cream">Based in Surrey</p>
              <p className="mt-1 text-sm text-cream/70">
                Working locally across Surrey and nearby areas.
              </p>
            </div>
            <Button href="/#contact" size="sm">
              Request a callback
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
