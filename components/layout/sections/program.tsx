"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "@/components/layout/language-provider";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

export const ProgramSection = () => {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="program" className="py-24 sm:py-32">
      <div className="container">
        <h2 className="mb-2 text-center text-lg tracking-wider text-primary">
          {t.program.eyebrow}
        </h2>
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          {t.program.title}
        </h2>
        <h3 className="mx-auto mb-8 text-center text-xl text-muted-foreground md:w-1/2">
          {t.program.description}
        </h3>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {t.program.items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 36 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: prefersReducedMotion ? 0 : index * 0.1,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="group overflow-hidden rounded-lg border border-border bg-background"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src="/hero-image.webp"
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <div className="flex min-h-36 items-start justify-between gap-5 px-5 py-5 sm:px-6 sm:py-6">
                <div>
                  <h3 className="text-xl font-semibold leading-tight">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.description}
                  </p>
                </div>
                <div className="shrink-0 rounded-full border border-border bg-background p-3 text-primary">
                  <Icon
                    name={item.icon as keyof typeof icons}
                    size={20}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
