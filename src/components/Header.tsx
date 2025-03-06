
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        {
          "bg-cyber-darker/80 backdrop-blur-md shadow-lg": scrolled,
          "bg-transparent": !scrolled,
        }
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-white font-bold flex items-center">
            <div className="relative h-10 w-10 mr-3 hexagon bg-gradient-to-r from-cyber-blue to-cyber-purple flex items-center justify-center">
              <span className="text-lg">T</span>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold cyber-font">
                Taxes GPT
              </div>
              <div className="text-xs opacity-70 -mt-1">
                Presented by{" "}
                <a
                  href="https://www.aiwebtools.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyber-blue transition-colors"
                >
                  AiWebTools.Ai
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="https://chatgpt.com/g/g-c9YFehgdQ-taxes-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-button rounded-md"
          >
            <span>GET STARTED</span>
          </a>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-white hover:text-cyber-blue transition-colors font-medium"
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection("disclaimer")}
            className="text-white hover:text-cyber-blue transition-colors font-medium"
          >
            Disclaimer
          </button>
          <a
            href="https://www.aiwebtools.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyber-blue transition-colors font-medium"
          >
            More AI Tools
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-cyber-darker/95 backdrop-blur-lg shadow-lg border-t border-cyber-blue/20 py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <a
              href="https://chatgpt.com/g/g-c9YFehgdQ-taxes-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyber-blue transition-colors font-medium py-2 border-b border-white/10"
            >
              GET STARTED
            </a>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-white hover:text-cyber-blue transition-colors font-medium py-2 border-b border-white/10 text-left"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("disclaimer")}
              className="text-white hover:text-cyber-blue transition-colors font-medium py-2 border-b border-white/10 text-left"
            >
              Disclaimer
            </button>
            <a
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyber-blue transition-colors font-medium py-2"
            >
              More AI Tools
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
