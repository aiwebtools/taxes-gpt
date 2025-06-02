
import React from "react";
import { AlertTriangle, BookOpen } from "lucide-react";

const Disclaimer = () => {
  return (
    <section id="disclaimer" className="py-20 relative bg-cyber-darker">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="flex justify-center space-x-2 items-center mb-4">
            <div className="h-[1px] w-12 bg-cyber-blue"></div>
            <span className="text-cyber-blue uppercase tracking-wider font-bold text-sm">
              Legal Information
            </span>
            <div className="h-[1px] w-12 bg-cyber-blue"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 cyber-font">
            Legal <span className="cyber-gradient-text">Disclaimer</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Important information about the use of Taxes GPT and its limitations.
          </p>
        </div>

        <div className="cyber-card rounded-lg p-8 mb-10">
          <div className="flex items-start mb-6">
            <BookOpen className="h-6 w-6 text-cyber-yellow mr-3 flex-shrink-0 mt-1" />
            <h3 className="text-xl font-bold cyber-font">Educational Purpose</h3>
          </div>
          <div className="text-gray-300 mb-8">
            <p className="text-lg">
              <strong>This tool is provided for informational, educational, and research purposes only.</strong> The content and features are designed to help users understand tax concepts and explore potential strategies, but should not be considered as professional tax advice.
            </p>
          </div>
        </div>

        <div className="cyber-card rounded-lg p-8 mb-10">
          <div className="flex items-start mb-6">
            <AlertTriangle className="h-6 w-6 text-cyber-yellow mr-3 flex-shrink-0 mt-1" />
            <h3 className="text-xl font-bold cyber-font">Disclaimer</h3>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              Taxes GPT is an AI assistant designed to provide information and guidance related to tax matters. However, please be aware of the following important limitations:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Not Professional Advice:</strong> The information provided by Taxes GPT does not constitute professional tax, legal, or financial advice. Always consult with a qualified tax professional, accountant, or attorney for advice specific to your situation.
              </li>
              <li>
                <strong>No Guarantee of Accuracy:</strong> While we strive for accuracy, tax laws and regulations change frequently. The information provided may not be current or applicable to your specific circumstances.
              </li>
              <li>
                <strong>No Fiduciary Relationship:</strong> Use of Taxes GPT does not create a client-professional relationship of any kind.
              </li>
              <li>
                <strong>User Responsibility:</strong> Users are solely responsible for verifying all information and for any actions taken based on the information provided by Taxes GPT.
              </li>
              <li>
                <strong>No Liability:</strong> AI Web Tools LLC and its affiliates disclaim all liability for any errors, inaccuracies, or omissions in the information provided and for any decisions made or actions taken in reliance upon such information.
              </li>
            </ul>
            <p>
              By using Taxes GPT, you acknowledge and agree that you understand these limitations and that you use the service at your own risk.
            </p>
          </div>
        </div>

        <div className="cyber-card rounded-lg p-8">
          <h3 className="text-xl font-bold cyber-font mb-6">Privacy Statement</h3>
          <div className="space-y-4 text-gray-300">
            <p>
              We take your privacy seriously. Here's how we handle your data:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Document Analysis:</strong> Any documents uploaded for analysis are processed securely and are not stored permanently.
              </li>
              <li>
                <strong>No Personal Information:</strong> Taxes GPT does not require or store sensitive personal information such as social security numbers.
              </li>
              <li>
                <strong>Data Security:</strong> We implement appropriate security measures to protect against unauthorized access to or unauthorized alteration, disclosure, or destruction of data.
              </li>
              <li>
                <strong>Third-Party Services:</strong> Taxes GPT operates on the ChatGPT platform, which has its own privacy policies. We recommend reviewing OpenAI's privacy policy as well.
              </li>
            </ul>
            <p>
              For full details about how we collect, use, and protect your information, please refer to our complete Privacy Policy.
            </p>
            <div className="mt-6">
              <a
                href="https://openai.com/policies/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-blue hover:underline"
              >
                Privacy Policy
              </a>
              {" | "}
              <a
                href="https://aiwebtools.lovable.app/disclaimers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-blue hover:underline"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
