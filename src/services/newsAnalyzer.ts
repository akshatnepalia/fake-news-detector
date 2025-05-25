
interface AnalysisResult {
  prediction: 'real' | 'fake';
  confidence: number;
  factors: {
    sentiment: number;
    complexity: number;
    credibility: number;
    bias: number;
  };
  explanation: string;
}

export class NewsAnalyzer {
  static async analyzeNews(content: string, title: string, source?: string): Promise<AnalysisResult> {
    // Simulate advanced NLP analysis with realistic scoring
    const words = content.split(' ').length;
    const sentences = content.split(/[.!?]+/).length;
    
    // Calculate various factors
    const sentiment = this.calculateSentiment(content);
    const complexity = this.calculateComplexity(content, words, sentences);
    const credibility = this.calculateCredibility(content, title, source);
    const bias = this.calculateBias(content, title);
    
    // Overall prediction based on weighted factors
    const overallScore = (credibility * 0.4) + (complexity * 0.3) + (sentiment * 0.2) + (bias * 0.1);
    const prediction = overallScore > 0.6 ? 'real' : 'fake';
    const confidence = Math.abs(overallScore - 0.5) * 2;
    
    const explanation = this.generateExplanation(prediction, { sentiment, complexity, credibility, bias });
    
    return {
      prediction,
      confidence,
      factors: { sentiment, complexity, credibility, bias },
      explanation
    };
  }
  
  private static calculateSentiment(content: string): number {
    const positiveWords = ['excellent', 'good', 'great', 'amazing', 'wonderful', 'positive', 'successful'];
    const negativeWords = ['terrible', 'awful', 'horrible', 'disaster', 'crisis', 'scandal', 'shocking'];
    
    const words = content.toLowerCase().split(/\W+/);
    const positiveCount = words.filter(word => positiveWords.includes(word)).length;
    const negativeCount = words.filter(word => negativeWords.includes(word)).length;
    
    // Extreme sentiment can indicate bias
    const sentimentRatio = (positiveCount + negativeCount) / words.length;
    return Math.max(0, Math.min(1, 0.8 - sentimentRatio * 5));
  }
  
  private static calculateComplexity(content: string, words: number, sentences: number): number {
    const avgWordsPerSentence = words / sentences;
    const longWords = content.split(/\W+/).filter(word => word.length > 6).length;
    const complexityRatio = longWords / words;
    
    // Real news typically has moderate complexity
    const idealComplexity = 0.3;
    const complexityScore = 1 - Math.abs(complexityRatio - idealComplexity) * 2;
    
    // Sentence length factor
    const idealSentenceLength = 15;
    const sentenceScore = 1 - Math.abs(avgWordsPerSentence - idealSentenceLength) / 20;
    
    return Math.max(0, Math.min(1, (complexityScore + sentenceScore) / 2));
  }
  
  private static calculateCredibility(content: string, title: string, source?: string): number {
    let score = 0.5; // Base score
    
    // Check for credible sources
    const credibleSources = ['reuters', 'ap', 'bbc', 'npr', 'pbs'];
    if (source && credibleSources.some(cs => source.toLowerCase().includes(cs))) {
      score += 0.3;
    }
    
    // Check for proper attribution and quotes
    const hasQuotes = content.includes('"') && content.includes('"');
    const hasAttribution = /according to|sources say|reported|stated/i.test(content);
    
    if (hasQuotes) score += 0.1;
    if (hasAttribution) score += 0.1;
    
    // Check for clickbait patterns in title
    const clickbaitPatterns = /you won't believe|shocking|amazing|incredible|must see/i;
    if (clickbaitPatterns.test(title)) {
      score -= 0.2;
    }
    
    // Check for factual language vs emotional language
    const factualWords = ['according', 'reported', 'data', 'study', 'research', 'officials'];
    const emotionalWords = ['outrageous', 'unbelievable', 'stunning', 'shocking'];
    
    const factualCount = factualWords.filter(word => content.toLowerCase().includes(word)).length;
    const emotionalCount = emotionalWords.filter(word => content.toLowerCase().includes(word)).length;
    
    score += (factualCount - emotionalCount) * 0.05;
    
    return Math.max(0, Math.min(1, score));
  }
  
  private static calculateBias(content: string, title: string): number {
    // Check for extreme language
    const extremeWords = ['always', 'never', 'all', 'every', 'completely', 'totally', 'absolutely'];
    const extremeCount = extremeWords.filter(word => 
      content.toLowerCase().includes(word) || title.toLowerCase().includes(word)
    ).length;
    
    // Check for balanced reporting indicators
    const balanceIndicators = ['however', 'on the other hand', 'critics say', 'supporters argue'];
    const balanceCount = balanceIndicators.filter(indicator => 
      content.toLowerCase().includes(indicator)
    ).length;
    
    const biasScore = Math.max(0, 0.8 - (extremeCount * 0.1) + (balanceCount * 0.1));
    return Math.min(1, biasScore);
  }
  
  private static generateExplanation(prediction: 'real' | 'fake', factors: any): string {
    const { sentiment, complexity, credibility, bias } = factors;
    
    let explanation = `This article appears to be ${prediction.toUpperCase()} based on analysis of multiple factors:\n\n`;
    
    if (credibility > 0.7) {
      explanation += "✓ High credibility indicators (proper attribution, factual language)\n";
    } else if (credibility < 0.4) {
      explanation += "✗ Low credibility indicators (lacks proper sources, clickbait elements)\n";
    }
    
    if (complexity > 0.6) {
      explanation += "✓ Appropriate complexity and sentence structure\n";
    } else {
      explanation += "✗ Unusual writing complexity patterns\n";
    }
    
    if (bias > 0.6) {
      explanation += "✓ Balanced reporting with minimal bias indicators\n";
    } else {
      explanation += "✗ Shows signs of bias or extreme language\n";
    }
    
    if (sentiment > 0.6) {
      explanation += "✓ Neutral sentiment appropriate for news\n";
    } else {
      explanation += "✗ Extreme emotional language detected\n";
    }
    
    return explanation;
  }
}
