import React, { useEffect, useState } from "react";
import stars from "../assets/images/contact/stars.svg";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    });
    const section = document.getElementById("cross-scroll");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // 🔹 Text content with inline SVG images
  const textWithStars = (
    <>
      Research <img src={stars} alt="star" className="inline w-5 h-5 mx-2" />
      UX Design <img src={stars} alt="star" className="inline w-5 h-5 mx-2" />
      App Design <img src={stars} alt="star" className="inline w-5 h-5 mx-2" />
      Dashboard <img src={stars} alt="star" className="inline w-5 h-5 mx-2" />
      Wireframe <img src={stars} alt="star" className="inline w-5 h-5 mx-2" />
      User Research
      <img src={stars} alt="star" className="inline w-5 h-5 mx-2" />
      Research <img src={stars} alt="star" className="inline w-5 h-5 mx-2" />
      UX Design <img src={stars} alt="star" className="inline w-5 h-5 mx-2" />
      App Design <img src={stars} alt="star" className="inline w-5 h-5 mx-2" />
      Dashboard <img src={stars} alt="star" className="inline w-5 h-5 mx-2" />
      Wireframe <img src={stars} alt="star" className="inline w-5 h-5 mx-2" />
      User Research
      <img src={stars} alt="star" className="inline w-5 h-5 mx-2" />
      Research <img src={stars} alt="star" className="inline w-5 h-5 mx-2" />
      UX Design <img src={stars} alt="star" className="inline w-5 h-5 mx-2" />
      App Design <img src={stars} alt="star" className="inline w-5 h-5 mx-2" />
      Dashboard <img src={stars} alt="star" className="inline w-5 h-5 mx-2" />
      Wireframe <img src={stars} alt="star" className="inline w-5 h-5 mx-2" />
      User Research
      <img src={stars} alt="star" className="inline w-5 h-5 mx-2" />
    </>
  );

  return (
    <section
      id="contact"
      className={`py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 bg-white transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div>
        {/* 🔹 Scrolling Banner */}
        <div
          id="cross-scroll"
          className={`relative mb-10 sm:mb-12 md:mb-16 overflow-hidden transition-all duration-1000 delay-200 ease-out ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          {/* Background color */}
          <div className="absolute inset-0 bg-[#4FC3F7] rounded-2xl shadow-lg"></div>

          {/* Angled white banner */}
          <div className="relative h-[100px] sm:h-[120px] md:h-[140px] lg:h-[160px] overflow-hidden rounded-tl-2xl rounded-br-2xl">
            <div className="absolute top-10 left-[-5%] w-[110%] h-[40px] sm:h-[50px] md:h-[60px] lg:h-[70px] transform -skew-y-3 bg-white flex items-center">
              <div className="animate-scroll whitespace-nowrap text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl px-4 flex items-center gap-4">
                <span className="flex items-center gap-2">{textWithStars}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 Content Section */}
        <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
          {/* Title */}
          <div
            className={`text-center mb-8 sm:mb-10 md:mb-12 transition-all duration-1000 delay-300 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Have an Awesome Project Idea?
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#4FC3F7]">
              Let's Discuss
            </p>
          </div>

          {/* Email Form */}
          <div
            className={`max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 transition-all duration-1000 delay-500 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center bg-white p-3 sm:p-4 rounded-full shadow-lg border border-gray-200">
              <div className="flex items-center flex-1 gap-2 sm:gap-3">
                <img
                  src="/src/assets/images/contact/email.svg"
                  alt="email icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-12 object-contain"
                />
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full outline-none text-gray-700 placeholder-gray-400 text-sm sm:text-base md:text-lg"
                />
              </div>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-[#4FC3F7] text-white font-medium rounded-full shadow-md cursor-pointer hover:shadow-lg transition-all duration-300">
                Send
              </button>
            </div>
          </div>

          {/* Trust Badges */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 md:gap-10 lg:gap-12 text-xs sm:text-sm md:text-base text-gray-600 transition-all duration-1000 delay-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {[
              {
                icon: "star",
                text: (
                  <>
                    <strong className="text-gray-900">4.9/5</strong> Average
                    Ratings
                  </>
                ),
              },
              {
                icon: "award",
                text: (
                  <>
                    <strong className="text-gray-900">25+</strong> Winning
                    Awards
                  </>
                ),
              },
              {
                icon: "shield",
                text: (
                  <>
                    <strong className="text-gray-900">Certified</strong> Product
                    Designer
                  </>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 sm:gap-3 hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={`/src/assets/images/contact/${item.icon}.svg`}
                  alt={item.icon}
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔹 Animation CSS */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: inline-flex;
          align-items: center;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Contact;
