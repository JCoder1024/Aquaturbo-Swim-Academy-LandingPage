import Image from "next/image";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-surface-inverse text-white border border-navy rounded-2xl">
        <Link href="/" className="inline-flex items-center">
          <Image
            src="/brand-image.png"
            alt="Aquaturbo Swim Academy"
            width={212}
            height={67}
            className="h-12 w-auto rounded-2xl object-contain"
          />
        </Link>
      </div>
    </footer>
  );
};
