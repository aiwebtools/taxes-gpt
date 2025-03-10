
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import DisclaimerPopup from "@/components/DisclaimerPopup";

const Index = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    // Add the noise class to body when component mounts
    document.body.classList.add("noise");
    
    // Check if user has already agreed to disclaimer
    const hasAgreed = localStorage.getItem("taxesGptDisclaimerAgreed");
    
    if (!hasAgreed) {
      // Show disclaimer if user hasn't agreed yet
      setShowDisclaimer(true);
    }
    
    // Clean up function to remove the class when component unmounts
    return () => {
      document.body.classList.remove("noise");
    };
  }, []);

  const handleAgree = () => {
    // Save agreement to localStorage
    localStorage.setItem("taxesGptDisclaimerAgreed", "true");
    setShowDisclaimer(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <DisclaimerPopup shown={showDisclaimer} onAgree={handleAgree} />
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTA />
        <Disclaimer />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
