import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AIChatWidget } from "@/components/ai/chat-widget";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <AIChatWidget />
    </>
  );
}
