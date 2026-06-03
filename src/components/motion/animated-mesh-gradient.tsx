"use client";

import { useEffect, useRef } from "react";

export function AnimatedMeshGradient({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    };

    const blobs = [
      { x: 0.3, y: 0.3, vx: 0.0003, vy: 0.0002, r: 0.35, color: "rgba(201,169,97,0.07)" },
      { x: 0.7, y: 0.6, vx: -0.0002, vy: 0.0003, r: 0.4, color: "rgba(16,185,129,0.04)" },
      { x: 0.5, y: 0.8, vx: 0.0001, vy: -0.0002, r: 0.3, color: "rgba(201,169,97,0.05)" },
      { x: 0.2, y: 0.7, vx: 0.0002, vy: -0.0001, r: 0.25, color: "rgba(74,111,165,0.04)" },
    ];

    const animate = () => {
      time++;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);

      blobs.forEach((blob) => {
        blob.x += blob.vx + Math.sin(time * 0.001) * 0.0001;
        blob.y += blob.vy + Math.cos(time * 0.0012) * 0.0001;

        if (blob.x < 0 || blob.x > 1) blob.vx *= -1;
        if (blob.y < 0 || blob.y > 1) blob.vy *= -1;

        const gradient = ctx.createRadialGradient(
          blob.x * w, blob.y * h, 0,
          blob.x * w, blob.y * h, blob.r * Math.max(w, h)
        );
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      });

      animId = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className || ""}`}
    />
  );
}
