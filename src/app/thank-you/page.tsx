import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Thanks for your enquiry. RR Maintenance will be in touch shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <section className="flex min-h-[70vh] items-center py-24">
      <Container className="max-w-xl text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-cream/50">
          Enquiry received
        </p>
        <h1 className="mt-4 font-serif text-4xl text-cream sm:text-5xl">
          Thanks for your enquiry
        </h1>
        <p className="mt-4 text-cream/75">
          We&apos;ll get back to you shortly with a quote or call-back.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Back to home</Button>
          <Button href={`tel:${siteConfig.phone}`} variant="ghost">
            Call {siteConfig.phoneDisplay}
          </Button>
        </div>
        <p className="mt-8 text-sm text-cream/55">
          Need to add more detail?{" "}
          <Link href="/#contact" className="underline underline-offset-4 hover:text-cream">
            Send another message
          </Link>
        </p>
      </Container>
    </section>
  );
}
