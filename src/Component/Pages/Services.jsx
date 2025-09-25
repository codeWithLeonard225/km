import React from 'react';
import { motion } from 'framer-motion';
// Icons for the four main pillars
import { FaVideo, FaPaintBrush, FaBullhorn, FaCalendarAlt } from 'react-icons/fa';

// --- Reusable Data Organized by Pillars (Based on your full list) ---
const servicesData = [
  { 
    icon: FaPaintBrush, 
    title: "Branding & Graphics Design", 
    description: "Creating compelling brand identities, stunning visual assets, and high-quality printed materials.",
    details: ["Branding", "Professional Graphics Design", "Professional Printing"],
  },
  { 
    icon: FaVideo, 
    title: "Content Production", 
    description: "Full-service production for captivating commercials, long-form documentaries, and high-fidelity audio recordings.",
    details: ["Content Production", "TV Commercials", "Audio Recording", "Documentary"],
  },
  { 
    icon: FaBullhorn, 
    title: "Digital & Media Strategy", 
    description: "Executing data-driven digital campaigns and providing expert media consultation to maximize market impact and ROI.",
    details: ["Digital Marketing", "Media Consultancy"],
  },
  { 
    icon: FaCalendarAlt, 
    title: "Events & Talent Management", 
    description: "Comprehensive planning and professional coverage for events, plus strategic management for talent and shows.",
    details: ["Event Planning", "Event Coverage", "Show Biz", "Talent Management"],
  },
];

// --- Reusable Framer Motion Variants ---
const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
// ------------------------------------------------------------------------

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Animated) */}
        <motion.div 
            className="text-center mb-16"
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
        >
          <p className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Solutions</p>
          <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold text-gray-900">
            Full-Spectrum Multimedia Services
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            We cover every aspect of your media needs, from initial concept and branding to final production and market delivery.
          </p>
        </motion.div>

        {/* Services Grid (Animated & No Images) */}
        <motion.div 
          className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesData.map((service, index) => (
            <motion.div 
              key={index}
              variants={fadeInVariants} 
              // Card styling is now clean and focuses on elevation (shadows/hover)
              className="p-8 bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 flex flex-col h-full border-t-4 border-indigo-600"
            >
              <service.icon className="h-10 w-10 text-indigo-600 mb-4" />
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              
              <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
              
              {/* Detailed List */}
              <ul className="list-none space-y-1 text-sm text-gray-700 mt-auto pt-3 border-t border-gray-200">
                <p className='font-semibold pt-2 pb-1'>Includes:</p>
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="h-4 w-4 text-indigo-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    {detail}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a href="#contact" className="mt-6 inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition duration-150">
                Get Started
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Supporting CTA (Animated) */}
        <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mt-16 text-center"
        >
             <p className="text-2xl text-gray-700 font-medium mb-6">
                Ready to transform your vision into reality?
             </p>
             <a 
                href="#contact"
                className="inline-block px-10 py-4 text-lg font-semibold text-white bg-indigo-600 rounded-full 
                           hover:bg-indigo-700 transition duration-300 transform hover:scale-105 shadow-2xl"
             >
                Schedule a Consultation
             </a>
        </motion.div>

      </div>
    </section>
  );
}