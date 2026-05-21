import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { TrustIndicators } from "@/components/sections/trust-indicators";
import { CTASection } from "@/components/sections/cta-section";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trust & Security",
  description: "How NWTR protects your deposit with NBFC-grade infrastructure, escrow accounts, and regulatory compliance.",
};

const compliance = [
  { title: "RBI via NBFC", description: "All fund management through RBI-registered Non-Banking Financial Company" },
  { title: "SEBI Instruments", description: "Investments limited to SEBI-regulated securities — FDs, G-Secs, T-Bills" },
  { title: "RERA Registered", description: "All property transactions comply with Real Estate Regulatory Authority norms" },
  { title: "DPDP Act 2023", description: "Full compliance with Digital Personal Data Protection Act for user privacy" },
  { title: "KYC/AML", description: "3-tier verification following PMLA anti-money laundering guidelines" },
  { title: "Account Aggregator", description: "RBI-approved financial data sharing framework for verification" },
];

export default function TrustSecurityPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="pt-32 pb-16 bg-white">
          <Container size="narrow" className="text-center">
            <span className="text-sm font-medium text-gold-700 uppercase tracking-wider">Trust & Security</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-display font-bold text-navy-900">
              Institutional-Grade Security
            </h1>
            <p className="mt-6 text-lg text-navy-600 leading-relaxed">
              Your deposit is protected by the same regulatory framework that governs banks and financial institutions in India.
            </p>
          </Container>
        </Section>

        {/* How funds are protected */}
        <Section className="py-16 bg-navy-900 text-white">
          <Container size="narrow">
            <h2 className="text-2xl font-display font-bold text-center mb-8">How Your Deposit Is Protected</h2>
            <div className="space-y-6">
              <div className="glass-dark rounded-xl p-6">
                <h3 className="font-display font-bold text-gold-400">1. Segregated Escrow</h3>
                <p className="mt-2 text-sm text-navy-300">Your deposit sits in a ring-fenced escrow account with a scheduled bank. It cannot be used for NWTR operations or any other purpose.</p>
              </div>
              <div className="glass-dark rounded-xl p-6">
                <h3 className="font-display font-bold text-gold-400">2. NBFC-Managed Investments</h3>
                <p className="mt-2 text-sm text-navy-300">Funds are invested only in ultra-safe instruments: bank FDs (6-7%), government bonds (7-8%), and liquid funds (5-6%). No equity, no crypto, no risk.</p>
              </div>
              <div className="glass-dark rounded-xl p-6">
                <h3 className="font-display font-bold text-gold-400">3. Insurance Coverage</h3>
                <p className="mt-2 text-sm text-navy-300">Both property and deposit are insured against unforeseen events, providing an additional layer of protection beyond regulatory safeguards.</p>
              </div>
              <div className="glass-dark rounded-xl p-6">
                <h3 className="font-display font-bold text-gold-400">4. Quarterly Audits</h3>
                <p className="mt-2 text-sm text-navy-300">Independent auditors verify fund allocation quarterly. Reports are available to all depositors for full transparency.</p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Regulatory compliance */}
        <Section className="py-16 bg-surface-50">
          <Container>
            <h2 className="text-2xl font-display font-bold text-navy-900 text-center mb-12">Regulatory Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {compliance.map((item) => (
                <div key={item.title} className="bg-white rounded-xl border border-navy-100 p-6">
                  <h3 className="font-display font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-navy-500">{item.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <TrustIndicators />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
