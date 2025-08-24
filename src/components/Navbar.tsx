import React, { useState, useEffect } from "react";
import { Mountain, Menu, X } from "lucide-react";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we're still within the hero section (first 100vh)
      const isInHeroSection = window.scrollY < window.innerHeight;
      setIsScrolled(window.scrollY > 50 && !isInHeroSection);
    };

    // Set initial state immediately - start transparent
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "camps", label: "Upcoming Camps" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : ""
      }`}
      style={{
        backgroundColor: isScrolled ? undefined : "transparent",
        backdropFilter: isScrolled ? undefined : "none",
      }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onNavigate("home")}>
            <Mountain
              className={`h-8 w-8 ${
                isScrolled ? "text-primary-600" : "text-white"
              }`}
            />
            <span
              className={`text-xl font-bold ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}>
              I-xplore
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`font-medium transition-colors duration-200 ${
                  currentPage === item.id
                    ? isScrolled
                      ? "text-primary-600"
                      : "text-primary-200"
                    : isScrolled
                    ? "text-gray-700 hover:text-primary-600"
                    : "text-white hover:text-primary-200"
                }`}>
                {item.label}
              </button>
            ))}
            <button className="btn-primary">Contact Us</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md font-medium ${
                    currentPage === item.id
                      ? "text-primary-600 bg-primary-50"
                      : "text-gray-700 hover:text-primary-600 hover:bg-gray-50"
                  }`}>
                  {item.label}
                </button>
              ))}
              <button className="w-full mt-4 btn-primary">Contact Us</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
