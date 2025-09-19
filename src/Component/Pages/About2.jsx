import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative bg-gray-50 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="About Kreative Multimedia"
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
          />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            About <span className="text-indigo-600">Kreative Multimedia</span>
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            We add value to our clients’ brands and bring lasting transformation 
            to their businesses. At <span className="font-semibold">Kreative Multimedia</span>, 
            we act as a catalyst to your growth by combining creativity, strategy, 
            and technology.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Our team of professionals specializes in branding, digital marketing, 
            content production, and event management — delivering unique solutions 
            that elevate your brand in today’s competitive marketplace.
          </p>

          <a
            href="/services"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold
                       hover:bg-indigo-700 transition duration-300"
          >
            Explore Our Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
