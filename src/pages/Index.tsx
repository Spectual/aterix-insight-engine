import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PainSolutionSection from '@/components/PainSolutionSection';
import FeatureGrid from '@/components/FeatureGrid';
import WorkflowSection from '@/components/WorkflowSection';
import ScreenshotCarousel from '@/components/ScreenshotCarousel';
import DeepDiveAccordion from '@/components/DeepDiveAccordion';
import SecuritySection from '@/components/SecuritySection';

import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <PainSolutionSection />
      <FeatureGrid />
      <WorkflowSection />
      <ScreenshotCarousel />
      <DeepDiveAccordion />
      <SecuritySection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;