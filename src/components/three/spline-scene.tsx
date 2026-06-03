"use client";

import { Suspense, lazy } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
  fallback?: React.ReactNode;
}

export function SplineScene({ scene, className, fallback }: SplineSceneProps) {
  return (
    <div className={cn("relative w-full h-full", className)}>
      <Suspense
        fallback={
          fallback || (
            <div className="absolute inset-0 flex items-center justify-center">
              <Skeleton className="w-full h-full" />
            </div>
          )
        }
      >
        <Spline scene={scene} />
      </Suspense>
    </div>
  );
}
