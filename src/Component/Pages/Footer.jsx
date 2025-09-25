import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

// Define the navigation links for the SPA
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

// Define the service categories (Pillars from ServicesSection)
const servicePillars = [
  { name: 'Branding & Design', href: '#services' },
  { name: 'Content Production', href: '#services' },
  { name: 'Digital Strategy', href: '#services' },
  { name: 'Events & Talent', href: '#services' },
];

// Re-use the smooth scroll logic from the Header for internal links
const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset by header height (80px)
        behavior: 'smooth'
      });
    }
};


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* === Main Footer Grid === */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 border-b border-gray-700 pb-10">
          
          {/* Column 1: Brand & Social */}
          <div className="col-span-2 lg:col-span-2 space-y-4 pr-10">
            <h3 className="text-3xl font-bold text-indigo-400">
              Kreatives Multimedia
            </h3>
            <p className="text-gray-400 text-sm">
              The catalyst to your growth. We add lasting value to your brand through expert media and creative solutions.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"><FaFacebookF className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"><FaTwitter className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"><FaLinkedinIn className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"><FaInstagram className="h-6 w-6" /></a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 uppercase">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleLinkClick(e, link.href)} 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Expertise */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 uppercase">Key Expertise</h4>
            <ul className="space-y-3 text-sm">
              {servicePillars.map((pillar) => (
                <li key={pillar.name}>
                  <a 
                    href={pillar.href} 
                    onClick={(e) => handleLinkClick(e, pillar.href)} 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {pillar.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Contact/Legal (Mobile: Col 2, Desktop: Col 4/5) */}
<div className="col-span-2 md:col-span-1">
  <h4 className="text-lg font-semibold text-white mb-4 uppercase">Contact</h4>
  
  <p className="text-gray-400 text-sm">
    Email: <a href="mailto:thekreatives232@gmail.com" className="hover:text-white">thekreatives232@gmail.com</a>
  </p>
  
  <p className="text-gray-400 text-sm pt-4">
    Address: <span className="hover:text-white">Wilkinson Road, Church Yard</span>
  </p>
  
  <p className="text-gray-400 text-sm pt-4">
    Phone: <a href="tel:+23278094062" className="hover:text-white">+232 78 094062</a>
  </p>
  
  <p className="text-gray-400 text-sm pt-4">
    <a href="#" className="hover:text-white">Privacy Policy</a>
  </p>
  
  <p className="text-gray-400 text-sm">
    <a href="#" className="hover:text-white">Terms of Use</a>
  </p>
</div>

        </div>

        {/* === Bottom Bar (Copyright & CTA) === */}
        <div className="mt-8 flex flex-col md:flex-row md:justify-between items-center text-sm">
          
          {/* Copyright */}
          <p className="text-gray-400 order-2 md:order-1 mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} Kreatives Multimedia. All rights reserved.
          </p>

          {/* Final CTA Button */}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="order-1 md:order-2 px-6 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-full 
                       hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
          >
            Start Your Project Now
          </a>
        </div>

      </div>
    </footer>
  );
}