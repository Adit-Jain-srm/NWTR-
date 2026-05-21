import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { StatsBar } from "@/components/sections/stats-bar";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ValueProposition } from "@/components/sections/value-proposition";
import { TrustIndicators } from "@/components/sections/trust-indicators";
import { DepositSimulator } from "@/components/sections/deposit-simulator";
import { FAQ } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <HowItWorks />
        <ValueProposition />
        <TrustIndicators />
        <DepositSimulator />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
