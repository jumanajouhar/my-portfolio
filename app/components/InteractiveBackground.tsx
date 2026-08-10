"use client";

import { useEffect, useRef } from "react";

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Dynamic grid points
    const rows = 12;
    const cols = 12;

    const render = () => {
      // Smooth interpolation for mouse movement
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Ambient radial gradient following cursor
      const ambientGlow = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        10,
        mouse.x,
        mouse.y,
        400
      );
      ambientGlow.addColorStop(0, "rgba(215, 215, 215, 0.65)");
      ambientGlow.addColorStop(1, "rgba(232, 232, 232, 0)");

      ctx.fillStyle = ambientGlow;
      ctx.fillRect(0, 0, width, height);

      // Interactive ambient grid lines
      ctx.strokeStyle = "rgba(13, 13, 13, 0.04)";
      ctx.lineWidth = 1;

      const cellW = width / cols;
      const cellH = height / rows;

      for (let i = 0; i <= cols; i++) {
        const x = i * cellW;
        const dx = (mouse.x - x) * 0.015;
        ctx.beginPath();
        ctx.moveTo(x + dx, 0);
        ctx.lineTo(x - dx, height);
        ctx.stroke();
      }

      for (let j = 0; j <= rows; j++) {
        const y = j * cellH;
        const dy = (mouse.y - y) * 0.015;
        ctx.beginPath();
        ctx.moveTo(0, y + dy);
        ctx.lineTo(width, y - dy);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}