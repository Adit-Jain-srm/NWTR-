"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RegisterPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", password: "", phone: "", role: "TENANT" });
  const [loading, setLoading] = useState(false);

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/v1/users", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    if (res.ok) {
      const { signIn } = await import("next-auth/react");
      await signIn("credentials", { email: form.email, password: form.password, callbackUrl: `/dashboard/${form.role.toLowerCase()}` });
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <span className="font-display text-3xl font-bold text-white">NWTR</span>
          </Link>
          <p className="mt-2 text-sm text-navy-300">Create your account</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-navy-200 mb-2">First Name</label>
              <input type="text" value={form.firstName} onChange={(e) => update("firstName", e.target.value)} required className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-navy-400 focus:border-gold-500 focus:outline-none" placeholder="Aditya" />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-200 mb-2">Last Name</label>
              <input type="text" value={form.lastName} onChange={(e) => update("lastName", e.target.value)} required className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-navy-400 focus:border-gold-500 focus:outline-none" placeholder="Jain" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-navy-200 mb-2">Email</label>
            <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} required className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-navy-400 focus:border-gold-500 focus:outline-none" placeholder="you@example.com" />
          </div>

          <div>
            <label className="block text-sm font-medium text-navy-200 mb-2">Phone</label>
            <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-navy-400 focus:border-gold-500 focus:outline-none" placeholder="+91 98765 43210" />
          </div>

          <div>
            <label className="block text-sm font-medium text-navy-200 mb-2">Password</label>
            <input type="password" value={form.password} onChange={(e) => update("password", e.target.value)} required minLength={8} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-navy-400 focus:border-gold-500 focus:outline-none" placeholder="Min 8 characters" />
          </div>

          <div>
            <label className="block text-sm font-medium text-navy-200 mb-3">I am a</label>
            <div className="grid grid-cols-2 gap-3">
              {["TENANT", "OWNER"].map((role) => (
                <button key={role} type="button" onClick={() => update("role", role)} className={`px-4 py-3 rounded-lg border text-sm font-medium transition-all ${form.role === role ? "border-gold-500 bg-gold-500/10 text-gold-400" : "border-white/10 text-navy-300 hover:border-white/20"}`}>
                  {role === "TENANT" ? "🔑 Tenant" : "🏡 Owner"}
                </button>
              ))}
            </div>
          </div>

          <Button type="submit" variant="primary" size="lg" className="w-full" loading={loading}>
            Create Account
          </Button>

          <p className="text-center text-sm text-navy-300">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-gold-400 hover:text-gold-300">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
