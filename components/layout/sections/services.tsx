"use client";

import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/components/layout/language-provider";

export const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        {t.services.eyebrow}
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        {t.services.title}
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        {t.services.description}
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {t.services.items.map(({ title, description }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <p className="text-sm text-muted-foreground">{description}</p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};
