import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackgroundBlobs } from "@/components/background-blobs";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://grindline-skate-academy.amsitservices.com"),
  title: {
    default: "GrindLine Skate Academy — Skateboarding Lessons & Camps",
    template: "%s | GrindLine Skate Academy",
  },
  description:
    "GrindLine Skate Academy teaches skateboarding to all ages in Portland, OR — beginner lessons, advanced trick clinics, summer camps, private coaching, park training, street skills and birthday parties. Safe, fun, pro-coached.",
  keywords: [
    "skateboarding lessons",
    "skateboard school",
    "skate camps",
    "skateboard classes",
    "private skate coaching",
    "kids skate lessons",
    "Portland skatepark",
    "beginner skateboarding",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "GrindLine Skate Academy",
    title: "GrindLine Skate Academy — Skateboarding Lessons & Camps",
    description:
      "Learn to skate at Portland's friendliest skate academy. Lessons, camps, private coaching and birthday parties for all ages and levels.",
    url: "https://grindline-skate-academy.amsitservices.com",
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Skateboarder mid-air above a concrete skatepark at GrindLine Skate Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GrindLine Skate Academy — Skateboarding Lessons & Camps",
    description:
      "Skateboarding lessons, camps, private coaching and birthday parties for all ages.",
    images: ["/images/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="relative min-h-screen antialiased">
        <BackgroundBlobs />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
