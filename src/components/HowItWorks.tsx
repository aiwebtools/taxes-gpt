
import React from "react";
import { MessagesSquare, Upload, FileSearch, FileCheck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessagesSquare className="h-10 w-10 text-cyber-blue" />,
      title: "Engage in Conversation",
      description:
        "Start by telling Taxes GPT about your business, state of operation, and specific tax concerns you have.",
    },
    {
      icon: <Upload className="h-10 w-10 text-cyber-pink" />,
      title: "Upload Documents",
      description:
        "Share relevant receipts, invoices, and financial documents for the AI to analyze and categorize.",
    },
    {
      icon: <FileSearch className="h-10 w-10 text-cyber-purple" />,
      title: "AI Analysis",
      description:
        "Taxes GPT processes your information, researches applicable tax laws, and identifies potential deductions.",
    },
    {
      icon: <FileCheck className="h-10 w-10 text-cyber-green" />,
      title: "Receive Tax Report",
      description:
        "Download your comprehensive tax report with maximized deductions and clear explanations.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 relative bg-cyber-darker">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="flex justify-center space-x-2 items-center mb-4">
            <div className="h-[1px] w-12 bg-cyber-blue"></div>
            <span className="text-cyber-blue uppercase tracking-wider font-bold text-sm">
              Simple Process
            </span>
            <div className="h-[1px] w-12 bg-cyber-blue"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 cyber-font">
            How <span className="cyber-gradient-text">Taxes GPT</span> Works
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Our streamlined process makes tax optimization accessible to everyone, regardless of tax expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-[2px] bg-gradient-to-r from-cyber-blue to-transparent -z-10 transform translate-x-[-50%]"></div>
              )}
              
              <div className="cyber-card rounded-lg p-6 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 rounded-full p-4 border border-cyber-blue/30">
                    {step.icon}
                  </div>
                  <div className="cyber-font text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                    Step {index + 1}: {step.title}
                  </div>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://chatgpt.com/g/g-c9YFehgdQ-taxes-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-button rounded-md inline-block"
          >
            <span>Get Started Now</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
