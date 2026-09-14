"use client";

import { useEffect, useState } from "react";

export default function ForksWeather() {
  const [particles, setParticles] = useState<{ id: number; left: number; top: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate random particles (mist/snow/dust)
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 20,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9990] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${Math.random() * 3 + 2}px`,
            height: `${Math.random() * 3 + 2}px`,
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            boxShadow: "0 0 6px 2px rgba(255, 255, 255, 0.2)",
            animation: `drift ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes drift {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(100vh) translateX(-20px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
