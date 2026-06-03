import { Container } from "@/components/ui/container";
import Link from "next/link";

export default function HelpPage() {
  const categories = [
    { title: "Getting Started", items: ["How does NWTR work?", "What's the minimum deposit?", "Which areas are available?", "How long is the lease?"], link: "/how-it-works" },
    { title: "Deposits & Payments", items: ["Is my deposit safe?", "When do I get my refund?", "How are owner payouts calculated?", "What if yield is lower than expected?"], link: "/trust-security" },
    { title: "Properties", items: ["How are properties verified?", "Can I visit before depositing?", "What's included in the property?", "Maintenance responsibilities?"], link: "/properties" },
    { title: "Account & KYC", items: ["What documents do I need?", "How long does KYC take?", "How to update bank details?", "Can I have multiple leases?"], link: "/auth/register" },
  ];

  return (
    <section className="min-h-screen bg-navy-950 pt-24 pb-16">
      <Container size="md">
        <p className="text-xs uppercase tracking-[0.3em] text-gold-400/70 mb-3">Support</p>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white">Help Center</h1>
        <p className="mt-4 text-navy-200 max-w-lg">
          Find answers to common questions or reach out to our team directly.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="border border-navy-800 p-6 rounded-lg">
              <h3 className="text-base font-semibold text-white mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="text-sm text-navy-300 flex items-center gap-2">
                    <span className="text-gold-500/50">→</span> {item}
                  </li>
                ))}
              </ul>
              <Link href={cat.link} className="inline-flex items-center gap-1 mt-4 text-xs text-gold-400 hover:text-gold-300 transition-colors">
                Learn more
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 border border-gold-500/20 p-6 rounded-lg bg-gold-500/[0.02]">
          <h3 className="text-base font-semibold text-white">Still need help?</h3>
          <p className="text-sm text-navy-300 mt-1">Our AI assistant can answer most questions instantly, or reach your RM directly.</p>
          <div className="flex gap-3 mt-4">
            <Link href="/contact" className="text-xs bg-gold-500 text-navy-900 font-semibold px-4 py-2 rounded-lg hover:bg-gold-400 transition-colors">Contact Support</Link>
            <Link href="/grievance" className="text-xs border border-navy-700 text-navy-300 px-4 py-2 rounded-lg hover:border-navy-500 transition-colors">File Grievance</Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
