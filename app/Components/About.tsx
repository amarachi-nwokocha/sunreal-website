"use client";

import { useEffect, useState } from "react";

const images = [
 "/img4.jpg",
    "/img7.jpg",
    "/img3.jpg",
  "/img2.JPG",
];

export default function AboutSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#FDF8EE]  px-6">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Slideshow */}
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
          {images.map((src, index) => (
            <img
              key={src}
              src={src}
              alt="Sunreal Photography"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Right: Text */}
        <div>
          <h2 className="text-[#072961] text-3xl md:text-4xl font-semibold mb-6">
            About Sunreal Photography
          </h2>

          <div className="w-16 h-0.5 bg-[#959595] mb-8" />

          <p className="text-[#4A4A4A] text-base md:text-lg leading-relaxed mb-6">
            Sunreal Photography is driven by the belief that every moment carries a
            story worth preserving. Through a thoughtful blend of light,
            composition, and emotion, we create imagery that feels timeless and
            deeply personal.
          </p>

          <p className="text-[#4A4A4A] text-base md:text-lg leading-relaxed">
            From intimate portraits to carefully curated visual narratives, our
            approach focuses on authenticity and detail. Each frame is crafted to
            reflect not just what is seen, but what is felt.
          </p>
        </div>
      </div>
    </section>
  );
}
