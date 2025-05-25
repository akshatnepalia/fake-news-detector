
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Brain, Database, TrendingUp } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to transform your data into intelligent solutions? Get in touch to discuss your next AI/ML project.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Areas of Expertise</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">AI/ML Development</h4>
                    <p className="text-blue-200 text-sm">Python, Algorithms, Predictive Models</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <Database className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Data Engineering</h4>
                    <p className="text-blue-200 text-sm">SAS, ETL, Data Processing</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Business Analytics</h4>
                    <p className="text-blue-200 text-sm">Statistical Analysis, Business Intelligence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            <form className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-white">Name</Label>
                <Input 
                  id="name" 
                  placeholder="Your name" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your.email@example.com" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
              </div>
              <div>
                <Label htmlFor="project" className="text-white">Project Details</Label>
                <Textarea 
                  id="project" 
                  placeholder="Tell me about your AI/ML or data science project..." 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 min-h-[120px]"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-3">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
    </section>
  );
};

export default ContactSection;
