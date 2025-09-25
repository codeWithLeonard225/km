import React from 'react';
// Import motion and useInView hook
import { motion } from 'framer-motion'; 
import { FaLightbulb, FaHandshake, FaStar, FaGlobe } from 'react-icons/fa';

// Define core values for easy rendering
const coreValues = [
  { 
    icon: FaLightbulb, 
    title: "Unrivaled Creativity", 
    description: "We challenge the status quo to deliver fresh, impactful, and memorable brand experiences." 
  },
  { 
    icon: FaHandshake, 
    title: "Client Partnership", 
    description: "Your growth is our goal. We work as a unified extension of your team to achieve lasting results." 
  },
  { 
    icon: FaStar, 
    title: "Commitment to Excellence", 
    description: "From concept to final delivery, we maintain the highest standards in production and design quality." 
  },
  { 
    icon: FaGlobe, 
    title: "Future-Ready Vision", 
    description: "We are media consultants who anticipate market shifts to keep your brand ahead of the curve." 
  },
];

// Reusable Variants for Fade-In Up animation
const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

// Variants for Staggered Grid (Core Values)
const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each core value card
    },
  },
};

export default function About() {
  return (
    <div className="bg-gray-50 pt-16 pb-20">
      
      {/* === 1. Introduction Hero Section === */}
      {/* Use motion.div and whileInView for the main headline block */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} // Animates only once when 50% visible
      >
        <p className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Foundation</p>
        <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
          More Than Multimedia. We Are <span className="text-blue-900">Transformation.</span>
        </h1>
        <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
          For over a decade, Kreatives Multimedia has been the trusted catalyst for businesses seeking meaningful brand elevation and measurable growth.
        </p>
      </motion.div>

      {/* === 2. Our Story & Mission Section (Two-Column Layout) === */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white shadow-xl rounded-xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          
          {/* Left: Mission Text (Animated) */}
          <motion.div 
            className="mb-10 lg:mb-0"
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }} // Animates when 40% visible
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
              Our Mission: Adding Lasting Value
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We don't just produce content; we engineer growth. Our approach is holistic, ensuring every element—from a single graphic to a full TV commercial—is aligned to **add tangible value** to your brand equity and bottom line. We thrive on taking complex business challenges and translating them into **simple, powerful media solutions**.
            </p>
            {/* ... (List items) ... */}
            <ul className="mt-6 space-y-3 text-lg text-gray-700">
              <li className="flex items-start"><span className="flex-shrink-0 text-indigo-600 font-bold mr-2">✓</span><span>Bridging the gap between creative vision and business objectives.</span></li>
              <li className="flex items-start"><span className="flex-shrink-0 text-indigo-600 font-bold mr-2">✓</span><span>Driving measurable ROI across all media channels.</span></li>
              <li className="flex items-start"><span className="flex-shrink-0 text-indigo-600 font-bold mr-2">✓</span><span>Fostering long-term partnerships built on trust and results.</span></li>
            </ul>
          </motion.div>
          
          {/* Right: Inspirational Image/Video Placeholder (Animated) */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-xl shadow-2xl">
              <img
                className="w-full h-full object-cover"
                src="/images/km.jpg"
                alt="Professional creative meeting"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* === 3. Core Values Section (Staggered Grid Animation) === */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Section Title (Animated) */}
        <motion.div 
            className="text-center mb-12"
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            The Pillars of Our Success
          </h2>
          <p className="mt-3 text-xl text-gray-500">
            Our work is guided by four principles that ensure quality and integrity in every project.
          </p>
        </motion.div>
        
        {/* Grid Container (Staggered Animation) */}
        <motion.div 
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Animates when 20% visible
        >
          {coreValues.map((value, index) => (
            <motion.div 
              key={index} 
              variants={fadeInVariants} // Apply the fade-in animation to each item
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <value.icon className="h-10 w-10 text-[#0f2133] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-500">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* === 4. Final CTA Section (Animated) === */}
      <motion.div 
        className="bg-[#0f2133] py-16"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to See the Transformation?
          </h2>
          <p className="mt-4 text-xl text-indigo-200">
            Explore our best work or connect with our media consultancy team today.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a 
              href="#portfolio"
              className="px-8 py-3 text-lg font-semibold text-indigo-700 bg-white rounded-full hover:bg-gray-100 transition duration-300 shadow-xl"
            >
              View Portfolio
            </a>
            <a 
              href="#contact"
              className="px-8 py-3 text-lg font-semibold text-white border-2 border-indigo-300 rounded-full hover:bg-indigo-800 transition duration-300"
            >
              Consult with Us
            </a>
          </div>
        </div>
      </motion.div>
      
    </div>
  );
}