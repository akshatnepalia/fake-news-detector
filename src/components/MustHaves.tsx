
import { Code, Database, BarChart3, Calculator } from "lucide-react";

const MustHaves = () => {
  const skills = [
    {
      icon: Code,
      title: "Work Experience",
      description: "Expertise in AI/ML Models, Python",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Knowledge of SAS, ETL, Data Processing",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: BarChart3,
      title: "Data Expert",
      description: "Knowledge of Data Analysis, Algorithms",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Calculator,
      title: "Statistics & Analysis",
      description: "Skilled in statistical analysis techniques",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Must-Haves
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Core competencies that drive data-driven decision making and innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.title}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {skill.description}
              </p>
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MustHaves;
