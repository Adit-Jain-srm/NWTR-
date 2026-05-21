import type { Metadata, Viewport } from "next";
import { inter, playfair, jetbrainsMono, satoshi } from "@/lib/fonts";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A1628",
};

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
    "premium rental India",
    "Bangalore rental",
    "NBFC rental",
  ],
  authors: [{ name: "NWTR Technologies" }],
  creator: "NWTR Technologies Pvt. Ltd.",
  metadataBase: new URL("https://nwtr.in"),
  openGraph: {
    title: "NWTR — The Future of Intelligent Renting",
    description:
      "Deposit your way to premium living. Zero monthly rent. Full refund guaranteed.",
    type: "website",
    locale: "en_IN",
    siteName: "NWTR",
    url: "https://nwtr.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "NWTR — The Future of Intelligent Renting",
    description:
      "Deposit your way to premium living. Zero monthly rent. Full refund guaranteed.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NWTR",
  alternateName: "New Way To Rent",
  description:
    "A premium proptech-fintech platform redefining residential rental through deposit-based living in India.",
  url: "https://nwtr.in",
  foundingDate: "2026",
  areaServed: {
    "@type": "City",
    name: "Bangalore",
    containedInPlace: {
      "@type": "Country",
      name: "India",
    },
  },
  sameAs: [],
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
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold-500 focus:text-navy-900 focus:rounded-lg focus:font-medium"
        >
          Skip to main content
        </a>
        <div id="main-content">
          {children}
        </div>
      </body>
    </html>
  );
}
