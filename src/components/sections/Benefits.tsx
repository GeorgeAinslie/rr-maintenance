"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { benefits } from "@/lib/site";

export function Benefits() {
  return (
    <section id="benefits" className="bg-forest-dark py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Why RR Maintenance"
                title="Premium care, without the premium hassle"
                description="We combine multi-trade capability with the communication and finish you'd expect from a specialist team, reliable, tidy, and focused on results."
              />
            </Reveal>

            <div className="mt-10 space-y-4">
              {benefits.map((benefit, index) => (
                <Reveal key={benefit.title} delay={index * 0.07}>
                  <div className="rounded-none border border-cream/10 bg-white/5 p-5 transition-colors hover:border-cream/18">
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
          </div>

          <Reveal direction="left">
            <div className="relative mx-auto aspect-square max-w-md lg:max-w-none">
              <div className="absolute inset-0 rounded-none border border-cream/12 bg-black/10" />

              <motion.div
                className="absolute left-8 top-8 right-8 h-40 rounded-none border border-cream/12 bg-white/8 p-5 backdrop-blur-md"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-cream/45">
                  Value proposition
                </p>
                <p className="mt-2 font-serif text-2xl text-cream">
                  Trusted local workmanship
                </p>
                <p className="mt-2 text-sm text-cream/65">
                  Replace with team photography or on-site imagery.
                </p>
              </motion.div>

              <motion.div
                className="absolute bottom-10 left-10 w-[55%] rounded-none border border-cream/12 bg-forest-dark/80 p-4 backdrop-blur-md"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              >
                <div className="mb-3 h-20 rounded-none bg-forest/35" />
                <p className="text-xs text-cream/45">Client work placeholder</p>
                <p className="text-sm text-cream/75">Garden & property projects</p>
              </motion.div>

              <motion.div
                className="absolute bottom-16 right-8 w-36 rounded-none border border-cream/12 bg-white/8 p-4 backdrop-blur-md"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              >
                <p className="font-serif text-3xl text-cream">4.9</p>
                <p className="text-xs text-cream/55">Client satisfaction</p>
              </motion.div>

              <motion.div
                aria-hidden
                className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cream/10"
                animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.6, 0.35] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
