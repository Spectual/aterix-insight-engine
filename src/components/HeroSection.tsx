import { Button } from '@/components/ui/button';
import heroNetwork from '@/assets/hero-network.jpg';

const HeroSection = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-brand-teal rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-brand-amber rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-brand-teal rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-white mb-6 leading-tight">
            Turn Market Noise into 
            <span className="text-brand-teal"> Actionable Intelligence</span>
          </h1>
          
          <p className="text-xl text-brand-white/90 mb-6 leading-relaxed">
            Aterix automates deep research across markets, filings, news and more—so you can focus on decisions, not data hunting.
          </p>
          
          <div className="flex flex-wrap gap-6 text-brand-white/80 text-sm mb-8">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-teal rounded-full animate-pulse-glow"></div>
              24/7 coverage
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-teal rounded-full animate-pulse-glow"></div>
              Multi-source
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-teal rounded-full animate-pulse-glow"></div>
              Compliance ready
            </span>
          </div>
          
          <Button 
            onClick={scrollToFeatures}
            size="lg"
            className="bg-brand-teal hover:bg-brand-teal/90 text-brand-white px-8 py-3 text-lg"
          >
            Explore Features
          </Button>
        </div>
        
        <div className="relative">
          <div className="relative group">
            <img 
              src={heroNetwork} 
              alt="AI Research Network" 
              className="w-full h-auto rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;