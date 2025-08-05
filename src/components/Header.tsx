import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-brand-teal rounded-lg flex items-center justify-center">
            <span className="text-brand-white font-bold text-lg">A</span>
          </div>
          <span className="text-xl font-heading font-bold text-brand-midnight">Aterix</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('features')}
            className="text-brand-midnight hover:text-brand-teal transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('workflow')}
            className="text-brand-midnight hover:text-brand-teal transition-colors"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection('screenshots')}
            className="text-brand-midnight hover:text-brand-teal transition-colors"
          >
            Screenshots
          </button>
          <button 
            onClick={() => scrollToSection('security')}
            className="text-brand-midnight hover:text-brand-teal transition-colors"
          >
            Security
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="text-brand-midnight hover:text-brand-teal transition-colors"
          >
            FAQ
          </button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-brand-teal hover:bg-brand-teal/90 text-brand-white"
          >
            Contact
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;