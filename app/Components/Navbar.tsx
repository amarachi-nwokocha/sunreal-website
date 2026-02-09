"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50",
        "transition-all duration-700 ease-out",
        scrolled
          ? "bg-[#072961]/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={clsx(
            "font-semibold tracking-wide transition-colors",
            "text-xl md:text-2xl",
            "text-white"
          )}
        >
          Sunreal
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-12">
          {["Portfolio", "About", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={`/${item.toLowerCase()}`}
                className={clsx(
                  "transition-colors text-lg",
                  "text-white/80 hover:text-white"
                )}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/book"
            className={clsx(
              "rounded-full px-6 py-3 text-base font-medium",
              "bg-[#FDF8EE] text-[#072961]",
              "hover:bg-white transition-colors"
            )}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className="block h-px w-7 bg-current" />
            <span className="block h-px w-7 bg-current" />
            <span className="block h-px w-7 bg-current" />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "md:hidden overflow-hidden transition-all duration-500",
          open ? "max-h-80" : "max-h-0"
        )}
      >
        <div className="bg-[#072961] px-6 pb-6 pt-4 space-y-5">
          {["Portfolio", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="block text-white text-lg"
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}

          <Link
            href="/book"
            className="block w-full text-center rounded-full py-3 bg-[#FDF8EE] text-[#072961] font-medium"
            onClick={() => setOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
