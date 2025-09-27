import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-3 text-center md:text-left">
        {/* Identitas */}
        <div>
          <h2 className="text-2xl font-bold tracking-wide">ROSEMERY</h2>
          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            Robot Seni Tari UNY – Official website for competition journey &
            achievements.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Menu</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#home" className="hover:text-pink-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#role" className="hover:text-pink-400 transition">
                Role
              </a>
            </li>
            <li>
              <a href="#journey" className="hover:text-pink-400 transition">
                Journey
              </a>
            </li>
            <li>
              <a href="#achievement" className="hover:text-pink-400 transition">
                Achievement
              </a>
            </li>
            <li>
              <a href="#news" className="hover:text-pink-400 transition">
                News
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-pink-400 transition">
                Gallery
              </a>
            </li>
          </ul>
        </div>

        {/* Kontak & Sosmed */}
        <div>
          <h3 className="font-semibold mb-3 text-lg">Contact</h3>
          <p className="text-gray-300 text-sm">📧 rosemery@gmail.com</p>
          <div className="flex justify-center md:justify-start space-x-5 mt-4">
            <a
              href="https://www.instagram.com/rosemery.uny?igsh=MXVyZGU4bmZhYmxueQ=="
              className="hover:text-pink-400 transform hover:scale-110 transition"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://www.tiktok.com/@rosemery.uny?_t=ZS-903qcdlLZlo&_r=1"
              className="hover:text-pink-400 transform hover:scale-110 transition"
            >
              <FaTiktok size={22} />
            </a>
          </div>
          <p className="mt-3 text-gray-400 text-sm">
            📍 Universitas Negeri Yogyakarta, Indonesia
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-gray-500 text-sm">
        © 2025 ROSEMERY Team. All rights reserved.
      </div>
    </footer>
  );
}
