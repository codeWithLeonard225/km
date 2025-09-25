import React from "react";
import { motion } from "framer-motion";

// Dummy portfolio items (replace with real data/images)
const portfolioItems = [
  {
    title: "Brand Identity for Pizza",
    img: "/images/Pizza.jpg",
    category: "Branding",
  },
  {
    title: "Brand Identity for vita",
    img: "/images/vita.jpg",
    category: "Branding",
  },
  {
    title: "Photo Editing",
    img: "/images/GraphicsDesigh.jpg",
    category: "Graphics Desigh",
  },
  {
    title: "Church",
    img: "/images/Church.jpg",
    category: "Graphics Desigh",
  },
  {
    title: "Mango juice",
    img: "/images/juice.jpg",
    category: "Graphics Desigh",
  },
  {
    title: "Jack D – Comedy",
    img: "/images/JDC.jpg",
    category: "Entertainment",
  },
  {
    title: "Kontri Pot",
    img: "/images/pot.jpg",
    category: "Entertainment",
  },
  {
    title: "Jack D – Comedian ticket",
    img: "/images/ticket.jpg",
    category: "ticket Madiing",
  },
 
 
  {
    title: "Event Coverage – Hiking",
    img: "/images/loaf.jpg",
    category: "Hiking",
  },
  {
    title: "Corporate Documentary",
    img: "/images/Corporate.jpg",
    category: "Documentary",
  },

  {
    title: "TV Commercial – AKWA FILM",
    img: "/images/AKWA.jpg",
    category: "TV Commercial",
  },
 
  {
    title: "Food up",
    img: "/images/Food.jpg",
    category: "Marketing",
  },

  {
    title: "AMINISH",
    img: "/images/AMINISH.jpg",
    category: "Entertainment",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our Portfolio
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          A glimpse of how we transform ideas into impactful media solutions.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-xl shadow-lg "
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-96 object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-white text-xl font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-indigo-300">{item.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
