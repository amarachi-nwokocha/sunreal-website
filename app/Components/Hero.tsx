"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
      "/img4.jpg",
    "/img7.jpg",
    "/img3.jpg",
  "/img2.JPG",
//   "/img5.JPG",
//   "/img6.jpg",
//   "/image1.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + total) % total);
  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % total);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Images */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#072961]/20 z-20"></div>

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Capturing Light. Telling Stories.
        </h1>
        <p className="mt-4 text-[#959595] text-lg md:text-xl max-w-xl">
          Sunreal Photography – bringing moments to life.
        </p>
        <a
          href="/portfolio"
          className="mt-8 px-6 py-3 border border-white text-white font-medium text-sm md:text-base transition-colors hover:bg-[#FDF8EE] hover:text-[#072961]"
        >
          View Portfolio
        </a>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-opacity z-40"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="h-10 w-10" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-opacity z-40"
        aria-label="Next Slide"
      >
        <ChevronRight className="h-10 w-10" />
      </button>
    </section>
  );
}
