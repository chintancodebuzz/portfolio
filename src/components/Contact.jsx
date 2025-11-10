import React, { useEffect, useState } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    });
    const el = document.getElementById("contact");
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);

  return (
    <section
      id="contact"
      className={`py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div>
        {/* Banner */}
        <div
          className={`relative mb-10 sm:mb-12 md:mb-16 overflow-hidden transition-all duration-1000 delay-200 ease-out ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-[#4FC3F7] transform -skew-y-3 rounded-2xl shadow-lg"></div>
          <div className="relative text-center bg-[#4FC3F7] rounded-br-2xl rounded-tl-2xl h-[100px] sm:h-[120px] md:h-[140px] lg:h-[160px]">
            <img
              src="/src/assets/images/contact/title_img.svg"
              alt="decorative lines"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
          {/* Title */}
          <div
            className={`text-center mb-8 sm:mb-10 md:mb-12 transition-all duration-1000 delay-300 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
              <button className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-[#4FC3F7] text-white font-medium rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300">
                Send
              </button>
            </div>
          </div>

          {/* Trust Badges */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 md:gap-10 lg:gap-12 text-xs sm:text-sm md:text-base text-gray-600 transition-all duration-1000 delay-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
    </section>
  );
};

export default Contact;
