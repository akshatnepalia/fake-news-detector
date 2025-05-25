
import React, { useState, useEffect } from 'react';
import { Progress } from "@/components/ui/progress";

interface InteractiveSkillBarProps {
  name: string;
  level: number;
  color: string;
  index: number;
}

const InteractiveSkillBar: React.FC<InteractiveSkillBarProps> = ({ 
  name, 
  level, 
  color, 
  index 
}) => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Animate skill level with delay based on index
          setTimeout(() => {
            setCurrentLevel(level);
          }, index * 200);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`skill-${name.replace(/\s+/g, '-')}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [name, level, index, isVisible]);

  return (
    <div 
      id={`skill-${name.replace(/\s+/g, '-')}`}
      className={`bg-gray-50 rounded-xl p-6 transition-all duration-500 cursor-pointer
        ${isHovered ? 'shadow-2xl scale-105 bg-white' : 'shadow-lg hover:shadow-xl'}
        animate-fade-in`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className={`text-lg font-semibold transition-colors duration-300 
          ${isHovered ? 'text-blue-600' : 'text-gray-900'}`}>
          {name}
        </h3>
        <span className={`text-sm font-medium transition-all duration-300 
          ${isHovered ? 'text-blue-600 scale-110' : 'text-gray-600'}`}>
          {currentLevel}%
        </span>
      </div>
      <div className="relative">
        <Progress 
          value={currentLevel} 
          className={`h-3 bg-gray-200 transition-all duration-1000 ease-out
            ${isHovered ? 'h-4' : ''}`}
        />
        {isHovered && (
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 transition-all duration-300"
            style={{ width: `${currentLevel}%` }}
          />
        )}
      </div>
    </div>
  );
};

export default InteractiveSkillBar;
