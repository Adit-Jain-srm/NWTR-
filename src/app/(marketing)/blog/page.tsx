import { Container } from "@/components/ui/container";

const posts = [
  { title: "How Deposit-Based Renting is Changing Bangalore's Real Estate", date: "May 28, 2026", category: "Industry", excerpt: "Traditional renting burns wealth. Here's how a deposit-based model preserves capital while you live premium." },
  { title: "Understanding NBFC Escrow: Where Your Money Actually Goes", date: "May 15, 2026", category: "Trust", excerpt: "A deep dive into the regulatory framework that keeps your deposit ring-fenced and protected." },
  { title: "NWTR vs Traditional Rent: A 3-Year Financial Comparison", date: "May 3, 2026", category: "Finance", excerpt: "We ran the numbers. Here's exactly how much an HNI saves over 3 years with NWTR vs paying market rent." },
  { title: "Bangalore's Premium Rental Market: 2026 Outlook", date: "Apr 20, 2026", category: "Market", excerpt: "Koramangala, Indiranagar, HSR — where rents are headed and what it means for high-net-worth professionals." },
];

export default function BlogPage() {
  return (
    <section className="min-h-screen bg-navy-950 pt-24 pb-16">
      <Container size="md">
        <p className="text-xs uppercase tracking-[0.3em] text-gold-400/70 mb-3">Insights</p>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white">Blog</h1>
        <p className="mt-4 text-navy-200 max-w-lg">
          Insights on premium renting, financial strategy, and Bangalore real estate.
        </p>

        <div className="mt-12 space-y-6">
          {posts.map((post) => (
            <article key={post.title} className="border border-navy-800 hover:border-gold-500/20 p-6 rounded-lg transition-colors group">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] uppercase tracking-wider text-gold-400 font-medium bg-gold-500/10 px-2 py-0.5 rounded">{post.category}</span>
                <span className="text-xs text-navy-400">{post.date}</span>
              </div>
              <h2 className="text-lg font-display font-bold text-white group-hover:text-gold-400 transition-colors">{post.title}</h2>
              <p className="mt-2 text-sm text-navy-300 leading-relaxed">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
