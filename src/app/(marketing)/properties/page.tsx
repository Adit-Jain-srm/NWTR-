import { Container } from "@/components/ui/container";
import Link from "next/link";

const sampleProperties = [
  { id: "prop-koramangala-3bhk", title: "3BHK Koramangala", area: "1,450 sq ft", deposit: "₹35 L", yield: "7.4%" },
  { id: "prop-indiranagar-4bhk", title: "4BHK Indiranagar", area: "2,100 sq ft", deposit: "₹52 L", yield: "7.8%" },
  { id: "prop-hsr-penthouse", title: "Penthouse HSR Layout", area: "3,200 sq ft", deposit: "₹1.2 Cr", yield: "7.2%" },
  { id: "prop-whitefield-villa", title: "Villa Whitefield", area: "4,500 sq ft", deposit: "₹1.8 Cr", yield: "7.6%" },
];

export default function PropertiesPage() {
  return (
    <section className="min-h-screen bg-navy-950 pt-24 pb-16">
      <Container>
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-400/70 mb-3">Available Properties</p>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white">
            Premium Bangalore homes
          </h1>
          <p className="mt-4 text-navy-300 max-w-lg">
            Each property is verified, managed, and available for NWTR&apos;s deposit-based model.
            Minimum deposit: ₹25 Lakhs.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sampleProperties.map((prop) => (
            <Link
              key={prop.id}
              href={`/properties/${prop.id}`}
              className="group border border-navy-800 hover:border-gold-500/30 p-6 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-display font-bold text-white group-hover:text-gold-400 transition-colors">
                    {prop.title}
                  </h2>
                  <p className="text-sm text-navy-400 mt-1">{prop.area}</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-navy-600 group-hover:text-gold-400 transition-colors" strokeLinecap="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
              <div className="mt-4 flex items-center gap-4 text-sm">
                <span className="text-gold-400 font-medium">{prop.deposit}</span>
                <span className="text-navy-500">|</span>
                <span className="text-emerald-400">{prop.yield} yield</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
