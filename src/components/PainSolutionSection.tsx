import { AlertTriangle, CheckCircle } from 'lucide-react';

const PainSolutionSection = () => {
  const painPoints = [
    "Data overload from multiple sources",
    "Fragmented information silos", 
    "Manual data cleanup and validation",
    "Time-consuming research processes"
  ];

  const solutions = [
    "AI-powered multi-source aggregation",
    "Unified intelligence platform",
    "Automated cleaning and de-duplication", 
    "Instant insights and reports"
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-midnight mb-4">
            From Information Chaos to Clear Intelligence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Traditional research methods can't keep up with today's data velocity. Aterix transforms how you gather and process market intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Pain Points */}
          <div className="bg-red-50 rounded-xl p-8 border border-red-100">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              <h3 className="text-xl font-heading font-semibold text-red-800">Traditional Challenges</h3>
            </div>
            <ul className="space-y-4">
              {painPoints.map((pain, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-red-700">{pain}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-green-50 rounded-xl p-8 border border-green-100">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <h3 className="text-xl font-heading font-semibold text-green-800">Aterix Solutions</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-green-700">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSolutionSection;