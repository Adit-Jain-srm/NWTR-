"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface R3FCanvasProps {
  children: React.ReactNode;
  className?: string;
  camera?: { position?: [number, number, number]; fov?: number };
}

export function R3FCanvas({ children, className, camera }: R3FCanvasProps) {
  return (
    <div className={cn("relative w-full h-full", className)}>
      <Suspense
        fallback={
          <div className="absolute inset-0 flex items-center justify-center">
            <Skeleton className="w-full h-full" />
          </div>
        }
      >
        <Canvas
          camera={{
            position: camera?.position || [0, 0, 5],
            fov: camera?.fov || 45,
          }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
        >
          {children}
        </Canvas>
      </Suspense>
    </div>
  );
}
