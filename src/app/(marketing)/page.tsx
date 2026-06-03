import { Hero } from "@/components/sections/hero";
import { ActivityTicker } from "@/components/sections/activity-ticker";
import { StatsBar } from "@/components/sections/stats-bar";
import { HowItWorks } from "@/components/sections/how-it-works";
import { ValueProposition } from "@/components/sections/value-proposition";
import { TrustSection } from "@/components/sections/trust-section";
import { DepositSimulator } from "@/components/sections/deposit-simulator";
import { FAQ } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <ActivityTicker />
      <StatsBar />
      <HowItWorks />
      <ValueProposition />
      <TrustSection />
      <DepositSimulator />
      <FAQ />
      <CTASection />
    </>
  );
}
