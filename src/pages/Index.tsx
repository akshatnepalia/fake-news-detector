
import HeroSection from "@/components/HeroSection";
import MustHaves from "@/components/MustHaves";
import SkillsShowcase from "@/components/SkillsShowcase";
import DayAtGlance from "@/components/DayAtGlance";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MustHaves />
      <SkillsShowcase />
      <DayAtGlance />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
