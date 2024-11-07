"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`z-50 fixed top-0 left-0 right-0 w-full overflow-hidden transition-all duration-300 
        ${scrolled || isMenuOpen ? "border-b border-gray-400 border-opacity-20 bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg" : ""}`}
      >
        <div className="px-4 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="font-bold text-lg sm:text-xl bg-gradient-to-br from-[#5B78F9] to-[#1EE4A2] bg-clip-text text-transparent"
              >
                Sproule Studios
              </Link>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/work"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Work
              </Link>
              <Link
                href="/expertise"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Expertise
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Button variant="outline" className="bg-white text-black text-sm">
                Get in touch
              </Button>
            </div>
            <div className="lg:hidden">
              <Button onClick={toggleMenu} variant="ghost" size="icon">
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>


      </motion.nav>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "50vw" }} // Only takes 50% of the viewport width
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-16 fixed h-full top-0 right-0 bg-neutral-900 bg-opacity-50 backdrop-filter backdrop-blur-lg z-40"
            >
              <div className="w-full h-full p-4 space-y-1">
                <Link
                  href="/work"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 text-base font-medium"
                >
                  Work
                </Link>
                <Link
                  href="/expertise"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 text-base font-medium"
                >
                  Expertise
                </Link>
                <Link
                  href="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 text-base font-medium"
                >
                  About
                </Link>
                <div className="mt-4">
                  <Button
                    variant="outline"
                    className="bg-white w-full text-black"
                  >
                    Contact
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </>
  );
}
