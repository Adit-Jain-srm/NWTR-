import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import Link from "next/link";

const footerLinks = {
  product: {
    title: "Product",
    links: [
      { href: "/how-it-works", label: "How It Works" },
      { href: "/for-tenants", label: "For Tenants" },
      { href: "/for-owners", label: "For Owners" },
      { href: "/trust-security", label: "Trust & Security" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "#", label: "Careers" },
      { href: "#", label: "Press" },
      { href: "#", label: "Blog" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms of Service" },
      { href: "#", label: "Refund Policy" },
      { href: "#", label: "Grievance Redressal" },
    ],
  },
  support: {
    title: "Support",
    links: [
      { href: "#", label: "Help Center" },
      { href: "#", label: "Contact Us" },
      { href: "#", label: "FAQs" },
      { href: "#", label: "Partner with Us" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white pt-16 pb-8">
      <Container size="wide">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link href="/" className="inline-block">
              <span className="font-display text-2xl font-bold text-white">
                NWTR
              </span>
            </Link>
            <p className="mt-4 text-sm text-navy-300 max-w-xs">
              The future of intelligent renting. Deposit your way to premium
              living with zero monthly rent.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs text-emerald-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                NBFC Regulated
              </span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-sm font-semibold text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-navy-300 hover:text-gold-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Divider variant="default" className="my-12 bg-navy-700" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy-400">
            © {new Date().getFullYear()} NWTR Technologies Pvt. Ltd. All rights
            reserved.
          </p>
          <p className="text-xs text-navy-400">
            Regulated by RBI via NBFC Partner · RERA Registered · DPDP
            Compliant
          </p>
        </div>
      </Container>
    </footer>
  );
}
