import React, { useEffect, useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    });
    const el = document.querySelector("footer");
    if (el) obs.observe(el);
    return () => el && obs.unobserve(el);
  }, []);

  const scrollToSection = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      className={`bg-[#1a1a1a] text-white pt-10 sm:pt-12 md:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
        {/* Top */}
        <div
          className={`flex flex-col md:flex-row justify-between items-start md:items-center mb-10 sm:mb-12 md:mb-16 gap-6 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight animate-fadeIn">
            Let’s Connect There
          </h2>
          <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-medium text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-2 sm:py-3 rounded-full flex items-center gap-2 shadow-lg transition-all duration-300 animate-pulse">
            Hire Me
          </button>
        </div>

        <hr className="border-gray-800 my-10 sm:my-12 md:my-16" />

        {/* Grid */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Logo */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/src/assets/images/icons/logo/nav_logo.svg"
                alt="Logo"
                className="h-10 sm:h-12 md:h-14 w-auto"
              />
            </button>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              congue interdum ligula a dignissim.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {["facebook", "youtube", "whatsapp", "instagram", "twitter"].map(
                (icon) => (
                  <img
                    key={icon}
                    src={`/src/assets/images/footer/${icon}.svg`}
                    alt={icon}
                    className="h-5 w-5 sm:h-6 sm:w-6 hover:scale-110 transition-transform duration-300"
                  />
                )
              )}
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6 sm:gap-8 md:gap-10 mt-10 lg:mt-0">
            <div>
              <h4 className="text-cyan-400 font-bold text-sm sm:text-base tracking-widest mb-3 sm:mb-4">
                Navigation
              </h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-sm sm:text-base">
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

          {/* Newsletter */}
          <div className="lg:col-span-3 mt-10 lg:mt-0">
            <span className="text-cyan-400 font-semibold text-sm sm:text-base block mb-3 sm:mb-4">
              Get the latest information
            </span>
            <div className="flex flex-col sm:flex-row w-full">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 sm:px-5 py-2.5 sm:py-3 bg-white text-black rounded-xl sm:rounded-r-none outline-none focus:ring-2 focus:ring-cyan-500 transition"
              />
              <button className="bg-cyan-500 hover:bg-cyan-400 text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-l-none flex items-center justify-center transition-all duration-300 hover:scale-105">
                <img
                  src="/src/assets/images/footer/send.svg"
                  alt="send"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm md:text-base pt-6 sm:pt-8 mt-10 sm:mt-12 md:mt-16 border-t border-gray-800 text-gray-400">
          <p>© 2025 Tarun. All Rights Reserved.</p>
          <div className="flex gap-3 mt-3 sm:mt-0">
            <a href="#" className="hover:text-white transition">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
