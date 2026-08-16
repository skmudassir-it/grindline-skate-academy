import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, HeartHandshake } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { ServiceIcon } from "@/components/service-icon";
import { StatsStrip } from "@/components/stats-strip";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { ProjectSlider } from "@/components/project-slider";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaBand } from "@/components/cta-band";
import { Badge } from "@/components/ui/badge";
import { services, testimonials } from "@/lib/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "GrindLine Skate Academy — Skateboarding Lessons & Camps",
  description:
    "Portland's friendliest skateboarding school since 2005. Beginner lessons, advanced trick clinics, summer camps, private coaching, park training and birthday parties for all ages.",
};

const whyUs = [
  {
    icon: ShieldCheck,
    title: "Safety first, always",
    text: "Certified coaches, helmet checks every session and capped group sizes. 20 years without a serious injury in a lesson.",
  },
  {
    icon: Clock,
    title: "Pro coaches, every session",
    text: "Our 12 coaches are sponsored riders and certified instructors who love teaching as much as skating.",
  },
  {
    icon: HeartHandshake,
    title: "All ages, all levels",
    text: "From first-time five-year-olds to adults chasing childhood dreams — we meet you exactly where you are.",
  },
  {
    icon: CheckCircle2,
    title: "Real progress, fast",
    text: "Structured progressions, video analysis and take-home drills mean visible improvement every single week.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "GrindLine Skate Academy",
  description:
    "Skateboarding school in Portland, OR offering beginner lessons, advanced trick clinics, summer camps, private coaching, park and ramp training, street skills sessions and birthday party sessions for all ages.",
  url: "https://grindline-skate-academy.amsitservices.com",
  telephone: "+1-555-015-8890",
  email: "hello@grindline-skate-academy.amsitservices.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "88 Rail Yard Ave",
    addressLocality: "Portland",
    addressRegion: "OR",
    postalCode: "97209",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 45.5296, longitude: -122.6847 },
  openingHours: "Mo-Fr 09:00-20:00, Sa-Su 09:00-18:00",
  priceRange: "$",
  foundingDate: "2005",
  areaServed: "Portland metropolitan area",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "412",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative px-4 pb-10 pt-36 sm:pt-40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Badge className="glass border-accent/30 bg-white/60 px-3 py-1 text-xs font-semibold text-primary">
              Portland&rsquo;s skate school since 2005 &bull; All ages welcome
            </Badge>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
              Learn to skate with <span className="text-primary">pro coaches</span> who make
              every landing count.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              GrindLine Skate Academy turns first pushes into kickflips, bowls and best friends —
              with certified coaching, a safety-first culture and a whole lot of fun.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "btn-gradient rounded-full text-base")}>
                Book Your First Lesson <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "glass rounded-full border-primary/20 text-base text-primary"
                )}
              >
                Explore Programs
              </Link>
            </div>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              {[
                ["3,000+", "students taught"],
                ["12", "pro coaches"],
                ["4.9/5", "parent rating"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="sr-only">{l}</dt>
                  <dd className="font-display text-2xl font-bold text-primary">{v}</dd>
                  <dd className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.15} className="relative">
            <div className="glass-card relative overflow-hidden rounded-3xl p-2">
              <Image
                src="/images/hero.jpg"
                alt="Teenage skateboarder flying high above a concrete skatepark bowl at GrindLine Skate Academy"
                width={1024}
                height={640}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full rounded-2xl object-cover"
                priority
              />
              <div className="glass-strong absolute bottom-6 left-6 right-6 flex items-center gap-3 rounded-2xl px-5 py-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/90 text-accent-foreground">
                  <i className="fa-solid fa-bolt text-lg" aria-hidden />
                </span>
                <p className="text-sm font-medium leading-snug text-foreground">
                  &ldquo;Landed my first kickflip after three lessons — the coaches are unreal.&rdquo;
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    — Jordan T., private coaching student
                  </span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <StatsStrip />

      {/* Services grid */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What we teach"
            title="Seven ways to fall in love with skating"
            subtitle="From your very first push to competition-ready trick bags — programs for every age, level and goal."
          />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="glass-card group flex h-full flex-col rounded-3xl p-7"
                >
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-accent/90 group-hover:text-accent-foreground">
                    <ServiceIcon name={s.icon} className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why us */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal className="order-2 lg:order-1">
              <div className="glass-card relative overflow-hidden rounded-3xl">
                <Image
                  src="/images/about-team.jpg"
                  alt="The GrindLine Skate Academy coaching team with their boards at the skatepark"
                  width={1024}
                  height={768}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>
            <div className="order-1 lg:order-2">
              <SectionHeading
                align="left"
                eyebrow="Why GrindLine"
                title="The coaches every parent trusts"
                subtitle="Twenty years of teaching thousands of skaters has taught us one thing: the right coach changes everything. Ours are certified, background-checked and genuinely obsessed with your progress."
              />
              <Stagger className="mt-8 grid gap-5 sm:grid-cols-2" stagger={0.07}>
                {whyUs.map((w) => (
                  <StaggerItem key={w.title}>
                    <div className="glass-card h-full rounded-2xl p-5">
                      <w.icon className="size-6 text-accent" />
                      <h3 className="mt-3 font-display text-base font-bold text-foreground">{w.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Our work"
            title="Programs that built a community"
            subtitle="Park revamps, facility builds and city partnerships — see how GrindLine keeps Portland rolling."
          />
          <div className="mt-12">
            <ProjectSlider />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Word on the street"
            title="What skaters & parents say"
            subtitle={`Rated ${testimonials.length ? "4.9" : ""} out of 5 across 412 reviews — because we show up, teach well and keep it fun.`}
          />
          <div className="mt-12">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Good to know"
            title="Frequently asked questions"
            subtitle="Straight answers about gear, safety, ages, camps and bookings."
          />
          <div className="mt-10">
            <FaqAccordion />
          </div>
          <Reveal className="mt-8 text-center text-sm text-muted-foreground">
            Have a different question?{" "}
            <Link href="/contact" className="font-semibold text-accent hover:underline">
              Ask us directly
            </Link>
            .
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
