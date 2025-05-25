
import { Progress } from "@/components/ui/progress";

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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Proficiency
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expertise levels across key technologies and methodologies
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                  <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
                </div>
                <Progress 
                  value={skill.level} 
                  className="h-3 bg-gray-200"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
