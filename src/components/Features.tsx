
import React from "react";
import { Check, FileSpreadsheet, FileText, Search, Upload, Shield, Calculator } from "lucide-react";

const Features = () => {
  const featuresList = [
    {
      icon: <Search className="h-8 w-8 text-cyber-blue" />,
      title: "AI Tax Law Research",
      description:
        "Navigate complex state-by-state tax laws with our advanced AI web tools. Free AI-powered research keeps you compliant across all 50 states.",
      keywords: "ai tax research, tax law ai, state tax laws, ai compliance tools"
    },
    {
      icon: <Upload className="h-8 w-8 text-cyber-pink" />,
      title: "AI Document Analysis",
      description:
        "Upload receipts, invoices, and financial documents. Our free AI tools automatically identify potential tax deductions using advanced machine learning.",
      keywords: "ai document analysis, receipt scanner ai, tax document ai, free ai tools"
    },
    {
      icon: <Calculator className="h-8 w-8 text-cyber-green" />,
      title: "Personalized AI Tax Q&A",
      description:
        "Engage with our AI tax assistant for detailed conversations about your specific business and tax situation to maximize savings.",
      keywords: "ai tax assistant, personalized tax ai, business tax ai, tax optimization ai"
    },
    {
      icon: <FileSpreadsheet className="h-8 w-8 text-cyber-yellow" />,
      title: "AI Tax Reports",
      description:
        "Receive comprehensive AI-generated tax reports in spreadsheet format with all potential deductions clearly outlined by our advanced algorithms.",
      keywords: "ai tax reports, tax spreadsheet ai, automated tax reports, ai deduction finder"
    },
    {
      icon: <FileText className="h-8 w-8 text-cyber-purple" />,
      title: "AI Tax Form Preparation",
      description:
        "Generate tax form-like documents using AI that you can use as references when filing with your accountant or tax software.",
      keywords: "ai tax forms, tax preparation ai, automated tax forms, ai tax filing"
    },
    {
      icon: <Shield className="h-8 w-8 text-cyber-light-purple" />,
      title: "Secure AI Processing",
      description:
        "Your sensitive financial information remains confidential with enterprise-grade security in our AI web tools infrastructure.",
      keywords: "secure ai tools, private ai tax tools, confidential ai processing, secure tax ai"
    },
  ];

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <header className="text-center mb-16">
          <div className="flex justify-center space-x-2 items-center mb-4">
            <div className="h-[1px] w-12 bg-cyber-blue"></div>
            <span className="text-cyber-blue uppercase tracking-wider font-bold text-sm">
              Advanced Free AI Web Tools
            </span>
            <div className="h-[1px] w-12 bg-cyber-blue"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 cyber-font">
            <span className="cyber-gradient-text">Best AI Tools</span> for Tax Optimization by AiWebTools.AI
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            AiWebTools.AI delivers the most advanced free AI web tools for tax optimization. 
            Our cutting-edge artificial intelligence combines comprehensive tax knowledge with powerful automation.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <article
              key={index}
              className="cyber-card rounded-lg p-6 hover:-translate-y-1 transition-all duration-300 group"
              itemScope
              itemType="https://schema.org/SoftwareApplication"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 
                className="text-xl font-bold mb-2 group-hover:text-cyber-blue transition-colors cyber-font"
                itemProp="name"
              >
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-3" itemProp="description">{feature.description}</p>
              <div className="text-xs text-gray-500">
                <em>Keywords: {feature.keywords}</em>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 border border-white/10 rounded-lg p-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
            <div className="mb-6 md:mb-0 md:w-1/3">
              <h3 className="text-2xl font-bold mb-4 cyber-font">Why Choose AiWebTools.AI Free AI Tools?</h3>
              <div className="h-1 w-20 bg-gradient-to-r from-cyber-blue to-cyber-pink rounded-full"></div>
            </div>
            <div className="md:w-2/3 space-y-4">
              {[
                "Advanced AI trained on extensive tax law databases - Best in class artificial intelligence",
                "State-specific tax guidance for all 50 states using machine learning algorithms",
                "Business-focused deduction finding with deep learning capabilities",
                "Detailed documentation and reporting powered by AI web tools",
                "Secure data handling with enterprise-grade AI security - No storage of sensitive information",
                "Time-saving automation of tedious tax research using cutting-edge AI technology",
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
