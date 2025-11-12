import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);

    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Keyboard arrow control animation
    const handleKeyDown = (e) => {
      const move = 20;
      if (e.key === "ArrowUp")
        controls.start({ y: "-=20", transition: { duration: 0.3 } });
      if (e.key === "ArrowDown")
        controls.start({ y: "+=20", transition: { duration: 0.3 } });
      if (e.key === "ArrowLeft")
        controls.start({ x: "-=20", transition: { duration: 0.3 } });
      if (e.key === "ArrowRight")
        controls.start({ x: "+=20", transition: { duration: 0.3 } });
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", checkMobile);
    };
  }, [controls]);

  // Mobile Design Component
  const MobileHero = () => (
    <section className="relative flex flex-col items-center justify-center text-center pt-26 px-6 bg-white min-h-screen">
      {/* Hello Badge - Centered */}
      <div className="inline-flex items-center bg-white border border-gray-300 rounded-full px-5 py-3 shadow-lg mb-6 relative">
        <span className="text-gray-700 font-bold text-base">Hello!</span>
        <img
          src="/src/assets/images/hero/sharps_lines.svg"
          alt="burst"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute -top-5 -right-5 w-10 h-10"
        />
      </div>

      {/* Main Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold leading-tight text-gray-900">
          I'm{" "}
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="text-[#4FC3F7] bg-gradient-to-r bg-[length:200%_200%] bg-clip-text"
          >
            Tarun Vaghasiya,
          </motion.span>
          <br />
          <span className="text-gray-900 transition-colors duration-300">
            UI / UX Designer
          </span>
        </h1>
      </motion.div>

      {/* Experience Section - Below heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8 p-6 bg-gray-50 rounded-2xl shadow-sm w-full max-w-sm"
      >
        <div className="flex justify-center mb-3">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
              transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
            >
              <Icon
                icon="heroicons:star-20-solid"
                className="text-[#4FC3F7] w-7 h-7"
              />
            </motion.div>
          ))}
        </div>
        <h3 className="text-3xl font-bold text-gray-900">10 Years</h3>
        <p className="text-gray-600 text-lg">Experience</p>
      </motion.div>

      {/* Character Section - Simplified */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative mb-8"
      >
        <div className="relative flex justify-center items-center">
          {/* Floating Ellipse */}
          <motion.img
            src="/src/assets/images/hero/ellipse.svg"
            alt="Background Ellipse"
            className="absolute -z-10 w-80 h-40 object-contain opacity-80"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating Character */}
          <motion.img
            src="/src/assets/images/hero/men's.svg"
            alt="Designer Avatar"
            className="w-72 h-64 object-contain drop-shadow-xl relative z-10"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Quote Section - Below character */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mb-8 max-w-sm text-start"
      >
        <div className="flex justify-center mb-4">
          <img
            src="/src/assets/images/hero/quote-up.svg"
            alt="quote"
            className="w-8 h-8 text-gray-400"
          />
        </div>
        <p className="font-medium text-base leading-relaxed text-gray-600 px-4">
          Jenny's Exceptional product design ensure our website's success.
          Highly Recommended
        </p>
      </motion.div>

      {/* Buttons - Fixed at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 w-full max-w-sm mt-4"
      >
        <HashLink smooth to="#projects" className="flex-1">
          <button className="flex items-center justify-center w-full px-6 gap-2 py-4 bg-[#4FC3F7] text-white font-medium text-base rounded-full shadow-lg transition-all hover:scale-95 cursor-pointer">
            Portfolio
            <motion.img
              src="/src/assets/images/hero/cross_arrow.svg"
              alt="arrow"
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-6 h-6"
            />
          </button>
        </HashLink>

        <HashLink smooth to="#contact" className="flex-1">
          <button className="w-full px-6 py-4 bg-white border border-gray-300 text-gray-700 font-medium text-base rounded-full shadow-lg transition-all duration-300 hover:bg-gray-50 hover:scale-95 cursor-pointer">
            Hire me
          </button>
        </HashLink>
      </motion.div>
    </section>
  );

  // Desktop Design Component - Without mouse effects
  const DesktopHero = () => (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center pt-28 sm:pt-36 px-8 overflow-hidden bg-white"
    >
      {/* =================== HELLO BADGE =================== */}
      <div className="inline-flex items-center bg-white border border-gray-300 rounded-full px-4 sm:px-5 py-2.5 sm:py-3 shadow-lg mb-4 sm:mb-6 relative">
        <span className="text-gray-700 font-bold text-sm sm:text-base">
          Hello!
        </span>

        <img
          src="/src/assets/images/hero/sharps_lines.svg"
          alt="burst"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="absolute -top-5 sm:-top-6 -right-5 sm:-right-6 w-8 h-8 sm:w-10 sm:h-10"
        />
      </div>

      {/* =================== MAIN HEADING =================== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-4 sm:mt-6"
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
          I'm{" "}
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="text-[#4FC3F7] bg-gradient-to-r bg-[length:200%_200%] bg-clip-text"
          >
            Tarun Vaghasiya,
          </motion.span>
          <br />
          <span className="text-gray-900 transition-colors duration-300 cursor-default">
            UI / UX Designer
          </span>
        </h1>
      </motion.div>

      {/* =================== CHARACTER SECTION =================== */}
      <motion.div
        animate={controls}
        className={`relative transition-all duration-1000 delay-400 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <div className="relative flex justify-center items-center">
          {/* Floating Ellipse */}
          <motion.img
            src="/src/assets/images/hero/ellipse.svg"
            alt="Background Ellipse"
            className="absolute -z-10 w-[900px] sm:w-[900px] md:w-[900px] h-[390px] object-contain opacity-100"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating Character */}
          <motion.img
            src="/src/assets/images/hero/men's.svg"
            alt="Designer Avatar"
            className="w-[1050px] sm:w-[1050px] h-[480px] object-contain drop-shadow-2xl relative z-10 bottom-12 cursor-pointer"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          />

          {/* Buttons */}
          <div className="absolute bottom-32 z-10 left-1/2 transform -translate-x-1/2 translate-y-10 flex bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30 shadow-xl">
            {/* Portfolio Button */}
            <HashLink smooth to="#projects">
              <button className="flex items-center justify-center px-7 gap-2 py-3 bg-[#4FC3F7] text-white font-medium text-base rounded-full shadow-lg transition-all hover:scale-95 cursor-pointer">
                Portfolio
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
              </button>
            </HashLink>

            {/* Hire Me Button */}
            <HashLink smooth to="#contact">
              <button className="px-9 py-3 text-white font-medium text-base rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105 cursor-pointer">
                Hire me
              </button>
            </HashLink>
          </div>
        </div>
      </motion.div>

      {/* =================== QUOTE SECTION =================== */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute left-50 sm:left-30 top-[32rem] md:top-[32rem] max-w-sm text-left hidden lg:block"
      >
        <img
          src="/src/assets/images/hero/sharps_lines_big.svg"
          alt="decorative lines"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="relative -top-24 -right-2 w-20 h-20 sm:w-24 sm:h-24 md:w-24 md:h-24 opacity-80 pointer-events-none"
        />

        <img
          src="/src/assets/images/hero/quote-up.svg"
          alt="quote"
          className="w-10 h-10 text-gray-400 mb-5"
        />
        <p
          className="font-['Lufga'] font-medium text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed sm:leading-relaxed md:leading-loose text-gray-600"
          style={{ letterSpacing: "-0.015em" }}
        >
          Jenny's Exceptional product design ensure our website's success.
          Highly Recommended
        </p>
      </motion.div>

      {/* =================== EXPERIENCE SECTION =================== */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute right-30 sm:right-30 top-[28rem] md:top-[28rem] p-6 text-left hidden lg:block"
      >
        <div className="flex mb-3 justify-end">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
              transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
            >
              <Icon
                icon="heroicons:star-20-solid"
                className="text-[#4FC3F7] w-9 h-9"
              />
            </motion.div>
          ))}
        </div>
        <h3 className="text-[48px] font-bold text-gray-900">10 Years</h3>
        <p className="text-gray-600 text-[18px] flex justify-end">Experience</p>
      </motion.div>
    </section>
  );

  // Render appropriate component based on screen size
  return isMobile ? <MobileHero /> : <DesktopHero />;
}
