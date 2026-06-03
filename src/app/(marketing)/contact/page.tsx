import { Container } from "@/components/ui/container";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-navy-950 pt-24 pb-16">
      <Container size="md">
        <p className="text-xs uppercase tracking-[0.3em] text-gold-400/70 mb-3">Get in Touch</p>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white">Contact Us</h1>
        <p className="mt-4 text-navy-200 max-w-lg">
          Have questions about NWTR? We&apos;re here to help.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="border border-navy-800 p-6 rounded-lg">
              <h3 className="text-sm font-semibold text-white mb-2">General Enquiries</h3>
              <p className="text-sm text-navy-300">hello@nwtr.in</p>
              <p className="text-sm text-navy-300">+91 80 4567 8900</p>
            </div>
            <div className="border border-navy-800 p-6 rounded-lg">
              <h3 className="text-sm font-semibold text-white mb-2">For Tenants</h3>
              <p className="text-sm text-navy-300">tenants@nwtr.in</p>
              <p className="text-xs text-navy-400 mt-1">Response within 4 hours</p>
            </div>
            <div className="border border-navy-800 p-6 rounded-lg">
              <h3 className="text-sm font-semibold text-white mb-2">For Property Owners</h3>
              <p className="text-sm text-navy-300">owners@nwtr.in</p>
              <p className="text-xs text-navy-400 mt-1">Dedicated RM assigned within 24 hours</p>
            </div>
            <div className="border border-navy-800 p-6 rounded-lg">
              <h3 className="text-sm font-semibold text-white mb-2">Office</h3>
              <p className="text-sm text-navy-300">WeWork Galaxy, 43 Residency Road</p>
              <p className="text-sm text-navy-300">Bangalore, Karnataka 560025</p>
            </div>
          </div>

          <div className="border border-navy-800 p-6 rounded-lg">
            <h3 className="text-sm font-semibold text-white mb-4">Send a Message</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Your name" className="w-full bg-navy-800/50 border border-navy-700 rounded-lg px-4 py-3 text-sm text-white placeholder-navy-500 focus:outline-none focus:border-gold-500/50" />
              <input type="email" placeholder="Email address" className="w-full bg-navy-800/50 border border-navy-700 rounded-lg px-4 py-3 text-sm text-white placeholder-navy-500 focus:outline-none focus:border-gold-500/50" />
              <select className="w-full bg-navy-800/50 border border-navy-700 rounded-lg px-4 py-3 text-sm text-navy-400 focus:outline-none focus:border-gold-500/50">
                <option>I&apos;m a tenant</option>
                <option>I&apos;m a property owner</option>
                <option>Partnership enquiry</option>
                <option>Other</option>
              </select>
              <textarea placeholder="Your message" rows={4} className="w-full bg-navy-800/50 border border-navy-700 rounded-lg px-4 py-3 text-sm text-white placeholder-navy-500 focus:outline-none focus:border-gold-500/50 resize-none" />
              <button type="submit" className="w-full bg-gold-500 text-navy-900 font-semibold py-3 rounded-lg hover:bg-gold-400 transition-colors text-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
