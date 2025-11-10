import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

  // Sync URL and active state on manual scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // 100px offset for early detection

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

      // Only update if changed
      if (current && current !== activeSection) {
        setActiveSection(current);
        window.history.replaceState(null, "", `/#${current}`);
      }
    };

    // Initial check
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
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md flex justify-center">
      <div className="px-4 w-[90%] sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex-shrink-0 hover:opacity-80 transition-opacity"
          >
            <img
              src="/src/assets/images/icons/logo/nav_logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-[50px]">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-[18px] font-medium transition-colors cursor-pointer ${
                  activeSection === item.id
                    ? "text-blue-500"
                    : "text-gray-700 hover:text-blue-500"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact Button */}
          <button className="hidden md:flex bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium text-sm transition-colors">
            Contact Me
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? (
              <Icon icon="heroicons:x-mark-20-solid" width={24} />
            ) : (
              <Icon icon="heroicons:bars-3-20-solid" width={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? "bg-blue-50 text-blue-600 font-semibold"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Contact Me
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
