const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-midnight border-t border-brand-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-brand-teal rounded-lg flex items-center justify-center">
                <span className="text-brand-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-heading font-bold text-brand-white">Aterix</span>
            </div>
            <p className="text-brand-white/70 leading-relaxed max-w-md">
              AI-powered multi-agent research engine for investors. Transform market noise into actionable intelligence.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-brand-white font-heading font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-brand-white/70 hover:text-brand-white transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('workflow')}
                  className="text-brand-white/70 hover:text-brand-white transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('security')}
                  className="text-brand-white/70 hover:text-brand-white transition-colors"
                >
                  Security
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-brand-white/70 hover:text-brand-white transition-colors"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-brand-white font-heading font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-brand-white/70 hover:text-brand-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-brand-white/70 hover:text-brand-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-brand-white/70 hover:text-brand-white transition-colors"
                >
                  Compliance
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-brand-white/70 hover:text-brand-white transition-colors"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-white/10 mt-12 pt-8 text-center">
          <p className="text-brand-white/50 text-sm">
            © 2024 Aterix. All rights reserved. Built for professional investors.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;