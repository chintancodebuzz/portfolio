// src/components/Projects.js
"use client";
import { useState, useEffect, useMemo } from "react";
import { projectsData } from "../data/projectsData";
import { motion, AnimatePresence } from "framer-motion";

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
  const [visibleCount, setVisibleCount] = useState(8);

  // Items to load per click
  const ITEMS_PER_LOAD = 8;

  // Memoized filtered projects for better performance
  const filteredProjects = useMemo(() => {
    return activeTab === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);
  }, [activeTab]);

  // Get currently visible projects
  const visibleProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  // Check if there are more projects to load
  const hasMoreProjects = visibleCount < filteredProjects.length;

  // Load more projects
  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + ITEMS_PER_LOAD);
  };

  // Handle tab change with reset
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setVisibleCount(8);
    setHoveredProject(null); // Reset hover state
  };

  // Check if category has no projects
  const hasNoProjects = filteredProjects.length === 0;

  return (
    <section
      id="projects"
      className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 bg-[#F2F4F7] rounded-[50px] mt-12"
    >
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-6 sm:mb-8 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Lets have a look at my <br />
            <span className="text-[#4FC3F7]">Portfolio</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 justify-center sm:justify-start"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`px-3 sm:px-4 md:px-5 py-2 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#4FC3F7] text-white shadow-md"
                  : "bg-white text-gray-700 border border-[#4FC3F7] hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* No Projects State */}
        {hasNoProjects && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center py-16 sm:py-20 md:py-24"
          >
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                No Projects Found
              </h3>
              <p className="text-gray-600 mb-6">
                There are no projects in the{" "}
                <span className="font-semibold text-[#4FC3F7]">
                  {tabs.find((tab) => tab.id === activeTab)?.label}
                </span>{" "}
                category yet.
              </p>
              <button
                onClick={() => handleTabChange("all")}
                className="px-6 py-3 bg-[#4FC3F7] text-white font-medium rounded-full shadow-md hover:bg-[#4FC3F7] hover:shadow-lg transition-all duration-300"
              >
                View All Projects
              </button>
            </div>
          </motion.div>
        )}

        {/* Projects Grid */}
        {!hasNoProjects && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            <AnimatePresence mode="wait">
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={`${project.id}-${activeTab}`} // Unique key for each tab change
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05, // Reduced delay for faster animation
                    ease: "easeOut",
                  }}
                  className="group relative"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div
                    className={`h-full rounded-[30px] overflow-hidden transition-all duration-300 cursor-pointer ${
                      hoveredProject === project.id
                        ? "bg-[#4FC3F7] shadow-xl transform scale-[1.02]"
                        : project.featured
                        ? "bg-[#4FC3F7]"
                        : "bg-[#CFCFCF33]"
                    }`}
                  >
                    <div className="h-full flex flex-col items-start">
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

                      <div className="relative w-full pt-8 sm:pt-10">
                        <div className="relative overflow-hidden rounded-2xl">
                          <img
                            src="/src/assets/images/projects/ract_3.svg"
                            alt="decor 3"
                            className="absolute left-2.5 z-0 transition-all duration-300"
                          />
                          <img
                            src="/src/assets/images/projects/ract_2.svg"
                            alt="decor 2"
                            className="absolute z-1 top-5 transition-all duration-300"
                          />

                          <img
                            src={project.image}
                            alt={project.title}
                            className="relative w-full h-auto rounded-2xl z-[2] top-[40px] transition-all duration-300 hover:translate-y-[-10px]"
                          />
                        </div>

                        <div
                          className={`absolute -bottom-2 -right-2 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 group-hover:shadow-2xl z-10 border-[6px] sm:border-8 border-[#F2F4F7] ${
                            hoveredProject === project.id
                              ? "bg-[#4FC3F7] transform scale-110 rotate-12"
                              : "bg-[#1F2937]"
                          }`}
                        >
                          <img
                            src="/src/assets/images/projects/up_right.svg"
                            alt="arrow"
                            className="w-6 sm:w-8 h-6 sm:h-8 transition-all duration-300"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {hoveredProject === project.id && (
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-400/30 to-blue-600/30 blur-3xl rounded-3xl transition-all duration-300"></div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Load More Button - Only show if there are more projects */}
        {hasMoreProjects && !hasNoProjects && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12 sm:mt-16"
          >
            <button
              onClick={loadMore}
              className="px-6 cursor-pointer sm:px-8 py-2 sm:py-3 bg-[#4FC3F7] text-white font-medium rounded-full shadow-md hover:bg-[#4FC3F7] hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Load More ({filteredProjects.length - visibleCount} remaining)
            </button>
          </motion.div>
        )}

        {/* Show message when all projects are loaded */}
        {!hasMoreProjects && filteredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12 sm:mt-16"
          >
            <p className="text-gray-600 font-medium">
              All {filteredProjects.length} projects loaded
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
