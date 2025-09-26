"use client";
import { motion } from "framer-motion";

export default function RoleSection() {
  const roles = [
    {
      title: "Hardware Programming",
      desc: "Programs the robot’s hardware components, especially servo control. The division also ensures the robot’s movements are synchronized with the rhythm of the music.",
      img: "/role/PH.png",
    },
    {
      title: "Manager",
      desc: "Division for coordinating the entire team including managing planning, supervision, budget plan, and evaluation. Also ensures smooth communication and designs competition strategies.",
      img: "/role/Manager.png",
    },
    {
      title: "Electronics",
      desc: "Focuses on the robot’s electrical system and wiring. This division ensures proper assembly and wiring connections for stable power distribution and reliable performance.",
      img: "/role/Elektronik.png",
    },
    {
      title: "Motion Programming",
      desc: "Creates and adjusts hand and foot motions for the robot’s choreography, ensuring smooth transitions and expressive dance performances.",
      img: "/role/PM.png",
    },
    {
      title: "Mechanic",
      desc: "Designs and builds the robot’s physical structure, including the frame and drive system. Also in charge of constructing and maintaining the competition arena.",
      img: "/role/Mekanik.png",
    },
    {
      title: "Artistic",
      desc: "Handles the robot’s visual design, costumes, and ornaments to reflect cultural values and create an appealing artistic appearance.",
      img: "/role/Artistik.png",
    },
  ];

  return (
    <section
      id="role"
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('BG1.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 via-white/70 to-white"></div>
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Judul Section */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Roles
        </motion.h2>

        {/* Grid Roles */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 flex flex-row md:flex-col md:text-center items-center hover:shadow-xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <img
                src={role.img}
                alt={role.title}
                className="w-16 h-16 object-contain mb-0 md:mb-4 md:mx-auto"
              />

              {/* Text */}
              <div className="ml-4 md:ml-0">
                <h3 className="text-xl font-semibold mb-2 text-gray-700">
                  {role.title}
                </h3>
                <p className="text-gray-600">{role.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
