"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    <motion.header
      className={clsx(
        "fixed top-0 left-0 w-full z-50",
        "transition-all duration-700 ease-out",
        scrolled
          ? "bg-[#072961]/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
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
        </motion.div>

        {/* Desktop Links */}
        <motion.ul 
          className="hidden md:flex items-center gap-12"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {["Portfolio", "About", "Contact"].map((item, idx) => (
            <motion.li 
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.1, ease: "easeOut" }}
            >
              <Link
                href={`/${item.toLowerCase()}`}
                className={clsx(
                  "transition-colors text-lg",
                  "text-white/80 hover:text-white"
                )}
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Right actions */}
        <motion.div 
          className="hidden md:flex items-center gap-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
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
        </motion.div>

        {/* Mobile Toggle */}
        <motion.button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <div className="space-y-1.5">
            <span className="block h-px w-7 bg-current" />
            <span className="block h-px w-7 bg-current" />
            <span className="block h-px w-7 bg-current" />
          </div>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        className={clsx(
          "md:hidden overflow-hidden transition-all duration-500",
          open ? "max-h-80" : "max-h-0"
        )}
        initial={false}
        animate={open ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-[#072961] px-6 pb-6 pt-4 space-y-5">
          {["Portfolio", "About", "Contact"].map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={open ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.3, delay: open ? idx * 0.1 : 0 }}
            >
              <Link
                href={`/${item.toLowerCase()}`}
                className="block text-white text-lg"
                onClick={() => setOpen(false)}
              >
                {item}
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={open ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.3, delay: open ? 0.3 : 0 }}
          >
            <Link
              href="/book"
              className="block w-full text-center rounded-full py-3 bg-[#FDF8EE] text-[#072961] font-medium"
              onClick={() => setOpen(false)}
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
}