"use client";

import Image from "next/image";
import { Building2, Clock, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/components/layout/language-provider";

export const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4">
            <h2 className="mb-2 text-lg tracking-wider text-primary">
              {t.contact.eyebrow}
            </h2>

            <h2 className="text-3xl font-bold md:text-4xl">
              {t.contact.title}
            </h2>
          </div>
          <p className="mb-10 text-muted-foreground">
            {t.contact.description}
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-10 lg:gap-16">
          <div className="grid gap-8 text-left sm:grid-cols-2">
            <div>
              <div className="mb-1 flex gap-2">
                <Building2 />
                <div className="font-bold">{t.contact.findUs}</div>
              </div>
              <div>{t.contact.address}</div>
            </div>

            <div>
              <div className="mb-1 flex gap-2">
                <Phone />
                <div className="font-bold">{t.contact.callUs}</div>
              </div>
              <div>{t.contact.phone}</div>
            </div>

            <div>
              <div className="mb-1 flex gap-2">
                <Mail />
                <div className="font-bold">{t.contact.mailUs}</div>
              </div>
              <div>{t.contact.email}</div>
            </div>

            <div>
              <div className="mb-1 flex gap-2">
                <Clock />
                <div className="font-bold">{t.contact.visitUs}</div>
              </div>
              <div>
                <div>{t.contact.hoursDay}</div>
                <div>{t.contact.hoursTime}</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex items-center justify-center gap-2 font-bold">
                <Image
                  src="/icon-whatsapp.png"
                  alt=""
                  width={24}
                  height={24}
                  className="size-6 object-contain"
                />
                <span>WhatsApp</span>
              </div>
              <Image
                src="/whatsapp.png"
                alt={t.contact.whatsappQrAlt}
                width={523}
                height={517}
                sizes="(min-width: 1024px) 208px, (min-width: 768px) 16vw, 40vw"
                className="aspect-square w-full max-w-52 bg-white object-contain p-2"
              />
            </div>

            <div className="flex flex-col items-center gap-3 text-center">
              <div className="flex items-center justify-center gap-2 font-bold">
                <Image
                  src="/icon-wechat.png"
                  alt=""
                  width={24}
                  height={24}
                  className="size-6 object-contain"
                />
                <span>WeChat</span>
              </div>
              <Image
                src="/wechat.png"
                alt={t.contact.wechatQrAlt}
                width={640}
                height={630}
                sizes="(min-width: 1024px) 208px, (min-width: 768px) 16vw, 40vw"
                className="aspect-square w-full max-w-52 bg-white object-contain p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
