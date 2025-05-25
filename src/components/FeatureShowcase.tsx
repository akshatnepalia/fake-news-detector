
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FeatureShowcase = () => {
  const features = [
    {
      icon: "🧠",
      title: "Advanced NLP",
      description: "Uses transformer models to analyze linguistic patterns, sentiment, and writing complexity to detect misinformation."
    },
    {
      icon: "📊",
      title: "Multi-Factor Analysis",
      description: "Examines credibility indicators, bias patterns, source reliability, and factual language usage."
    },
    {
      icon: "⚡",
      title: "Real-time Detection",
      description: "Instant analysis of news articles with detailed explanations and confidence scores."
    },
    {
      icon: "🎯",
      title: "High Accuracy",
      description: "Trained on diverse datasets with advanced algorithms achieving 95%+ accuracy in fake news detection."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How VeriNews AI Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our advanced AI system analyzes multiple aspects of news articles to determine authenticity and credibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
