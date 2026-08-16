import type { Metadata } from "next";
import Image from "next/image";
import { Award, Users, HeartHandshake, ShieldCheck } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { StatsStrip } from "@/components/stats-strip";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "GrindLine Skate Academy is Portland's skateboarding school — 20 years of lessons, camps and coaching for every age and level. Meet the coaches and the story behind the grind.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Safety culture",
    text: "Helmet checks, safe-fall drills and certified first-aid coaches at every session. Twenty years without a serious injury in a lesson.",
  },
  {
    icon: Users,
    title: "Community first",
    text: "Skateboarding is better together. We run free community clinics, school partnerships and a junior team that gives back to the park.",
  },
  {
    icon: HeartHandshake,
    title: "Coaching, not ego",
    text: "Our coaches celebrate your landings, not their own. Patience, encouragement and clear progressions — for every age and ability.",
  },
  {
    icon: Award,
    title: "Pro standards",
    text: "A 12-coach team of certified instructors and sponsored riders, with structured curriculums and a 4.9-star parent rating.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="px-4 pb-8 pt-36 sm:pt-40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">Our story</p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl">
              Two decades of turning first pushes into lifelong skaters.
            </h1>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                GrindLine Skate Academy started in 2005 with one mini ramp, a handful of boards and
                a simple promise: teach every kid like they are our own. Twenty years and more than
                3,000 students later, that promise still drives everything we do.
              </p>
              <p>
                We are still coach-owned, still answer our own phones, and still believe a
                skateboard is one of the best teachers a kid can have — patience, persistence and
                the joy of trying again. When you come to GrindLine, you skate with the people who
                will actually be on the ramp with you.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="glass-card overflow-hidden rounded-3xl">
              <Image
                src="/images/about-team.jpg"
                alt="The GrindLine Skate Academy coaching team with their skateboards at the skatepark"
                width={1024}
                height={768}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <StatsStrip />

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What we stand for"
            title="The values under every session"
            subtitle="Four principles that have carried us through two decades of rain, shine and perfect kickflips."
          />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {values.map((v) => (
              <StaggerItem key={v.title} className="h-full">
                <div className="glass-card h-full rounded-3xl p-7">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-accent/15 text-accent-foreground">
                    <v.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">{v.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <div className="glass-card overflow-hidden rounded-3xl">
              <Image
                src="/images/extra-2.jpg"
                alt="Skater pumping through the snake run at GrindLine's covered skatepark"
                width={1024}
                height={640}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="The people"
              title="Meet the crew you will actually skate with"
              subtitle="Our coaches average 8 years on the GrindLine team — they know every coping, crack and line in our park like their own backyard."
            />
            <Stagger className="mt-8 space-y-4" stagger={0.08}>
              {[
                ["Dez Carter", "Founder & Head Coach — 20 years, ex-pro street skater"],
                ["Maya Okonkwo", "General Manager & Beginner Program Lead — certified instructor"],
                ["Rico Delgado", "Transition Coach — 15 years, bowl specialist"],
                ["Ellie Nguyen", "Youth Camp Director — pediatric first-aid certified"],
              ].map(([name, role]) => (
                <StaggerItem key={name}>
                  <div className="glass-card flex items-center gap-4 rounded-2xl p-5">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-lg font-bold text-primary">
                      {name.split(" ").map((n) => n[0]).join("")}
                    </span>
                    <div>
                      <p className="font-display text-base font-bold text-foreground">{name}</p>
                      <p className="text-sm text-muted-foreground">{role}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <CtaBand
        title="Come skate with us"
        subtitle="Join 3,000+ happy skaters and their parents. Book your first lesson today — we will treat your board like our own."
      />
    </>
  );
}
