
import { Target, TrendingUp, Cpu, Lightbulb } from "lucide-react";

const DayAtGlance = () => {
  const activities = [
    {
      icon: Target,
      title: "Smart Prediction",
      description: "Use predictive models for growth",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Analyse Outcomes",
      description: "Study revenue, ad targets, and business results",
      gradient: "from-green-600 to-teal-600"
    },
    {
      icon: Cpu,
      title: "Build Models",
      description: "Develop algorithms for data analysis",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: Lightbulb,
      title: "Drive Innovation",
      description: "Enhance product development",
      gradient: "from-orange-600 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your Day at A Glance
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Daily activities that transform data into actionable business insights
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div 
              key={activity.title}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${activity.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <activity.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {activity.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${activity.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DayAtGlance;
