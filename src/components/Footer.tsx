
import React from "react";
import { Mail, Phone, ExternalLink, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-cyber-dark-purple via-cyber-darker to-cyber-dark pt-20 pb-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-10 animate-pulse"></div>
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full"
            animate={{
              y: [-10, window.innerHeight + 10],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
            style={{
              left: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <motion.div 
                className="relative h-12 w-12 mr-4 hexagon bg-gradient-to-r from-cyber-blue to-cyber-purple flex items-center justify-center"
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(14,255,255,0.6)",
                    "0 0 30px rgba(201,0,255,0.8)",
                    "0 0 20px rgba(14,255,255,0.6)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-xl font-bold">T</span>
              </motion.div>
              <div>
                <motion.div 
                  className="text-2xl font-bold cyber-font bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent"
                  animate={{ 
                    textShadow: [
                      "0 0 10px rgba(14,255,255,0.8)",
                      "0 0 15px rgba(201,0,255,0.8)",
                      "0 0 10px rgba(14,255,255,0.8)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Taxes GPT
                </motion.div>
                <div className="text-xs opacity-70 -mt-1">
                  Presented by{" "}
                  <motion.a
                    href="https://www.aiwebtools.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyber-blue transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    AiWebTools.Ai
                  </motion.a>
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Break free from tax confusion. Navigate state-by-state regulations and discover hidden deductions with our AI tax assistant.
            </p>
            <motion.div 
              className="mb-6 text-center text-cyber-yellow font-semibold"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="flex items-center justify-start">
                <Sparkles className="h-4 w-4 mr-2" />
                For informational, educational, and research purposes only
                <Sparkles className="h-4 w-4 ml-2" />
              </p>
            </motion.div>
            <div className="space-y-4">
              <motion.a
                href="tel:4758008096"
                className="flex items-center text-gray-300 hover:text-cyber-blue transition-colors duration-300"
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <Phone className="h-5 w-5 mr-3" />
                (475) 800-8096
              </motion.a>
              <motion.a
                href="mailto:Contact@ai-webtools.com"
                className="flex items-center text-gray-300 hover:text-cyber-blue transition-colors duration-300"
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <Mail className="h-5 w-5 mr-3" />
                Contact@ai-webtools.com
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-8 cyber-font bg-gradient-to-r from-cyber-purple to-cyber-pink bg-clip-text text-transparent">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <motion.a
                  href="https://chatgpt.com/g/g-c9YFehgdQ-taxes-gpt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyber-blue transition-colors duration-300 flex items-center"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <ExternalLink className="h-4 w-4 mr-3" />
                  Get Started
                </motion.a>
              </li>
              <li>
                <motion.button
                  onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-cyber-blue transition-colors duration-300"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  FAQ
                </motion.button>
              </li>
              <li>
                <motion.button
                  onClick={() => document.getElementById("disclaimer")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-300 hover:text-cyber-blue transition-colors duration-300"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  Disclaimer
                </motion.button>
              </li>
              <li>
                <motion.a
                  href="https://www.aiwebtools.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyber-blue transition-colors duration-300 flex items-center"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <ExternalLink className="h-4 w-4 mr-3" />
                  More AI Tools
                </motion.a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold mb-8 cyber-font bg-gradient-to-r from-cyber-green to-cyber-blue bg-clip-text text-transparent">Legal</h4>
            <ul className="space-y-4">
              <li>
                <motion.a
                  href="https://openai.com/policies/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyber-blue transition-colors duration-300"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  Privacy Policy
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://aiwebtools.lovable.app/disclaimers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyber-blue transition-colors duration-300"
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  Terms of Service
                </motion.a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            <motion.a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyber-blue transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              © {currentYear} AI WEB TOOLS LLC. All rights reserved.
            </motion.a>
          </div>
          
          <div className="flex items-center">
            <motion.a
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-cyber-blue to-cyber-purple text-white text-sm font-medium transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 25px rgba(14,255,255,0.6)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              More AI Tools <ExternalLink className="h-4 w-4 ml-2" />
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-8 text-center text-sm text-gray-500"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <p className="flex items-center justify-center">
            <Sparkles className="h-3 w-3 mr-2" />
            For informational, educational, and research purposes only.
            <Sparkles className="h-3 w-3 ml-2" />
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
