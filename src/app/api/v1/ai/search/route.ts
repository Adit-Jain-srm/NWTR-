import { success, error } from "@/lib/api-response";
import { NextRequest } from "next/server";

const LOCALITY_KEYWORDS = ["koramangala", "indiranagar", "hsr", "whitefield", "sarjapur", "mg road", "hebbal", "bellandur", "jp nagar", "electronic city", "marathahalli", "ulsoor", "domlur", "btm"];

export async function POST(req: NextRequest) {
  const { query } = await req.json();

  if (!query || typeof query !== "string") {
    return error("VAL_INVALID", "Query string required", 400);
  }

  const lower = query.toLowerCase();

  const bhkMatch = lower.match(/(\d)\s*bhk/);
  const bhk = bhkMatch ? parseInt(bhkMatch[1]) : undefined;

  const locality = LOCALITY_KEYWORDS.find(l => lower.includes(l));

  const priceMatch = lower.match(/(\d+)\s*(l|lakh|cr|crore)/i);
  let maxValue: number | undefined;
  if (priceMatch) {
    const num = parseInt(priceMatch[1]);
    const unit = priceMatch[2].toLowerCase();
    maxValue = unit.startsWith("cr") ? num * 10000000 : num * 100000;
  }

  const depositMatch = lower.match(/under\s*₹?\s*(\d+)\s*(l|cr)/i);
  let maxDeposit: number | undefined;
  if (depositMatch) {
    const num = parseInt(depositMatch[1]);
    const unit = depositMatch[2].toLowerCase();
    maxDeposit = unit.startsWith("cr") ? num * 10000000 : num * 100000;
  }

  return success({
    filters: {
      locality: locality ? locality.charAt(0).toUpperCase() + locality.slice(1) : undefined,
      bhk,
      maxValue,
      maxDeposit,
    },
    originalQuery: query,
    method: "rule-based",
    message: "Filters extracted. For AI-powered search, configure OPENAI_API_KEY.",
  });
}
