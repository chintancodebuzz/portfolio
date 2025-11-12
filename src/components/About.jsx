import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

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
      className="relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-4xl -top-10 sm:-top-12 lg:-top-14 mx-4 xs:mx-5 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12"
      style={{
        backgroundImage: `url('/src/assets/images/about/about_bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-blue-900/30 to-black/85"></div>

      <div className="relative z-10 py-6 xs:py-8 sm:py-10 md:py-12 lg:py-16 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Section Header */}
        <div
          className={`text-center mb-8 xs:mb-10 sm:mb-12 md:mb-14 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          <div className="inline-flex flex-col items-center">
            <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-3 xs:mb-4">
              <span className="text-[#4FC3F7]">About</span>
              <span className="text-white ml-1 xs:ml-2">Us</span>
            </h2>

            <div className="flex items-center gap-2 xs:gap-3 bg-white/10 backdrop-blur-lg px-3 xs:px-4 py-1.5 xs:py-2 rounded-full border border-white/20 hover:border-[#4FC3F7] transition-all duration-300 group">
              <div className="relative">
                <span className="w-2 h-2 bg-[#4FC3F7] rounded-full animate-ping absolute"></span>
                <span className="w-2 h-2 bg-[#4FC3F7] rounded-full relative"></span>
              </div>
              <span className="text-white font-medium text-sm xs:text-base tracking-wide">
                Available For Work
              </span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 lg:gap-12 xl:gap-14">
          {/* Left Column - Introduction */}
          <div
            className={`space-y-4 xs:space-y-6 sm:space-y-8 transition-all duration-1000 delay-200 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-6"
            }`}
          >
            {/* Profile Header */}
            <div className="space-y-3 xs:space-y-4">
              <div className="flex items-center gap-3 xs:gap-4">
                <div className="relative">
                  {/* Profile Image Placeholder */}
                  <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#4FC3F7] to-[#4FC3F7]/80 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl xs:text-3xl sm:text-4xl font-bold">
                      TV
                    </span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 xs:w-6 xs:h-6 bg-[#4FC3F7] rounded-full border-4 border-gray-900 flex items-center justify-center">
                    <span className="text-white text-xs">👋</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                    Hello! I'm{" "}
                    <span className="text-[#4FC3F7]">Tarun Vaghasiya</span>
                  </h3>
                  <p className="text-gray-300 text-lg xs:text-xl sm:text-2xl font-medium mt-1 flex items-center gap-2">
                    UX/UI Designer & Product Designer
                    <img
                      src="/src/assets/images/about/star.svg"
                      alt="Designer Icon"
                      className="w-5 h-5 xs:w-6 xs:h-6 animate-spin-slow"
                    />
                  </p>
                </div>
              </div>
            </div>

            {/* Introduction Text */}
            <div className="space-y-3 xs:space-y-4">
              <p className="text-gray-200 leading-relaxed text-base xs:text-lg sm:text-xl font-medium">
                I'm a passionate{" "}
                <span className="text-[#4FC3F7] font-semibold">
                  Creative Director
                </span>{" "}
                and{" "}
                <span className="text-[#4FC3F7] font-semibold">
                  UI/UX Designer
                </span>{" "}
                with expertise in creating digital experiences that blend
                aesthetics with functionality.
              </p>

              <p className="text-gray-300 leading-relaxed text-sm xs:text-base sm:text-lg">
                I specialize in transforming complex problems into intuitive,
                beautiful, and user-friendly designs. With a keen eye for detail
                and a user-centered approach.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 xs:gap-4 pt-3 xs:pt-4">
              {[
                { number: "50+", label: "Projects" },
                { number: "3+", label: "Years Exp" },
                { number: "40+", label: "Clients" },
                { number: "15+", label: "Awards" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-3 xs:p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:border-[#4FC3F7] transition-all duration-300 group hover:scale-105"
                >
                  <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#4FC3F7] group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm xs:text-base font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Detailed Info */}
          <div
            className={`transition-all duration-1000 delay-400 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-6"
            }`}
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-5 xs:p-6 sm:p-8 border border-white/10 hover:border-[#4FC3F7] transition-all duration-500 shadow-xl hover:shadow-2xl h-full">
              {/* Expertise Section */}
              <div className="space-y-4 xs:space-y-6">
                <div className="text-center">
                  <h4 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-[#4FC3F7] mb-2">
                    My Expertise
                  </h4>
                  <div className="w-16 h-1 bg-[#4FC3F7] mx-auto rounded-full"></div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-3 xs:gap-4">
                  {[
                    "UI/UX Design",
                    "Product Strategy",
                    "Web Development",
                    "Brand Identity",
                    "User Research",
                    "Prototyping",
                    "Frontend Development",
                    "Mobile Design",
                  ].map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2 xs:p-3 bg-white/5 rounded-xl border border-white/5 hover:border-[#4FC3F7] transition-all duration-300 group"
                    >
                      <div className="w-1.5 h-1.5 bg-[#4FC3F7] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-gray-200 text-sm xs:text-base font-medium group-hover:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Philosophy */}
                <div className="pt-3 xs:pt-4 border-t border-white/10">
                  <p className="text-gray-200 leading-relaxed text-base xs:text-lg italic text-center">
                    "I believe in creating designs that not only solve problems
                    but also inspire and delight users."
                  </p>

                  <div className="flex justify-center mt-4 xs:mt-5">
                    <HashLink smooth to="#contact">
                      <button className="bg-[#4FC3F7] cursor-pointer text-white px-6 xs:px-8 py-2 xs:py-3 rounded-xl font-semibold text-lg xs:text-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                        Let's Work Together
                      </button>
                    </HashLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-8 left-8 w-3 h-3 xs:w-4 xs:h-4 bg-[#4FC3F7] rounded-full opacity-60 animate-float"></div>
        <div className="absolute bottom-16 right-12 w-4 h-4 xs:w-5 xs:h-5 bg-[#4FC3F7] rounded-full opacity-40 animate-float delay-1000"></div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }

        .rounded-4xl {
          border-radius: 2rem;
        }
      `}</style>
    </section>
  );
}
