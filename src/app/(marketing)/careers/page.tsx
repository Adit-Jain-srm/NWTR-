import { Container } from "@/components/ui/container";
import Link from "next/link";

const roles = [
  { title: "Senior Full-Stack Engineer", type: "Engineering", location: "Bangalore / Remote", description: "Build the core platform — Next.js, TypeScript, PostgreSQL, real-time systems." },
  { title: "Product Designer", type: "Design", location: "Bangalore", description: "Own the end-to-end experience for HNI tenants and property owners." },
  { title: "Relationship Manager", type: "Operations", location: "Bangalore", description: "Manage client relationships, close deals, and ensure seamless onboarding." },
  { title: "NBFC Compliance Analyst", type: "Legal & Finance", location: "Bangalore", description: "Ensure regulatory compliance across RBI, SEBI, and RERA frameworks." },
];

export default function CareersPage() {
  return (
    <section className="min-h-screen bg-navy-950 pt-24 pb-16">
      <Container size="md">
        <p className="text-xs uppercase tracking-[0.3em] text-gold-400/70 mb-3">Join Us</p>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white">Careers at NWTR</h1>
        <p className="mt-4 text-navy-200 max-w-lg">
          We&apos;re building the future of renting in India. Join a team that&apos;s reimagining how wealth
          and housing intersect for high-net-worth professionals.
        </p>

        <div className="mt-12 space-y-4">
          {roles.map((role) => (
            <Link href="/contact" key={role.title} className="block border border-navy-800 hover:border-gold-500/20 p-6 rounded-lg transition-colors group">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-display font-bold text-white group-hover:text-gold-400 transition-colors">{role.title}</h2>
                  <p className="text-sm text-navy-300 mt-1">{role.description}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <span className="text-[10px] uppercase tracking-wider text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded">{role.type}</span>
                    <span className="text-xs text-navy-400">{role.location}</span>
                  </div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-navy-600 group-hover:text-gold-400 transition-colors shrink-0 mt-1" strokeLinecap="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 border border-navy-800 p-6 rounded-lg">
          <h3 className="text-sm font-semibold text-white">Don&apos;t see your role?</h3>
          <p className="text-sm text-navy-300 mt-1">Send your resume to <span className="text-gold-400">careers@nwtr.in</span> — we&apos;re always looking for exceptional people.</p>
        </div>
      </Container>
    </section>
  );
}
