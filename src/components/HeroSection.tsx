
import React, { useState, useEffect } from 'react';
import { Brain, Database, TrendingUp } from "lucide-react";
import AnimatedCounter from './AnimatedCounter';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const rotatingTexts = [
    "AI/ML Data Expert",
    "Python Developer", 
    "Data Scientist",
    "ML Engineer"
  ];

  const stats = [
    { value: 94, suffix: '%', label: 'Model Accuracy' },
    { value: 10, suffix: 'M+', label: 'Records Processed' },
    { value: 35, suffix: '%', label: 'Performance Boost' },
    { value: 5, suffix: '+', label: 'Years Experience' }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-cyan-500/20 rounded-full blur-lg animate-bounce"></div>
      <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-pink-500/20 rounded-full blur-lg animate-ping"></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent min-h-[120px] flex items-center justify-center">
            <span className="animate-fade-in" key={currentText}>
              {rotatingTexts[currentText]}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto animate-fade-in">
            Transforming data into intelligent solutions through advanced machine learning and predictive analytics
          </p>
          
          {/* Interactive Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 
                  hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer
                  animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-2xl md:text-3xl font-bold text-blue-300 mb-2">
                  <AnimatedCounter 
                    end={stat.value} 
                    suffix={stat.suffix}
                    duration={2000 + (index * 200)}
                  />
                </div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { icon: Brain, text: "AI/ML Models", color: "text-blue-400" },
              { icon: Database, text: "Data Management", color: "text-purple-400" },
              { icon: TrendingUp, text: "Statistical Analysis", color: "text-green-400" }
            ].map((item, index) => (
              <div 
                key={item.text}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 
                  border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 
                  cursor-pointer animate-fade-in group"
                style={{ animationDelay: `${0.5 + (index * 0.1)}s` }}
              >
                <item.icon className={`w-5 h-5 ${item.color} group-hover:animate-pulse`} />
                <span className="font-medium group-hover:text-white transition-colors duration-300">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 
            text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 
            hover:scale-105 hover:shadow-2xl animate-fade-in">
            Explore My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
