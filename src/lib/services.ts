export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string[];
  features: string[];
  icon: string;
  image: string;
  priceFrom: string;
};

export const services: Service[] = [
  {
    slug: "beginner-skate-lessons",
    name: "Beginner Skate Lessons",
    tagline: "From first push to rolling with confidence.",
    description:
      "Small-group lessons that teach absolute beginners the fundamentals — stance, pushing, stopping and turning — on flat ground with pro supervision.",
    longDescription: [
      "Everyone starts somewhere, and our beginner track is built for first-timers of any age. In a small group capped at six students, you will learn proper stance, how to push and steer, foot braking and safe falling techniques on smooth flat concrete.",
      "Every lesson includes a board and helmet if you need one, and our coaches break each skill into tiny steps so you build confidence fast. Most students are cruising the flat pad by the end of lesson two.",
    ],
    features: [
      "Groups capped at 6 students",
      "Boards and helmets provided free",
      "Stance, pushing, braking and turning",
      "Safe-falling and bailing techniques",
      "Progress checkpoints every lesson",
      "All ages 5 and up welcome",
    ],
    icon: "GraduationCap",
    image: "/images/service-beginner.jpg",
    priceFrom: "$45",
  },
  {
    slug: "advanced-trick-clinics",
    name: "Advanced Trick Clinics",
    tagline: "Level up your kickflips, grinds and airs.",
    description:
      "Intensive clinics for intermediate and advanced skaters focused on flipping, sliding and airing tricks with spot-on technique and video analysis.",
    longDescription: [
      "Stuck on the same trick for months? Our advanced clinics break down flip tricks, grinds, slides and airs into progressions that actually click. Coaches watch every attempt, correct your foot placement and timing, and celebrate the land.",
      "Each session includes slow-motion video review so you can see exactly what is working — and what is not. Clinics rotate themes weekly, from flat-ground flip tricks to ledge and rail work.",
    ],
    features: [
      "Themed weekly rotations",
      "2:1 coach-to-skater max ratio",
      "Slow-motion video analysis",
      "Trick progressions, not guesswork",
      "Pad and board checks included",
      "Suitable for confident intermediate skaters",
    ],
    icon: "Zap",
    image: "/images/service-advanced.jpg",
    priceFrom: "$60",
  },
  {
    slug: "skateboard-camps",
    name: "Skateboard Camps",
    tagline: "Week-long summer camps that build real skills.",
    description:
      "Half-day and full-day camps for ages 6–16 combining structured coaching, free skate, games and skatepark etiquette — held all summer long.",
    longDescription: [
      "Our camps are the heart of GrindLine. Each week blends skill stations, park sessions, games of S.K.A.T.E. and skate culture workshops — all supervised by certified coaches with a strict safety-first culture.",
      "Campers are grouped by age and level, so beginners learn alongside beginners and hotshot kids get pushed by our pro team. Full-day campers get lunch supervision, hydration breaks and plenty of shade time.",
    ],
    features: [
      "Ages 6–16, grouped by level",
      "Half-day and full-day options",
      "Daily skill stations and free skate",
      "All gear provided if needed",
      "Certified coach supervision",
      "End-of-week showcase and medal run",
    ],
    icon: "Tent",
    image: "/images/service-camps.jpg",
    priceFrom: "$395",
  },
  {
    slug: "private-coaching",
    name: "Private Coaching",
    tagline: "One-on-one coaching, completely tailored to you.",
    description:
      "Dedicated 1-on-1 sessions with a pro coach — the fastest way to break through plateaus, prepare for competitions or build confidence.",
    longDescription: [
      "Private coaching is the fastest way to improve. Your coach builds a personal plan around your goals — whether that is landing your first kickflip, mastering transition skating or polishing a competition run.",
      "Sessions are fully flexible: book single sessions, or commit to a monthly block and watch your skating transform. Parents of younger skaters love the focused attention and visible progress.",
    ],
    features: [
      "Fully personalized lesson plans",
      "Book single sessions or monthly blocks",
      "Competition run preparation",
      "Video review and take-home drills",
      "Flexible scheduling, 7 days a week",
      "Any level, ages 5 to adult",
    ],
    icon: "UserCheck",
    image: "/images/service-private.jpg",
    priceFrom: "$85",
  },
  {
    slug: "park-ramp-training",
    name: "Park & Ramp Training",
    tagline: "Master bowls, transitions and ramps safely.",
    description:
      "Structured training for bowls, mini ramps, quarters and vert — teaching pumping, carving, drop-ins and airs with ramp-specific safety.",
    longDescription: [
      "Transition skating is a different world — and an incredibly fun one. Our park and ramp training teaches the ramp-specific skills most skaters never learn on flat ground: pumping for speed, carving the walls, drop-ins and, eventually, airs.",
      "We work across our bowl, mini ramp and vert sections, progressing you only when you are genuinely ready. Ramp safety and fall technique are drilled first, every time.",
    ],
    features: [
      "Bowls, mini ramps and vert sections",
      "Pumping, carving and drop-in progressions",
      "Ramp-specific safety and fall drills",
      "Groups capped at 8 skaters",
      "Board and helmet rental included",
      "Weekly recurring sessions available",
    ],
    icon: "Mountain",
    image: "/images/service-park.jpg",
    priceFrom: "$50",
  },
  {
    slug: "street-skills-sessions",
    name: "Street Skills Sessions",
    tagline: "Ledges, rails and plazas — the real city school.",
    description:
      "Guided street sessions that teach ledges, rails, stairs and manual pads in a safe, legal indoor environment before you take it to the city.",
    longDescription: [
      "Street skating is how most skaters fall in love with the sport — and how most get hurt. Our street skills sessions recreate city obstacles (ledges, rails, stairs, gaps, manual pads) in a controlled environment with crash mats and pro coaching.",
      "Learn proper approach speed, pop and lock techniques, and — most importantly — when a spot is not worth the risk. Graduates leave ready to skate real plazas with confidence and respect.",
    ],
    features: [
      "Ledges, rails, stairs and manual pads",
      "Crash mats on all featured obstacles",
      "Line-building and spot-reading lessons",
      "Street etiquette and city safety",
      "All levels, from first ollie to gap hunters",
      "Small groups of max 10",
    ],
    icon: "Building2",
    image: "/images/service-street.jpg",
    priceFrom: "$50",
  },
  {
    slug: "birthday-party-sessions",
    name: "Birthday Party Sessions",
    tagline: "The raddest party your kid will remember.",
    description:
      "Two-hour private party packages with a dedicated coach, games, free skate, pizza-friendly break room and zero setup stress for parents.",
    longDescription: [
      "Give your skater a birthday they will talk about all year. Our party package includes a private park session with a dedicated coach, organized games, free skate time and a party room for cake and presents.",
      "We handle everything — coaching, games, supervision and cleanup. You just bring the cake. Parties run for two hours and can include skaters of all levels, with loaner boards and helmets for every guest who needs one.",
    ],
    features: [
      "2-hour private park session",
      "Dedicated party coach and games",
      "Loaner boards and helmets for all guests",
      "Party room for cake and presents",
      "Up to 15 guests included",
      "Add-on: trick show by our pro team",
    ],
    icon: "PartyPopper",
    image: "/images/service-birthday.jpg",
    priceFrom: "$275",
  },
];

export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  summary: string;
  details: string[];
  image: string;
  stats: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "riverside-park-bowl",
    title: "Riverside Park Bowl Revamp",
    location: "Portland, OR",
    category: "Community Build",
    summary:
      "Partnered with the city to redesign and rebuild a neglected 1980s bowl — now our busiest outdoor coaching venue with 300+ weekly skaters.",
    details: [
      "Led a community design workshop with 40 local skaters to shape the new line.",
      "Coordinated concrete repair, new coping and drainage with city crews over 12 weeks.",
      "Launched a free Saturday beginner program that has taught 500+ kids to skate.",
    ],
    image: "/images/project-1.jpg",
    stats: [
      { label: "Skaters weekly", value: "300+" },
      { label: "Build time", value: "12 wks" },
      { label: "Kids taught", value: "500+" },
    ],
  },
  {
    slug: "springboard-indoor-facility",
    title: "Springboard Indoor Training Facility",
    location: "North Portland",
    category: "Facility",
    summary:
      "Designed the coaching program and lesson zones for a new 18,000 sq ft indoor facility with foam pit, mini ramp and street course.",
    details: [
      "Designed the curriculum zones: beginner pad, street course, bowl and foam pit.",
      "Trained a 10-coach team on our safety-first teaching system.",
      "Program now runs 40+ weekly sessions with a 400-student waiting list in winter.",
    ],
    image: "/images/project-2.jpg",
    stats: [
      { label: "Size", value: "18k sq ft" },
      { label: "Coaches", value: "10" },
      { label: "Weekly sessions", value: "40+" },
    ],
  },
  {
    slug: "pearl-district-street-program",
    title: "Pearl District Street Skills Program",
    location: "Downtown Portland",
    category: "Street Program",
    summary:
      "A 10-week after-school street program for teens, blending obstacle training at our park with real-plaza field trips and mentoring.",
    details: [
      "Built a 10-week curriculum covering ledges, rails, stairs and line-building.",
      "Partnered with two local middle schools for after-school pickup and drop-off.",
      "94% of graduates reported improved confidence; 12 joined our junior team.",
    ],
    image: "/images/project-3.jpg",
    stats: [
      { label: "Graduates", value: "120+" },
      { label: "Confidence up", value: "94%" },
      { label: "Junior team", value: "12" },
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "My daughter was terrified of skateboards. After one summer of GrindLine camps she drops in on the big bowl — and her confidence at school changed completely.",
    name: "Maya R.",
    role: "Parent of a 9-year-old camper",
    rating: 5,
  },
  {
    quote:
      "I tried to learn kickflips for two years on my own. Two private sessions with Coach Dez and I landed my first one clean. The video analysis is a game changer.",
    name: "Jordan T.",
    role: "Private coaching student",
    rating: 5,
  },
  {
    quote:
      "We booked a birthday party for our son and 14 friends. The coaches ran everything — games, tricks, even kept the chaos organized. Best party we have ever thrown.",
    name: "Amelia & Chris B.",
    role: "Birthday party parents",
    rating: 5,
  },
  {
    quote:
      "As a 34-year-old total beginner I was nervous to start. The beginner lessons are patient, structured and genuinely fun. I can now cruise the park with my kids.",
    name: "Sam K.",
    role: "Adult beginner student",
    rating: 5,
  },
  {
    quote:
      "The camp staff are incredible with kids. My son went from zero skating to a full bag of tricks in one week — and he cannot wait for next summer.",
    name: "Priya N.",
    role: "Parent of two campers",
    rating: 5,
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "What gear do I need for my first lesson?",
    answer:
      "Just show up in comfortable clothes and closed-toe shoes. We provide boards, helmets and pads free for every lesson and camp session. If you bring your own gear, our coaches will check it over and help you set it up before you start.",
  },
  {
    question: "Is skateboarding safe for kids?",
    answer:
      "Yes — when taught properly. Our coaches are certified in skate instruction and first aid, every lesson starts with helmet checks and safe-fall drills, and group sizes are capped so every skater gets eyes-on supervision. In 20 years we have never had a serious injury in a lesson.",
  },
  {
    question: "What ages do you teach?",
    answer:
      "We teach everyone from age 5 to adults in their 60s. Kids under 8 join our junior beginner groups with extra supervision, and adult groups are a popular evening option. There is no age too late to start rolling.",
  },
  {
    question: "How do skateboard camps work?",
    answer:
      "Camps run weekly all summer, Monday–Friday, in half-day (9am–12pm) and full-day (9am–3pm) formats. Campers are grouped by age and level, rotate through skill stations and free skate, and full-day campers get supervised lunch. All gear is provided if needed.",
  },
  {
    question: "Can I book private lessons for a specific goal?",
    answer:
      "Absolutely. Private coaching is built around your goals — landing a first trick, preparing for a competition, or just building confidence. Tell us what you want to achieve when you book and we will match you with the right coach.",
  },
  {
    question: "How do birthday party bookings work?",
    answer:
      "Book your date online or by phone and we handle the rest. Parties include a private park session, a dedicated coach, games, loaner boards and helmets for all guests, plus a party room for cake and presents. Most weekends book out 3–4 weeks ahead, so grab your date early.",
  },
  {
    question: "What if it rains on the day of my lesson?",
    answer:
      "We skate rain or shine — our park is fully covered and indoors. Outdoor sessions move to our indoor street course automatically, so you never lose a lesson to the weather.",
  },
  {
    question: "Do you offer programs for schools or community groups?",
    answer:
      "Yes. We run after-school programs, school partnerships and community outreach clinics across the Portland area. Email us at hello@grindline-skate-academy.amsitservices.com to talk about a program for your group.",
  },
];
