import { useEffect, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    const el = document.getElementById("about");
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);

  return (
    <section
      id="about"
      className="relative overflow-hidden rounded-[50px] -top-14 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24"
      style={{
        backgroundImage: `url('/src/assets/images/about/about_bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 p-4 sm:p-6 md:p-10 lg:p-16 xl:p-20 2xl:p-24">
        {/* Section Title */}
        <div
          className={`mb-10 sm:mb-14 md:mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 flex items-center gap-3">
            <span className="text-[#4FC3F7]">About</span>
            <span>Us</span>
          </h2>
          <p className="inline-flex items-center gap-2 bg-[#09E37D29] text-green-400 text-xs sm:text-sm font-medium px-3 py-1 rounded-2xl mt-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Available For Work
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          {/* Left */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Hello! I'm{" "}
                <span className="text-[#4FC3F7]">Tarun Vaghasiya</span>
                <span className="text-2xl ml-2 animate-bounce">👋</span>
              </h3>
              <p className="text-gray-400 text-base sm:text-lg font-semibold mb-4">
                UX/UI Designer & Product Designer{" "}
                <img
                  src="/src/assets/images/about/star.svg"
                  alt="Designer Icon"
                  className="w-5 h-5 inline-block ml-1 animate-spin-slow"
                />
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed text-base sm:text-lg md:text-[18px] lg:text-[20px]">
              I'm Creative Director and UI/UX Designer from Sydney, Australia,
              working in web development and print media...
            </p>

            <p className="text-gray-300 leading-relaxed text-base sm:text-lg md:text-[18px] lg:text-[20px]">
              My job is to build your website so that it is functional and
              user-friendly but at the same time attractive...
            </p>
          </div>

          {/* Right */}
          <div
            className={`transition-all duration-1000 delay-400 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 sm:p-8 md:p-10 border border-white/10 hover:border-blue-500/30 transition-all duration-300 shadow-2xl">
              <p className="text-gray-300 leading-relaxed mb-6 text-base sm:text-lg md:text-[18px] animate-fadeIn">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>

              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg md:text-[18px]">
                  As a result, I’ve been fortunate enough to work with different
                  companies and brands...
                </p>

                <p className="text-gray-300 leading-relaxed text-base sm:text-lg md:text-[18px]">
                  Feel free to reach out — I’d love to make your vision come to
                  life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
