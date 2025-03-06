
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Add the noise class to body when component mounts
    document.body.classList.add("noise");
    
    // Clean up function to remove the class when component unmounts
    return () => {
      document.body.classList.remove("noise");
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyber-dark p-6">
      <div className="cyber-card rounded-lg p-8 md:p-12 max-w-md w-full text-center">
        <div className="text-9xl font-bold cyber-font mb-4 cyber-gradient-text">404</div>
        <h1 className="text-2xl md:text-3xl font-bold mb-4 cyber-font">Page Not Found</h1>
        <p className="text-gray-300 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="cyber-button rounded-md inline-flex items-center"
        >
          <span>
            <ArrowLeft className="h-5 w-5 mr-2 inline" />
            Return to Home
          </span>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
