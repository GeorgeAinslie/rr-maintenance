"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/site";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-forest-dark py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              title="Questions, answered clearly"
              description="Quick answers to common enquiries. If you're unsure, send a message and we'll confirm the best approach."
            />
          </Reveal>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <Reveal key={faq.question} delay={index * 0.05}>
                  <div className="overflow-hidden rounded-none border border-cream/12 bg-white/5">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                    >
                      <span className="font-medium text-cream">{faq.question}</span>
                      <span
                        className={cn(
                          "text-cream/50 transition-transform duration-200",
                          isOpen && "rotate-45",
                        )}
                        aria-hidden
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={cn(
                        "grid transition-all duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-4 text-sm leading-relaxed text-cream/70">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
