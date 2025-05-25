
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Brain, Database, TrendingUp, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "Thank you for your interest. I'll get back to you soon!",
      });
      
      // Reset form after success animation
      setTimeout(() => {
        setFormData({ name: '', email: '', project: '' });
        setIsSubmitted(false);
      }, 2000);
    }, 1500);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto animate-fade-in">
            Ready to transform your data into intelligent solutions? Get in touch to discuss your next AI/ML project.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 
              hover:bg-white/15 transition-all duration-300 animate-fade-in">
              <h3 className="text-2xl font-bold text-white mb-6">Areas of Expertise</h3>
              <div className="space-y-4">
                {[
                  { icon: Brain, title: "AI/ML Development", desc: "Python, Algorithms, Predictive Models", color: "blue" },
                  { icon: Database, title: "Data Engineering", desc: "SAS, ETL, Data Processing", color: "purple" },
                  { icon: TrendingUp, title: "Business Analytics", desc: "Statistical Analysis, Business Intelligence", color: "green" }
                ].map((item, index) => (
                  <div 
                    key={item.title}
                    className="flex items-center gap-4 group cursor-pointer hover:scale-105 transition-transform duration-200"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-${item.color}-500/20 flex items-center justify-center 
                      group-hover:bg-${item.color}-500/30 transition-colors duration-200`}>
                      <item.icon className={`w-6 h-6 text-${item.color}-400 group-hover:scale-110 transition-transform duration-200`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors duration-200">
                        {item.title}
                      </h4>
                      <p className="text-blue-200 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                <CheckCircle className="w-16 h-16 text-green-400 mb-4 animate-bounce" />
                <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                <p className="text-blue-200">Thank you for reaching out. I'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="animate-fade-in">
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 
                      focus:bg-white/15 transition-colors duration-200"
                    required
                  />
                </div>
                
                <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 
                      focus:bg-white/15 transition-colors duration-200"
                    required
                  />
                </div>
                
                <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <Label htmlFor="project" className="text-white">Project Details</Label>
                  <Textarea 
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    placeholder="Tell me about your AI/ML or data science project..." 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 min-h-[120px] 
                      focus:bg-white/15 transition-colors duration-200"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 
                    text-white font-semibold py-3 transition-all duration-300 animate-fade-in
                    ${isSubmitting ? 'scale-95 opacity-75' : 'hover:scale-105'}`}
                  style={{ animationDelay: '0.3s' }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
