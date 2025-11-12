import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  // Scroll detection for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      let current = "home";
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          const sectionTop = top + window.scrollY;
          const sectionBottom = bottom + window.scrollY;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            current = item.id;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <nav
      className={`fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md flex justify-center transition-all duration-500 ${
        isScrolled ? "shadow-lg h-20" : "h-20"
      }`}
    >
      <div className="px-4 w-[90%] sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={800}
            className="flex-shrink-0 transition-all duration-300 hover:scale-110 hover:rotate-12 cursor-pointer"
          >
            <img
              src="/src/assets/images/icons/logo/nav_logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className={`h-10 w-auto transition-all duration-300 ${
                isScrolled ? "h-8" : "h-10"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-[50px]">
            {navItems.map((item, index) => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                onSetActive={() => setActiveSection(item.id)}
                className={`text-[18px] font-medium transition-all duration-300 cursor-pointer relative group px-1 ${
                  activeSection === item.id
                    ? "text-[#4FC3F7] scale-105"
                    : "text-gray-700 hover:text-[#4FC3F7]"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {item.label}

                {/* Animated underline */}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4FC3F7] transition-all duration-300 group-hover:w-full ${
                    activeSection === item.id ? "w-full" : ""
                  }`}
                ></span>

                {/* Hover effect */}
                <span className="absolute inset-0 rounded-lg bg-blue-500/10 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={800}
            className="hidden md:flex bg-[#4FC3F7] hover:bg-[#4FC3F7] text-white px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 relative overflow-hidden group cursor-pointer"
          >
            <span className="relative z-10">Contact Me</span>
            <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-600"></span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 transform hover:scale-110"
          >
            {isOpen ? (
              <Icon
                icon="heroicons:x-mark-20-solid"
                width={24}
                className="animate-spin-in"
              />
            ) : (
              <Icon
                icon="heroicons:bars-3-20-solid"
                width={24}
                className="animate-pulse-once"
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-500">
            {navItems.map((item, index) => (
              <Link
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                onSetActive={() => setActiveSection(item.id)}
                onClick={() => setIsOpen(false)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:translate-x-2 cursor-pointer ${
                  activeSection === item.id
                    ? "bg-blue-50 text-[#4FC3F7] font-semibold shadow-md scale-105"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={800}
              onClick={() => setIsOpen(false)}
              className="w-full bg-[#4FC3F7] hover:bg-[#4FC3F7] text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg cursor-pointer block text-center"
            >
              Contact Me
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
