import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaBand } from "@/components/cta-band";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for GrindLine Skate Academy lessons, camps, private coaching, park training and birthday parties. Clear rates, no surprises.",
};

const plans = [
  {
    name: "Drop-In Lessons",
    price: "$45",
    unit: "per session",
    features: [
      "Beginner, street or park lessons",
      "Groups capped at 6–10 skaters",
      "Boards, helmets and pads included",
      "Flexible weekly schedule",
      "Pay per session, no commitment",
      "Sibling and multi-pack discounts",
    ],
    cta: "Book a lesson",
    featured: false,
  },
  {
    name: "Summer Camp Week",
    price: "$395",
    unit: "per week, half-day",
    features: [
      "5 days of structured coaching",
      "Ages 6–16, grouped by level",
      "Daily skill stations + free skate",
      "Games, skate culture workshops",
      "All gear provided if needed",
      "Full-day option from $495",
    ],
    cta: "Register for camp",
    featured: true,
  },
  {
    name: "Private Coaching",
    price: "$85",
    unit: "per hour, 1-on-1",
    features: [
      "Fully personalized lesson plan",
      "Video review and take-home drills",
      "Competition run preparation",
      "Flexible scheduling, 7 days a week",
      "Monthly blocks save 15%",
      "Any level, ages 5 to adult",
    ],
    cta: "Book a coach",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="px-4 pb-8 pt-36 sm:pt-40">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Pricing"
            title="Clear rates, no fine print"
            subtitle="Transparent pricing for every program. Gear is always included, sibling discounts apply, and we never surprise you with fees."
          />
        </div>
      </section>

      <section className="px-4 py-10 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <Stagger className="grid gap-6 lg:grid-cols-3" stagger={0.09}>
            {plans.map((p) => (
              <StaggerItem key={p.name} className="h-full">
                <div
                  className={cn(
                    "glass-card relative flex h-full flex-col rounded-3xl p-8",
                    p.featured && "border-accent/60 shadow-xl shadow-primary/10"
                  )}
                >
                  {p.featured ? (
                    <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-accent-foreground shadow-md">
                      <Sparkles className="size-3.5" /> Most popular
                    </span>
                  ) : null}
                  <h2 className="font-display text-xl font-bold text-foreground">{p.name}</h2>
                  <p className="mt-4">
                    <span className="font-display text-4xl font-bold text-primary">{p.price}</span>
                    <span className="ml-2 text-sm text-muted-foreground">{p.unit}</span>
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "mt-8 w-full rounded-full",
                      p.featured ? "btn-gradient" : "glass border-primary/20 text-primary"
                    )}
                  >
                    {p.cta} <ArrowRight className="size-4" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-12">
            <div className="glass-card rounded-3xl p-8 text-center">
              <h3 className="font-display text-2xl font-bold text-foreground">
                Birthday parties & group bookings — custom rates
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Private party packages start at $275 for 2 hours with up to 15 guests, and school
                or community groups get custom group pricing. Tell us what you are planning and we
                will build a package around it.
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className={cn(buttonVariants({ size: "lg" }), "glass rounded-full border-primary/20 text-primary")}
                >
                  Get a custom quote <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Pricing questions"
            title="Everything you might ask about cost"
          />
          <Reveal className="mt-10">
            <FaqAccordion />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Ready to roll?"
        subtitle="Book your first session today — gear included, no commitment required. We will have you rolling in no time."
      />
    </>
  );
}
