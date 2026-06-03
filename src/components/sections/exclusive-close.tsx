"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/motion/magnetic-button";

export function ExclusiveClose() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.4 });

  return (
    <section ref={sectionRef} className="relative py-28 sm:py-36 bg-navy-950">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(201,169,97,0.04)_0%,_transparent_50%)]" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight">
            NWTR is currently accepting
            <br />
            applications in Bangalore.
          </h2>
        </motion.div>

        <motion.div
          className="mt-8 space-y-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm text-navy-300">
            Properties available in Koramangala, Indiranagar, HSR Layout, and Whitefield.
          </p>
          <p className="text-sm text-gold-400/80">
            Minimum deposit: ₹25 Lakhs.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <MagneticButton strength={0.25}>
            <Button
              variant="primary"
              size="lg"
              className="shadow-gold hover:shadow-gold-lg transition-all duration-300 text-base font-semibold min-w-[180px]"
            >
              Apply as Tenant
            </Button>
          </MagneticButton>
          <MagneticButton strength={0.2}>
            <Button
              variant="ghost"
              size="lg"
              className="text-white/70 hover:text-white border border-navy-700 hover:border-navy-500 min-w-[180px]"
            >
              List Your Property
            </Button>
          </MagneticButton>
        </motion.div>

        {/* Fine print — institutional tone */}
        <motion.div
          className="mt-16 pt-8 border-t border-navy-800"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] uppercase tracking-wider text-navy-500">
            <span>NBFC Regulated</span>
            <span className="w-1 h-1 rounded-full bg-navy-700" />
            <span>100% Refundable</span>
            <span className="w-1 h-1 rounded-full bg-navy-700" />
            <span>No Lock-in Beyond Term</span>
            <span className="w-1 h-1 rounded-full bg-navy-700" />
            <span>KYC Required</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
