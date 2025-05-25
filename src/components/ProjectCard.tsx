
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { LucideIcon } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  icon: LucideIcon;
  gradient: string;
  index: number;
  onViewDetails: (title: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  icon: Icon,
  gradient,
  index,
  onViewDetails
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group relative bg-white rounded-2xl shadow-lg transition-all duration-500 cursor-pointer
        ${isHovered ? 'shadow-2xl -translate-y-4' : 'hover:shadow-xl hover:-translate-y-2'}
        animate-fade-in border border-gray-100`}
      style={{ 
        animationDelay: `${index * 0.1}s`,
        perspective: '1000px'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d
        ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden p-8">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${gradient} flex items-center justify-center mb-6 
            transition-transform duration-300 ${isHovered ? 'scale-110 rotate-12' : ''}`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          
          <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300
            ${isHovered ? 'text-blue-600' : 'text-gray-900'}`}>
            {title}
          </h3>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((techItem, techIndex) => (
              <span 
                key={techItem}
                className={`px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium 
                  transition-all duration-200 hover:bg-blue-100 hover:text-blue-700
                  animate-fade-in`}
                style={{ animationDelay: `${(index * 0.1) + (techIndex * 0.05)}s` }}
              >
                {techItem}
              </span>
            ))}
          </div>
          
          <Button 
            className={`w-full transition-all duration-300 ${isHovered ? 'scale-105' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(title);
            }}
          >
            View Details
          </Button>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 p-8 
          bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="h-full flex flex-col justify-center items-center text-center">
            <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center mb-6`}>
              <Icon className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Project Details</h3>
            <p className="text-gray-600 mb-6">
              Click "View Details" to explore this project in depth, including implementation details, 
              challenges overcome, and business impact.
            </p>
            <Button 
              variant="outline"
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
            >
              Back to Overview
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
