
import React from 'react';

const VeriNewsHeader = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
          <span className="text-2xl">🛡️</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
          VeriNews AI
        </h1>
        <p className="text-xl md:text-2xl mb-6 opacity-90 animate-fade-in">
          Advanced Fake News Detection System
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="bg-white/20 px-4 py-2 rounded-full">NLP Powered</span>
          <span className="bg-white/20 px-4 py-2 rounded-full">Real-time Analysis</span>
          <span className="bg-white/20 px-4 py-2 rounded-full">95% Accuracy</span>
        </div>
      </div>
    </header>
  );
};

export default VeriNewsHeader;
