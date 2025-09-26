"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const dances = [
  {
    title: "Tari Kancet Ledo",
    desc: "A traditional dance of the Dayak Kenyah people in East Kalimantan, often performed by women holding a gong. It symbolizes joy, gratitude, and the spirit of community.",
    img: "/Tari/puluu.jpg",
  },
  {
    title: "Tari Gambang Semarang",
    desc: "A cultural dance from Semarang, Central Java, that blends Chinese and Javanese influences. Its lively and cheerful moves represent harmony in diversity and cultural interaction.",
    img: "/Tari/Gambang Semarang.JPG",
  },
  {
    title: "Tari Gambyong Paraenom",
    desc: "Originating from Central Java, this dance is known for its elegant and soft movements. Originally performed to welcome guests, it reflects Javanese refinement and hospitality",
    img: "/Tari/Gambyong.jpg",
  },
  {
    title: "Tari Oleg Tamulilingan",
    desc: "A Balinese dance depicting the courtship of two bumblebees (tamulilingan). It is characterized by dynamic yet graceful movements, symbolizing love and harmony.",
    img: "/Tari/Oleg.jpeg",
  },
  {
    title: "Tari Jaipong Kembang Tanjung",
    desc: "A traditional Sundanese dance from West Java, performed with energetic yet graceful movements. Characterized by dynamic body gestures and rhythmic accompaniment, it represents the vibrancy of Sundanese culture and is often showcased in celebratory events.",
    img: "/Tari/gending.JPG",
  },
];

export default function Journey() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((index - 1 + dances.length) % dances.length);
  };

  const nextSlide = () => {
    setIndex((index + 1) % dances.length);
  };

  return (
    <section
      id="journey"
      className="py-16 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Journey
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Gambar kiri dengan animasi */}
          <div className="relative w-full md:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={dances[index].img}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={dances[index].img}
                  alt={dances[index].title}
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Tombol prev/next */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 -left-6 bg-pink-600 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-purple-700 transition"
            >
              &lt;
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 -right-6 bg-pink-600 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-purple-700 transition"
            >
              &gt;
            </button>
          </div>

          {/* Teks kanan dalam card + animasi */}
          <div className="md:w-1/2 pl-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={dances[index].title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <h3 className="text-2xl font-bold mb-3">
                  {dances[index].title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {dances[index].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {dances.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-pink-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
