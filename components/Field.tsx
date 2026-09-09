"use client";

import { useEffect, useRef } from "react";

/**
 * The field behind everything.
 *
 * Fine particles advected through a two-octave flow field, drawn as short
 * trails onto a canvas that never fully clears — so the strands persist and
 * smear the way a long exposure does. Deliberately monochrome: the moment this
 * takes on a colour it stops being a field and starts being a gradient.
 *
 * The cursor bends the field locally rather than pushing particles around,
 * which reads as mass rather than as a repulsion toy.
 */
export default function Field() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    // Transparent, so the fade can subtract alpha instead of painting the void
    // colour back on. Repeatedly compositing rgba(8,9,11,0.02) truncates in 8-bit
    // and walks the whole canvas down to pure black, which shows up as a slab
    // slightly darker than the page behind it.
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Hashed lattice + smoothstep interpolation. Cheap, and at this scale
    // indistinguishable from a real gradient noise.
    const hash = (x: number, y: number) => {
      let n = Math.imul(x, 374761393) + Math.imul(y, 668265263);
      n = Math.imul(n ^ (n >>> 13), 1274126177);
      return ((n ^ (n >>> 16)) >>> 0) / 4294967295;
    };
    const smooth = (t: number) => t * t * (3 - 2 * t);
    const noise = (x: number, y: number) => {
      const xi = Math.floor(x), yi = Math.floor(y);
      const xf = x - xi, yf = y - yi;
      const u = smooth(xf), v = smooth(yf);
      const a = hash(xi, yi), b = hash(xi + 1, yi);
      const c = hash(xi, yi + 1), d = hash(xi + 1, yi + 1);
      return (a * (1 - u) + b * u) * (1 - v) + (c * (1 - u) + d * u) * v;
    };

    type P = { x: number; y: number; px: number; py: number; life: number; max: number; w: number };
    let particles: P[] = [];
    let w = 0, h = 0, dpr = 1, raf = 0, time = 0;
    const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999 };

    const spawn = (p: P) => {
      p.x = Math.random() * w;
      p.y = Math.random() * h;
      p.px = p.x;
      p.py = p.y;
      p.life = 0;
      p.max = 120 + Math.random() * 260;
      p.w = Math.random() < 0.14 ? 1.5 : 0.65;
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      // Density by area, capped so a 4K display does not melt. What you see is
      // coverage = count x speed x trail lifetime; all three are tuned together.
      const target = Math.min(2600, Math.round((w * h) / 620));
      particles = Array.from({ length: target }, () => {
        const p = { x: 0, y: 0, px: 0, py: 0, life: 0, max: 0, w: 1 };
        spawn(p);
        p.life = Math.random() * p.max;
        return p;
      });
    };

    const angleAt = (x: number, y: number) => {
      const s = 0.0016;
      let n = noise(x * s, y * s + time * 0.06);
      n += noise(x * s * 2.7, y * s * 2.7 - time * 0.09) * 0.45;
      let a = n * Math.PI * 3.2;

      // The cursor adds a slow swirl that falls off over ~320px.
      const dx = x - pointer.x, dy = y - pointer.y;
      const d2 = dx * dx + dy * dy;
      const r = 320;
      if (d2 < r * r) {
        const f = 1 - Math.sqrt(d2) / r;
        a += Math.atan2(dy, dx) * f * f * 1.4;
      }
      return a;
    };

    const frame = () => {
      time += 0.0038;

      // Never a full clear: the residue is the picture. Subtracting alpha keeps
      // the decay stable and lets the page colour show through untouched.
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0, 0, 0, 0.014)";
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = "source-over";

      pointer.x += (pointer.tx - pointer.x) * 0.06;
      pointer.y += (pointer.ty - pointer.y) * 0.06;

      ctx.lineCap = "round";
      for (const p of particles) {
        const a = angleAt(p.x, p.y);
        p.px = p.x;
        p.py = p.y;
        p.x += Math.cos(a) * 1.4;
        p.y += Math.sin(a) * 1.4;
        p.life++;

        if (p.life > p.max || p.x < -40 || p.x > w + 40 || p.y < -40 || p.y > h + 40) {
          spawn(p);
          continue;
        }

        // Fade in and out so nothing ever pops into or out of existence.
        const t = p.life / p.max;
        const fade = Math.min(1, t * 8) * Math.min(1, (1 - t) * 4);
        ctx.strokeStyle = `rgba(255, 255, 255, ${(p.w > 1 ? 0.045 : 0.018) * fade})`;
        ctx.lineWidth = p.w;
        ctx.beginPath();
        ctx.moveTo(p.px, p.py);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      }

      raf = requestAnimationFrame(frame);
    };

    const onMove = (e: PointerEvent) => {
      pointer.tx = e.clientX;
      pointer.ty = e.clientY;
      if (pointer.x < -9000) { pointer.x = e.clientX; pointer.y = e.clientY; }
    };

    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduced) raf = requestAnimationFrame(frame);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    if (reduced) {
      // One static pass, so the texture is still there without the motion.
      for (let i = 0; i < 240; i++) frame0();
      function frame0() {
        for (const p of particles) {
          const a = angleAt(p.x, p.y);
          p.px = p.x; p.py = p.y;
          p.x += Math.cos(a) * 0.9;
          p.y += Math.sin(a) * 0.9;
          ctx!.strokeStyle = "rgba(255,255,255,0.05)";
          ctx!.lineWidth = p.w;
          ctx!.beginPath();
          ctx!.moveTo(p.px, p.py);
          ctx!.lineTo(p.x, p.y);
          ctx!.stroke();
        }
      }
    } else {
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className="field" aria-hidden="true">
      <canvas ref={ref} className="field__canvas" />
      <div className="field__grid" />
      <div className="field__vignette" />
      <div className="field__grain" />
    </div>
  );
}
