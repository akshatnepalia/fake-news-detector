
import VeriNewsHeader from "@/components/VeriNewsHeader";
import FeatureShowcase from "@/components/FeatureShowcase";
import NewsAnalysisForm from "@/components/NewsAnalysisForm";
import StatsSection from "@/components/StatsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <VeriNewsHeader />
      <FeatureShowcase />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Try VeriNews AI
            </h2>
            <p className="text-xl text-gray-600">
              Paste any news article below to analyze its authenticity
            </p>
          </div>
          <NewsAnalysisForm />
        </div>
      </section>
      <StatsSection />
    </div>
  );
};

export default Index;
