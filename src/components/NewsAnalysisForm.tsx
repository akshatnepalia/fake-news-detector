
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { NewsAnalyzer } from '@/services/newsAnalyzer';

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

const NewsAnalysisForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [source, setSource] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const { toast } = useToast();

  const handleAnalyze = async () => {
    if (!title.trim() || !content.trim()) {
      toast({
        title: "Missing Information",
        description: "Please provide both title and content to analyze.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    
    try {
      // Simulate processing time for better UX
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const analysisResult = await NewsAnalyzer.analyzeNews(content, title, source);
      setResult(analysisResult);
      
      toast({
        title: "Analysis Complete",
        description: `Article classified as ${analysisResult.prediction.toUpperCase()} with ${Math.round(analysisResult.confidence * 100)}% confidence.`,
      });
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: "An error occurred during analysis. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const clearForm = () => {
    setTitle('');
    setContent('');
    setSource('');
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            News Article Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-2">
              Article Title *
            </label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the news article title..."
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="source" className="block text-sm font-medium mb-2">
              Source (Optional)
            </label>
            <Input
              id="source"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              placeholder="e.g., CNN, BBC, Reuters..."
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium mb-2">
              Article Content *
            </label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Paste the full article content here..."
              className="w-full min-h-[200px]"
            />
          </div>

          <div className="flex gap-3">
            <Button 
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              {isAnalyzing ? "Analyzing..." : "Analyze Article"}
            </Button>
            <Button 
              onClick={clearForm}
              variant="outline"
              disabled={isAnalyzing}
            >
              Clear
            </Button>
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card className={`border-2 ${result.prediction === 'real' ? 'border-green-500' : 'border-red-500'}`}>
          <CardHeader>
            <CardTitle className={`text-center text-2xl font-bold ${
              result.prediction === 'real' ? 'text-green-600' : 'text-red-600'
            }`}>
              {result.prediction === 'real' ? '✓ LIKELY REAL' : '✗ LIKELY FAKE'}
            </CardTitle>
            <p className="text-center text-lg">
              Confidence: <span className="font-semibold">{Math.round(result.confidence * 100)}%</span>
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {Math.round(result.factors.credibility * 100)}%
                </div>
                <div className="text-sm text-gray-600">Credibility</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {Math.round(result.factors.complexity * 100)}%
                </div>
                <div className="text-sm text-gray-600">Complexity</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {Math.round(result.factors.bias * 100)}%
                </div>
                <div className="text-sm text-gray-600">Neutrality</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">
                  {Math.round(result.factors.sentiment * 100)}%
                </div>
                <div className="text-sm text-gray-600">Sentiment</div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Analysis Explanation:</h4>
              <pre className="whitespace-pre-wrap text-sm text-gray-700">
                {result.explanation}
              </pre>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default NewsAnalysisForm;
