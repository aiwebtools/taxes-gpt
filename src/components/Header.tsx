
import React, { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const scrollToSection = useCallback((id: string) => {
    setMobileMenuOpen(false);
    // Small delay to let menu close before scrolling
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 px-4 sm:px-6 md:px-12",
        {
          "bg-cyber-darker/80 backdrop-blur-md shadow-lg": scrolled || mobileMenuOpen,
          "bg-transparent": !scrolled && !mobileMenuOpen,
        }
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center min-w-0">
          <div className="text-white font-bold flex items-center min-w-0">
            <div className="relative h-8 w-8 sm:h-10 sm:w-10 mr-2 sm:mr-3 flex-shrink-0 hexagon bg-gradient-to-r from-cyber-blue to-cyber-purple flex items-center justify-center">
              <span className="text-sm sm:text-lg">T</span>
            </div>
            <div className="min-w-0">
              <div className="text-lg sm:text-xl md:text-2xl font-bold cyber-font truncate">
                Taxes GPT
              </div>
              <div className="text-[10px] sm:text-xs opacity-70 -mt-1 truncate">
                Presented by{" "}
                <a
                  href="https://aiwebtools.lovable.app/?via=aiwebtools"
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
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
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
            href="https://aiwebtools.lovable.app/?via=aiwebtools"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyber-blue transition-colors font-medium"
          >
            More AI Tools
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none p-2 -mr-2 touch-manipulation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown with smooth animation */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-cyber-darker/95 backdrop-blur-lg shadow-lg border-t border-cyber-blue/20 overflow-hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col py-4 px-4 sm:px-6">
          <a
            href="https://chatgpt.com/g/g-c9YFehgdQ-taxes-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyber-blue active:text-cyber-blue transition-colors font-medium py-3 border-b border-white/10 touch-manipulation"
          >
            GET STARTED
          </a>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-white hover:text-cyber-blue active:text-cyber-blue transition-colors font-medium py-3 border-b border-white/10 text-left touch-manipulation"
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection("disclaimer")}
            className="text-white hover:text-cyber-blue active:text-cyber-blue transition-colors font-medium py-3 border-b border-white/10 text-left touch-manipulation"
          >
            Disclaimer
          </button>
          <a
            href="https://aiwebtools.lovable.app/?via=aiwebtools"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyber-blue active:text-cyber-blue transition-colors font-medium py-3 touch-manipulation"
          >
            More AI Tools
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
