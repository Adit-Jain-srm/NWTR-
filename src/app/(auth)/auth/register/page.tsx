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

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", password: "", phone: "", role: "TENANT" as "TENANT" | "OWNER",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/v1/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error?.message || "Registration failed");
        setLoading(false);
        return;
      }

      const result = await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
      });

      if (result?.ok) {
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
    <div className="min-h-screen bg-navy-950 flex items-center justify-center px-4 py-12">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[150px]" />
      </div>

      <FadeIn className="relative z-10 w-full max-w-md">
        <div className="text-center mb-10">
          <Link href="/" className="inline-block">
            <Logo variant="light" size="lg" />
          </Link>
          <p className="mt-3 text-sm text-navy-400">Create your account</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-navy-900/80 backdrop-blur-xl border border-navy-800 rounded-2xl p-8 space-y-5">
          {error && (
            <Alert variant="error" dismissible onDismiss={() => setError(null)}>
              {error}
            </Alert>
          )}

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="First Name"
              value={form.firstName}
              onChange={(e) => update("firstName", e.target.value)}
              placeholder="Aditya"
              required
              className="!bg-navy-800/50 !border-navy-700 !text-white !placeholder-navy-500"
            />
            <Input
              label="Last Name"
              value={form.lastName}
              onChange={(e) => update("lastName", e.target.value)}
              placeholder="Jain"
              required
              className="!bg-navy-800/50 !border-navy-700 !text-white !placeholder-navy-500"
            />
          </div>

          <Input
            label="Email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@example.com"
            required
            className="!bg-navy-800/50 !border-navy-700 !text-white !placeholder-navy-500"
          />

          <Input
            label="Phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+91 98765 43210"
            className="!bg-navy-800/50 !border-navy-700 !text-white !placeholder-navy-500"
          />

          <Input
            label="Password"
            type="password"
            value={form.password}
            onChange={(e) => update("password", e.target.value)}
            placeholder="Min 8 characters"
            required
            helperText="At least 8 characters"
            className="!bg-navy-800/50 !border-navy-700 !text-white !placeholder-navy-500"
          />

          {/* Role Selector */}
          <div>
            <label className="block text-sm font-medium text-navy-200 mb-3">I am a</label>
            <div className="grid grid-cols-2 gap-3">
              {(["TENANT", "OWNER"] as const).map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => update("role", role)}
                  className={`px-4 py-3.5 rounded-xl border text-sm font-medium transition-all ${
                    form.role === role
                      ? "border-gold-500 bg-gold-500/10 text-gold-400 shadow-[0_0_20px_rgba(201,169,97,0.15)]"
                      : "border-navy-700 text-navy-400 hover:border-navy-600 hover:text-navy-300"
                  }`}
                >
                  {role === "TENANT" ? "🔑 Tenant" : "🏡 Owner"}
                </button>
              ))}
            </div>
          </div>

          <Button type="submit" variant="primary" size="lg" fullWidth loading={loading}>
            Create Account
          </Button>

          <p className="text-center text-sm text-navy-400">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-gold-400 hover:text-gold-300 font-medium transition-colors">
              Sign in
            </Link>
          </p>
        </form>
      </FadeIn>
    </div>
  );
}
