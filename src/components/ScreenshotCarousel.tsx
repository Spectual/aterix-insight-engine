import { useState } from 'react';
import { ChevronLeft, ChevronRight, Monitor, FileText, Shield, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScreenshotCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const screenshots = [
    {
      title: "Live Market Dashboard",
      description: "Real-time market feed with intelligent alerts and multi-source data aggregation.",
      icon: Monitor,
      mockup: "bg-gradient-to-br from-brand-midnight to-brand-midnight/80"
    },
    {
      title: "Sources Explorer",
      description: "Compare raw vs. cleaned data views with transparent source attribution.",
      icon: Activity,
      mockup: "bg-gradient-to-br from-brand-teal to-brand-teal/80"
    },
    {
      title: "Daily PDF Reports",
      description: "Professionally formatted reports with citations and compliance markers.",
      icon: FileText,
      mockup: "bg-gradient-to-br from-brand-amber to-orange-400"
    },
    {
      title: "Compliance Audit Timeline",
      description: "Complete audit trail with 7-year data retention and regulatory compliance.",
      icon: Shield,
      mockup: "bg-gradient-to-br from-green-600 to-green-500"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section id="screenshots" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-midnight mb-4">
            See Aterix in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the intuitive interface that makes complex financial research simple and efficient.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-brand-white rounded-xl shadow-2xl overflow-hidden">
            {/* Main Screenshot Display */}
            <div className="relative h-96 overflow-hidden">
              <div 
                className={`w-full h-full flex items-center justify-center ${screenshots[currentSlide].mockup}`}
              >
                <div className="text-center text-white">
                  {(() => {
                    const IconComponent = screenshots[currentSlide].icon;
                    return <IconComponent className="w-16 h-16 mx-auto mb-4 opacity-80" />;
                  })()}
                  <h3 className="text-2xl font-bold mb-2">{screenshots[currentSlide].title}</h3>
                  <p className="text-white/80 max-w-md">{screenshots[currentSlide].description}</p>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-brand-white/90 hover:bg-brand-white"
                onClick={prevSlide}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-brand-white/90 hover:bg-brand-white"
                onClick={nextSlide}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Slide Information */}
            <div className="p-6 bg-brand-white">
              <h3 className="text-xl font-heading font-bold text-brand-midnight mb-2">
                {screenshots[currentSlide].title}
              </h3>
              <p className="text-muted-foreground">
                {screenshots[currentSlide].description}
              </p>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center space-x-2 pb-6">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-brand-teal scale-125' 
                      : 'bg-muted hover:bg-brand-teal/50'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotCarousel;