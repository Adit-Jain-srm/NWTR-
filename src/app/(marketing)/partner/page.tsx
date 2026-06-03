import { Container } from "@/components/ui/container";

export default function PartnerPage() {
  return (
    <section className="min-h-screen bg-navy-950 pt-24 pb-16">
      <Container size="md">
        <p className="text-xs uppercase tracking-[0.3em] text-gold-400/70 mb-3">Partnerships</p>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white">Partner with NWTR</h1>
        <p className="mt-4 text-navy-200 max-w-lg">
          We&apos;re building the infrastructure for deposit-based renting. There are multiple ways to partner.
        </p>

        <div className="mt-12 space-y-6">
          <div className="border border-navy-800 p-6 rounded-lg hover:border-gold-500/20 transition-colors">
            <h3 className="text-lg font-display font-bold text-white">Property Developers</h3>
            <p className="text-sm text-navy-300 mt-2">Bulk-list your inventory with guaranteed occupancy. We handle tenant matching, KYC, and yield management. You receive predictable monthly payouts across your entire portfolio.</p>
            <p className="text-xs text-gold-400 mt-3">Minimum: 5+ units · Contact: developers@nwtr.in</p>
          </div>

          <div className="border border-navy-800 p-6 rounded-lg hover:border-gold-500/20 transition-colors">
            <h3 className="text-lg font-display font-bold text-white">Real Estate Agents</h3>
            <p className="text-sm text-navy-300 mt-2">Refer HNI clients and earn commission on every successful deposit placement. Our RM team handles the entire financial workflow — you focus on the client relationship.</p>
            <p className="text-xs text-gold-400 mt-3">Commission: 1.5% of deposit value · Contact: agents@nwtr.in</p>
          </div>

          <div className="border border-navy-800 p-6 rounded-lg hover:border-gold-500/20 transition-colors">
            <h3 className="text-lg font-display font-bold text-white">NBFCs & Financial Institutions</h3>
            <p className="text-sm text-navy-300 mt-2">Co-lending, escrow management, or investment product structuring. We&apos;re looking for regulated partners who share our commitment to fund safety and transparency.</p>
            <p className="text-xs text-gold-400 mt-3">Contact: partnerships@nwtr.in</p>
          </div>

          <div className="border border-navy-800 p-6 rounded-lg hover:border-gold-500/20 transition-colors">
            <h3 className="text-lg font-display font-bold text-white">Corporate Housing Programs</h3>
            <p className="text-sm text-navy-300 mt-2">Offer deposit-based housing as an employee benefit. Relocating executives live in premium properties with zero rent — the company deposits on their behalf.</p>
            <p className="text-xs text-gold-400 mt-3">Minimum: 10+ employees · Contact: corporate@nwtr.in</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
