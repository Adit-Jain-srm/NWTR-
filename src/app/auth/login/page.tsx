"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const { signIn } = await import("next-auth/react");
    await signIn("credentials", { email, password, callbackUrl: "/dashboard/tenant" });
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <span className="font-display text-3xl font-bold text-white">NWTR</span>
          </Link>
          <p className="mt-2 text-sm text-navy-300">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-navy-200 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-navy-400 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-navy-200 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-navy-400 focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500"
              placeholder="••••••••"
            />
          </div>

          <Button type="submit" variant="primary" size="lg" className="w-full" loading={loading}>
            Sign In
          </Button>

          <p className="text-center text-sm text-navy-300">
            Don&apos;t have an account?{" "}
            <Link href="/auth/register" className="text-gold-400 hover:text-gold-300">
              Create one
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
