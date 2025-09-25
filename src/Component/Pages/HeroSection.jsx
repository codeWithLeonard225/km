import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src="/videos/bg.mp4" // 👈 place your video file in public/videos
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center text-center">
        <motion.div 
          className="py-12 md:py-24 max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            We are the <span className="text-blue-900">Catalyst</span> to Your Growth
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-300 font-light mb-10"
          >
            We add value to your client brand and bring a lasting transformation to their business.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center sm:flex-row sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a
              href="/contact"
              className="px-6 py-2 text-base font-semibold text-white bg-[#0f2133] rounded-full 
                         hover:bg-indigo-700 transition duration-300 transform hover:scale-105 shadow-xl sm:px-8 sm:py-3 sm:text-lg"
            >
              Start a Project Today
            </a>

            <a
              href="/portfolio"
              className="px-6 py-2 text-base font-semibold text-indigo-200 border-2 border-indigo-200 rounded-full 
                         hover:bg-indigo-600 hover:border-indigo-600 hover:text-white transition duration-300 sm:px-8 sm:py-3 sm:text-lg"
            >
              View Our Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
