"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/img4.jpg",
  "/img7.jpg",
  "/img3.jpg",
  "/img2.JPG",
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
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Capturing Light. Telling Stories.
        </motion.h1>
        <motion.p 
          className="mt-4 text-[#959595] text-lg md:text-xl max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Sunreal Photography – bringing moments to life.
        </motion.p>
        <motion.a
          href="/portfolio"
          className="mt-8 px-6 py-3 border border-white text-white font-medium text-sm md:text-base transition-colors hover:bg-[#FDF8EE] hover:text-[#072961]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          View Portfolio
        </motion.a>
      </div>

      {/* Arrows */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-opacity z-40"
        aria-label="Previous Slide"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
      >
        <ChevronLeft className="h-10 w-10" />
      </motion.button>
      <motion.button
        onClick={nextSlide}
        className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-opacity z-40"
        aria-label="Next Slide"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
      >
        <ChevronRight className="h-10 w-10" />
      </motion.button>
    </section>
  );
}