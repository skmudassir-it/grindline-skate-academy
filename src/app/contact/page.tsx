import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { QuoteForm } from "@/components/quote-form";
import { ContactForm } from "@/components/contact-form";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Contact & Bookings",
  description:
    "Contact GrindLine Skate Academy — book lessons, camps, private coaching and birthday parties. Call (555) 015-8890 or send us a message. We reply fast.",
};

export default function ContactPage() {
  return (
    <>
      <section className="px-4 pb-8 pt-36 sm:pt-40">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Contact us"
            title="Book your session or just say hi"
            subtitle="Request a booking or ask any question. Real humans answer — usually within the hour during park hours."
          />
        </div>
      </section>

      <section className="px-4 py-10 sm:py-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="glass-card rounded-3xl p-7 sm:p-9">
              <h2 className="font-display text-2xl font-bold text-foreground">Request a booking</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us which program you are interested in — lessons, camps, coaching or a party.
              </p>
              <div className="mt-7">
                <QuoteForm />
              </div>
            </div>
          </Reveal>

          <div className="space-y-6 lg:col-span-2">
            <Reveal delay={0.05}>
              <div className="glass-card rounded-3xl p-7">
                <h2 className="font-display text-xl font-bold text-foreground">Reach us directly</h2>
                <ul className="mt-5 space-y-4 text-sm text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Phone className="size-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">Bookings line</p>
                      <a href="tel:+15550158890" className="hover:text-accent">(555) 015-8890</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Mail className="size-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a href="mailto:hello@grindline-skate-academy.amsitservices.com" className="hover:text-accent">
                        hello@grindline-skate-academy.amsitservices.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <MapPin className="size-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">The park</p>
                      <p>88 Rail Yard Ave, Portland, OR 97209</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Clock className="size-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">Hours</p>
                      <p>Mon–Fri 9am–8pm &bull; Sat–Sun 9am–6pm</p>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass-card relative overflow-hidden rounded-3xl p-2">
                <Image
                  src="/images/cta.jpg"
                  alt="Skateboarder dropping into a ramp at golden hour at GrindLine Skate Academy"
                  width={1024}
                  height={640}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="h-44 w-full rounded-2xl object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="glass-card rounded-3xl p-7">
                <h3 className="font-display text-lg font-bold text-foreground">Prefer email?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Use the quick form below and we will reply within one business day.
                </p>
                <div className="mt-5">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to drop in?"
        subtitle="Book your first lesson today — gear included, no commitment. We will have you rolling in no time."
        image="/images/extra-3.jpg"
      />
    </>
  );
}
