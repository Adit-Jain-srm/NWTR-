"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/ui/logo";
import { Alert } from "@/components/ui/alert";
import { FadeIn } from "@/components/motion/transitions";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password. Please try again.");
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center px-4">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[150px]" />
      </div>

      <FadeIn className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-block">
            <Logo variant="light" size="lg" />
          </Link>
          <p className="mt-3 text-sm text-navy-400">Sign in to your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-navy-900/80 backdrop-blur-xl border border-navy-800 rounded-2xl p-8 space-y-6">
          {error && (
            <Alert variant="error" dismissible onDismiss={() => setError(null)}>
              {error}
            </Alert>
          )}

          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="!bg-navy-800/50 !border-navy-700 !text-white !placeholder-navy-500"
          />

          <div>
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="!bg-navy-800/50 !border-navy-700 !text-white !placeholder-navy-500"
            />
            <div className="mt-2 text-right">
              <Link href="#" className="text-xs text-gold-400 hover:text-gold-300 transition-colors">
                Forgot password?
              </Link>
            </div>
          </div>

          <Button type="submit" variant="primary" size="lg" fullWidth loading={loading}>
            Sign In
          </Button>

          <p className="text-center text-sm text-navy-400">
            Don&apos;t have an account?{" "}
            <Link href="/auth/register" className="text-gold-400 hover:text-gold-300 font-medium transition-colors">
              Create one
            </Link>
          </p>
        </form>

        {/* Demo credentials */}
        <div className="mt-6 p-4 rounded-xl border border-navy-800/50 bg-navy-900/30 space-y-2">
          <p className="text-[10px] uppercase tracking-wider text-navy-500 text-center mb-3">Demo Accounts (all password: NwtrDemo2026!)</p>
          <div className="grid grid-cols-1 gap-1.5">
            <button type="button" onClick={() => { setEmail("aditya@nwtr.in"); setPassword("NwtrDemo2026!"); }} className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-navy-800/50 transition-colors text-left">
              <span className="text-xs text-navy-300">aditya@nwtr.in</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-gold-500/10 text-gold-400 font-medium">Tenant</span>
            </button>
            <button type="button" onClick={() => { setEmail("rajesh@nwtr.in"); setPassword("NwtrDemo2026!"); }} className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-navy-800/50 transition-colors text-left">
              <span className="text-xs text-navy-300">rajesh@nwtr.in</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-medium">Owner</span>
            </button>
            <button type="button" onClick={() => { setEmail("ankit@nwtr.in"); setPassword("NwtrDemo2026!"); }} className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-navy-800/50 transition-colors text-left">
              <span className="text-xs text-navy-300">ankit@nwtr.in</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 font-medium">RM</span>
            </button>
            <button type="button" onClick={() => { setEmail("admin@nwtr.in"); setPassword("NwtrDemo2026!"); }} className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-navy-800/50 transition-colors text-left">
              <span className="text-xs text-navy-300">admin@nwtr.in</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-red-500/10 text-red-400 font-medium">Admin</span>
            </button>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
