// src/components/Services.js
import React from "react";
import { Icon } from "@iconify/react";
import { servicesData } from "../data/servicesData";

const Services = () => {
  return (
    <section
      id="services"
      className="py-6 sm:py-12 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24"
    >
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
        {/* Badge + Title */}
        <div className="text-center mb-12 relative">
          {/* "Service" pill */}
          <div className="inline-flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm mb-4 relative">
            <span className="text-gray-700 font-bold text-sm">Service</span>

            {/* Decorative image */}
            <img
              src="/src/assets/images/hero/sharps_lines.svg"
              alt="burst"
              className="absolute -top-5 -right-5 w-8 h-8"
            />
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            <span className="text-[#4FC3F7] bg-clip-text">What I'm</span> Doing
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="relative group transition-all duration-300"
            >
              {/* Card */}
              <div
                className="h-full p-4 sm:p-6 md:p-8 rounded-3xl transition-all duration-300 group-hover:shadow-xl border-2 border-transparent group-hover:border-white"
                style={{
                  background:
                    "linear-gradient(145.94deg, rgba(235, 253, 255, 0.8) 7.83%, rgba(255, 255, 255, 0) 79.83%)",
                  boxShadow:
                    "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                }}
              >
                {/* On hover - apply highlight styles */}
                <div
                  className="group-hover:absolute group-hover:inset-0 group-hover:rounded-3xl group-hover:z-0"
                  style={{
                    background:
                      "linear-gradient(299.48deg, #0A84FF 7.82%, #CAEFFF 79.39%)",
                  }}
                ></div>

                {/* Content wrapper with relative positioning */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-2 p-2 rounded-full bg-white w-12 group-hover:bg-white/90">
                    <img
                      src={service.icon}
                      alt="decorative lines"
                      className="w-8 h-8"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-black">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-gray-600 group-hover:text-black/90">
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* Highlight Glow Effect - Only on hover */}
              <div
                className="absolute inset-0 -z-10 rounded-3xl opacity-0 group-hover:opacity-20 group-hover:blur-3xl transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(299.48deg, #0A84FF 7.82%, #CAEFFF 79.39%)",
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
