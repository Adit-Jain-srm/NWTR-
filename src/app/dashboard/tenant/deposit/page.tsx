export default function TenantDeposit() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-display font-bold text-navy-900">My Deposit</h1>
      <div className="bg-white rounded-xl border border-navy-100 p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div><p className="text-xs text-navy-400">Deposit Amount</p><p className="text-lg font-display font-bold text-navy-900">₹75,00,000</p></div>
          <div><p className="text-xs text-navy-400">Status</p><p className="text-lg font-display font-bold text-emerald-500">Active</p></div>
          <div><p className="text-xs text-navy-400">Tenure</p><p className="text-lg font-display font-bold text-navy-900">12 Months</p></div>
          <div><p className="text-xs text-navy-400">Return Date</p><p className="text-lg font-display font-bold text-navy-900">Mar 15, 2027</p></div>
        </div>
        <div className="mt-6 h-2 bg-navy-100 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-gold-600 to-gold-400 rounded-full" style={{ width: "21%" }} />
        </div>
        <p className="text-xs text-navy-400 mt-2">78 days completed of 365</p>
      </div>

      <div className="bg-white rounded-xl border border-navy-100 p-6">
        <h2 className="font-display font-bold text-navy-900 mb-4">Owner Payout History</h2>
        <table className="w-full">
          <thead><tr className="border-b border-navy-100">
            <th className="text-xs text-navy-400 uppercase text-left py-3">Date</th>
            <th className="text-xs text-navy-400 uppercase text-left py-3">Amount</th>
            <th className="text-xs text-navy-400 uppercase text-left py-3">Status</th>
          </tr></thead>
          <tbody>
            {[
              { date: "May 1, 2026", amount: "₹45,000", status: "Completed" },
              { date: "Apr 1, 2026", amount: "₹45,000", status: "Completed" },
              { date: "Mar 1, 2026", amount: "₹45,000", status: "Completed" },
            ].map((r, i) => (
              <tr key={i} className="border-b border-navy-50">
                <td className="text-sm text-navy-700 py-3">{r.date}</td>
                <td className="text-sm font-medium text-navy-900 py-3">{r.amount}</td>
                <td className="py-3"><span className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-500">{r.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
