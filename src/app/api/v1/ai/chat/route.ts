import { NextRequest } from "next/server";
import { success } from "@/lib/api-response";
import { DEPOSIT } from "@/lib/constants";

export const maxDuration = 30;

const SYSTEM_PROMPT = `You are the NWTR AI Assistant — a knowledgeable, premium, and trustworthy guide for India's first deposit-based rental platform.

About NWTR:
- Tenants deposit 50-80% of property value and live rent-free
- Deposit invested in FDs, G-Secs, T-Bills via NBFC (7.5% blended yield)
- Generated yield funds monthly owner payouts
- Full deposit returned at tenure end
- Regulated: RBI via NBFC, SEBI instruments, RERA registered

Key numbers: ${DEPOSIT.blendedYieldRate * 100}% yield, ${DEPOSIT.minPercentage}-${DEPOSIT.maxPercentage}% deposit, ${DEPOSIT.defaultTenureMonths}mo tenure.

Be concise, professional, warm. Use ₹ in lakh/crore. Emphasize safety.`;

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  if (!process.env.OPENAI_API_KEY) {
    return success({
      role: "assistant",
      content: "AI assistant is not configured yet. Please add OPENAI_API_KEY to environment variables. In the meantime, here's what I can tell you:\n\n• NWTR allows tenants to deposit 70-80% of property value and live rent-free\n• Deposits are invested in NBFC-regulated instruments at ~7.5% yield\n• Owners receive guaranteed monthly payouts\n• Full deposit is returned at tenure end\n\nFor more, explore the How It Works page.",
      configured: false,
    });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages.slice(-10),
        ],
        max_tokens: 800,
        temperature: 0.7,
        stream: true,
      }),
    });

    if (!response.ok) {
      return success({ role: "assistant", content: "I'm having trouble connecting. Please try again.", configured: true });
    }

    return new Response(response.body, {
      headers: { "Content-Type": "text/event-stream", "Cache-Control": "no-cache", "Connection": "keep-alive" },
    });
  } catch {
    return success({ role: "assistant", content: "Something went wrong. Please try again.", configured: true });
  }
}
