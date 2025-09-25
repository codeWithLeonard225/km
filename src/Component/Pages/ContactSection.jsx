import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// --- Reusable Framer Motion Variants ---
const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
// ------------------------------------------------------------------------

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend service.
    // For now, let's just log it.
    console.log('Form data submitted:', formData);
    // You cannot use alert() in this collaborative environment.
    // Instead, you'd use a custom modal or a simple message box.
    // For now, the console log indicates success.
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
            className="text-center mb-16"
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
        >
          <p className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Get In Touch</p>
          <h2 className="mt-2 text-4xl sm:text-5xl font-extrabold text-gray-900">
            Let's Build Something Together
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Ready to start a new project? Reach out to us through the form below, and we’ll respond as soon as possible.
          </p>
        </motion.div>

        {/* Contact Form and Details Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Contact Details Column */}
          <motion.div variants={fadeInVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
            <p className="text-gray-600">
              Feel free to call or email us directly. We are always ready to discuss your next project.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <FaPhone className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <a href="tel:+23278094062" className="text-gray-600 hover:text-indigo-600 transition-colors">+232 78 094062</a>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <FaEnvelope className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <a href="mailto:thekreatives232@gmail.com" className="text-gray-600 hover:text-indigo-600 transition-colors">thekreatives232@gmail.com</a>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <FaMapMarkerAlt className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-600">Wilkinson Road, Church Yard</p>
                </div>
              </li>
            </ul>

            {/* Embedded Map */}
            <div className="pt-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Location</h4>
              <div className="relative w-full rounded-xl overflow-hidden shadow-xl" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
                <iframe
                  title="Kreatives Multimedia Location"
                  className="absolute inset-0 w-full h-full rounded-xl"
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15878.077209705598!2d-13.2359405!3d8.4687556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf045d625d911b37%3A0x6b772e0d86926f0!2sWilkinson%20Rd%2C%20Freetown%2C%20Sierra%20Leone!5e0!3m2!1sen!2sus!4v1695669485121!5m2!1sen!2sus"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div variants={fadeInVariants}>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition duration-300 transform hover:scale-105 shadow-md"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
