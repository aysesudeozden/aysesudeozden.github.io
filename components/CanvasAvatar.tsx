"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  color: string;
  size: number;
  friction: number;
  ease: number;
  char: string;
  vx: number;
  vy: number;
}

export default function CanvasAvatar() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const image = new Image();
    image.src = "/avatar.png";

    let particles: Particle[] = [];
    const gap = 7; // Adjusted for larger canvas performance

    const init = (img: HTMLImageElement) => {
      // Significantly larger for the "enlarge" request
      const targetWidth = 700;
      const targetHeight = 900;
      canvas.width = targetWidth;
      canvas.height = targetHeight;

      const scale = Math.min(targetWidth / img.width, targetHeight / img.height) * 0.95;
      const drawWidth = img.width * scale;
      const drawHeight = img.height * scale;
      const offsetX = (targetWidth - drawWidth) / 2;
      const offsetY = (targetHeight - drawHeight) / 2;

      const tempCanvas = document.createElement("canvas");
      const tempCtx = tempCanvas.getContext("2d")!;
      tempCanvas.width = drawWidth;
      tempCanvas.height = drawHeight;
      tempCtx.drawImage(img, 0, 0, drawWidth, drawHeight);

      const pixels = tempCtx.getImageData(0, 0, drawWidth, drawHeight).data;

      particles = [];
      const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--theme-accent').trim() || "#e11d48";

      for (let y = 0; y < drawHeight; y += gap) {
        for (let x = 0; x < drawWidth; x += gap) {
          const index = (Math.floor(y) * Math.floor(drawWidth) + Math.floor(x)) * 4;
          const r = pixels[index];
          const g = pixels[index + 1];
          const b = pixels[index + 2];
          const alpha = pixels[index + 3];

          // Calculate brightness for "boyut" (definition)
          const brightness = (r + g + b) / 3;

          if (alpha > 80) {
            const char = Math.random() > 0.5 ? "0" : "1";
            // Map brightness to particle size and opacity for better features
            const particleSize = (brightness / 255) * 12 + 4;

            particles.push({
              x: Math.random() * targetWidth,
              y: Math.random() * targetHeight,
              originX: x + offsetX,
              originY: y + offsetY,
              color: accentColor,
              size: particleSize,
              friction: 0.88,
              ease: 0.12,
              char: char,
              vx: 0,
              vy: 0,
            });
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      particles.forEach((p) => {
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const radius = mouseRef.current.radius;
        const force = (radius - distance) / radius;

        if (distance < radius) {
          const angle = Math.atan2(dy, dx);
          p.vx -= Math.cos(angle) * force * 12; // Snappier push
          p.vy -= Math.sin(angle) * force * 12;
        }

        p.x += (p.originX - p.x) * p.ease + p.vx;
        p.y += (p.originY - p.y) * p.ease + p.vy;
        p.vx *= p.friction;
        p.vy *= p.friction;

        const opacity = Math.max(0.3, 1 - distance / 150); // Increased base brightness
        ctx.font = `bold ${p.size}px monospace`;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 4; // Added glow
        ctx.shadowColor = p.color;
        ctx.globalAlpha = opacity;
        ctx.fillText(p.char, p.x, p.y);
        ctx.shadowBlur = 0; // Reset for next particle
      });

      requestAnimationFrame(animate);
    };

    image.onload = () => {
      setImgLoaded(true);
      init(image);
      animate();
    };

    image.onerror = () => {
      console.error("Failed to load avatar image at /avatar.png");
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      mouseRef.current.x = (e.clientX - rect.left) * scaleX;
      mouseRef.current.y = (e.clientY - rect.top) * scaleY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-[550px] aspect-[4/5] mx-auto md:mx-0 group">
      {!imgLoaded && (
        <div className="absolute inset-0 flex items-center justify-center text-theme-text-muted animate-pulse font-mono text-sm">
          [LOADING_AVATAR...]
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-none drop-shadow-[0_0_20px_rgba(225,29,72,0.15)] transition-opacity duration-700"
        style={{ opacity: imgLoaded ? 1 : 0 }}
      />
    </div>
  );
}
