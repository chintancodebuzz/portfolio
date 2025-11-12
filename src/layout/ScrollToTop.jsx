// components/ScrollToTop.js
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Fixed scroll progress calculation
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const progress = (scrollTop / documentHeight) * 100;

      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Fixed SVG circle calculations
  const radius = 22; // Slightly smaller radius to prevent cutting
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (scrollProgress / 140) * circumference;

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 
  bg-gradient-to-br from-[#4FC3F7] to-[#0288D1] 
  hover:from-[#03A9F4] hover:to-[#0277BD]
  text-white rounded-full flex items-center justify-center 
  shadow-lg hover:shadow-xl transition-all duration-300 ease-out 
  transform hover:-translate-y-1 hover:scale-105 active:scale-95 
  z-50 group"
          aria-label="Scroll to top"
        >
          {/* Fixed Progress Circle */}
          <svg
            className="absolute inset-0 w-full h-full transform -rotate-90"
            viewBox="0 0 52 52" // Adjusted viewBox
          >
            {/* Background circle */}
            <circle
              cx="26"
              cy="26"
              r={radius}
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="2"
              fill="none"
            />
            {/* Progress circle - FIXED */}
            <circle
              cx="26"
              cy="26"
              r={radius}
              stroke="white"
              strokeWidth="2"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-150 ease-out"
              pathLength="100"
            />
          </svg>

          {/* Arrow Icon */}
          <FaArrowUp className="relative text-white text-sm transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
