"use client";

import { ScrollPinSection } from "@/components/motion/scroll-pin-section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { motion } from "framer-motion";

export function HowItWorks() {
  return (
    <section id="how-it-works">
      <ScrollPinSection height="500vh" className="bg-navy-950">
        {(progress) => (
          <div className="w-full h-full relative flex items-center justify-center text-white">
            <Container>
              {/* Progress dots */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-2">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-1.5 w-8 rounded-full transition-all duration-500"
                    style={{ backgroundColor: progress >= i * 0.2 ? "rgb(201, 169, 97)" : "rgba(255,255,255,0.15)" }}
                  />
                ))}
              </div>

              <div className="relative h-[70vh] flex items-center justify-center">
                {progress < 0.25 && <Scene1 progress={Math.min(1, progress / 0.2)} exitProgress={progress} />}
                {progress >= 0.18 && progress < 0.45 && <Scene2 progress={Math.max(0, Math.min(1, (progress - 0.2) / 0.2))} exitProgress={progress} />}
                {progress >= 0.38 && progress < 0.65 && <Scene3 progress={Math.max(0, Math.min(1, (progress - 0.4) / 0.2))} />}
                {progress >= 0.58 && progress < 0.85 && <Scene4 progress={Math.max(0, Math.min(1, (progress - 0.6) / 0.2))} />}
                {progress >= 0.78 && <Scene5 progress={Math.max(0, Math.min(1, (progress - 0.8) / 0.2))} />}
              </div>
            </Container>

            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.15 + progress * 0.2 }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold-500/30 blur-[150px]" />
            </div>
          </div>
        )}
      </ScrollPinSection>
    </section>
  );
}

function Scene1({ progress, exitProgress }: { progress: number; exitProgress: number }) {
  const opacity = exitProgress > 0.18 ? Math.max(0, 1 - (exitProgress - 0.18) / 0.07) : Math.min(1, progress * 2);
  return (
    <motion.div className="absolute inset-0 flex items-center justify-center" style={{ opacity }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto text-center">
        <div>
          <div className="text-5xl mb-4" style={{ opacity: Math.min(1, progress * 3) }}>💸</div>
          <h3 className="text-xl font-display font-bold">Tenant&apos;s Problem</h3>
          <p className="mt-2 text-navy-300 text-sm">Monthly rent burns ₹50K–₹1.5L.<br/>Zero returns. Pure expense.</p>
        </div>
        <div>
          <div className="text-5xl mb-4" style={{ opacity: Math.min(1, progress * 3) }}>🏠</div>
          <h3 className="text-xl font-display font-bold">Owner&apos;s Problem</h3>
          <p className="mt-2 text-navy-300 text-sm">Vacancy anxiety. Unreliable tenants.<br/>Income unpredictability.</p>
        </div>
      </div>
    </motion.div>
  );
}

function Scene2({ progress, exitProgress }: { progress: number; exitProgress: number }) {
  const opacity = exitProgress > 0.38 ? Math.max(0, 1 - (exitProgress - 0.38) / 0.07) : Math.min(1, progress * 3);
  return (
    <motion.div className="absolute inset-0 flex items-center justify-center" style={{ opacity }}>
      <div className="text-center max-w-lg">
        <div className="text-4xl sm:text-5xl font-display font-bold text-gold-400 mb-6" style={{ transform: `scale(${0.85 + progress * 0.15})` }}>
          ₹15,00,000
        </div>
        <div className="relative w-40 h-40 mx-auto mb-6">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <rect x="30" y="40" width="140" height="130" rx="10" fill="none" stroke="rgb(201,169,97)" strokeWidth="2" strokeDasharray="540" strokeDashoffset={540 - 540 * Math.min(1, progress * 2)} />
            <circle cx="100" cy="105" r="25" fill="none" stroke="rgb(201,169,97)" strokeWidth="2" opacity={Math.min(1, progress * 3 - 0.5)} />
            <rect x="90" y="95" width="20" height="15" rx="3" fill="rgb(201,169,97)" opacity={progress > 0.6 ? 1 : 0} />
            <path d="M 95 95 L 95 88 A 5 5 0 0 1 105 88 L 105 95" fill="none" stroke="rgb(201,169,97)" strokeWidth="2" opacity={progress > 0.6 ? 1 : 0} />
          </svg>
        </div>
        <h3 className="text-2xl font-display font-bold">The NWTR Way</h3>
        <p className="mt-2 text-navy-300">Your deposit enters a secure, NBFC-regulated vault.</p>
      </div>
    </motion.div>
  );
}

function Scene3({ progress }: { progress: number }) {
  const instruments = [
    { label: "Fixed Deposits", yield: 7.2 },
    { label: "Government Bonds", yield: 8.1 },
    { label: "Liquid Funds", yield: 6.5 },
  ];
  return (
    <motion.div className="absolute inset-0 flex items-center justify-center" style={{ opacity: Math.min(1, progress * 3) }}>
      <div className="text-center max-w-3xl w-full">
        <h3 className="text-2xl font-display font-bold mb-10">Your Deposit Works While You Live</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {instruments.map((inst, i) => (
            <div
              key={inst.label}
              className="glass-dark rounded-xl p-5 border border-white/10"
              style={{ opacity: Math.min(1, Math.max(0, progress * 3 - i * 0.3)), transform: `translateY(${Math.max(0, (1 - progress * 2 + i * 0.15)) * 20}px)` }}
            >
              <div className="text-sm text-navy-300 mb-2">{inst.label}</div>
              <div className="text-3xl font-display font-bold text-emerald-500">
                {progress > 0.4 ? <AnimatedCounter target={inst.yield} suffix="%" decimals={1} duration={1200} /> : "0.0%"}
              </div>
              <div className="text-xs text-navy-400 mt-1">Annual Yield</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Scene4({ progress }: { progress: number }) {
  return (
    <motion.div className="absolute inset-0 flex items-center justify-center" style={{ opacity: Math.min(1, progress * 3) }}>
      <div className="max-w-4xl w-full">
        <h3 className="text-2xl font-display font-bold text-center mb-10">Everyone Wins</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center" style={{ opacity: Math.min(1, progress * 3), transform: `translateX(${(1 - Math.min(1, progress * 2)) * -20}px)` }}>
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/15 flex items-center justify-center mb-3"><span className="text-2xl">🏡</span></div>
            <h4 className="font-display font-bold">Owner</h4>
            <p className="text-navy-300 text-sm mt-1">₹45,000/mo guaranteed</p>
          </div>
          <div className="text-center" style={{ opacity: Math.min(1, progress * 2.5), transform: `translateY(${(1 - Math.min(1, progress * 2)) * 15}px)` }}>
            <div className="w-14 h-14 mx-auto rounded-full bg-gold-500/15 flex items-center justify-center mb-3"><span className="text-2xl">🔑</span></div>
            <h4 className="font-display font-bold">Tenant</h4>
            <p className="text-navy-300 text-sm mt-1">₹0/mo rent. Lives free.</p>
          </div>
          <div className="text-center" style={{ opacity: Math.min(1, progress * 3 - 0.3), transform: `translateX(${(1 - Math.min(1, progress * 2)) * 20}px)` }}>
            <div className="w-14 h-14 mx-auto rounded-full bg-navy-600/30 border border-navy-500/30 flex items-center justify-center mb-3"><span className="text-2xl">🛡️</span></div>
            <h4 className="font-display font-bold">NWTR</h4>
            <p className="text-navy-300 text-sm mt-1">Earns yield spread</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Scene5({ progress }: { progress: number }) {
  return (
    <motion.div className="absolute inset-0 flex items-center justify-center" style={{ opacity: Math.min(1, progress * 3) }}>
      <div className="text-center max-w-lg">
        <div className="relative w-56 h-2 mx-auto mb-10 rounded-full bg-navy-700 overflow-hidden">
          <div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 transition-all duration-300" style={{ width: `${Math.min(100, progress * 150)}%` }} />
          <span className="absolute -left-2 -top-6 text-xs text-navy-400">Start</span>
          <span className="absolute -right-2 -top-6 text-xs text-navy-400">End</span>
        </div>
        <div className="text-5xl font-display font-bold text-gold-400 mb-2">₹15,00,000</div>
        <div className="text-lg text-emerald-400 font-medium">+ ₹1,23,000 returns</div>
        <p className="mt-5 text-navy-300 text-lg">Full deposit returned. Plus earnings.</p>
        <div className="mt-8" style={{ opacity: progress > 0.6 ? (progress - 0.6) * 2.5 : 0 }}>
          <Button variant="primary" size="lg" className="shadow-gold">Start Your Journey</Button>
        </div>
      </div>
    </motion.div>
  );
}
