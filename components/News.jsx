"use client";
import { motion } from "framer-motion";

export default function News() {
  const news = [
    {
      title: "Robot Rosemery UNY Juara Dua di KRI Nasional 2024",
      date: "July 8, 2024",
      desc: "Robot Rosemery karya mahasiswa Universitas Negeri Yogyakarta (UNY) menjadi juara dua pada Kontes Robot Indonesia (KRI) Nasional tahun 2024 katagori Kontes Robot Seni Tari Indonesia (KRSTI)",
      img: "/News/N2024.jpg",
      link: "https://www.jogpaper.net/robot-rosemery-uny-juara-dua-di-kri-nasional-2024/",
    },
    {
      title:
        "Kontes Robot Seni Tari Indonesia Wilayah I Tahun 2024: Rosemery UNY Kembali Raih Juara 1",
      date: "June 2, 2024",
      desc: "Robot Seni Menari Universitas Negeri Yogyakarta atau Rosemery kembali ambil bagian dalam Kontes Robot Indonesia (KRI) Tingkat Regional tahun 2024.",
      img: "/News/N2024b.webp",
      link: "https://sleman.pikiran-rakyat.com/pendidikan/amp/pr-3048163682/kontes-robot-seni-t",
    },
    {
      title: "Rosemery UNY juara II Kontes Robot Seni Tari",
      date: "June 27, 2023",
      desc: "Pada Kontes Robot Seni Tari Indonesia (KRSTI) di Universitas Semarang (USM), 22-25 Juni 2023, Robot Rosemery Universitas Negeri Yogyakarta (UNY) meraih juara 2.",
      img: "/News/N2023.jpg",
      link: "https://www.kompas.com/edu/read/2023/06/27/115700171/rosemery-uny-juara-ii-kontes-robot-seni-tari-indonesia",
    },
    {
      title: "Robot Rosemery UNY Juara di Kontes Seni Tari 2022",
      date: "June 14, 2022",
      desc: "Robot Rosemery Universitas Negeri Yogyakarta (UNY) raih juara 2 dalam Kontes Robot Seni Tari Wilayah 2 tahun 2022.",
      img: "/News/N2022.jpeg",
      link: "https://www.kompas.com/edu/read/2022/06/14/185517271/robot-rosemery-uny-raih-juara-di-kontes-seni-tari-2022",
    },
    {
      title: "ROSEMARY ROBOT UNY FIRST WINNER OF DANCE ART ROBOT CONTEST",
      date: "Sept 09, 2021",
      desc: "Rosemary won 1st place and Best Artistic in the Indonesian Robot Contest (KRI) Region 1 2021 at the Indonesian Dance Robot Contest (KRSTI), which was held online on (23-25/9) with UGM as host.",
      img: "/News/N2021.jpg",
      link: "https://sdgs.uny.ac.id/content/rosemary-robot-uny-first-winner-dance-art-robot-contest",
    },
    {
      title:
        "ROSEMERY UNY, ROBOT CANTIK JUARA 1 NASIONAL DI KONTES ROBOT INDONESIA (KRI) 2017",
      date: "July 07, 2017",
      desc: "Rosemery UNY merebut peringkat pertama setelah berlaga dengan 15 robot lainnya dari universitas lain untuk divisi KRSTI.",
      img: "/News/N2017.jpg",
      link: "https://elektronika.ft.uny.ac.id/en/berita/rosemery-uny-robot-cantik-juara-1-nasional-di-kontes-robot-indonesia-kri-2017.html?page=7",
    },
  ];

  return (
    <section id="news" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          News
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Gambar */}
              <div className="overflow-hidden">
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Konten */}
              <div className="p-6">
                <span className="text-sm text-gray-500">{item.date}</span>
                <h3 className="text-xl font-semibold mt-2 mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-pink-600 text-white text-sm font-medium rounded-full hover:bg-purple-700 transition"
                >
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
