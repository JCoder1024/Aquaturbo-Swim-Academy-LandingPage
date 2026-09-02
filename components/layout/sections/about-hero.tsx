"use client";

import { useLanguage } from "@/components/layout/language-provider";
import Image from "next/image";

export const AboutHeroSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      aria-labelledby="about-hero-title"
      className="relative isolate flex min-h-[calc(100dvh-4rem)] w-full items-center overflow-hidden bg-surface-inverse px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 motion-safe:animate-in motion-safe:zoom-in-95 motion-safe:duration-1000"
      >
        <Image
          src="/hero-image.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,15,23,0.58),rgba(8,15,23,0.34)_48%,rgba(8,15,23,0.48))]"
      />

      <div
        className="mx-auto w-full max-w-[1180px] border border-white/70 py-8 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700 sm:py-10 lg:py-12"
      >
        {t.aboutHero.kicker ? (
          <p
            className="mb-6 px-4 text-center text-lg font-bold uppercase tracking-[0.65em] text-white drop-shadow-sm motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-700 sm:text-2xl lg:mb-8 lg:text-4xl"
          >
            {t.aboutHero.kicker}
          </p>
        ) : null}

        <div
          className="bg-white px-4 py-4 text-center text-surface-inverse motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700 sm:px-8 sm:py-5 lg:px-10 lg:py-6"
        >
          <h1
            id="about-hero-title"
            className="text-[clamp(2rem,5vw,4.5rem)] font-black uppercase leading-[1.02] tracking-[0.035em]"
          >
            {t.aboutHero.title}
          </h1>
        </div>

        <p
          className="px-5 pt-7 text-center text-[clamp(1.75rem,3.5vw,3.5rem)] font-extrabold uppercase leading-[1.05] tracking-[0.025em] text-white drop-shadow-md motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700 sm:px-8 sm:pt-9"
        >
          {t.aboutHero.tagline}
        </p>
      </div>
    </section>
  );
};
