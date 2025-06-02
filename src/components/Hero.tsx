
import React, { useEffect, useRef } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;

      if (videoRef.current) {
        videoRef.current.style.setProperty("--mouse-x", `${x}%`);
        videoRef.current.style.setProperty("--mouse-y", `${y}%`);
      }
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
        <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-10"></div>
      </div>

      <div className="scanline absolute top-0 left-0 w-full h-screen z-10 opacity-30 pointer-events-none"></div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="flex space-x-2 items-center">
                <div className="h-[1px] w-12 bg-cyber-blue"></div>
                <span className="text-cyber-blue uppercase tracking-wider font-bold text-sm">
                  Tax Intelligence Redefined
                </span>
              </div>

              <h1
                data-text="Maximize Your Tax Savings with AI Precision"
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight glitch-effect"
              >
                Maximize Your Tax Savings with AI Precision
              </h1>

              <p className="text-lg md:text-xl text-gray-300 max-w-xl">
                Break free from tax confusion. Navigate state-by-state regulations and discover hidden deductions with an AI partner trained on the latest tax codes.
              </p>

              <div className="pt-6 flex flex-wrap gap-4">
                <a
                  href="https://chatgpt.com/g/g-c9YFehgdQ-taxes-gpt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-button rounded-md text-lg animate-pulse-glow"
                >
                  <span>Get Started Now</span>
                </a>
                <button
                  onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-transparent border border-white/30 hover:border-cyber-blue/70 text-white px-6 py-3 rounded-md transition-all duration-300 text-lg"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div ref={videoRef} className="order-1 lg:order-2">
            <div className="rounded-lg overflow-hidden animate-float pixel-corners">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/xkcsSVbBhf4?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&hd=1"
                title="Taxes GPT Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="aspect-video"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Stats/Highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              number: "50+",
              text: "State Tax Codes Covered",
              icon: "📊",
            },
            {
              number: "300+",
              text: "Deductions Identified",
              icon: "💰",
            },
            {
              number: "24/7",
              text: "AI-Powered Assistance",
              icon: "🤖",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="cyber-card rounded-lg p-6 flex flex-col items-center text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-cyber-blue mb-2 cyber-font">
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
