"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Achievement() {
  const data = [
    {
      year: "2024",
      title: "KRSTI 2024",
      desc: [
        "Juara 1 KRSTI Wilayah 1 Tahun 2024",
        "Juara 2 KRSTI Nasional 2024",
      ],
      img: "/Foto/3.jpg",
    },
    {
      year: "2023",
      title: "KRSTI 2023",
      desc: [
        "Juara 1 KRSTI Wilayah 1 Tahun 2023",
        "Juara 2 KRSTI Nasional Tahun 2023",
      ],
      img: "/Prestasi/2023.jpg",
    },
    {
      year: "2022",
      title: "KRSTI 2022",
      desc: [
        "Juara 2 KRSTI Wilayah 2 Tahun 2022",
        "Juara Harapan KRSTI Nasional Tahun 2022",
      ],
      img: "/Prestasi/2022.jpg",
    },
    {
      year: "2021",
      title: "KRSTI 2021",
      desc: [
        "Juara 1 KRSTI Wilayah 2 Tahun 2021",
        "Juara 2 KRSTI Nasional Tahun 2021",
        "Desain & Artistik Terbaik [Best Artistic]",
      ],
      img: "/Tari/Gambyong B.jpg",
    },
  ];

  // Hook typing effect untuk deskripsi
  const TypingText = ({ text }) => {
    const [display, setDisplay] = useState("");
    useEffect(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplay(text.slice(0, i + 1));
        i++;
        if (i === text.length) clearInterval(interval);
      }, 40); // kecepatan ketik
      return () => clearInterval(interval);
    }, [text]);

    return <span>{display}</span>;
  };

  return (
    <section
      id="achievement"
      className="py-16 bg-gradient-to-r from-pink-50 via-white to-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Achievements
        </h2>

        <div className="relative border-l-4 ml-6">
          {data.map((item, idx) => (
            <motion.div
              key={item.year}
              className={`mb-12 flex flex-col md:flex-row md:items-center ${
                idx % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Titik di garis */}
              <div className="absolute left-0 w-4 h-4 bg-pink-600 rounded-full -ml-[10px] mt-2"></div>

              {/* Card Prestasi */}
              <motion.div
                className="md:w-1/2 md:px-6"
                initial={{ x: idx % 2 === 0 ? 100 : -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white shadow-lg rounded-xl p-6 mb-4 md:mb-0">
                  <span className="text-sm font-semibold text-pink-600">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                  <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    {item.desc.map((d, i) => (
                      <li key={i}>
                        <TypingText text={d} />
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Foto */}
              <motion.div
                className="md:w-1/2 md:px-6"
                initial={{ x: idx % 2 === 0 ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-xl shadow-md w-full h-60 object-cover"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
