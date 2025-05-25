
import { Button } from "@/components/ui/button";
import { Brain, Database, TrendingUp, Target } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Predictive Revenue Model",
      description: "Built machine learning models to predict quarterly revenue with 94% accuracy using Python and advanced statistical algorithms.",
      tech: ["Python", "Scikit-learn", "Pandas", "Statistical Analysis"],
      icon: TrendingUp,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "ETL Data Pipeline",
      description: "Designed and implemented robust ETL processes for processing 10M+ records daily using SAS and Python automation.",
      tech: ["SAS", "Python", "ETL", "Data Processing"],
      icon: Database,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Customer Behavior Analytics",
      description: "Developed AI models to analyze customer behavior patterns and improve ad targeting strategies by 35%.",
      tech: ["Machine Learning", "Data Analysis", "Python", "Algorithms"],
      icon: Brain,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Business Intelligence Dashboard",
      description: "Created comprehensive BI solutions to visualize business outcomes and drive data-driven decision making.",
      tech: ["Data Visualization", "Statistical Analysis", "Python", "Business Intelligence"],
      icon: Target,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-world applications of AI/ML expertise driving business value
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <project.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <Button className="w-full group-hover:scale-105 transition-transform duration-200">
                View Details
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
