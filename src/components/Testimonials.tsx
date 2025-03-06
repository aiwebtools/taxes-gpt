
import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael R.",
      role: "Small Business Owner",
      content:
        "Taxes GPT helped me discover deductions I never knew existed for my online business. The state-specific guidance was invaluable as I have customers in multiple states.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=11",
    },
    {
      name: "Sarah J.",
      role: "Freelance Consultant",
      content:
        "As someone who dreads tax season, Taxes GPT made the process almost enjoyable. The AI asked me all the right questions and found several deductions my previous accountant missed!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "David K.",
      role: "E-commerce Entrepreneur",
      content:
        "I was skeptical at first, but Taxes GPT exceeded my expectations. It helped me navigate complex inventory deductions and saved me thousands on my business taxes.",
      rating: 4,
      image: "https://i.pravatar.cc/150?img=8",
    },
  ];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-b from-cyber-dark to-cyber-darker"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="flex justify-center space-x-2 items-center mb-4">
            <div className="h-[1px] w-12 bg-cyber-blue"></div>
            <span className="text-cyber-blue uppercase tracking-wider font-bold text-sm">
              Success Stories
            </span>
            <div className="h-[1px] w-12 bg-cyber-blue"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 cyber-font">
            What Our Users <span className="cyber-gradient-text">Are Saying</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Join thousands of satisfied users who have simplified their tax process and maximized their deductions with Taxes GPT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="cyber-card rounded-lg p-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-cyber-blue/50">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? "text-cyber-yellow fill-cyber-yellow"
                          : "text-gray-500"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-300 flex-grow mb-4">"{testimonial.content}"</p>
                <div className="h-1 w-16 bg-gradient-to-r from-cyber-blue to-cyber-pink rounded-full mt-auto"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
