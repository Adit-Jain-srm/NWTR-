export default function TenantProperties() {
  const properties = [
    { id: 1, title: "3BHK Premium Apartment", locality: "Koramangala 5th Block", bhk: 3, area: 1850, value: "₹1.2 Cr", deposit: "₹84,00,000" },
    { id: 2, title: "4BHK Luxury Villa", locality: "Indiranagar 12th Main", bhk: 4, area: 2800, value: "₹2.5 Cr", deposit: "₹1,75,00,000" },
    { id: 3, title: "2BHK Modern Flat", locality: "HSR Layout Sector 2", bhk: 2, area: 1200, value: "₹85L", deposit: "₹59,50,000" },
    { id: 4, title: "3BHK Garden View", locality: "Whitefield ITPL Road", bhk: 3, area: 1650, value: "₹95L", deposit: "₹66,50,000" },
    { id: 5, title: "Penthouse Duplex", locality: "MG Road", bhk: 5, area: 3500, value: "₹4.2 Cr", deposit: "₹2,94,00,000" },
    { id: 6, title: "3BHK Smart Home", locality: "Sarjapur Road", bhk: 3, area: 1700, value: "₹1.1 Cr", deposit: "₹77,00,000" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-display font-bold text-navy-900">Browse Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((p) => (
          <div key={p.id} className="bg-white rounded-xl border border-navy-100 overflow-hidden hover:shadow-glass transition-shadow">
            <div className="h-36 bg-navy-100" />
            <div className="p-5">
              <h3 className="font-display font-bold text-navy-900 text-sm">{p.title}</h3>
              <p className="text-xs text-navy-500 mt-1">{p.locality}</p>
              <div className="mt-3 flex gap-3 text-xs text-navy-400">
                <span>{p.bhk} BHK</span><span>{p.area} sq.ft</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <span className="text-xs text-navy-400">Deposit</span>
                  <p className="text-sm font-bold text-navy-900">{p.deposit}</p>
                </div>
                <button className="text-xs font-medium text-gold-700 hover:text-gold-600">View Details →</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
