"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function HomePage() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-left text-white overflow-hidden"
      style={{
        backgroundImage: "url('/header.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gradasi pink transparan */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600/60 via-pink-500/30 to-transparent"></div>

      {/* Konten */}
      <div className="relative z-10 w-full max-w-3xl px-4 sm:px-6 md:px-12 text-center sm:text-left">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Rosemery
        </motion.h1>

        <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6">
          <Typewriter
            words={[
              "Student robotics team from Universitas Negeri Yogyakarta that develops a pair of dancing humanoid robots.",
              "Uniting technology, art, and culture.",
              "Actively competes in KRSTI with expressive and graceful movements."
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={40}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </p>

        <motion.a
          href="#role"
          className="inline-block px-6 py-3 bg-white text-pink-600 font-semibold rounded-full shadow-md hover:bg-pink-100 transition"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Get Started
        </motion.a>
      </div>
    </section>
  );
}
