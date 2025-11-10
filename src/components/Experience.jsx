// src/components/Experience.js
import React from "react";
import { experienceData, skillsData } from "../data/experienceData";

const Experience = () => {
  return (
    <section
      id="resume"
      className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 bg-white"
    >
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
        {/* Badge + Title */}
        <div className="text-left mb-8 sm:mb-10 md:mb-12">
          <div className="inline-flex items-center bg-white border border-gray-300 rounded-full px-3 sm:px-4 py-2 shadow-sm mb-4 relative">
            <span className="text-gray-700 font-bold text-xs sm:text-sm">
              Experience
            </span>

            {/* Decorative image */}
            <img
              src="/src/assets/images/hero/sharps_lines.svg"
              alt="burst"
              className="absolute -top-4 sm:-top-5 -right-4 sm:-right-5 w-6 sm:w-8 h-6 sm:h-8"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            My Work <span className="text-[#4FC3F7]">Experience</span>
          </h2>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16">
          {/* Left: Timeline */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#4FC3F7] rounded-lg flex items-center justify-center">
                <img
                  src="/src/assets/images/icons/experience/book.svg"
                  alt="decorative lines"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Experience
              </h3>
            </div>

            {/* Timeline */}
            <div className="relative pl-8">
              {/* Vertical Line */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-300"></div>

              {experienceData.map((exp, index) => (
                <div
                  key={index}
                  className="relative flex items-start gap-4 mb-8"
                >
                  {/* Dot */}
                  <div className="w-3 h-3 bg-[#4FC3F7] rounded-full absolute left-4 top-1 z-10"></div>

                  {/* Content */}
                  <div className="ml-8 sm:ml-10">
                    <h4 className="text-base sm:text-lg font-bold text-[#4FC3F7]">
                      {exp.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 mb-1">
                      {exp.duration}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Skills */}
          <div className="space-y-6">
            <div className="bg-gray-900 text-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-2xl">
              {skillsData.map((skill, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs sm:text-sm font-medium">
                      {skill.name}
                    </span>
                    <span className="text-xs sm:text-sm font-medium">
                      {skill.percent}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-[#4FC3F7] h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.percent}%` }}
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
