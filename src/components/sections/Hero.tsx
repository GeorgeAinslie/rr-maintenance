"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { benefits } from "@/lib/site";
import { HeroVisual } from "@/components/sections/HeroVisual";

export function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative overflow-hidden bg-forest pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-28"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <Reveal>
              <div className="mb-8 flex justify-center lg:justify-start">
                <Image
                  src="/logo.png"
                  alt="Reliable Response Maintenance logo"
                  width={520}
                  height={180}
                  priority
                  className="w-[18rem] h-auto opacity-95 sm:w-[22rem] lg:w-auto"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mx-auto max-w-3xl font-serif text-5xl font-medium leading-[1.02] tracking-tight text-cream sm:text-6xl lg:mx-0 lg:text-6xl">
                One company. All property solutions across Surrey and surrounding areas.
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg lg:mx-0">
                Reliable property care with a clean, premium finish. From garden
                refreshes to ongoing maintenance, friendly communication, tidy
                work, and results that last.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                <Button href="/#contact" size="lg">
                  Get a quote
                </Button>
                <Button href="/#services" variant="ghost" size="lg">
                  Explore services
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {benefits.slice(0, 3).map((item) => (
                  <div
                    key={item.title}
                    className="rounded-none border border-cream/12 bg-white/5 p-4 backdrop-blur-sm"
                  >
                    <p className="font-serif text-lg text-cream">{item.title}</p>
                    <p className="mt-1 text-sm text-cream/65">{item.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.15}>
            <HeroVisual />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
