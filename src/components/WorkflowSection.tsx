import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const WorkflowSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Planner",
      description: "AI agents identify research objectives and plan data collection strategies.",
      tooltip: "Smart planning ensures comprehensive coverage of relevant information sources."
    },
    {
      title: "Sources", 
      description: "Multi-agent system harvests data from 50+ financial and news sources.",
      tooltip: "Real-time ingestion from markets, filings, news, social media, and macro data."
    },
    {
      title: "Clean & Align",
      description: "Advanced algorithms clean, deduplicate, and align data to correct tickers.",
      tooltip: "MinHash and entity resolution ensure 99.9% accuracy in data processing."
    },
    {
      title: "Vector Store",
      description: "Processed data is embedded and stored in high-performance vector database.",
      tooltip: "Optimized for fast retrieval and semantic search across millions of data points."
    },
    {
      title: "LLM Summary",
      description: "Large language models generate insights with inline citations.",
      tooltip: "RAG-enhanced analysis provides contextual intelligence with full transparency."
    },
    {
      title: "Report Delivery",
      description: "Automated PDF/HTML reports delivered daily with audit trail.",
      tooltip: "Compliance-ready reports with 7-year data retention for regulatory requirements."
    }
  ];

  return (
    <section id="workflow" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-midnight mb-4">
            How Aterix Transforms Your Research Workflow
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our multi-agent system orchestrates complex research tasks through an intelligent pipeline.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop Horizontal Workflow */}
          <div className="hidden md:block">
            <div className="flex items-center justify-between mb-8">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div 
                    className={`relative group cursor-pointer transition-all duration-300 ${
                      activeStep === index ? 'scale-110' : 'hover:scale-105'
                    }`}
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                      activeStep === index 
                        ? 'bg-brand-teal text-brand-white shadow-lg' 
                        : 'bg-brand-white border-2 border-brand-teal text-brand-teal hover:bg-brand-teal/10'
                    }`}>
                      {index + 1}
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <div className="bg-brand-midnight text-brand-white text-sm p-3 rounded-lg shadow-lg max-w-xs">
                        {step.tooltip}
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-brand-midnight rotate-45"></div>
                      </div>
                    </div>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-brand-teal mx-4" />
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center bg-brand-white rounded-xl p-8 shadow-lg border-2 border-brand-teal/20">
              <h3 className="text-2xl font-heading font-bold text-brand-midnight mb-4">
                {steps[activeStep].title}
              </h3>
              <p className="text-muted-foreground text-lg">
                {steps[activeStep].description}
              </p>
            </div>
          </div>

          {/* Mobile Vertical Workflow */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-brand-teal text-brand-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-12 bg-brand-teal/30 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <h3 className="text-xl font-heading font-bold text-brand-midnight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;