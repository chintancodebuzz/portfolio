// src/components/Footer.js
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) obs.observe(footerRef.current);
    return () => {
      if (footerRef.current) obs.unobserve(footerRef.current);
    };
  }, []);

  const scrollToSection = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      ref={footerRef}
      className={`bg-[#1a1a1a] text-white pt-10 sm:pt-12 md:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 sm:mb-12 md:mb-16 gap-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Let’s Connect There
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-cyan-500 cursor-pointer hover:bg-cyan-400 text-white font-medium text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-2 sm:py-3 rounded-full flex items-center gap-2 shadow-lg transition-all duration-300"
          >
            Hire Me
            <motion.img
              src="/src/assets/images/hero/cross_arrow.svg"
              alt="arrow"
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-7 h-7"
            />
          </motion.button>
        </motion.div>

        <hr className="border-gray-800 my-10 sm:my-12 md:my-16" />

        {/* Grid Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8"
        >
          {/* Left: Logo + About */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 text-center sm:text-left">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:opacity-80 transition-opacity inline-block"
            >
              <img
                src="/src/assets/images/icons/logo/nav_logo.svg"
                alt="Logo"
                className="h-10 sm:h-12 md:h-14 w-auto mx-auto sm:mx-0"
              />
            </button>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 max-w-xl mx-auto sm:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              congue interdum ligula a dignissim.
            </p>
            <div className="flex justify-center sm:justify-start gap-3 sm:gap-4">
              {["facebook", "youtube", "whatsapp", "instagram", "twitter"].map(
                (icon) => (
                  <motion.img
                    key={icon}
                    src={`/src/assets/images/footer/${icon}.svg`}
                    alt={icon}
                    whileHover={{ scale: 1.2 }}
                    className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer"
                  />
                )
              )}
            </div>
          </div>

          {/* Center: Navigation + Contact */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6 sm:gap-8 md:gap-10 mt-10 lg:mt-0 text-center sm:text-left">
            <div>
              <h4 className="text-cyan-400 font-bold text-sm sm:text-base tracking-widest mb-3 sm:mb-4">
                Navigation
              </h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base cursor-pointer">
                {["Home", "About Us", "Service", "Resume", "Project"].map(
                  (item) => (
                    <li
                      key={item}
                      className="hover:text-white transition duration-300"
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-cyan-400 font-bold text-sm sm:text-base tracking-widest mb-3 sm:mb-4">
                Contact
              </h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
                <li className="hover:text-white transition">+91 7738443636</li>
                <li className="hover:text-white transition">
                  Jaycrea36@gmail.com
                </li>
                <li className="hover:text-white transition">
                  Portfolio-jcrea.com
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Newsletter */}
          <div className="lg:col-span-3 mt-10 lg:mt-0 text-center sm:text-left">
            <span className="text-cyan-400 font-semibold text-sm sm:text-base block mb-3 sm:mb-4">
              Get the latest information
            </span>
            <div className="flex flex-col sm:flex-row w-full justify-center sm:justify-start">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 sm:px-5 py-2.5 sm:py-3 bg-white text-black rounded-xl sm:rounded-r-none outline-none focus:ring-2 focus:ring-cyan-500 transition"
              />
              <button className="bg-cyan-500 cursor-pointer hover:bg-cyan-400 text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-l-none flex items-center justify-center transition-all duration-300 hover:scale-105 mt-3 sm:mt-0">
                <img
                  src="/src/assets/images/footer/send.svg"
                  alt="send"
                  className="h-5 w-5 sm:h-6 sm:w-6 "
                />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm md:text-base pt-6 sm:pt-8 mt-10 sm:mt-12 md:mt-16 border-t border-gray-800 text-gray-400 text-center sm:text-left"
        >
          <p>© 2025 Tarun. All Rights Reserved.</p>
          <div className="flex gap-3 mt-3 sm:mt-0">
            <a href="#" className="hover:text-white transition">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
