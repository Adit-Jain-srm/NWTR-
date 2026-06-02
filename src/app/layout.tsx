import type { Metadata, Viewport } from "next";
import { inter, playfair, jetbrainsMono, satoshi } from "@/lib/fonts";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFBFD" },
    { media: "(prefers-color-scheme: dark)", color: "#0A1628" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "NWTR — The Future of Intelligent Renting",
    template: "%s | NWTR",
  },
  description:
    "Deposit your way to premium living. Zero monthly rent. Full refund guaranteed. India's first deposit-based rental platform powered by NBFC-grade financial infrastructure.",
  keywords: [
    "NWTR", "New Way To Rent", "deposit-based rental", "zero rent",
    "proptech India", "fintech", "HNI rental", "premium rental Bangalore",
    "NBFC rental platform", "security deposit investment",
  ],
  authors: [{ name: "NWTR Technologies" }],
  creator: "NWTR Technologies Pvt. Ltd.",
  metadataBase: new URL("https://nwtr.in"),
  openGraph: {
    title: "NWTR — The Future of Intelligent Renting",
    description: "Deposit your way to premium living. Zero monthly rent. Full refund guaranteed.",
    type: "website",
    locale: "en_IN",
    siteName: "NWTR",
    url: "https://nwtr.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "NWTR — The Future of Intelligent Renting",
    description: "Deposit your way to premium living. Zero monthly rent. Full refund guaranteed.",
  },
  robots: { index: true, follow: true },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NWTR",
  alternateName: "New Way To Rent",
  description: "India's first deposit-based rental platform. Tenants deposit and live rent-free. Owners receive guaranteed monthly payouts.",
  url: "https://nwtr.in",
  foundingDate: "2026",
  areaServed: { "@type": "Country", name: "India" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} ${satoshi.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen bg-surface-50 text-navy-950 antialiased dark:bg-navy-950 dark:text-navy-100">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold-500 focus:text-navy-900 focus:rounded-lg focus:font-medium focus:text-sm"
        >
          Skip to main content
        </a>
        <div id="main-content">{children}</div>
      </body>
    </html>
  );
}
