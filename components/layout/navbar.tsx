"use client";
import { Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ToggleLanguage } from "./toggle-language";
import { useLanguage } from "./language-provider";

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-primary-foreground/15 bg-primary text-primary-foreground">
      <div className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="relative h-10 w-40 overflow-hidden"
          aria-label={t.nav.brand}
        >
          <Image
            src="/brand-image-without-bg-cropped.png"
            alt={t.nav.brand}
            fill
            sizes="160px"
            className="object-contain"
          />
        </Link>
        <div className="flex items-center lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Menu
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer text-primary-foreground lg:hidden"
              />
            </SheetTrigger>

            <SheetContent
              side="left"
              className="flex flex-col gap-0 overflow-hidden rounded-tr-2xl rounded-br-2xl border-secondary bg-card p-0 [&>button]:z-10 [&>button]:text-primary-foreground"
            >
              <div className="flex h-16 shrink-0 items-center bg-primary px-6">
                <SheetHeader className="m-0">
                  <SheetTitle className="flex items-center">
                    <Link
                      href="/"
                      className="relative h-10 w-40 overflow-hidden"
                    >
                      <Image
                        src="/brand-image-without-bg-cropped.png"
                        alt={t.nav.brand}
                        fill
                        sizes="160px"
                        className="object-contain"
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
              </div>

              <div className="flex min-h-0 flex-1 flex-col justify-between bg-card p-6">
                <div className="flex flex-col gap-2">
                  {t.nav.routes.map(({ href, label }) => (
                    <Button
                      key={href}
                      onClick={() => setIsOpen(false)}
                      asChild
                      variant="ghost"
                      className="justify-start text-base"
                    >
                      <Link href={href}>{label}</Link>
                    </Button>
                  ))}
                </div>

                <SheetFooter className="flex-col items-start justify-start sm:flex-col">
                  <Separator className="mb-2" />
                  <ToggleLanguage />
                </SheetFooter>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <NavigationMenu className="mx-auto hidden lg:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              {t.nav.routes.map(({ href, label }) => (
                <NavigationMenuLink key={href} asChild>
                  <Link
                    href={href}
                    className="px-2 text-base text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                  >
                    {label}
                  </Link>
                </NavigationMenuLink>
              ))}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex">
          <ToggleLanguage inverted />

          <Button
            size="sm"
            className="ml-2 hidden rounded-2xl bg-brand-action text-white hover:bg-brand"
            aria-label={t.nav.auth}
          >
            {t.nav.auth}
          </Button>
        </div>
      </div>
    </header>
  );
};
