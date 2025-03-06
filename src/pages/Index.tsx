
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Add the noise class to body when component mounts
    document.body.classList.add("noise");
    
    // Clean up function to remove the class when component unmounts
    return () => {
      document.body.classList.remove("noise");
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
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
