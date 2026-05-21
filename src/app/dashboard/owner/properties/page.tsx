export default function OwnerProperties() {
  const properties = [
    { id: 1, title: "3BHK Premium Apartment", locality: "Koramangala 5th Block", status: "Occupied", tenant: "Aditya J.", payout: "₹45,000/mo" },
    { id: 2, title: "4BHK Luxury Villa", locality: "Indiranagar 12th Main", status: "Occupied", tenant: "Priya S.", payout: "₹72,000/mo" },
    { id: 3, title: "2BHK Modern Flat", locality: "HSR Layout Sector 2", status: "Listed", tenant: "—", payout: "—" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-display font-bold text-navy-900">My Properties</h1>
        <button className="px-4 py-2 bg-gold-500 text-navy-900 rounded-lg text-sm font-medium hover:bg-gold-400 transition-colors">+ Add Property</button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {properties.map((p) => (
          <div key={p.id} className="bg-white rounded-xl border border-navy-100 p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-display font-bold text-navy-900">{p.title}</h3>
                <p className="text-sm text-navy-500 mt-1">{p.locality}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${p.status === "Occupied" ? "bg-emerald-50 text-emerald-500" : "bg-gold-50 text-gold-700"}`}>{p.status}</span>
            </div>
            <div className="mt-4 pt-4 border-t border-navy-50 grid grid-cols-2 gap-4 text-sm">
              <div><span className="text-navy-400">Tenant:</span> <span className="text-navy-700 font-medium">{p.tenant}</span></div>
              <div><span className="text-navy-400">Payout:</span> <span className="text-navy-700 font-medium">{p.payout}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
