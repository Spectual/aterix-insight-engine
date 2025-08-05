import { Database, RefreshCw, Brain, Shield } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const FeatureGrid = () => {
  const features = [
    {
      icon: Database,
      title: "Multi-Source Harvesting",
      description: "Continuously collect data from market prices, SEC filings, global newswires, social media, and macro-economic feeds in real-time.",
      details: "Our system monitors 50+ data sources 24/7, ensuring you never miss critical market information."
    },
    {
      icon: RefreshCw,
      title: "AI Cleaning & De-Duplication", 
      description: "Advanced MinHash algorithms and entity resolution ensure clean, deduplicated data aligned to correct tickers.",
      details: "Reduces data noise by 95% while maintaining 99.9% accuracy in entity matching."
    },
    {
      icon: Brain,
      title: "RAG-Enhanced Insights",
      description: "Large language models deliver concise summaries with inline citations, making complex data actionable.",
      details: "Every insight includes direct citations to source materials for full transparency and verification."
    },
    {
      icon: Shield,
      title: "Compliance & Audit Trail",
      description: "7-year raw data archive with Reg BI compliant reporting ensures full auditability and regulatory compliance.",
      details: "Built-in compliance features meet SEC, FINRA, and international regulatory requirements."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-midnight mb-4">
            Powerful Features for Modern Investors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every feature is designed to eliminate friction in your research workflow while maintaining the highest standards of accuracy and compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-brand-teal/30">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-brand-teal/10 rounded-lg group-hover:bg-brand-teal/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-brand-teal" />
                  </div>
                  <CardTitle className="text-xl font-heading text-brand-midnight">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </CardDescription>
                <div className="text-sm text-brand-teal font-medium group-hover:text-brand-teal/80 transition-colors">
                  {feature.details}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;