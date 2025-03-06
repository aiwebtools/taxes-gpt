
import React from "react";
import { Check, FileSpreadsheet, FileText, Search, Upload, Shield, Calculator } from "lucide-react";

const Features = () => {
  const featuresList = [
    {
      icon: <Search className="h-8 w-8 text-cyber-blue" />,
      title: "Tax Law Research",
      description:
        "Navigate complex state-by-state tax laws and regulations with AI-powered research that keeps you compliant.",
    },
    {
      icon: <Upload className="h-8 w-8 text-cyber-pink" />,
      title: "Document Analysis",
      description:
        "Upload and analyze receipts, invoices, and financial documents to automatically identify potential deductions.",
    },
    {
      icon: <Calculator className="h-8 w-8 text-cyber-green" />,
      title: "Personalized Q&A",
      description:
        "Engage in detailed conversations about your specific business and tax situation to maximize savings.",
    },
    {
      icon: <FileSpreadsheet className="h-8 w-8 text-cyber-yellow" />,
      title: "Comprehensive Reports",
      description:
        "Receive detailed tax reports in spreadsheet format with all potential deductions clearly outlined.",
    },
    {
      icon: <FileText className="h-8 w-8 text-cyber-purple" />,
      title: "Tax Form Preparation",
      description:
        "Generate tax form-like documents that you can use as references when filing with your accountant or tax software.",
    },
    {
      icon: <Shield className="h-8 w-8 text-cyber-light-purple" />,
      title: "Private & Secure",
      description:
        "Your sensitive financial information remains confidential with enterprise-grade security measures.",
    },
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="flex justify-center space-x-2 items-center mb-4">
            <div className="h-[1px] w-12 bg-cyber-blue"></div>
            <span className="text-cyber-blue uppercase tracking-wider font-bold text-sm">
              Powerful Tax Tools
            </span>
            <div className="h-[1px] w-12 bg-cyber-blue"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 cyber-font">
            <span className="cyber-gradient-text">Advanced Features</span> for Your Tax Needs
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Taxes GPT combines cutting-edge AI with comprehensive tax knowledge to deliver a powerful suite of tools designed to optimize your tax strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className="cyber-card rounded-lg p-6 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyber-blue transition-colors cyber-font">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 border border-white/10 rounded-lg p-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
            <div className="mb-6 md:mb-0 md:w-1/3">
              <h3 className="text-2xl font-bold mb-4 cyber-font">Why Choose Taxes GPT?</h3>
              <div className="h-1 w-20 bg-gradient-to-r from-cyber-blue to-cyber-pink rounded-full"></div>
            </div>
            <div className="md:w-2/3 space-y-4">
              {[
                "Advanced AI trained on extensive tax law databases",
                "State-specific tax guidance for all 50 states",
                "Business-focused deduction finding",
                "Detailed documentation and reporting",
                "Secure data handling with no storage of sensitive information",
                "Time-saving automation of tedious tax research",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="mt-1 bg-cyber-blue/20 rounded-full p-1">
                    <Check className="h-4 w-4 text-cyber-blue" />
                  </div>
                  <p className="text-gray-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
