import { Container } from "@/components/ui/container";

export default function PrivacyPage() {
  return (
    <section className="min-h-screen bg-navy-950 pt-24 pb-16">
      <Container size="md">
        <p className="text-xs uppercase tracking-[0.3em] text-gold-400/70 mb-3">Legal</p>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white">Privacy Policy</h1>
        <p className="mt-2 text-sm text-navy-400">Last updated: June 1, 2026</p>

        <div className="mt-12 prose-sm text-navy-200 space-y-8 [&_h2]:text-white [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-lg [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:leading-relaxed [&_p]:text-navy-300 [&_ul]:space-y-1 [&_li]:text-navy-300 [&_li]:text-sm">
          <div>
            <h2>1. Information We Collect</h2>
            <p>NWTR Technologies Pvt. Ltd. collects personal information necessary to provide our deposit-based rental services, including:</p>
            <ul className="list-disc list-inside text-sm">
              <li>Identity information: name, email, phone number, Aadhaar/PAN (for KYC)</li>
              <li>Financial information: bank account details, income documentation</li>
              <li>Property preferences: location, budget range, property type</li>
              <li>Usage data: interaction with our platform, device information</li>
            </ul>
          </div>
          <div>
            <h2>2. How We Use Your Data</h2>
            <p>Your data is used exclusively for: KYC verification, deposit management, property matching, regulatory compliance, and platform improvement. We never sell your data to third parties.</p>
          </div>
          <div>
            <h2>3. Data Protection</h2>
            <p>All personal data is encrypted at rest (AES-256) and in transit (TLS 1.3). Financial data is processed through our NBFC partner&apos;s secure infrastructure. We comply with the Digital Personal Data Protection Act 2023 (DPDP).</p>
          </div>
          <div>
            <h2>4. Your Rights</h2>
            <p>Under DPDP Act 2023, you have the right to: access your data, correct inaccuracies, withdraw consent, request deletion, and file grievances. Contact our Data Protection Officer at dpo@nwtr.in.</p>
          </div>
          <div>
            <h2>5. Data Retention</h2>
            <p>We retain your data for the duration of your active engagement plus 7 years (as required by financial regulations). Upon account deletion, non-regulatory data is purged within 30 days.</p>
          </div>
          <div>
            <h2>6. Contact</h2>
            <p>Data Protection Officer: dpo@nwtr.in<br/>NWTR Technologies Pvt. Ltd., WeWork Galaxy, 43 Residency Road, Bangalore 560025</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
