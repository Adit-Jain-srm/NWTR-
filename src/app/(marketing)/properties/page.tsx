import { Container } from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";

const sampleProperties = [
  { id: "prop-koramangala-3bhk", title: "3BHK Koramangala", area: "1,450 sq ft", deposit: "₹35 L", yield: "7.4%", location: "5th Block", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80&auto=format" },
  { id: "prop-indiranagar-4bhk", title: "4BHK Indiranagar", area: "2,100 sq ft", deposit: "₹52 L", yield: "7.8%", location: "12th Main", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&auto=format" },
  { id: "prop-hsr-penthouse", title: "Penthouse HSR Layout", area: "3,200 sq ft", deposit: "₹1.2 Cr", yield: "7.2%", location: "Sector 2", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80&auto=format" },
  { id: "prop-whitefield-villa", title: "Villa Whitefield", area: "4,500 sq ft", deposit: "₹1.8 Cr", yield: "7.6%", location: "ITPL Main Road", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80&auto=format" },
  { id: "prop-jp-nagar-3bhk", title: "3BHK JP Nagar", area: "1,600 sq ft", deposit: "₹28 L", yield: "7.3%", location: "Phase 6", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80&auto=format" },
  { id: "prop-marathahalli-2bhk", title: "2BHK Marathahalli", area: "1,100 sq ft", deposit: "₹22 L", yield: "7.5%", location: "Near ORR", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80&auto=format" },
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
          <p className="mt-4 text-navy-200 max-w-lg">
            Each property is verified, managed, and available for NWTR&apos;s deposit-based model.
            Minimum deposit: ₹25 Lakhs.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sampleProperties.map((prop) => (
            <Link
              key={prop.id}
              href={`/properties/${prop.id}`}
              className="group block border border-navy-800 hover:border-gold-500/30 rounded-lg overflow-hidden transition-all duration-300"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <Image
                  src={prop.image}
                  alt={prop.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 font-medium px-2 py-0.5 rounded backdrop-blur-sm">
                    {prop.yield} yield
                  </span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-base font-display font-bold text-white group-hover:text-gold-400 transition-colors">
                      {prop.title}
                    </h2>
                    <p className="text-xs text-navy-400 mt-0.5">{prop.location} · {prop.area}</p>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-navy-600 group-hover:text-gold-400 transition-colors shrink-0 mt-1" strokeLinecap="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
                <div className="mt-3 pt-3 border-t border-navy-800">
                  <span className="text-sm font-display font-bold text-gold-400">{prop.deposit}</span>
                  <span className="text-xs text-navy-500 ml-2">deposit</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
