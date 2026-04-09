"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/context/ThemeContext";

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
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 50 });
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    const image = new Image();
    image.src = "/avatar.png";

    const gap = 7;

    const init = (img: HTMLImageElement) => {
      const targetWidth = 800;
      const targetHeight = 1000;
      canvas.width = targetWidth;
      canvas.height = targetHeight;

      const scale = Math.min(targetWidth / img.width, targetHeight / img.height) * 0.95;
      const drawWidth = img.width * scale;
      const drawHeight = img.height * scale;
      const offsetX = (targetWidth - drawWidth) / 2;
      const offsetY = (targetHeight - drawHeight) / 2 - 40;

      const tempCanvas = document.createElement("canvas");
      const tempCtx = tempCanvas.getContext("2d")!;
      tempCanvas.width = drawWidth;
      tempCanvas.height = drawHeight;
      tempCtx.drawImage(img, 0, 0, drawWidth, drawHeight);

      const pixels = tempCtx.getImageData(0, 0, drawWidth, drawHeight).data;

      const textColor = getComputedStyle(document.documentElement).getPropertyValue('--theme-text').trim() || "#ffffff";

      particlesRef.current = [];
      for (let y = 0; y < drawHeight; y += gap) {
        for (let x = 0; x < drawWidth; x += gap) {
          const index = (Math.floor(y) * Math.floor(drawWidth) + Math.floor(x)) * 4;
          const r = pixels[index];
          const g = pixels[index + 1];
          const b = pixels[index + 2];
          const alpha = pixels[index + 3];

          const brightness = (r + g + b) / 3;

          if (alpha > 80) {
            const char = Math.random() > 0.5 ? "0" : "1";
            const particleSize = (brightness / 255) * 12 + 4;

            particlesRef.current.push({
              x: Math.random() * targetWidth,
              y: Math.random() * targetHeight,
              originX: x + offsetX,
              originY: y + offsetY,
              color: textColor,
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

    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      particlesRef.current.forEach((p) => {
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const radius = mouseRef.current.radius;
        const force = (radius - distance) / radius;

        if (distance < radius) {
          const angle = Math.atan2(dy, dx);
          p.vx -= Math.cos(angle) * force * 12;
          p.vy -= Math.sin(angle) * force * 12;
        }

        p.x += (p.originX - p.x) * p.ease + p.vx;
        p.y += (p.originY - p.y) * p.ease + p.vy;
        p.vx *= p.friction;
        p.vy *= p.friction;

        const opacity = Math.max(0.3, 1 - distance / 150);
        ctx.font = `bold ${p.size}px monospace`;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 4;
        ctx.shadowColor = p.color;
        ctx.globalAlpha = opacity;
        ctx.fillText(p.char, p.x, p.y);
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    image.onload = () => {
      setImgLoaded(true);
      init(image);
      animate();
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
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Sync colors with theme changes
  useEffect(() => {
    if (!imgLoaded) return;
    const textColor = getComputedStyle(document.documentElement).getPropertyValue('--theme-text').trim() || "#ffffff";
    particlesRef.current.forEach(p => {
      p.color = textColor;
    });
  }, [theme, imgLoaded]);

  return (
    <div ref={containerRef} className="relative w-full max-w-[650px] aspect-[4/5] mx-auto md:mx-0 group">
      {!imgLoaded && (
        <div className="absolute inset-0 flex items-center justify-center text-theme-text-muted animate-pulse font-mono text-sm">
          [LOADING_AVATAR...]
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-none drop-shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-opacity duration-700"
        style={{ opacity: imgLoaded ? 1 : 0 }}
      />
    </div>
  );
}
