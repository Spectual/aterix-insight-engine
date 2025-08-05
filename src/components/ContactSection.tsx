import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = `Aterix Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:sales@aterix.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Email client opened",
      description: "Your default email client should open with the pre-filled message.",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-brand-midnight">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-white mb-4">
            Ready to see Aterix reshape your research workflow?
          </h2>
          <p className="text-xl text-brand-white/80 max-w-2xl mx-auto">
            Schedule a demo to discover how Aterix can transform your investment research process.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="bg-brand-white">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-brand-midnight">Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-muted-foreground/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="border-muted-foreground/20"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-muted-foreground/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="border-muted-foreground/20"
                    placeholder="Tell us about your research needs and how we can help..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-brand-teal hover:bg-brand-teal/90 text-brand-white py-3"
                  size="lg"
                >
                  Contact Sales
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-bold text-brand-white mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-brand-white/80 text-lg leading-relaxed mb-8">
                Our team of experts is ready to show you how Aterix can streamline your research workflow, 
                improve decision-making speed, and ensure regulatory compliance.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-brand-teal/20 rounded-lg">
                  <Mail className="w-6 h-6 text-brand-teal" />
                </div>
                <div>
                  <div className="text-brand-white font-medium">Email</div>
                  <div className="text-brand-white/80">sales@aterix.ai</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-brand-teal/20 rounded-lg">
                  <Phone className="w-6 h-6 text-brand-teal" />
                </div>
                <div>
                  <div className="text-brand-white font-medium">Phone</div>
                  <div className="text-brand-white/80">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-brand-teal/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-brand-teal" />
                </div>
                <div>
                  <div className="text-brand-white font-medium">Office</div>
                  <div className="text-brand-white/80">New York Financial District</div>
                </div>
              </div>
            </div>

            <div className="bg-brand-white/10 rounded-xl p-6 border border-brand-white/20">
              <h4 className="text-brand-white font-heading font-semibold mb-3">What to Expect</h4>
              <ul className="space-y-2 text-brand-white/80">
                <li>• 30-minute personalized demo</li>
                <li>• Discussion of your specific use cases</li>
                <li>• Custom implementation timeline</li>
                <li>• Pricing and ROI analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;