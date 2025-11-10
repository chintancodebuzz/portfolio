"use client";

// src/components/Projects.js
import { useState } from "react";
import { projectsData } from "../data/projectsData";

const tabs = [
  { id: "all", label: "All" },
  { id: "web", label: "Web Design" },
  { id: "app", label: "App Design" },
  { id: "logo", label: "Logo Design" },
  { id: "banner", label: "Banner Design" },
  { id: "video", label: "Video Editing" },
  { id: "graphics", label: "Graphics Design" },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  return (
    <section
      id="projects"
      className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 bg-[#F2F4F7] rounded-[50px] mt-12"
    >
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
        {/* Section Title */}
        <div className="text-left mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Lets have a look at my <br />
            <span className="text-[#4FC3F7]">Portfolio</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 justify-center sm:justify-start">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 sm:px-4 md:px-5 py-2 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-700 border border-[#0A84FF] hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Card */}
              <div
                className={`h-full rounded-[30px] overflow-hidden transition-all duration-300 ${
                  hoveredProject === project.id
                    ? "bg-[#4FC3F7] shadow-xl"
                    : project.featured
                    ? "bg-[#4FC3F7]"
                    : "bg-[#CFCFCF33]"
                }`}
              >
                <div className="h-full flex flex-col items-start">
                  {/* Title */}
                  <h3
                    className={`text-lg sm:text-xl md:text-[20px] font-bold py-3 sm:py-4 pt-6 px-4 sm:px-6 md:px-8 transition-all duration-300 ${
                      hoveredProject === project.id
                        ? "text-white"
                        : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>

                  <hr
                    className={`w-full h-[2px] border-0 rounded transition-all duration-300 ${
                      hoveredProject === project.id
                        ? "bg-white/30"
                        : "bg-[#0000001A]"
                    }`}
                  />

                  {/* Mockup Frame */}
                  <div className="relative w-full pt-8 sm:pt-10">
                    <div className="relative overflow-hidden rounded-2xl">
                      {/* Background decorative layers */}
                      <img
                        src="/src/assets/images/projects/ract_3.svg"
                        alt="decor 3"
                        className="absolute left-[30px] z-0 transition-all duration-300"
                      />
                      <img
                        src="/src/assets/images/projects/ract_2.svg"
                        alt="decor 2"
                        className="absolute left-[10px] z-[1] top-[20px] transition-all duration-300"
                      />

                      {/* Main project image */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="relative w-full h-auto rounded-2xl z-[2] top-[40px] transition-all duration-300 group-hover:translate-y-[-5px]"
                      />
                    </div>

                    {/* Arrow Button */}
                    <button
                      className={`absolute -bottom-2 -right-2 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-99 group-hover:shadow-2xl z-10 border-[6px] sm:border-8 border-[#F2F4F7] ${
                        hoveredProject === project.id
                          ? "bg-[#4FC3F7]"
                          : "bg-[#1F2937]"
                      }`}
                    >
                      <img
                        src="/src/assets/images/projects/up_right.svg"
                        alt="arrow"
                        className="w-6 sm:w-8 h-6 sm:h-8 transition-all duration-300"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              {hoveredProject === project.id && (
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-400/30 to-blue-600/30 blur-3xl rounded-3xl transition-all duration-300"></div>
              )}
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12 sm:mt-16">
          <button className="px-6 sm:px-8 py-2 sm:py-3 bg-[#4FC3F7] text-white font-medium rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
