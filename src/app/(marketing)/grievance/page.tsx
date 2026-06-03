import { Container } from "@/components/ui/container";

export default function GrievancePage() {
  return (
    <section className="min-h-screen bg-navy-950 pt-24 pb-16">
      <Container size="md">
        <p className="text-xs uppercase tracking-[0.3em] text-gold-400/70 mb-3">Legal</p>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white">Grievance Redressal</h1>
        <p className="mt-4 text-navy-200 max-w-lg">
          We take every concern seriously. Here&apos;s how to escalate issues if you&apos;re not satisfied with our service.
        </p>

        <div className="mt-12 space-y-6">
          <div className="border border-navy-800 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs bg-gold-500/10 text-gold-400 px-2 py-0.5 rounded font-medium">Level 1</span>
            </div>
            <h3 className="text-base font-semibold text-white">Relationship Manager</h3>
            <p className="text-sm text-navy-300 mt-2">Your first point of contact for any issue. Available via Dashboard → Support or directly via call/email. Expected resolution: 48 hours.</p>
          </div>

          <div className="border border-navy-800 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs bg-gold-500/10 text-gold-400 px-2 py-0.5 rounded font-medium">Level 2</span>
            </div>
            <h3 className="text-base font-semibold text-white">Grievance Officer</h3>
            <p className="text-sm text-navy-300 mt-2">If your RM cannot resolve the issue within 48 hours, escalate to our Grievance Officer.</p>
            <div className="mt-3 text-sm text-navy-300">
              <p>Name: Vikram Singh, Grievance Officer</p>
              <p>Email: grievance@nwtr.in</p>
              <p>Phone: +91 80 4567 8901</p>
              <p className="text-xs text-navy-400 mt-1">Expected resolution: 7 business days</p>
            </div>
          </div>

          <div className="border border-navy-800 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs bg-red-500/10 text-red-400 px-2 py-0.5 rounded font-medium">Level 3</span>
            </div>
            <h3 className="text-base font-semibold text-white">Regulatory Escalation</h3>
            <p className="text-sm text-navy-300 mt-2">If unresolved after 15 business days, you may escalate to the relevant regulatory body:</p>
            <ul className="list-disc list-inside text-sm text-navy-300 mt-2 space-y-1">
              <li>RBI Ombudsman (for deposit/NBFC issues)</li>
              <li>RERA Authority, Karnataka (for property disputes)</li>
              <li>Consumer Court (for service complaints)</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
