"use client";

import { useEffect, useRef } from "react";

export default function Background() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        el.style.setProperty("--mx", x.toFixed(3));
        el.style.setProperty("--my", y.toFixed(3));
      });
    };

    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className="bg" aria-hidden="true">
      <div className="bg__photo" />
      <div className="bg__mesh" />
      <div className="bg__mesh bg__mesh--2" />
      <div className="bg__grid" />
      <div className="bg__orb bg__orb--1" />
      <div className="bg__orb bg__orb--2" />
      <div className="bg__orb bg__orb--3" />
      <div className="bg__grain" />
    </div>
  );
}