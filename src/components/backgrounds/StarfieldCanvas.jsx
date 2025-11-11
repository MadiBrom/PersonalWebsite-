import React, { useEffect, useRef } from "react";

const StarfieldCanvas = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const starsRef = useRef([]);
  const visibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const setSize = () => {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initStars = () => {
      const area = window.innerWidth * window.innerHeight;
      const count = Math.max(200, Math.min(1000, Math.floor(area / 3000)));
      const stars = new Array(count).fill(0).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        z: Math.random() * 0.7 + 0.3,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.08,
      }));
      starsRef.current = stars;
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      for (const s of starsRef.current) {
        const size = s.z * 1.6;
        ctx.globalAlpha = 0.25 + s.z * 0.75;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, size, 0, Math.PI * 2);
        ctx.fill();

        s.x += s.vx;
        s.y += s.vy;

        if (s.x < -2) s.x = w + 2;
        if (s.x > w + 2) s.x = -2;
        if (s.y < -2) s.y = h + 2;
        if (s.y > h + 2) s.y = -2;
      }
      ctx.globalAlpha = 1;
    };

    const loop = () => {
      if (!visibleRef.current) return;
      draw();
      rafRef.current = requestAnimationFrame(loop);
    };

    const handleVisibility = () => {
      visibleRef.current = !document.hidden;
      if (visibleRef.current && !prefersReducedMotion) {
        rafRef.current = requestAnimationFrame(loop);
      } else {
        cancelAnimationFrame(rafRef.current);
      }
    };

    const handleResize = () => {
      setSize();
      initStars();
    };

    setSize();
    initStars();
    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibility);

    if (prefersReducedMotion) {
      draw();
    } else {
      rafRef.current = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="starfield-canvas"
      aria-hidden="true"
    />
  );
};

export default StarfieldCanvas;

