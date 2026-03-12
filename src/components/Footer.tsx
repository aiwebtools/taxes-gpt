
import React from "react";
import { Mail, Phone, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyber-dark-purple pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="relative h-10 w-10 mr-3 hexagon bg-gradient-to-r from-cyber-blue to-cyber-purple flex items-center justify-center">
                <span className="text-lg">T</span>
              </div>
              <div>
                <div className="text-xl font-bold cyber-font">Taxes GPT</div>
                <div className="text-xs opacity-70 -mt-1">
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
            <p className="text-gray-400 mb-6">
              Break free from tax confusion. Navigate state-by-state regulations and discover hidden deductions with our AI tax assistant.
            </p>
            <div className="space-y-3">
              <a
                href="tel:4758008096"
                className="flex items-center text-gray-300 hover:text-cyber-blue transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                (475) 800-8096
              </a>
              <a
                href="mailto:Contact@ai-webtools.com"
                className="flex items-center text-gray-300 hover:text-cyber-blue transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact@ai-webtools.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 cyber-font">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://chatgpt.com/g/g-c9YFehgdQ-taxes-gpt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyber-blue transition-colors flex items-center"
                >
                  <ExternalLink className="h-3 w-3 mr-2" />
                  Get Started
                </a>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-cyber-blue transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("disclaimer")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-cyber-blue transition-colors"
                >
                  Disclaimer
                </button>
              </li>
              <li>
                <a
                  href="https://www.aiwebtools.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyber-blue transition-colors flex items-center"
                >
                  <ExternalLink className="h-3 w-3 mr-2" />
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 cyber-font">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://openai.com/policies/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyber-blue transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://aiwebtools.lovable.app/disclaimers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyber-blue transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyber-blue transition-colors"
            >
              © {currentYear} AI WEB TOOLS LLC. All rights reserved.
            </a>
          </div>
          
          <div className="flex items-center">
            <a
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-purple text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              More AI Tools <ExternalLink className="h-3 w-3 ml-2" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>For informational, educational, and research purposes only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
