import "./globals.css";

export const metadata = {
  title: "NWTR — The Future of Intelligent Renting",
  description: "Deposit your way to premium living. Zero monthly rent. Full refund guaranteed.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
