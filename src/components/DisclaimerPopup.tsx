
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg mx-auto"
          >
            <div className="relative cyber-card p-6 md:p-8 overflow-visible">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink"></div>
              
              {/* Icon */}
              <div className="bg-cyber-dark-purple w-16 h-16 -mt-14 mb-4 mx-auto rounded-full flex items-center justify-center border border-cyber-blue/50 shadow-[0_0_15px_rgba(14,255,255,0.3)]">
                <Shield className="h-8 w-8 text-cyber-blue animate-pulse" />
              </div>
              
              <h2 className="text-2xl font-bold cyber-font text-center mb-4">
                <span className="cyber-gradient-text">DISCLAIMER</span>
              </h2>
              
              <div className="text-center text-sm text-cyber-yellow mb-4">
                <p><strong>For informational, educational, and research purposes only</strong></p>
              </div>
              
              <div className="space-y-3 text-gray-300 mb-6 max-h-[50vh] overflow-y-auto scrollbar-none">
                <p className="text-sm">
                  By using Taxes GPT, you acknowledge and agree to the following:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>
                    <strong>Not Professional Advice:</strong> Information provided is for guidance only and does not replace professional tax consultation.
                  </li>
                  <li>
                    <strong>No Liability:</strong> AI Web Tools LLC is not liable for decisions made based on information provided by this tool.
                  </li>
                  <li>
                    <strong>No Data Storage:</strong> Your financial information is processed securely and not permanently stored.
                  </li>
                  <li>
                    <strong>Terms of Service:</strong> Use of this service is subject to our{" "}
                    <a
                      href="https://aiwebtools.lovable.app/disclaimers"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyber-blue hover:underline"
                    >
                      Terms of Service
                    </a>{" "}
                    and Privacy Policy.
                  </li>
                </ul>
              </div>
              
              <div className="flex justify-center">
                <button
                  onClick={handleAgree}
                  className="group relative cyber-button px-8 py-3 rounded-md overflow-hidden transition-all duration-300"
                >
                  <span className="relative z-10 inline-flex items-center font-bold">
                    I AGREE
                    <ShieldCheck className="ml-2 h-5 w-5 transform group-hover:scale-110 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-cyber-blue/10 w-full h-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerPopup;
