import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

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
  ];

  // Scroll to section with offset and update URL
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });

      // Update URL hash
      window.history.pushState(null, "", `/#${sectionId}`);
      setActiveSection(sectionId);
    }
    setIsOpen(false);
  };

  // Scroll detection for navbar animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      setIsScrolled(window.scrollY > 50);

      let current = "";
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

      if (current && current !== activeSection) {
        setActiveSection(current);
        window.history.replaceState(null, "", `/#${current}`);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  // Optional: Handle popstate (back/forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.slice(1);
      if (hash && navItems.some((item) => item.id === hash)) {
        scrollToSection(hash);
      } else {
        scrollToSection("home");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md flex justify-center transition-all duration-500 ${
        isScrolled ? "shadow-lg h-20" : "h-20"
      }`}
    >
      <div className="px-4 w-[90%] sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with hover animation */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex-shrink-0 transition-all duration-300 hover:scale-110 hover:rotate-12"
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
          </button>

          {/* Desktop Navigation with enhanced animations */}
          <div className="hidden md:flex items-center gap-[50px]">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-[18px] font-medium transition-all duration-300 cursor-pointer relative group ${
                  activeSection === item.id
                    ? "text-blue-500 scale-105"
                    : "text-gray-700 hover:text-blue-500"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {item.label}

                {/* Animated underline */}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full ${
                    activeSection === item.id ? "w-full" : ""
                  }`}
                ></span>

                {/* Hover effect */}
                <span className="absolute inset-0 rounded-lg bg-blue-500/10 scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
              </button>
            ))}
          </div>

          {/* Contact Button with enhanced animation */}
          <button className="hidden md:flex bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 relative overflow-hidden group">
            <span className="relative z-10">Contact Me</span>
            <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-600"></span>
          </button>

          {/* Mobile Menu Button with enhanced animation */}
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

        {/* Mobile Navigation with enhanced animations */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-500">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:translate-x-2 ${
                  activeSection === item.id
                    ? "bg-blue-50 text-blue-600 font-semibold shadow-md scale-105"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {item.label}
              </button>
            ))}
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg">
              Contact Me
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
