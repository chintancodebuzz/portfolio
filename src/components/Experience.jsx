import React, { useEffect, useState } from "react";
import { experienceData, skillsData } from "../data/experienceData";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    const el = document.getElementById("resume");
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);

  return (
    <section
      id="resume"
      className={`py-8 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
        {/* Badge + Title */}
        <div
          className={`text-left mb-12 transition-all duration-1000 delay-100 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm mb-4 relative">
            <span className="text-gray-700 font-bold text-sm">Experience</span>

            {/* Decorative image */}
            <img
              src="/src/assets/images/hero/sharps_lines.svg"
              alt="burst"
              className="absolute -top-5 -right-5 w-8 h-8"
            />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            My Work <span className="text-[#4FC3F7]">Experience</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 lg:gap-16">
          {/* Left: Timeline */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-200 ease-out pfoot${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Section Title */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#4FC3F7] rounded-lg flex items-center justify-center">
                <img
                  src="/src/assets/images/icons/experience/book.svg"
                  alt="decorative lines"
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Experience</h3>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-5 -top-8 bottom-0 w-0.5 bg-gray-300"></div>

              {experienceData.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-4 mb-10 transition-all duration-1000 ease-out ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 200 + 300}ms` }}
                >
                  {/* Dot */}
                  <div className="w-3 h-3 bg-[#4FC3F7] rounded-full absolute left-4 top-1 z-10"></div>

                  {/* Content */}
                  <div className="ml-12">
                    <h4 className="text-lg font-bold text-[#4FC3F7]">
                      {exp.title}
                    </h4>
                    <p className="text-sm text-gray-500 mb-1">{exp.duration}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Skills */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-400 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-2xl">
              {skillsData.map((skill, index) => (
                <div
                  key={index}
                  className={`mb-6 last:mb-0 transition-all duration-1000 ease-out ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 150 + 500}ms` }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm font-medium">
                      {skill.percent}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`bg-[#4FC3F7] h-2 rounded-full transition-all duration-1000 ease-out ${
                        isVisible ? "w-full" : "w-0"
                      }`}
                      style={{ width: isVisible ? `${skill.percent}%` : "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
