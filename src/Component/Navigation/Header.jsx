// Header.jsx

import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-gray-900 tracking-wide">
              <span className="text-indigo-600">Kreative</span> Multimedia
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 transition duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a 
              href="#contact"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
            >
              Start Your Project
            </a>
          </div>
          
          {/* Mobile Hamburger */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <HiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <HiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute inset-x-0 top-20 md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-base font-medium rounded-md px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition duration-150"
              onClick={() => setIsOpen(false)} 
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="block w-full text-center bg-indigo-600 text-white mt-4 px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Start Your Project
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
