import { Container } from "@/components/ui/container";

export default function TermsPage() {
  return (
    <section className="min-h-screen bg-navy-950 pt-24 pb-16">
      <Container size="md">
        <p className="text-xs uppercase tracking-[0.3em] text-gold-400/70 mb-3">Legal</p>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white">Terms of Service</h1>
        <p className="mt-2 text-sm text-navy-400">Last updated: June 1, 2026</p>

        <div className="mt-12 space-y-8 [&_h2]:text-white [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-lg [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:leading-relaxed [&_p]:text-navy-300 [&_p]:text-sm">
          <div>
            <h2>1. Service Description</h2>
            <p>NWTR facilitates deposit-based rental arrangements where tenants place a security deposit (50-80% of property value) and live rent-free for a defined tenure. The deposit is invested through our NBFC partner to generate yield that funds owner payouts.</p>
          </div>
          <div>
            <h2>2. Eligibility</h2>
            <p>Users must be Indian residents aged 18+, pass our KYC verification (Tier 1 minimum), and meet minimum deposit requirements (₹25 Lakhs). NWTR reserves the right to decline applications based on risk assessment.</p>
          </div>
          <div>
            <h2>3. Deposit Terms</h2>
            <p>Deposits are held in ring-fenced escrow accounts with scheduled banks. NWTR cannot access deposits for operational purposes. Full deposit is returned at tenure end subject to property condition assessment. Early exit incurs a 2-5% penalty based on remaining tenure.</p>
          </div>
          <div>
            <h2>4. Yield & Payouts</h2>
            <p>Deposits are invested in FDs, G-Secs, and T-Bills via our RBI-registered NBFC partner. Yield rates are indicative and subject to market conditions. Owner payouts are guaranteed regardless of actual yield performance — NWTR absorbs shortfall risk.</p>
          </div>
          <div>
            <h2>5. Property & Tenant Obligations</h2>
            <p>Tenants must maintain the property in good condition, report damage within 48 hours, and vacate at tenure end unless renewal is mutually agreed. Owners must provide the property in habitable condition and honour the tenure agreement.</p>
          </div>
          <div>
            <h2>6. Dispute Resolution</h2>
            <p>Disputes are resolved through: (1) Relationship Manager mediation, (2) internal grievance committee, (3) arbitration under the Arbitration and Conciliation Act, 1996. Jurisdiction: Bangalore, Karnataka.</p>
          </div>
          <div>
            <h2>7. Limitation of Liability</h2>
            <p>NWTR&apos;s liability is limited to the platform fee earned on a given transaction. Deposit safety is guaranteed by the escrow structure, not by NWTR&apos;s corporate balance sheet.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
