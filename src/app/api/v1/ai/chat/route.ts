import { NextRequest } from "next/server";
import { success } from "@/lib/api-response";
import { DEPOSIT } from "@/lib/constants";

export const maxDuration = 30;

const SYSTEM_PROMPT = `You are the NWTR AI Assistant — a knowledgeable, premium, and trustworthy guide for India's first deposit-based rental platform.

About NWTR:
- Tenants deposit 50-80% of property value and live rent-free for 12 months
- Deposit invested in FDs, G-Secs, T-Bills via NBFC partner (7.5% blended yield)
- Generated yield funds monthly owner payouts
- Full deposit returned at tenure end
- Regulated: RBI via NBFC, SEBI-compliant instruments, RERA registered
- Target: HNI, NRI, wealthy professionals in Bangalore

Key numbers: ${DEPOSIT.blendedYieldRate * 100}% yield, ${DEPOSIT.minPercentage}-${DEPOSIT.maxPercentage}% deposit range, ${DEPOSIT.defaultTenureMonths} month default tenure.

Behavior: Be concise, professional, warm — like a private banker. Use ₹ in lakh/crore format. Emphasize safety and regulation when trust questions arise. Never make specific return promises. Help with deposit calculations, property search, KYC guidance, and trust questions.`;

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
  const apiKey = process.env.AZURE_OPENAI_API_KEY;
  const deployment = process.env.AZURE_OPENAI_DEPLOYMENT || "gpt-4o";
  const apiVersion = process.env.AZURE_OPENAI_API_VERSION || "2025-01-01-preview";

  if (!endpoint || !apiKey) {
    return Response.json({
      success: true,
      data: {
        role: "assistant",
        content: "AI assistant is ready to help! Here's what I know:\n\n• NWTR allows tenants to deposit 70-80% of property value and live rent-free\n• Deposits invested in NBFC-regulated instruments at ~7.5% yield\n• Owners receive guaranteed monthly payouts\n• Full deposit returned at tenure end\n\nAsk me anything about properties, deposits, or how NWTR works!",
        configured: false,
      },
    });
  }

  try {
    const url = `${endpoint}/openai/deployments/${deployment}/chat/completions?api-version=${apiVersion}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
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
      const errorText = await response.text();
      console.error("Azure OpenAI error:", response.status, errorText);
      return Response.json({
        success: true,
        data: { role: "assistant", content: "I'm having a momentary issue. Please try again.", configured: true },
      });
    }

    // Stream the response back
    return new Response(response.body, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
    });
  } catch (err) {
    console.error("AI chat error:", err);
    return Response.json({
      success: true,
      data: { role: "assistant", content: "Something went wrong. Please try again.", configured: true },
    });
  }
}
