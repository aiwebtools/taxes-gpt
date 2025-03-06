
import React from "react";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark-purple/80 to-cyber-dark"></div>
        <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="cyber-card rounded-xl p-8 md:p-12 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 cyber-font leading-tight">
                Ready to <span className="cyber-gradient-text">Transform</span> Your Tax Experience?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Join thousands of businesses and entrepreneurs who have already discovered the power of AI-assisted tax optimization. Start maximizing your deductions today!
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://chatgpt.com/g/g-c9YFehgdQ-taxes-gpt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-button rounded-md inline-flex items-center group"
                >
                  <span>Get Started Now</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4/5 h-4/5 rounded-full bg-gradient-to-br from-cyber-blue/20 via-cyber-purple/20 to-cyber-pink/20 animate-pulse-glow"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl">💰</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
