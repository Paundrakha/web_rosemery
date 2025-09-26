"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#home" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Rosemery Logo"
              width={50}   // bisa disesuaikan
              height={50}
              className="rounded-full"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["Home", "Role", "Journey", "Achievement", "News", "Gallery"].map(
              (item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`transition-colors font-medium ${
                    isScrolled
                      ? "text-gray-700 hover:text-pink-600"
                      : "text-white hover:text-pink-400"
                  } hover:underline underline-offset-4 decoration-2`}
                >
                  {item}
                </Link>
              )
            )}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none text-2xl ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-sm shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {["Home", "Role", "Journey", "Achievement", "News", "Gallery"].map(
              (item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className={`block px-3 py-2 rounded-md transition 
              ${
                isScrolled
                  ? "text-gray-800 hover:text-pink-600 hover:underline underline-offset-4 decoration-2"
                  : "text-white hover:text-pink-600 hover:underline underline-offset-4 decoration-2"
              }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
