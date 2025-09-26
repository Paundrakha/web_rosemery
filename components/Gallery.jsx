"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/Foto/1.jpg",
  "/Foto/2.jpg",
  "/Foto/3.jpg",
  "/Foto/4.jpg",
  "/Foto/5.jpg",
  "/Foto/6.jpg",
  "/Foto/7.jpg",
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="relative w-full max-w-2xl mx-auto p-4"
      // style={{ backgroundImage: "url('BG2.png')" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Gallery
      </h2>

      {/* Gambar dengan animasi */}
      <div className="relative h-64 md:h-96 overflow-hidden rounded-2xl shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              <Image
                src={images[current]}
                alt={`Gallery ${current + 1}`}
                fill
                className="object-cover rounded-2xl"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Tombol kiri kanan */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -left-4 bg-pink-600 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-purple-700 transition"
      >
        ◀
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -right-4 bg-pink-600 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-purple-700 transition"
      >
        ▶
      </button>

      {/* Indicator bulat */}
      <div className="flex justify-center mt-3 space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? "bg-pink-500 scale-110" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
