import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Aterix has revolutionized our research process. What used to take our team days now happens automatically overnight, with better accuracy and complete audit trails.",
      author: "Sarah Chen",
      title: "Head of Research",
      company: "Meridian Capital",
      rating: 5
    },
    {
      quote: "The multi-source data aggregation is incredible. Having everything cleaned, aligned, and ready for analysis in one platform has increased our research efficiency by 300%.",
      author: "Michael Rodriguez", 
      title: "Portfolio Manager",
      company: "Alpine Investments",
      rating: 5
    },
    {
      quote: "Compliance was always our biggest headache. Aterix's audit-ready reports and 7-year data retention give us complete peace of mind with regulators.",
      author: "Jennifer Walsh",
      title: "Chief Compliance Officer", 
      company: "Sterling Asset Management",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-midnight mb-4">
            Trusted by Leading Investment Firms
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how Aterix is transforming research workflows for investment professionals worldwide.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="bg-card rounded-xl p-8 md:p-12 shadow-xl border border-border">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-brand-amber fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-center text-brand-midnight leading-relaxed mb-8 font-medium">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              {/* Author Info */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-brand-teal/10 rounded-full flex items-center justify-center">
                    <span className="text-brand-teal font-semibold">
                      {testimonials[currentTestimonial].author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-brand-midnight">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {testimonials[currentTestimonial].title}
                    </div>
                  </div>
                </div>
                <div className="text-brand-teal font-medium">
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-card hover:bg-muted"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-card hover:bg-muted"
              onClick={nextTestimonial}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-brand-teal scale-125' 
                    : 'bg-muted hover:bg-brand-teal/50'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>

          {/* Company Logos Placeholder */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-8">Trusted by 100+ investment firms worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              {['Meridian Capital', 'Alpine Investments', 'Sterling Asset Management', 'BlackRock', 'Vanguard'].map((company, index) => (
                <div key={index} className="bg-muted/50 rounded-lg px-6 py-3 text-sm text-muted-foreground">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;