"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formServices, siteConfig } from "@/lib/site";

export function Contact() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">(
    "idle",
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    // Netlify expects a URL-encoded body POSTed to a static path,
    // including form-name so it can route the submission.
    const formData = new FormData(event.currentTarget);
    const body = new URLSearchParams();
    formData.forEach((value, key) => {
      body.append(key, value.toString());
    });

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.status}`);
      }
      router.push("/thank-you");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-forest-dark py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Get in touch"
            description="Tell us what you need and we'll come back with a quote or a quick call-back."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal delay={0.05}>
            <div className="rounded-none border border-cream/12 bg-white/6 p-6 sm:p-8">
              <h3 className="font-serif text-2xl text-cream">Contact details</h3>
              <p className="mt-2 text-sm text-cream/70">
                Call or email us directly, or use the enquiry form.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-none border border-cream/10 bg-black/10 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-cream/45">
                    Phone
                  </p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="mt-1 block font-serif text-xl text-cream hover:text-cream/90"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
                <div className="rounded-none border border-cream/10 bg-black/10 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-cream/45">
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Quote request – RR Maintenance")}`}
                    className="mt-1 block text-sm text-cream/85 break-all hover:text-cream"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={`tel:${siteConfig.phone}`}>Call now</Button>
                <Button
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Quote request – RR Maintenance")}`}
                  variant="ghost"
                >
                  Email us
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              name="rr-maintenance-enquiry"
              onSubmit={handleSubmit}
              className="rounded-none border border-cream/12 bg-white/5 p-6 sm:p-8"
            >
              <input type="hidden" name="form-name" value="rr-maintenance-enquiry" />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" htmlFor="name" required>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="field-input"
                  />
                </Field>
                <Field label="Phone" htmlFor="phone">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="field-input"
                  />
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Email" htmlFor="email" required>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="field-input"
                  />
                </Field>
              </div>

              <div className="mt-4">
                <Field label="Service" htmlFor="service" required>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="field-input"
                  >
                    <option value="" disabled>
                      Select one
                    </option>
                    {formServices.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="mt-4">
                <Field label="What do you need?" htmlFor="message" required>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about the job..."
                    className="field-input resize-y"
                  />
                </Field>
              </div>

              <Button
                type="submit"
                disabled={status === "submitting"}
                className="mt-6 w-full sm:w-auto"
              >
                {status === "submitting" ? "Sending..." : "Send enquiry"}
              </Button>

              {status === "error" && (
                <p className="mt-4 text-sm text-red-300" role="alert">
                  Something went wrong sending your enquiry. Please try again,
                  or call us on {siteConfig.phoneDisplay}.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-2 block text-xs text-cream/60">
        {label}
        {required && <span className="text-cream/40"> *</span>}
      </span>
      {children}
    </label>
  );
}
