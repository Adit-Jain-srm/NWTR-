import { Container } from "@/components/ui/container";

export default function RefundPolicyPage() {
  return (
    <section className="min-h-screen bg-navy-950 pt-24 pb-16">
      <Container size="md">
        <p className="text-xs uppercase tracking-[0.3em] text-gold-400/70 mb-3">Legal</p>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white">Refund Policy</h1>
        <p className="mt-2 text-sm text-navy-400">Last updated: June 1, 2026</p>

        <div className="mt-12 space-y-8 [&_h2]:text-white [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-lg [&_h2]:mt-8 [&_h2]:mb-3 [&_p]:leading-relaxed [&_p]:text-navy-300 [&_p]:text-sm">
          <div>
            <h2>Full Deposit Refund at Tenure End</h2>
            <p>100% of your deposit is returned within 15 business days of tenure completion, subject to satisfactory property inspection. No deductions for wear and tear under normal usage.</p>
          </div>
          <div>
            <h2>Early Exit Refund</h2>
            <p>If you exit before tenure completion with a 30-day notice period:</p>
            <ul className="list-disc list-inside text-sm text-navy-300 mt-2 space-y-1">
              <li>Exit within first 3 months: 95% refund (5% penalty)</li>
              <li>Exit between 3-6 months: 97% refund (3% penalty)</li>
              <li>Exit after 6 months: 98% refund (2% penalty)</li>
            </ul>
            <p className="mt-2">Refund processed within 30 business days of vacancy.</p>
          </div>
          <div>
            <h2>Platform Fee Refund</h2>
            <p>The one-time platform fee (charged at onboarding) is non-refundable once the lease is activated. If the lease is not activated due to NWTR&apos;s inability to match a property, the fee is fully refunded.</p>
          </div>
          <div>
            <h2>Owner Payout Adjustments</h2>
            <p>If a tenant exits early, owner payouts cease from the month following vacancy. No clawback of previously paid amounts. NWTR covers any shortfall from its operating reserves during the transition period.</p>
          </div>
          <div>
            <h2>How to Request a Refund</h2>
            <p>Contact your Relationship Manager or email refunds@nwtr.in with your lease ID. Refunds are processed to the bank account on file (updatable in Dashboard → Settings → Bank Details).</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
