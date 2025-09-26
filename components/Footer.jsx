import { FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        
        {/* Identitas */}
        <div>
          <h2 className="text-xl font-bold">ROSEMERY</h2>
          <p className="mt-2 text-gray-400 text-sm">
            Robot Seni Tari UNY – Website resmi perjalanan & prestasi.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="font-semibold mb-2">Menu</h3>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#" className="hover:text-pink-400">Home</a></li>
            <li><a href="#" className="hover:text-pink-400">Role</a></li>
            <li><a href="#" className="hover:text-pink-400">Journey</a></li>
            <li><a href="#" className="hover:text-pink-400">Achievement</a></li>
            <li><a href="#" className="hover:text-pink-400">News</a></li>
            <li><a href="#" className="hover:text-pink-400">Gallery</a></li>
          </ul>
        </div>

        {/* Kontak & Sosmed */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-gray-300 text-sm">📧 rosemery@uny.ac.id</p>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="hover:text-pink-400"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-pink-400"><FaYoutube size={20} /></a>
            <a href="#" className="hover:text-pink-400"><FaGithub size={20} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © 2025 ROSEMERY Team. All rights reserved.
      </div>
    </footer>
  );
}
