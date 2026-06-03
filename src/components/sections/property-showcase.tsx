"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const properties = [
  {
    id: "prop-koramangala-3bhk",
    name: "3BHK Koramangala",
    area: "1,450 sq ft",
    deposit: "₹35 L",
    location: "5th Block, Koramangala",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&auto=format",
  },
  {
    id: "prop-indiranagar-4bhk",
    name: "4BHK Indiranagar",
    area: "2,100 sq ft",
    deposit: "₹52 L",
    location: "12th Main, Indiranagar",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format",
  },
  {
    id: "prop-hsr-penthouse",
    name: "Penthouse HSR",
    area: "3,200 sq ft",
    deposit: "₹1.2 Cr",
    location: "Sector 2, HSR Layout",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80&auto=format",
  },
  {
    id: "prop-whitefield-villa",
    name: "Villa Whitefield",
    area: "4,500 sq ft",
    deposit: "₹1.8 Cr",
    location: "ITPL Main Road",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80&auto=format",
  },
  {
    id: "prop-jp-nagar-3bhk",
    name: "3BHK JP Nagar",
    area: "1,600 sq ft",
    deposit: "₹28 L",
    location: "Phase 6, JP Nagar",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format",
  },
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
        className="flex gap-4 px-6 sm:px-8 lg:px-12 overflow-x-auto pb-4"
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
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg border border-navy-700 group-hover:border-gold-500/30 transition-all duration-300">
                <Image
                  src={prop.image}
                  alt={prop.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="320px"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                {/* Deposit badge */}
                <div className="absolute bottom-3 left-3">
                  <span className="text-xs font-semibold text-gold-400 bg-navy-950/70 backdrop-blur-sm px-2.5 py-1 rounded">
                    {prop.deposit}
                  </span>
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
