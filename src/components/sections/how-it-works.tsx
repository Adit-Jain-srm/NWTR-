"use client";

import { useRef, useEffect } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const scenes = [
  {
    id: "problem",
    title: "The Problem",
    subtitle: "Traditional renting is broken",
    content: [
      { icon: "tenant", label: "Tenant", pain: "₹50K–₹1.5L/mo rent burned. Zero returns." },
      { icon: "owner", label: "Owner", pain: "Vacancy anxiety. Unreliable tenants. Inconsistent income." },
    ],
  },
  {
    id: "deposit",
    title: "The NWTR Way",
    subtitle: "Your deposit enters a secure vault",
    amount: "₹15,00,000",
    detail: "One-time deposit into an NBFC-regulated escrow account",
  },
  {
    id: "yield",
    title: "Your Money Works",
    subtitle: "Invested in safe instruments while you live free",
    instruments: [
      { name: "Fixed Deposits", yield: "7.2%", risk: "Low" },
      { name: "G-Secs / T-Bills", yield: "8.1%", risk: "Sovereign" },
      { name: "Liquid Funds", yield: "6.5%", risk: "Low" },
    ],
  },
  {
    id: "everyone-wins",
    title: "Everyone Wins",
    subtitle: "A three-sided value exchange",
    parties: [
      { role: "Owner", benefit: "₹45,000/mo guaranteed", color: "emerald" },
      { role: "Tenant", benefit: "₹0 monthly rent", color: "gold" },
      { role: "NWTR", benefit: "Yield spread earned", color: "navy" },
    ],
  },
  {
    id: "outcome",
    title: "At Tenure End",
    subtitle: "Full deposit + earnings returned to you",
    deposit: "₹15,00,000",
    returns: "₹1,23,000",
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scenesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let gsapInstance: typeof import("gsap").default;
    let ctx: ReturnType<typeof import("gsap").default.context>;

    const initGSAP = async () => {
      const gsapModule = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsapInstance = gsapModule.default;
      gsapInstance.registerPlugin(ScrollTrigger);

      if (!sectionRef.current || !scenesContainerRef.current) return;

      ctx = gsapInstance.context(() => {
        const panels = gsapInstance.utils.toArray<HTMLElement>(".hiw-scene");

        // Pin the container
        gsapInstance.to(panels, {
          xPercent: -100 * (panels.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (panels.length - 1),
            end: () => "+=" + (sectionRef.current?.offsetWidth || 0) * 1.5,
          },
        });

        // Animate each scene's elements on enter
        panels.forEach((panel) => {
          const elements = panel.querySelectorAll(".hiw-animate");
          gsapInstance.fromTo(
            elements,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: panel,
                containerAnimation: gsapInstance.getById?.("hiwPanels") || undefined,
                start: "left center",
                toggleActions: "play none none reverse",
              },
            }
          );

          // SVG path draw animations
          const paths = panel.querySelectorAll(".hiw-path");
          paths.forEach((path) => {
            const pathEl = path as SVGPathElement;
            const length = pathEl.getTotalLength?.() || 300;
            gsapInstance.set(pathEl, {
              strokeDasharray: length,
              strokeDashoffset: length,
            });
            gsapInstance.to(pathEl, {
              strokeDashoffset: 0,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: panel,
                start: "left 60%",
                end: "left 20%",
                scrub: true,
              },
            });
          });
        });
      }, sectionRef);
    };

    initGSAP();

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="relative overflow-hidden bg-navy-950">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,97,0.04)_0%,_transparent_60%)]" />

      {/* Canvas particles overlay */}
      <GoldCanvasParticles />

      <div ref={scenesContainerRef} className="flex h-screen">
        {/* Scene 1: Problem */}
        <div className="hiw-scene min-w-full h-full flex items-center justify-center px-6">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <SceneNumber number={1} />
              <h2 className="hiw-animate text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mt-4">
                {scenes[0].title}
              </h2>
              <p className="hiw-animate text-navy-400 mt-3 text-lg">{scenes[0].subtitle}</p>

              <div className="hiw-animate grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-2xl mx-auto">
                {scenes[0].content?.map((item) => (
                  <div
                    key={item.label}
                    className="relative glass-dark rounded-2xl p-6 border border-white/5"
                  >
                    <svg className="w-16 h-16 mx-auto mb-4 text-red-400/80" viewBox="0 0 64 64" fill="none">
                      {item.icon === "tenant" ? (
                        <path className="hiw-path" d="M12 52V28L32 12L52 28V52H36V38H28V52H12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      ) : (
                        <path className="hiw-path" d="M8 56H56M12 56V24L32 8L52 24V56M24 56V40H40V56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      )}
                    </svg>
                    <h3 className="text-white font-display font-bold text-lg">{item.label}</h3>
                    <p className="text-navy-300 text-sm mt-2 leading-relaxed">{item.pain}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>

        {/* Scene 2: The Deposit */}
        <div className="hiw-scene min-w-full h-full flex items-center justify-center px-6">
          <Container>
            <div className="max-w-lg mx-auto text-center">
              <SceneNumber number={2} />
              <h2 className="hiw-animate text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mt-4">
                {scenes[1].title}
              </h2>
              <p className="hiw-animate text-navy-400 mt-3 text-lg">{scenes[1].subtitle}</p>

              {/* Vault SVG */}
              <div className="hiw-animate relative w-48 h-48 mx-auto mt-10">
                <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
                  <rect className="hiw-path" x="30" y="35" width="140" height="140" rx="12" stroke="#C9A961" strokeWidth="2" />
                  <circle className="hiw-path" cx="100" cy="105" r="35" stroke="#C9A961" strokeWidth="2" />
                  <circle className="hiw-path" cx="100" cy="105" r="20" stroke="#C9A961" strokeWidth="1.5" />
                  <line className="hiw-path" x1="100" y1="70" x2="100" y2="140" stroke="#C9A961" strokeWidth="1" />
                  <line className="hiw-path" x1="65" y1="105" x2="135" y2="105" stroke="#C9A961" strokeWidth="1" />
                  <rect x="85" y="145" width="30" height="8" rx="4" fill="#C9A961" opacity="0.3" />
                </svg>
                <div className="absolute inset-0 rounded-full bg-gold-500/10 blur-[40px]" />
              </div>

              <div className="hiw-animate text-4xl sm:text-5xl font-display font-bold text-gold-400 mt-8">
                {scenes[1].amount}
              </div>
              <p className="hiw-animate text-navy-300 mt-3 text-base">{scenes[1].detail}</p>
            </div>
          </Container>
        </div>

        {/* Scene 3: Yield */}
        <div className="hiw-scene min-w-full h-full flex items-center justify-center px-6">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <SceneNumber number={3} />
              <h2 className="hiw-animate text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mt-4">
                {scenes[2].title}
              </h2>
              <p className="hiw-animate text-navy-400 mt-3 text-lg">{scenes[2].subtitle}</p>

              <div className="hiw-animate grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
                {scenes[2].instruments?.map((inst) => (
                  <div
                    key={inst.name}
                    className="glass-dark rounded-2xl p-6 border border-gold-500/10 hover:border-gold-500/30 transition-colors"
                  >
                    <div className="text-xs text-navy-400 uppercase tracking-wider">{inst.name}</div>
                    <div className="text-3xl font-display font-bold text-emerald-400 mt-3">
                      {inst.yield}
                    </div>
                    <div className="text-xs text-navy-500 mt-2 inline-flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {inst.risk} Risk
                    </div>
                  </div>
                ))}
              </div>

              {/* Flow SVG */}
              <svg className="hiw-animate w-full max-w-md mx-auto mt-8 h-12" viewBox="0 0 400 40" fill="none">
                <path className="hiw-path" d="M0 20H150M150 20C150 20 170 5 200 5C230 5 250 20 250 20M250 20H400" stroke="#C9A961" strokeWidth="1.5" strokeDasharray="4 4" />
                <circle cx="200" cy="5" r="4" fill="#C9A961" opacity="0.6" />
              </svg>
            </div>
          </Container>
        </div>

        {/* Scene 4: Everyone Wins */}
        <div className="hiw-scene min-w-full h-full flex items-center justify-center px-6">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <SceneNumber number={4} />
              <h2 className="hiw-animate text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mt-4">
                {scenes[3].title}
              </h2>
              <p className="hiw-animate text-navy-400 mt-3 text-lg">{scenes[3].subtitle}</p>

              <div className="hiw-animate grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                {scenes[3].parties?.map((party) => (
                  <div key={party.role} className="relative group">
                    <div className={cn(
                      "glass-dark rounded-2xl p-8 border transition-all duration-300",
                      party.color === "emerald" && "border-emerald-500/20 hover:border-emerald-500/40",
                      party.color === "gold" && "border-gold-500/20 hover:border-gold-500/40",
                      party.color === "navy" && "border-navy-500/20 hover:border-navy-500/40",
                    )}>
                      <div className={cn(
                        "w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-4",
                        party.color === "emerald" && "bg-emerald-500/10",
                        party.color === "gold" && "bg-gold-500/10",
                        party.color === "navy" && "bg-navy-600/30",
                      )}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={cn(
                          party.color === "emerald" && "text-emerald-400",
                          party.color === "gold" && "text-gold-400",
                          party.color === "navy" && "text-navy-300",
                        )}>
                          {party.role === "Owner" && <path d="M3 12l9-9 9 9M5 10v10h14V10" strokeLinecap="round" strokeLinejoin="round" />}
                          {party.role === "Tenant" && <path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1" strokeLinecap="round" strokeLinejoin="round" />}
                          {party.role === "NWTR" && <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />}
                        </svg>
                      </div>
                      <h3 className="text-white font-display font-bold text-lg">{party.role}</h3>
                      <p className={cn(
                        "mt-2 font-display font-semibold text-base",
                        party.color === "emerald" && "text-emerald-400",
                        party.color === "gold" && "text-gold-400",
                        party.color === "navy" && "text-navy-300",
                      )}>{party.benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>

        {/* Scene 5: Outcome */}
        <div className="hiw-scene min-w-full h-full flex items-center justify-center px-6">
          <Container>
            <div className="max-w-lg mx-auto text-center">
              <SceneNumber number={5} />
              <h2 className="hiw-animate text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mt-4">
                {scenes[4].title}
              </h2>
              <p className="hiw-animate text-navy-400 mt-3 text-lg">{scenes[4].subtitle}</p>

              {/* Timeline bar */}
              <div className="hiw-animate relative mt-12 mb-8">
                <div className="flex justify-between text-xs text-navy-500 mb-2">
                  <span>Month 1</span>
                  <span>Month 12</span>
                </div>
                <div className="h-2 rounded-full bg-navy-800 overflow-hidden">
                  <div className="h-full w-full rounded-full bg-gradient-to-r from-gold-600 via-gold-400 to-emerald-400 origin-left animate-[scaleX_2s_ease-out_forwards]" style={{ transform: "scaleX(1)" }} />
                </div>
              </div>

              <div className="hiw-animate space-y-3">
                <div className="glass-dark rounded-xl p-5 border border-white/5 flex justify-between items-center">
                  <span className="text-navy-300">Deposit Returned</span>
                  <span className="text-2xl font-display font-bold text-white">{scenes[4].deposit}</span>
                </div>
                <div className="glass-dark rounded-xl p-5 border border-emerald-500/20 flex justify-between items-center">
                  <span className="text-navy-300">Bonus Returns</span>
                  <span className="text-2xl font-display font-bold text-emerald-400">+ {scenes[4].returns}</span>
                </div>
              </div>

              <div className="hiw-animate mt-10">
                <Button variant="primary" size="lg" className="shadow-gold">
                  Start Your Journey
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {scenes.map((_, i) => (
          <div
            key={i}
            className="w-8 h-1 rounded-full bg-navy-700 overflow-hidden"
          >
            <div
              className="h-full rounded-full bg-gold-500 transition-all duration-300"
              style={{ width: "0%" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function SceneNumber({ number }: { number: number }) {
  return (
    <div className="hiw-animate inline-flex items-center gap-2 text-gold-500/80 text-xs font-medium uppercase tracking-[0.2em]">
      <span className="w-6 h-px bg-gold-500/40" />
      Step {number} of 5
      <span className="w-6 h-px bg-gold-500/40" />
    </div>
  );
}

function GoldCanvasParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const createParticles = () => {
      const count = 40;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.offsetWidth,
          y: Math.random() * canvas.offsetHeight,
          vx: (Math.random() - 0.5) * 0.3,
          vy: -Math.random() * 0.5 - 0.1,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.4 + 0.1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -10) {
          p.y = canvas.offsetHeight + 10;
          p.x = Math.random() * canvas.offsetWidth;
        }
        if (p.x < -10) p.x = canvas.offsetWidth + 10;
        if (p.x > canvas.offsetWidth + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 169, 97, ${p.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
    />
  );
}
