
import React, { useState, useEffect } from "react";
import { Shield, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

interface DisclaimerPopupProps {
  onAgree: () => void;
  shown: boolean;
}

const DisclaimerPopup = ({ onAgree, shown }: DisclaimerPopupProps) => {
  const { toast } = useToast();
  
  const handleAgree = () => {
    toast({
      title: "Agreement Accepted",
      description: "You've agreed to the Taxes GPT disclaimer",
      duration: 3000,
    });
    onAgree();
  };

  return (
    <AnimatePresence>
      {shown && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full opacity-60"
                animate={{
                  x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                  y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 10 + 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  left: Math.random() * 100 + "%",
                  top: Math.random() * 100 + "%",
                }}
              />
            ))}
          </div>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateY: 180 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotateY: -180 }}
            transition={{ type: "spring", damping: 20, stiffness: 200, duration: 0.8 }}
            className="relative w-full max-w-lg mx-auto"
          >
            <div className="relative cyber-card p-8 overflow-visible shadow-2xl">
              {/* Animated border glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink rounded-lg blur opacity-60 animate-pulse"></div>
              
              {/* Top accent line with animation */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink animate-gradient-x"></div>
              
              {/* Floating icon with enhanced effects */}
              <motion.div 
                className="bg-gradient-to-br from-cyber-dark-purple to-cyber-purple w-20 h-20 -mt-16 mb-6 mx-auto rounded-full flex items-center justify-center border-2 border-cyber-blue/70 shadow-[0_0_30px_rgba(14,255,255,0.6)]"
                animate={{ 
                  rotateY: [0, 360],
                  boxShadow: [
                    "0 0 30px rgba(14,255,255,0.6)",
                    "0 0 50px rgba(201,0,255,0.8)",
                    "0 0 30px rgba(14,255,255,0.6)"
                  ]
                }}
                transition={{ 
                  rotateY: { duration: 4, repeat: Infinity, ease: "linear" },
                  boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <Shield className="h-10 w-10 text-cyber-blue animate-pulse" />
              </motion.div>
              
              <motion.h2 
                className="text-3xl font-bold cyber-font text-center mb-6"
                animate={{ 
                  textShadow: [
                    "0 0 10px rgba(14,255,255,0.8)",
                    "0 0 20px rgba(201,0,255,0.8)",
                    "0 0 10px rgba(14,255,255,0.8)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="cyber-gradient-text">DISCLAIMER</span>
              </motion.h2>
              
              <motion.div 
                className="text-center text-sm text-cyber-yellow mb-6 font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="bg-gradient-to-r from-cyber-yellow to-cyber-green bg-clip-text text-transparent">
                  <strong>For informational, educational, and research purposes only</strong>
                </p>
              </motion.div>
              
              <motion.div 
                className="space-y-4 text-gray-300 mb-8 max-h-[50vh] overflow-y-auto scrollbar-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-sm leading-relaxed">
                  By using Taxes GPT, you acknowledge and agree to the following:
                </p>
                <ul className="list-disc list-inside space-y-3 text-sm leading-relaxed">
                  <li className="hover:text-cyber-blue transition-colors duration-300">
                    <strong className="text-cyber-yellow">Not Professional Advice:</strong> Information provided is for guidance only and does not replace professional tax consultation.
                  </li>
                  <li className="hover:text-cyber-blue transition-colors duration-300">
                    <strong className="text-cyber-yellow">No Liability:</strong> AI Web Tools LLC is not liable for decisions made based on information provided by this tool.
                  </li>
                  <li className="hover:text-cyber-blue transition-colors duration-300">
                    <strong className="text-cyber-yellow">No Data Storage:</strong> Your financial information is processed securely and not permanently stored.
                  </li>
                  <li className="hover:text-cyber-blue transition-colors duration-300">
                    <strong className="text-cyber-yellow">Terms of Service:</strong> Use of this service is subject to our{" "}
                    <a
                      href="https://aiwebtools.lovable.app/disclaimers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyber-blue hover:text-cyber-pink transition-colors duration-300 underline"
                    >
                      Terms of Service
                    </a>{" "}
                    and Privacy Policy.
                  </li>
                </ul>
              </motion.div>
              
              <div className="flex justify-center">
                <motion.button
                  onClick={handleAgree}
                  className="group relative cyber-button px-10 py-4 rounded-lg overflow-hidden transition-all duration-500 text-lg font-bold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(14,255,255,0.5)",
                      "0 0 40px rgba(201,0,255,0.7)",
                      "0 0 20px rgba(14,255,255,0.5)"
                    ]
                  }}
                  transition={{
                    boxShadow: { duration: 2, repeat: Infinity }
                  }}
                >
                  <span className="relative z-10 inline-flex items-center font-bold">
                    I AGREE
                    <ShieldCheck className="ml-3 h-6 w-6 transform group-hover:scale-110 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink opacity-20 w-full h-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerPopup;
