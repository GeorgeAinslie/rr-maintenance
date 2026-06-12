"use client";

import { useCallback, useState, type ReactNode } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type PanInfo,
} from "framer-motion";
import { heroSlides } from "@/lib/site";
import { cn } from "@/lib/utils";

const SWIPE_THRESHOLD = 48;
const slideCount = heroSlides.length;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0.35,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0.35,
  }),
};

const captionContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.38 },
  },
};

const captionItem = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function SlideImage({
  src,
  alt,
  priority,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-forest-dark p-8 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-cream/40">
          Add photo
        </p>
        <p className="mt-3 font-mono text-xs text-cream/55">{src}</p>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes="(max-width: 1024px) 100vw, 45vw"
      className="object-cover"
      onError={() => setFailed(true)}
    />
  );
}

export function HeroVisual() {
  const reduceMotion = useReducedMotion();
  const [[index, direction], setSlide] = useState([0, 0]);

  const slide = heroSlides[index];

  const paginate = useCallback((newDirection: number) => {
    setSlide(([current]) => {
      const next =
        (current + newDirection + slideCount) % slideCount;
      return [next, newDirection];
    });
  }, []);

  const onDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const { offset, velocity } = info;
      if (offset.x < -SWIPE_THRESHOLD || velocity.x < -400) {
        paginate(1);
      } else if (offset.x > SWIPE_THRESHOLD || velocity.x > 400) {
        paginate(-1);
      }
    },
    [paginate],
  );

  const transition = reduceMotion
    ? { duration: 0.01 }
    : { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <div className="relative w-full max-w-lg lg:max-w-none">
      <div
        className="relative aspect-[4/5] overflow-hidden rounded-none border border-cream/15 bg-forest-dark shadow-2xl shadow-black/25"
        aria-roledescription="carousel"
        aria-label="Recent project work"
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={index}
            custom={direction}
            variants={reduceMotion ? undefined : slideVariants}
            initial={reduceMotion ? false : "enter"}
            animate="center"
            exit={reduceMotion ? undefined : "exit"}
            transition={transition}
            drag={reduceMotion ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={onDragEnd}
            className="absolute inset-0 cursor-grab touch-pan-y active:cursor-grabbing"
          >
            <SlideImage
              src={slide.image}
              alt={slide.alt}
              priority={index === 0}
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/5"
              aria-hidden
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 sm:px-4">
          <CarouselButton
            label="Previous project"
            onClick={() => paginate(-1)}
          >
            ‹
          </CarouselButton>
          <CarouselButton
            label="Next project"
            onClick={() => paginate(1)}
          >
            ›
          </CarouselButton>
        </div>
      </div>

      <div className="mt-5 min-h-[7.5rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={reduceMotion ? undefined : captionContainer}
            initial={reduceMotion ? false : "hidden"}
            animate="show"
            exit={
              reduceMotion
                ? undefined
                : { opacity: 0, y: -8, transition: { duration: 0.2 } }
            }
            className="px-1"
          >
            <motion.p
              variants={reduceMotion ? undefined : captionItem}
              className="font-sans text-sm font-medium tracking-tight text-cream/55"
            >
              {slide.eyebrow}
            </motion.p>
            <motion.h2
              variants={reduceMotion ? undefined : captionItem}
              className="mt-1.5 font-serif text-[1.625rem] font-normal leading-snug tracking-tight text-cream sm:text-[1.75rem]"
            >
              {slide.title}
            </motion.h2>
            <motion.p
              variants={reduceMotion ? undefined : captionItem}
              className="mt-2.5 max-w-md font-sans text-[0.9375rem] leading-relaxed text-cream/72"
            >
              {slide.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex items-center gap-2 px-1">
        {heroSlides.map((item, i) => (
          <button
            key={item.image}
            type="button"
            aria-label={`Show project ${i + 1}`}
            aria-current={i === index ? "true" : undefined}
            onClick={() => {
              if (i === index) return;
              setSlide([i, i > index ? 1 : -1]);
            }}
            className="group relative h-1.5 flex-1 overflow-hidden rounded-none bg-cream/15"
          >
            <span
              className={cn(
                "absolute inset-y-0 left-0 rounded-none bg-cream/80 transition-all duration-500",
                i === index ? "w-full" : "w-0 group-hover:w-1/3",
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function CarouselButton({
  children,
  label,
  onClick,
}: {
  children: ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-10 w-10 items-center justify-center text-3xl font-light leading-none text-cream/90 transition-opacity hover:text-cream"
    >
      {children}
    </button>
  );
}
