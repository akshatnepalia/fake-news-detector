
import React, { useState } from 'react';
import { Brain, Database, TrendingUp, Target } from "lucide-react";
import ProjectCard from './ProjectCard';
import { useToast } from "@/hooks/use-toast";

const ProjectsSection = () => {
  const { toast } = useToast();
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: "Predictive Revenue Model",
      description: "Built machine learning models to predict quarterly revenue with 94% accuracy using Python and advanced statistical algorithms.",
      tech: ["Python", "Scikit-learn", "Pandas", "Statistical Analysis"],
      icon: TrendingUp,
      gradient: "from-blue-500 to-cyan-500",
      category: "ml"
    },
    {
      title: "ETL Data Pipeline",
      description: "Designed and implemented robust ETL processes for processing 10M+ records daily using SAS and Python automation.",
      tech: ["SAS", "Python", "ETL", "Data Processing"],
      icon: Database,
      gradient: "from-purple-500 to-pink-500",
      category: "data"
    },
    {
      title: "Customer Behavior Analytics",
      description: "Developed AI models to analyze customer behavior patterns and improve ad targeting strategies by 35%.",
      tech: ["Machine Learning", "Data Analysis", "Python", "Algorithms"],
      icon: Brain,
      gradient: "from-green-500 to-emerald-500",
      category: "ml"
    },
    {
      title: "Business Intelligence Dashboard",
      description: "Created comprehensive BI solutions to visualize business outcomes and drive data-driven decision making.",
      tech: ["Data Visualization", "Statistical Analysis", "Python", "Business Intelligence"],
      icon: Target,
      gradient: "from-orange-500 to-red-500",
      category: "bi"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'data', label: 'Data Engineering' },
    { id: 'bi', label: 'Business Intelligence' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const handleViewDetails = (title: string) => {
    toast({
      title: "Project Details",
      description: `Opening detailed view for "${title}" project...`,
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 animate-fade-in">
            Real-world applications of AI/ML expertise driving business value
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 
                  ${filter === category.id 
                    ? 'bg-blue-600 text-white shadow-lg scale-105' 
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 shadow-sm hover:shadow-md'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
              icon={project.icon}
              gradient={project.gradient}
              index={index}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
