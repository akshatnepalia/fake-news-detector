
import React from 'react';
import AnimatedCounter from './AnimatedCounter';

const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">
              <AnimatedCounter end={95} suffix="%" />
            </div>
            <div className="text-lg opacity-90">Accuracy Rate</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">
              <AnimatedCounter end={10000} suffix="+" />
            </div>
            <div className="text-lg opacity-90">Articles Analyzed</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">
              <AnimatedCounter end={500} suffix="ms" />
            </div>
            <div className="text-lg opacity-90">Average Analysis Time</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">
              <AnimatedCounter end={12} />
            </div>
            <div className="text-lg opacity-90">Analysis Factors</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
