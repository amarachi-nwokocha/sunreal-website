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
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-[#FDF8EE]/90 backdrop-blur border-b border-[#959595]/20"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={clsx(
            "text-lg font-medium tracking-wide transition-colors",
            scrolled ? "text-[#072961]" : "text-[#FDF8EE]"
          )}
        >
          Sunreal
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10 text-sm">
          {["Portfolio", "About", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={`/${item.toLowerCase()}`}
                className={clsx(
                  "transition-colors",
                  scrolled
                    ? "text-[#959595] hover:text-[#072961]"
                    : "text-[#FDF8EE]/70 hover:text-[#FDF8EE]"
                )}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className={clsx(
            "md:hidden transition-colors",
            scrolled ? "text-[#072961]" : "text-[#FDF8EE]"
          )}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className="block h-px w-6 bg-current" />
            <span className="block h-px w-6 bg-current" />
            <span className="block h-px w-6 bg-current" />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "md:hidden overflow-hidden transition-all duration-300",
          open ? "max-h-64" : "max-h-0"
        )}
      >
        <div className="bg-[#FDF8EE] px-6 pb-6 space-y-4">
          {["Portfolio", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="block text-[#072961] text-sm"
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
