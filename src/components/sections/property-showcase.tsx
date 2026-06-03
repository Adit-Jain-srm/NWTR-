"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const properties = [
  { id: "prop-koramangala-3bhk", name: "3BHK Koramangala", area: "1,450 sq ft", deposit: "₹35 L", location: "5th Block, Koramangala", image: "/images/properties/koramangala.jpg" },
  { id: "prop-indiranagar-4bhk", name: "4BHK Indiranagar", area: "2,100 sq ft", deposit: "₹52 L", location: "12th Main, Indiranagar", image: "/images/properties/indiranagar.jpg" },
  { id: "prop-hsr-penthouse", name: "Penthouse HSR", area: "3,200 sq ft", deposit: "₹1.2 Cr", location: "Sector 2, HSR Layout", image: "/images/properties/hsr.jpg" },
  { id: "prop-whitefield-villa", name: "Villa Whitefield", area: "4,500 sq ft", deposit: "₹1.8 Cr", location: "ITPL Main Road", image: "/images/properties/whitefield.jpg" },
  { id: "prop-jp-nagar-3bhk", name: "3BHK JP Nagar", area: "1,600 sq ft", deposit: "₹28 L", location: "Phase 6, JP Nagar", image: "/images/properties/jpnagar.jpg" },
];

export function PropertyShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="relative py-20 bg-[#0A0F1A] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-10">
        <motion.div
          className="flex items-end justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-navy-600 mb-2">{"//06"}</p>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Available now
            </h2>
            <p className="text-sm text-navy-400 mt-2">Premium properties accepting deposits</p>
          </div>
          <Link
            href="/properties"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-gold-400 hover:text-gold-300 transition-colors"
          >
            View all
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* Horizontal scroll strip */}
      <motion.div
        className="flex gap-4 px-6 sm:px-8 lg:px-12 overflow-x-auto scrollbar-hide pb-4"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
        style={{ scrollbarWidth: "none" }}
      >
        {properties.map((prop, i) => (
          <motion.div
            key={prop.id}
            className="shrink-0 w-72 sm:w-80 group"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 + i * 0.08 }}
          >
            <Link href={`/properties/${prop.id}`}>
              {/* Image placeholder — gradient representing the property */}
              <div className="aspect-[4/3] bg-gradient-to-br from-navy-800 to-navy-900 border border-navy-700 group-hover:border-gold-500/30 transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,97,0.05)_0%,_transparent_70%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy-950/80 to-transparent">
                  <div className="text-xs text-gold-400 font-medium">{prop.deposit}</div>
                </div>
                {/* Placeholder text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px] uppercase tracking-wider text-navy-600">Property image</span>
                </div>
              </div>

              <div className="mt-3">
                <h3 className="text-sm font-medium text-white group-hover:text-gold-400 transition-colors">{prop.name}</h3>
                <p className="text-xs text-navy-400 mt-0.5">{prop.location} · {prop.area}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
