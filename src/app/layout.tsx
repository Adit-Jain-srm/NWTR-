import type { Metadata } from "next";
import { inter, playfair, jetbrainsMono, satoshi } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "NWTR — The Future of Intelligent Renting",
    template: "%s | NWTR",
  },
  description:
    "Deposit your way to premium living. Zero monthly rent. Full refund guaranteed. NWTR is a luxury proptech-fintech platform that redefines residential rental through deposit-based living.",
  keywords: [
    "NWTR",
    "New Way To Rent",
    "proptech",
    "fintech",
    "deposit-based rental",
    "zero rent",
    "HNI rental",
    "premium rental",
    "India",
  ],
  openGraph: {
    title: "NWTR — The Future of Intelligent Renting",
    description:
      "Deposit your way to premium living. Zero monthly rent. Full refund guaranteed.",
    type: "website",
    locale: "en_IN",
    siteName: "NWTR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} ${satoshi.variable}`}
    >
      <body className="min-h-screen bg-surface-50 text-navy-950 antialiased">
        {children}
      </body>
    </html>
  );
}
