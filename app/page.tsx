import { BenefitsSection } from "@/components/layout/sections/benefits";
import { ContactSection } from "@/components/layout/sections/contact";
import { ProgramSection } from "@/components/layout/sections/program";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ServicesSection } from "@/components/layout/sections/services";
import { TeamSection } from "@/components/layout/sections/team";
import { CampusSection } from "@/components/layout/sections/campus";
import { AboutHeroSection } from "@/components/layout/sections/about-hero";

export const metadata = {
  title: "Aquaturbo Swim Academy",
  description: "Aquaturbo Swim Academy",
  openGraph: {
    type: "website",
    url: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Aquaturbo Swim Academy",
    description: "Aquaturbo Swim Academy",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Aquaturbo Swim Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Aquaturbo Swim Academy",
    description: "Aquaturbo Swim Academy",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
      <AboutHeroSection />
      <HeroSection />
      <BenefitsSection />
      <ServicesSection />
      <ProgramSection />
      <TeamSection />
      <CampusSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
