"use client";

import { useLanguage } from "@/components/layout/language-provider";

export const TeamSection = () => {
  const { t } = useLanguage();

  return (
    <section id="team" className="container py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-4">
          <p className="mb-2 text-lg tracking-wider text-primary">
            {t.team.eyebrow}
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">{t.team.title}</h2>
        </div>
        <p className="text-xl leading-relaxed text-muted-foreground">
          {t.team.description}
        </p>
      </div>
    </section>
  );
};
