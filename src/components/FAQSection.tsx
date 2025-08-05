import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      id: "exchanges",
      question: "Which exchanges and markets are covered?",
      answer: "Aterix covers all major global exchanges including NYSE, NASDAQ, LSE, Euronext, Tokyo Stock Exchange, and more. We also monitor cryptocurrency exchanges, commodities markets, forex, and alternative trading systems. Coverage includes real-time pricing, volume data, and corporate actions across 50+ markets worldwide."
    },
    {
      id: "data-freshness",
      question: "How fresh is the data?",
      answer: "Market data is updated in real-time with sub-second latency. News and social media feeds are processed within minutes of publication. SEC filings are ingested immediately upon release. Our system maintains 99.9% uptime with automatic failover to ensure continuous data flow."
    },
    {
      id: "price-prediction",
      question: "Does Aterix predict prices or provide investment advice?",
      answer: "No, Aterix is a research and intelligence platform, not a prediction or advisory service. We provide comprehensive data analysis, insights, and summaries to inform your decision-making process. All investment decisions remain with you and your team."
    },
    {
      id: "compliance",
      question: "How does Aterix ensure regulatory compliance?",
      answer: "We maintain SOC 2 Type II and ISO 27001 certifications, implement 7-year data retention policies, provide complete audit trails, and ensure all reports meet Reg BI requirements. Our compliance team continuously monitors regulatory changes and updates our systems accordingly."
    },
    {
      id: "integration",
      question: "Can Aterix integrate with our existing systems?",
      answer: "Yes, Aterix offers comprehensive APIs and supports common data formats including JSON, CSV, and XML. We provide native integrations with popular portfolio management systems, CRMs, and trading platforms. Our technical team assists with custom integration requirements."
    },
    {
      id: "data-sources",
      question: "What types of alternative data sources do you include?",
      answer: "Beyond traditional market data, we incorporate satellite imagery for commodity tracking, social media sentiment analysis, patent filings, supply chain data, ESG metrics, insider trading disclosures, and macroeconomic indicators from central banks and government agencies."
    },
    {
      id: "setup-time",
      question: "How long does implementation take?",
      answer: "Standard implementation typically takes 2-4 weeks including data integration, user training, and compliance setup. Custom integrations may require additional time. Our customer success team provides white-glove onboarding to ensure smooth deployment."
    },
    {
      id: "support",
      question: "What support is available?",
      answer: "We provide 24/7 technical support via phone, email, and chat. Every client receives a dedicated customer success manager, access to our technical documentation portal, regular training sessions, and priority response for critical issues."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-midnight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about Aterix's capabilities, implementation, and compliance features.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.slice(0, 4).map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="border border-border rounded-lg px-6 bg-card"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="font-heading font-medium text-brand-midnight pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.slice(4).map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="border border-border rounded-lg px-6 bg-card"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="font-heading font-medium text-brand-midnight pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;