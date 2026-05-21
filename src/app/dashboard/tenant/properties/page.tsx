"use client";

import { PageTransition } from "@/components/motion/page-transition";
import Image from "next/image";

const properties = [
  { id: 1, title: "3BHK Premium Apartment", locality: "Koramangala 5th Block", bhk: 3, area: 1850, value: "₹1.2 Cr", deposit: "₹84,00,000", img: "/images/property-1.jpg" },
  { id: 2, title: "4BHK Luxury Villa", locality: "Indiranagar 12th Main", bhk: 4, area: 2800, value: "₹2.5 Cr", deposit: "₹1,75,00,000", img: "/images/property-2.jpg" },
  { id: 3, title: "2BHK Modern Flat", locality: "HSR Layout Sector 2", bhk: 2, area: 1200, value: "₹85L", deposit: "₹59,50,000", img: "/images/property-3.jpg" },
  { id: 4, title: "3BHK Garden View", locality: "Whitefield ITPL Road", bhk: 3, area: 1650, value: "₹95L", deposit: "₹66,50,000", img: "/images/property-4.jpg" },
  { id: 5, title: "Penthouse Duplex", locality: "MG Road", bhk: 5, area: 3500, value: "₹4.2 Cr", deposit: "₹2,94,00,000", img: "/images/property-5.jpg" },
  { id: 6, title: "3BHK Smart Home", locality: "Sarjapur Road", bhk: 3, area: 1700, value: "₹1.1 Cr", deposit: "₹77,00,000", img: "/images/property-6.jpg" },
];

export default function TenantProperties() {
  return (
    <PageTransition>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-display font-bold text-navy-900 dark:text-white">Browse Properties</h1>
          <p className="text-sm text-navy-500 dark:text-navy-400 mt-1">Premium verified listings in Bangalore</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p) => (
            <div key={p.id} className="bg-white dark:bg-navy-800 rounded-xl border border-navy-100 dark:border-navy-700 overflow-hidden hover:shadow-glass transition-all duration-300 hover:-translate-y-1 group">
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-3 right-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-white/90 text-navy-700 font-medium backdrop-blur-sm">{p.bhk} BHK</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-navy-900 dark:text-white text-sm">{p.title}</h3>
                <p className="text-xs text-navy-500 dark:text-navy-400 mt-1">📍 {p.locality}</p>
                <div className="mt-3 flex gap-3 text-xs text-navy-400">
                  <span>{p.area} sq.ft</span>
                  <span>•</span>
                  <span>Value: {p.value}</span>
                </div>
                <div className="mt-4 flex items-center justify-between pt-4 border-t border-navy-50 dark:border-navy-700">
                  <div>
                    <span className="text-[10px] text-navy-400 uppercase tracking-wider">Deposit Required</span>
                    <p className="text-sm font-display font-bold text-navy-900 dark:text-white">{p.deposit}</p>
                  </div>
                  <button className="text-xs font-medium text-gold-600 hover:text-gold-500 transition-colors">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
