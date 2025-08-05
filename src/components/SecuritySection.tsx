import { Shield, Lock, Eye, FileCheck } from 'lucide-react';

const SecuritySection = () => {
  const securityFeatures = [
    "End-to-end encryption",
    "Role-based access control", 
    "GDPR & CCPA compliant",
    "SOC 2 Type II certified",
    "ISO 27001 compliant",
    "Audit-ready raw archive"
  ];

  const certifications = [
    { name: "SOC 2", badge: "SOC 2 Type II" },
    { name: "ISO 27001", badge: "ISO 27001:2013" },
    { name: "GDPR", badge: "GDPR Compliant" },
    { name: "CCPA", badge: "CCPA Adherent" }
  ];

  return (
    <section id="security" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-brand-teal/10 rounded-full">
              <Shield className="w-12 h-12 text-brand-teal" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-midnight mb-4">
            Enterprise-Grade Security & Compliance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with security-first principles to meet the strictest regulatory requirements in financial services.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-brand-teal" />
                <h3 className="text-lg font-heading font-semibold text-brand-midnight">Data Protection</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• AES-256 encryption at rest</li>
                <li>• TLS 1.3 for data in transit</li>
                <li>• Zero-trust architecture</li>
                <li>• Regular security audits</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-brand-teal" />
                <h3 className="text-lg font-heading font-semibold text-brand-midnight">Access Control</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Multi-factor authentication</li>
                <li>• Role-based permissions</li>
                <li>• Activity logging & monitoring</li>
                <li>• Session management</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="w-6 h-6 text-brand-teal" />
                <h3 className="text-lg font-heading font-semibold text-brand-midnight">Compliance</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 7-year data retention</li>
                <li>• Audit trail logging</li>
                <li>• Regulatory reporting</li>
                <li>• Privacy controls</li>
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div className="text-center">
            <h3 className="text-xl font-heading font-semibold text-brand-midnight mb-8">
              Certifications & Compliance
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-4 min-w-32 text-center shadow-sm">
                  <div className="w-12 h-12 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-6 h-6 text-brand-teal" />
                  </div>
                  <div className="text-sm font-medium text-brand-midnight">{cert.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{cert.badge}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Security Features List */}
          <div className="mt-12 bg-card rounded-xl p-8 border border-border shadow-sm">
            <h3 className="text-xl font-heading font-semibold text-brand-midnight mb-6 text-center">
              Security Features
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;