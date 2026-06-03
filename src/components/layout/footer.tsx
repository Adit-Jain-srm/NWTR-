import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { Logo } from "@/components/ui/logo";
import { Badge } from "@/components/ui/badge";

const sections = {
  product: {
    title: "Product",
    links: [
      { href: "/how-it-works", label: "How It Works" },
      { href: "/properties", label: "Properties" },
      { href: "/for-tenants", label: "For Tenants" },
      { href: "/for-owners", label: "For Owners" },
      { href: "/trust-security", label: "Trust & Security" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
      { href: "/careers", label: "Careers" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/refund-policy", label: "Refund Policy" },
      { href: "/grievance", label: "Grievance Redressal" },
    ],
  },
  support: {
    title: "Support",
    links: [
      { href: "/help", label: "Help Center" },
      { href: "/contact", label: "Contact Us" },
      { href: "/help", label: "FAQs" },
      { href: "/partner", label: "Partner with Us" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-navy-900 dark:bg-navy-950 text-white pt-16 pb-8">
      <Container size="xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Logo variant="light" />
            <p className="mt-4 text-sm text-navy-300 max-w-xs leading-relaxed">
              The future of intelligent renting. Deposit your way to premium living with zero monthly rent.
            </p>
            <div className="mt-5">
              <Badge variant="success" dot>NBFC Regulated</Badge>
            </div>
          </div>

          {Object.entries(sections).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-sm font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-navy-300 hover:text-gold-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Divider variant="default" className="my-12 !bg-navy-700" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy-400">
            © {new Date().getFullYear()} NWTR Technologies Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-navy-400">
            Regulated by RBI via NBFC Partner · RERA Registered · DPDP Compliant
          </p>
        </div>
      </Container>
    </footer>
  );
}
