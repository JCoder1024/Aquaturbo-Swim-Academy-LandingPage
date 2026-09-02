"use client";

import Image from "next/image";
import { useLanguage } from "@/components/layout/language-provider";

export const CampusSection = () => {
  const { t } = useLanguage();

  return (
    <section id="campus" className="w-full py-24 sm:py-32">
      <div className="container">
        <h2 className="mb-2 text-center text-lg tracking-wider text-primary">
          {t.campus.eyebrow}
        </h2>
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          {t.campus.title}
        </h2>

        <div className="grid gap-12 md:grid-cols-2 lg:gap-8">
          {t.campus.items.map((item) => (
            <article
              key={item.title}
              className="group transition-opacity duration-300 hover:opacity-80"
            >
              <div className="relative mb-6 aspect-[1.5] w-full overflow-hidden rounded-2xl border border-border bg-muted">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mb-2 text-2xl font-semibold">{item.title}</h3>
              <p className="leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
