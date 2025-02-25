"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import style from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" },
  ];

  if (!isClient) return null; // Render nothing on the server

  return (
    <header className="bg-black text-white p-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">GlamourTress</div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <motion.div
            className="w-6 h-6 relative flex flex-col justify-center items-center"
            animate={isMenuOpen ? "open" : "closed"}
          >
            <motion.span
              className="w-full h-0.5 bg-white absolute"
              variants={{
                closed: { rotate: 0, y: -5 },
                open: { rotate: 45, y: 0 },
              }}
            />
            <motion.span
              className="w-full h-0.5 bg-white absolute"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
            />
            <motion.span
              className="w-full h-0.5 bg-white absolute"
              variants={{
                closed: { rotate: 0, y: 5 },
                open: { rotate: -45, y: 0 },
              }}
            />
          </motion.div>
        </button>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex space-x-8">
          {navLinks.map((link, index) => (
            <li key={index}    className={style.navLinks}>
              <a
                href={link.href}
                className={`hover:text-gray-400 transition-colors duration-300.${style.navLinks}`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Nav Links (Animated) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mt-4 space-y-4"
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="block hover:text-gray-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;