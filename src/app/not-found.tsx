import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center">
      <Container size="narrow" className="text-center">
        <div className="text-8xl font-display font-bold text-gold-500 mb-4">404</div>
        <h1 className="text-2xl font-display font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-navy-300 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/">
            <Button variant="primary" size="lg">
              Go Home
            </Button>
          </Link>
          <Link href="/how-it-works">
            <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
              How It Works
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
