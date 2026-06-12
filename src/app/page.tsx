import { Benefits } from "@/components/sections/Benefits";
import { Contact } from "@/components/sections/Contact";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Benefits />
      <Testimonials />
      <FAQ />
      <ContactCTA />
      <Contact />
    </>
  );
}
