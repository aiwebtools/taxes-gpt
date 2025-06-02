
import React from "react";
import { AlertTriangle, BookOpen, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Disclaimer = () => {
  return (
    <section id="disclaimer" className="py-24 relative bg-gradient-to-b from-cyber-darker via-cyber-dark to-cyber-darker overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-10 animate-pulse"></div>
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyber-blue rounded-full opacity-40"
            animate={{
              x: [0, window.innerWidth || 1920],
              y: [Math.random() * (window.innerHeight || 1080), Math.random() * (window.innerHeight || 1080)],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
            style={{
              left: -10,
              top: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center space-x-2 items-center mb-6">
            <motion.div 
              className="h-[2px] w-16 bg-gradient-to-r from-transparent via-cyber-blue to-transparent"
              animate={{ width: [16, 24, 16] }}
              transition={{ duration: 3, repeat: Infinity }}
            ></motion.div>
            <span className="text-cyber-blue uppercase tracking-wider font-bold text-sm flex items-center">
              <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
              Legal Information
              <Sparkles className="h-4 w-4 ml-2 animate-pulse" />
            </span>
            <motion.div 
              className="h-[2px] w-16 bg-gradient-to-r from-transparent via-cyber-blue to-transparent"
              animate={{ width: [16, 24, 16] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            ></motion.div>
          </div>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 cyber-font"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(14,255,255,0.8)",
                "0 0 30px rgba(201,0,255,0.8)",
                "0 0 20px rgba(14,255,255,0.8)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Legal <span className="cyber-gradient-text">Disclaimer</span>
          </motion.h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Important information about the use of Taxes GPT and its limitations.
          </p>
          <motion.div 
            className="mt-4 text-center text-cyber-yellow font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="bg-gradient-to-r from-cyber-yellow to-cyber-green bg-clip-text text-transparent">
              For informational, educational, and research purposes only
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="cyber-card rounded-lg p-10 mb-12 relative overflow-hidden"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyber-blue/20 via-cyber-purple/20 to-cyber-pink/20 rounded-lg blur opacity-60 animate-pulse"></div>
          <div className="relative">
            <div className="flex items-start mb-8">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <BookOpen className="h-8 w-8 text-cyber-yellow mr-4 flex-shrink-0 mt-1" />
              </motion.div>
              <h3 className="text-2xl font-bold cyber-font bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent">Educational Purpose</h3>
            </div>
            <div className="text-gray-300 leading-relaxed">
              <p className="text-lg">
                <strong className="text-cyber-yellow">This tool is provided for informational, educational, and research purposes only.</strong> The content and features are designed to help users understand tax concepts and explore potential strategies, but should not be considered as professional tax advice.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="cyber-card rounded-lg p-10 mb-12 relative overflow-hidden"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyber-pink/20 via-cyber-purple/20 to-cyber-blue/20 rounded-lg blur opacity-60 animate-pulse"></div>
          <div className="relative">
            <div className="flex items-start mb-8">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <AlertTriangle className="h-8 w-8 text-cyber-yellow mr-4 flex-shrink-0 mt-1" />
              </motion.div>
              <h3 className="text-2xl font-bold cyber-font bg-gradient-to-r from-cyber-purple to-cyber-pink bg-clip-text text-transparent">Disclaimer</h3>
            </div>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Taxes GPT is an AI assistant designed to provide information and guidance related to tax matters. However, please be aware of the following important limitations:
              </p>
              <ul className="list-disc pl-6 space-y-4 text-base">
                <motion.li
                  whileHover={{ x: 10, color: "#0ef" }}
                  transition={{ duration: 0.3 }}
                >
                  <strong className="text-cyber-yellow">Not Professional Advice:</strong> The information provided by Taxes GPT does not constitute professional tax, legal, or financial advice. Always consult with a qualified tax professional, accountant, or attorney for advice specific to your situation.
                </motion.li>
                <motion.li
                  whileHover={{ x: 10, color: "#0ef" }}
                  transition={{ duration: 0.3 }}
                >
                  <strong className="text-cyber-yellow">No Guarantee of Accuracy:</strong> While we strive for accuracy, tax laws and regulations change frequently. The information provided may not be current or applicable to your specific circumstances.
                </motion.li>
                <motion.li
                  whileHover={{ x: 10, color: "#0ef" }}
                  transition={{ duration: 0.3 }}
                >
                  <strong className="text-cyber-yellow">No Fiduciary Relationship:</strong> Use of Taxes GPT does not create a client-professional relationship of any kind.
                </motion.li>
                <motion.li
                  whileHover={{ x: 10, color: "#0ef" }}
                  transition={{ duration: 0.3 }}
                >
                  <strong className="text-cyber-yellow">User Responsibility:</strong> Users are solely responsible for verifying all information and for any actions taken based on the information provided by Taxes GPT.
                </motion.li>
                <motion.li
                  whileHover={{ x: 10, color: "#0ef" }}
                  transition={{ duration: 0.3 }}
                >
                  <strong className="text-cyber-yellow">No Liability:</strong> AI Web Tools LLC and its affiliates disclaim all liability for any errors, inaccuracies, or omissions in the information provided and for any decisions made or actions taken in reliance upon such information.
                </motion.li>
              </ul>
              <p className="text-lg font-medium text-cyber-blue">
                By using Taxes GPT, you acknowledge and agree that you understand these limitations and that you use the service at your own risk.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="cyber-card rounded-lg p-10 relative overflow-hidden"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyber-green/20 via-cyber-blue/20 to-cyber-purple/20 rounded-lg blur opacity-60 animate-pulse"></div>
          <div className="relative">
            <h3 className="text-2xl font-bold cyber-font mb-8 bg-gradient-to-r from-cyber-green to-cyber-blue bg-clip-text text-transparent">Privacy Statement</h3>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                We take your privacy seriously. Here's how we handle your data:
              </p>
              <ul className="list-disc pl-6 space-y-4 text-base">
                <motion.li
                  whileHover={{ x: 10, color: "#0ef" }}
                  transition={{ duration: 0.3 }}
                >
                  <strong className="text-cyber-yellow">Document Analysis:</strong> Any documents uploaded for analysis are processed securely and are not stored permanently.
                </motion.li>
                <motion.li
                  whileHover={{ x: 10, color: "#0ef" }}
                  transition={{ duration: 0.3 }}
                >
                  <strong className="text-cyber-yellow">No Personal Information:</strong> Taxes GPT does not require or store sensitive personal information such as social security numbers.
                </motion.li>
                <motion.li
                  whileHover={{ x: 10, color: "#0ef" }}
                  transition={{ duration: 0.3 }}
                >
                  <strong className="text-cyber-yellow">Data Security:</strong> We implement appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure, or destruction of data.
                </motion.li>
                <motion.li
                  whileHover={{ x: 10, color: "#0ef" }}
                  transition={{ duration: 0.3 }}
                >
                  <strong className="text-cyber-yellow">Third-Party Services:</strong> Taxes GPT operates on the ChatGPT platform, which has its own privacy policies. We recommend reviewing OpenAI's privacy policy as well.
                </motion.li>
              </ul>
              <p className="text-lg">
                For full details about how we collect, use, and protect your information, please refer to our complete Privacy Policy.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <motion.a
                  href="https://openai.com/policies/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(14,255,255,0.6)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="https://aiwebtools.lovable.app/disclaimers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyber-purple to-cyber-pink text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(201,0,255,0.6)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Terms of Service
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Disclaimer;
