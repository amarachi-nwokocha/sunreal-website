"use client";

import Image from "next/image";

const cards  = [
  {
    title: "Portraits",
    image: "/img6.jpg",
    alt: "image",
    link: "/portfolio/portraits",
  },
  {
    title: "Weddings",
    image: "/img7.jpg",
    alt: "image",
    link: "/portfolio/weddings",
  },
  {
    title: "Fashion",
    image: "/img6.jpg",
    alt: "image",
    link: "/portfolio/fashion",
  },
  {
    title: "Events",
    image:  "/img5.JPG",
    alt: "image",
    link: "/portfolio/events",
  },
  {
    title: "Lifestyle",
    image: "/image1.jpg",

    alt: "image",
    link: "/portfolio/lifestyle",
  },
];

export default function PortfolioCollage() {
  return (
    <section className="bg-[#FDF8EE] py-20 px-6 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-2">

        {/* Left Column: Top 3 images */}
        <div className="md:col-span-3 grid gap-2">
        
          <div className="grid grid-cols-2 gap-2">
            <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden group">
              <Image
                src={cards[0].image}
                alt={cards[0].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden group">
              <Image
                src={cards[1].image}
                alt={cards[1].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="relative h-56 md:h-64 rounded-2xl overflow-hidden group">
            <Image
              src={cards[2].image}
              alt={cards[2].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Right Column: Text Box + Img4 & Img5 */}
        <div className="md:col-span-2 flex flex-col gap-2">
   
          <div className="relative bg-white rounded-2xl p-6 flex flex-col justify-center h-32 md:h-72">
            <h3 className="text-2xl md:text-3xl font-bold text-[#072961] mb-2">
              Our Vision
            </h3>
            <p className="text-[#959595] text-sm md:text-base">
              At Sunreal Photography, we capture moments with a blend of creativity and precision. Every frame tells a story and every image evokes emotion.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden group">
              <Image
                src={cards[3].image}
                alt={cards[3].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden group">
              <Image
                src={cards[4].image}
                alt={cards[4].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}