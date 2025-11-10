import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center text-center pt-28 sm:pt-36 px-8 overflow-hidden bg-white"
    >
      {/* Hello Badge */}
      <div className="inline-flex items-center bg-white border border-gray-300 rounded-full px-4 sm:px-5 py-2.5 sm:py-3 shadow-lg mb-4 sm:mb-6 relative">
        <span className="text-gray-700 font-bold text-sm sm:text-base">
          Hello!
        </span>

        {/* Decorative image */}
        <img
          src="/src/assets/images/hero/sharps_lines.svg"
          alt="burst"
          className="absolute -top-5 sm:-top-6 -right-5 sm:-right-6 w-8 h-8 sm:w-10 sm:h-10"
        />
      </div>

      {/* Main Heading */}
      <div
        className={`mt-4 sm:mt-6 transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
          I'm <span className="text-[#4FC3F7]">Tarun Vaghasiyа,</span>
          <br />
          <span className="text-gray-900">UI / UX Designer</span>
        </h1>
      </div>

      {/* Character with Ellipse Background */}
      <div
        className={`relative transition-all duration-1000 delay-400 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <div className="relative flex justify-center items-center">
          {/* Blue Ellipse Background */}
          <img
            src="/src/assets/images/hero/ellipse.svg"
            alt="Background Ellipse"
            className="absolute -z-10 w-[900px] sm:w-[900px] md:w-[900px] h-[370px] object-contain opacity-100"
          />

          {/* Character Image */}
          <img
            src="/src/assets/images/hero/men's.svg"
            alt="Designer Avatar"
            className="w-[1050px] sm:w-[1050px] h-[480px] object-contain drop-shadow-2xl relative z-10 bottom-14"
          />

          {/* =================== TOGGLE BUTTONS – ON TOP OF CHARACTER =================== */}
          <div className="absolute bottom-32 z-10 left-1/2 transform -translate-x-1/2 translate-y-10 flex bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30 shadow-xl">
            {/* Portfolio Button (Active) */}
            <button className="flex items-center justify-center px-7 gap-2 py-3 bg-[#4FC3F7] text-white font-medium text-base rounded-full shadow-lg transition-all hover:scale-95">
              <HashLink
                to="/#projects"
                smooth
                offset={-80}
                className="flex items-center gap-2"
              >
                Portfolio
                <img
                  src="/src/assets/images/hero/cross_arrow.svg"
                  alt="arrow"
                  className="w-7 h-7"
                />
              </HashLink>
            </button>

            {/* Hire me Button (Inactive) */}
            <button className="px-9 py-3 text-white font-medium text-base rounded-full transition-all">
              Hire me
            </button>
          </div>
        </div>
      </div>

      {/* =================== QUOTE (LEFT) – WITH BIG SHARP LINES ABOVE =================== */}
      <div
        className={`absolute left-50 sm:left-30 top-[32rem] md:top-[32rem] max-w-sm text-left transition-all duration-1000 delay-600 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        }`}
      >
        {/* Big Sharp Lines – ABOVE QUOTE */}
        <img
          src="/src/assets/images/hero/sharps_lines_big.svg"
          alt="decorative lines"
          className="absolute -top-24 -right-2 w-20 h-20 sm:w-24 sm:h-24 md:w-24 md:h-24 opacity-80 pointer-events-none"
        />

        <img
          src="/src/assets/images/hero/quote-up.svg"
          alt="quote"
          className="w-10 h-10 text-gray-400 mb-5"
        />

        <p
          className="font-['Lufga'] font-medium text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed sm:leading-relaxed md:leading-loose text-gray-600 "
          style={{ letterSpacing: "-0.015em" }}
        >
          Jenny's Exceptional product design ensure our website's success.
          Highly Recommended
        </p>
      </div>

      {/* =================== EXPERIENCE (RIGHT) – UNCHANGED =================== */}
      <div
        className={`absolute right-30 sm:right-30 top-[28rem] md:top-[28rem] p-6 text-left transition-all duration-1000 delay-800 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`}
      >
        <div className="flex mb-3 justify-end">
          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              icon="heroicons:star-20-solid"
              className="text-[#0A84FF] w-9 h-9"
            />
          ))}
        </div>
        <h3 className="text-[48px] font-bold text-gray-900">10 Years</h3>
        <p className="text-gray-600 text-[18px] flex justify-end">Experience</p>
      </div>
    </section>
  );
}
