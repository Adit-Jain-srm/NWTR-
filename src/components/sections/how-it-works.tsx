"use client";

import { ScrollPinSection } from "@/components/motion/scroll-pin-section";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { motion } from "framer-motion";

export function HowItWorks() {
  return (
    <section id="how-it-works">
      <ScrollPinSection height="500vh" className="bg-navy-900">
        {(progress) => (
          <div className="w-full h-full relative flex items-center justify-center text-white">
            <Container className="relative z-10">
              {/* Progress indicator */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-2">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-1 w-8 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor:
                        progress >= i * 0.2
                          ? "rgb(201, 169, 97)"
                          : "rgba(255,255,255,0.2)",
                    }}
                  />
                ))}
              </div>

              {/* Scene rendering based on progress */}
              <div className="relative h-[70vh] flex items-center justify-center">
                <SceneTheProblem progress={progress} />
                <SceneTheNWTRWay progress={progress} />
                <SceneTheMagic progress={progress} />
                <SceneEveryoneWins progress={progress} />
                <SceneTheReturn progress={progress} />
              </div>
            </Container>

            {/* Background ambient */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
                style={{
                  background: `radial-gradient(circle, rgba(201, 169, 97, ${0.3 + progress * 0.4}) 0%, transparent 70%)`,
                }}
              />
            </div>
          </div>
        )}
      </ScrollPinSection>
    </section>
  );
}

function SceneTheProblem({ progress }: { progress: number }) {
  const sceneProgress = Math.max(0, Math.min(1, progress / 0.2));
  if (progress > 0.25) return null;

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{ opacity: sceneProgress > 0.9 ? 1 - (progress - 0.18) / 0.07 : sceneProgress }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Tenant side */}
        <div className="text-center">
          <motion.div
            className="text-6xl mb-4"
            style={{ opacity: Math.min(1, sceneProgress * 2) }}
          >
            💸
          </motion.div>
          <h3 className="text-xl font-display font-bold mb-2">
            Tenant&apos;s Problem
          </h3>
          <p className="text-navy-300 text-sm">
            Monthly rent burns ₹50,000–₹1,50,000.
            <br />
            Zero returns. Pure expense.
          </p>
          {/* Floating rupee symbols */}
          <div className="relative h-20 mt-4">
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute text-gold-500/60 text-sm"
                style={{
                  left: `${20 + i * 15}%`,
                  bottom: `${sceneProgress * 100 * (0.5 + i * 0.1)}%`,
                  opacity: Math.max(0, 1 - sceneProgress * (0.8 + i * 0.1)),
                }}
              >
                ₹
              </motion.span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-32">
          <div
            className="w-px h-full bg-gradient-to-b from-transparent via-gold-500 to-transparent"
            style={{ opacity: sceneProgress }}
          />
        </div>

        {/* Owner side */}
        <div className="text-center">
          <motion.div
            className="text-6xl mb-4"
            style={{ opacity: Math.min(1, sceneProgress * 2) }}
          >
            🏠
          </motion.div>
          <h3 className="text-xl font-display font-bold mb-2">
            Owner&apos;s Problem
          </h3>
          <p className="text-navy-300 text-sm">
            Vacancy anxiety. Unreliable tenants.
            <br />
            Income unpredictability.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function SceneTheNWTRWay({ progress }: { progress: number }) {
  const localProgress = Math.max(0, Math.min(1, (progress - 0.2) / 0.2));
  if (progress < 0.18 || progress > 0.45) return null;

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{ opacity: localProgress > 0.9 ? 1 - (progress - 0.38) / 0.07 : Math.min(1, localProgress * 3) }}
    >
      <div className="text-center max-w-xl">
        <motion.div
          className="text-5xl font-display font-bold text-gold-400 mb-6"
          style={{ scale: 0.8 + localProgress * 0.2 }}
        >
          ₹15,00,000
        </motion.div>

        {/* Vault SVG */}
        <div className="relative w-48 h-48 mx-auto mb-6">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Vault body */}
            <rect
              x="30" y="40" width="140" height="130"
              rx="8"
              fill="none"
              stroke="rgb(201, 169, 97)"
              strokeWidth="2"
              strokeDasharray="540"
              strokeDashoffset={540 - 540 * Math.min(1, localProgress * 2)}
            />
            {/* Vault door handle */}
            <circle
              cx="100" cy="105" r="25"
              fill="none"
              stroke="rgb(201, 169, 97)"
              strokeWidth="2"
              opacity={Math.min(1, localProgress * 3 - 0.5)}
            />
            {/* Lock icon */}
            <rect
              x="90" y="95" width="20" height="15"
              rx="3"
              fill="rgb(201, 169, 97)"
              opacity={localProgress > 0.6 ? 1 : 0}
            />
            <path
              d="M 95 95 L 95 88 A 5 5 0 0 1 105 88 L 105 95"
              fill="none"
              stroke="rgb(201, 169, 97)"
              strokeWidth="2"
              opacity={localProgress > 0.6 ? 1 : 0}
            />
          </svg>
        </div>

        <h3 className="text-2xl font-display font-bold mb-3">
          The NWTR Way
        </h3>
        <p className="text-navy-300">
          Your deposit enters a secure, NBFC-regulated vault.
          <br />
          Protected by institutional-grade infrastructure.
        </p>

        {/* Trust indicators */}
        <div
          className="flex items-center justify-center gap-4 mt-6"
          style={{ opacity: Math.max(0, localProgress - 0.5) * 2 }}
        >
          <span className="text-xs text-navy-400 border border-navy-600 rounded-full px-3 py-1">
            🏦 RBI Regulated
          </span>
          <span className="text-xs text-navy-400 border border-navy-600 rounded-full px-3 py-1">
            🔒 Escrow Protected
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function SceneTheMagic({ progress }: { progress: number }) {
  const localProgress = Math.max(0, Math.min(1, (progress - 0.4) / 0.2));
  if (progress < 0.38 || progress > 0.65) return null;

  const instruments = [
    { label: "Fixed Deposits", yield: "7.2", angle: -30 },
    { label: "Government Bonds", yield: "8.1", angle: 0 },
    { label: "Liquid Funds", yield: "6.5", angle: 30 },
  ];

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{ opacity: localProgress > 0.9 ? 1 - (progress - 0.58) / 0.07 : Math.min(1, localProgress * 3) }}
    >
      <div className="text-center max-w-3xl w-full">
        <h3 className="text-2xl font-display font-bold mb-12">
          Your Deposit Works While You Live
        </h3>

        <div className="relative">
          {/* Central vault glow */}
          <div className="w-20 h-20 mx-auto rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center mb-8">
            <span className="text-2xl">🏦</span>
          </div>

          {/* Instrument cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {instruments.map((inst, i) => (
              <motion.div
                key={inst.label}
                className="glass-dark rounded-xl p-6 border border-navy-600"
                style={{
                  opacity: Math.min(1, Math.max(0, localProgress * 3 - i * 0.3)),
                  transform: `translateY(${Math.max(0, (1 - localProgress * 2 + i * 0.2)) * 20}px)`,
                }}
              >
                <div className="text-sm text-navy-300 mb-2">{inst.label}</div>
                <div className="text-3xl font-display font-bold text-emerald-500">
                  {localProgress > 0.5 ? (
                    <AnimatedCounter
                      target={parseFloat(inst.yield)}
                      suffix="%"
                      decimals={1}
                      duration={1500}
                    />
                  ) : (
                    "0.0%"
                  )}
                </div>
                <div className="text-xs text-navy-400 mt-1">Annual Yield</div>
              </motion.div>
            ))}
          </div>

          {/* Flow lines (simplified particle representation) */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-md pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-gold-400"
                style={{
                  left: `${30 + (i % 3) * 20}%`,
                  top: `${localProgress * 100 * (0.3 + (i % 3) * 0.2)}%`,
                  opacity: localProgress > 0.3 ? 0.6 : 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SceneEveryoneWins({ progress }: { progress: number }) {
  const localProgress = Math.max(0, Math.min(1, (progress - 0.6) / 0.2));
  if (progress < 0.58 || progress > 0.85) return null;

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{ opacity: localProgress > 0.9 ? 1 - (progress - 0.78) / 0.07 : Math.min(1, localProgress * 3) }}
    >
      <div className="max-w-4xl w-full">
        <h3 className="text-2xl font-display font-bold text-center mb-12">
          A System Where Everyone Wins
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Owner */}
          <motion.div
            className="text-center"
            style={{ opacity: Math.min(1, localProgress * 3), transform: `translateX(${Math.max(0, (1 - localProgress * 2)) * -30}px)` }}
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
              <span className="text-2xl">🏡</span>
            </div>
            <h4 className="font-display font-bold mb-2">Owner</h4>
            <p className="text-navy-300 text-sm mb-3">Monthly payout guaranteed</p>
            <div className="text-2xl font-display font-bold text-emerald-500">₹45,000/mo</div>
            <span className="inline-block mt-2 text-xs text-emerald-400">✓ Verified tenants</span>
          </motion.div>

          {/* Tenant */}
          <motion.div
            className="text-center"
            style={{ opacity: Math.min(1, localProgress * 2.5), transform: `translateY(${Math.max(0, (1 - localProgress * 2)) * 20}px)` }}
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-gold-500/20 flex items-center justify-center mb-4">
              <span className="text-2xl">🔑</span>
            </div>
            <h4 className="font-display font-bold mb-2">Tenant</h4>
            <p className="text-navy-300 text-sm mb-3">Lives rent-free for 1 year</p>
            <div className="text-2xl font-display font-bold text-gold-400">₹0/mo rent</div>
            <span className="inline-block mt-2 text-xs text-gold-400">✓ Full deposit returned</span>
          </motion.div>

          {/* NWTR */}
          <motion.div
            className="text-center"
            style={{ opacity: Math.min(1, localProgress * 3 - 0.3), transform: `translateX(${Math.max(0, (1 - localProgress * 2)) * 30}px)` }}
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-navy-600/40 border border-navy-500 flex items-center justify-center mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h4 className="font-display font-bold mb-2">NWTR</h4>
            <p className="text-navy-300 text-sm mb-3">Secures the ecosystem</p>
            <div className="text-2xl font-display font-bold text-white">Yield Spread</div>
            <span className="inline-block mt-2 text-xs text-navy-400">✓ Platform secured</span>
          </motion.div>
        </div>

        {/* Connecting triangle line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: localProgress > 0.5 ? (localProgress - 0.5) * 2 : 0 }}>
          <line x1="25%" y1="60%" x2="50%" y2="60%" stroke="rgb(201, 169, 97)" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
          <line x1="50%" y1="60%" x2="75%" y2="60%" stroke="rgb(201, 169, 97)" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
        </svg>
      </div>
    </motion.div>
  );
}

function SceneTheReturn({ progress }: { progress: number }) {
  const localProgress = Math.max(0, Math.min(1, (progress - 0.8) / 0.2));
  if (progress < 0.78) return null;

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{ opacity: Math.min(1, localProgress * 3) }}
    >
      <div className="text-center max-w-xl">
        {/* Timeline */}
        <div className="relative w-64 h-2 mx-auto mb-12 rounded-full bg-navy-700 overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-gold-600 to-gold-400"
            style={{ width: `${Math.min(100, localProgress * 150)}%` }}
          />
          <span className="absolute left-0 -top-6 text-xs text-navy-400">Lease Start</span>
          <span className="absolute right-0 -top-6 text-xs text-navy-400">Lease End</span>
        </div>

        {/* Return amount */}
        <motion.div
          style={{ scale: 0.9 + localProgress * 0.1, opacity: Math.min(1, localProgress * 2) }}
        >
          <div className="text-5xl font-display font-bold text-gold-400 mb-2">
            ₹15,00,000
          </div>
          <div className="text-lg text-emerald-400 font-medium">
            + ₹1,23,000 returns
          </div>
        </motion.div>

        <p className="mt-6 text-navy-300 text-lg">
          Full deposit returned. Plus earnings.
        </p>

        {/* Confetti-like dots */}
        {localProgress > 0.7 && (
          <div className="relative h-16 mt-4">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  left: `${25 + Math.random() * 50}%`,
                  top: `${Math.random() * 100}%`,
                  backgroundColor: i % 2 === 0 ? "rgb(201, 169, 97)" : "rgba(255, 255, 255, 0.4)",
                  opacity: localProgress > 0.7 ? (localProgress - 0.7) * 3 : 0,
                }}
                animate={{
                  y: [0, -20 - Math.random() * 30],
                  opacity: [1, 0],
                }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.05,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div
          className="mt-8"
          style={{ opacity: localProgress > 0.6 ? (localProgress - 0.6) * 2.5 : 0 }}
        >
          <Button variant="primary" size="lg" className="shadow-gold">
            Start Your Journey
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
