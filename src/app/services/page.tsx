import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { ServiceIcon } from "@/components/service-icon";
import { CtaBand } from "@/components/cta-band";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Skateboarding lessons and programs at GrindLine Skate Academy: beginner lessons, advanced trick clinics, skate camps, private coaching, park and ramp training, street skills sessions and birthday party sessions.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="px-4 pb-8 pt-36 sm:pt-40">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Our programs"
            title="Seven programs, one goal: you rolling happy"
            subtitle="From the first push to competition-ready runs — coached, safe and seriously fun."
          />
        </div>
      </section>

      <section className="px-4 py-10 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {services.map((s) => (
              <StaggerItem key={s.slug} className="h-full">
                <Link
                  href={`/services/${s.slug}`}
                  className="glass-card group flex h-full flex-col overflow-hidden rounded-3xl"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                    <span className="absolute bottom-3 left-4 rounded-full bg-white/85 px-3 py-1 text-xs font-bold text-primary backdrop-blur">
                      From {s.priceFrom}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <ServiceIcon name={s.icon} className="size-5" />
                    </span>
                    <h2 className="mt-4 font-display text-lg font-bold text-foreground">{s.name}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      View program <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Not sure where to start?"
            title="We will match you with the right program"
            subtitle="Tell us your age, level and goals — a coach will recommend the perfect starting point, free of charge."
          />
          <Reveal className="mt-10 text-center">
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "btn-gradient rounded-full")}
            >
              Get a free recommendation <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
