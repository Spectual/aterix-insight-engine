import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Database, Server, Brain, Cpu, BarChart3 } from 'lucide-react';

const DeepDiveAccordion = () => {
  const technicalSections = [
    {
      id: "data-pipeline",
      title: "Data Pipeline",
      icon: Database,
      content: "Our sophisticated data pipeline employs event-driven architecture with Apache Kafka for real-time streaming, ensuring sub-second latency from source to processing. We utilize custom MinHash algorithms for near-duplicate detection and advanced entity resolution techniques including fuzzy matching and machine learning-based disambiguation. The pipeline handles over 10TB of data daily with 99.9% uptime and automatic failover capabilities."
    },
    {
      id: "storage-strategy", 
      title: "Storage Strategy",
      icon: Server,
      content: "Multi-tiered storage architecture optimizes for both performance and compliance. Hot data resides in high-performance vector databases with sub-millisecond query times, while warm data is stored in time-series databases for historical analysis. Cold storage maintains 7-year compliance archives with encryption at rest. Our hybrid cloud approach ensures data sovereignty while maintaining global accessibility."
    },
    {
      id: "prompt-engineering",
      title: "Prompt Engineering", 
      icon: Brain,
      content: "Advanced prompt engineering leverages retrieval-augmented generation (RAG) with domain-specific context windows. Our prompts are optimized for financial terminology and regulatory requirements, incorporating few-shot learning and chain-of-thought reasoning. We maintain separate prompt libraries for different analysis types including fundamental analysis, technical analysis, and regulatory compliance reporting."
    },
    {
      id: "llm-models",
      title: "LLM Models",
      icon: Cpu,
      content: "Ensemble of specialized large language models including fine-tuned financial models, custom domain adapters, and multi-modal processing capabilities. We employ model routing based on query type and complexity, with fallback mechanisms and confidence scoring. All models are continuously evaluated for accuracy, bias detection, and regulatory compliance with human-in-the-loop validation for critical outputs."
    },
    {
      id: "monitoring-metrics",
      title: "Monitoring & Metrics",
      icon: BarChart3,
      content: "Comprehensive observability stack monitors data quality, processing latency, model performance, and system health in real-time. Key metrics include data freshness, entity resolution accuracy, prompt effectiveness, and compliance coverage. Automated alerting with escalation procedures ensures rapid response to anomalies. All metrics are logged for audit trails and continuous improvement initiatives."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-midnight mb-4">
            Technical Deep Dive
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the sophisticated technology stack that powers Aterix's intelligent research engine.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {technicalSections.map((section) => (
              <AccordionItem
                key={section.id}
                value={section.id}
                className="border border-border rounded-lg px-6 bg-card hover:bg-muted/30 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-brand-teal/10 rounded-lg">
                      <section.icon className="w-5 h-5 text-brand-teal" />
                    </div>
                    <span className="text-lg font-heading font-semibold text-brand-midnight">
                      {section.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-2">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-16 flex justify-center">
                      <div className="w-px bg-brand-teal/30"></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {section.content}
                      </p>
                      <div className="h-20 bg-muted/50 rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/20">
                        <span className="text-muted-foreground text-sm">Technical Diagram Placeholder</span>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default DeepDiveAccordion;