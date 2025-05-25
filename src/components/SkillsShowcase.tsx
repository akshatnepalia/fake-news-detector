
import React from 'react';
import InteractiveSkillBar from './InteractiveSkillBar';

const SkillsShowcase = () => {
  const skills = [
    { name: "Python", level: 95, color: "bg-blue-500" },
    { name: "Machine Learning", level: 90, color: "bg-purple-500" },
    { name: "Statistical Analysis", level: 88, color: "bg-green-500" },
    { name: "SAS", level: 85, color: "bg-orange-500" },
    { name: "ETL Processing", level: 82, color: "bg-red-500" },
    { name: "Data Algorithms", level: 90, color: "bg-cyan-500" }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 to-purple-100"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
            Technical Proficiency
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in">
            Expertise levels across key technologies and methodologies
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <InteractiveSkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                color={skill.color}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
