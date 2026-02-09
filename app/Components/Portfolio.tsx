"use client";

import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  {
    title: "Weddings",
    subtitle: "Love Stories Unfold",
    image: "/img12.JPG", // replace with your image path
    href: "/portfolio/weddings",
  },
  {
    title: "Bridal",
    subtitle: "Elegant Portraits",
    image: "/img11.JPG",
    href: "/portfolio/bridal",
  },
  {
    title: "Brand",
    subtitle: "Business Promotions",
    image: "/img8.jpg",
    href: "/portfolio/brands",
  },
  {
    title: "Studio",
    subtitle: "Artistic Vision",
    image: "/img10.jpg",
    href: "/portfolio/studio",
  },
];

export default function PortfolioGrid() {
  return (
 <section className="max-w-7xl mx-auto px-6 py-16 text-center ">
      <p className="text-sm text-[#072961] tracking-widest uppercase mb-2">
        Portfolio
      </p>
      <h2 className="text-3xl md:text-4xl font-serif text-[#072961] mb-2">
        Stories Through
      </h2>
      <h3 className="text-2xl md:text-3xl text-[#08409d] italic mb-12">
        My Lens
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {portfolioItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="relative group overflow-hidden  shadow-lg"
          >
            <div className="relative h-80 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-4">
              <span className="text-xs text-[#959595] uppercase tracking-widest">
                {item.subtitle}
              </span>
              <h4 className="text-lg md:text-xl text-white font-semibold mt-1">
                {item.title}
              </h4>
              <span className="text-sm text-white/95 mt-1 inline-block">
                View Gallery →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
