import { useEffect, useRef, useMemo, useState } from "react";

type Vec = { x: number; y: number; vx: number; vy: number; life: number; anchor?: boolean };

const SERVICES = [
  "Digital Strategy", "AI Integration", "Cloud Architecture", "Web Development",
  "ESG Compliance", "Project Management", "Strategic Planning", "Team Development",
  "Agile Methods", "Lean Processes", "Design Thinking", "Continuous Improvement"
];

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [anchors, setAnchors] = useState<{ x: number; y: number; label: string }[]>([]);

  const particleCount = 140;     // tune: 100–200
  const linkDistance2 = 180 * 180; // squared; 140–220 looks nice
  const maxLinksPer = 4;         // sparsity
  
  // Time-based motion constants
  const SPEED = 0.025;            // was 0.15 — huge. 0.03–0.06 is nice.
  const MAX_SPEED = 0.18;         // clamp px/ms in device pixels
  const DAMPING = 0.785;          // 0.98–0.992 feels smooth
  const BREATH = 0.006;           // noise/"breath" force scale
  const PULSE_SPEED = 1.5;        // slower pulsing dots

  // reduced-motion?
  const prefersReduced = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const c = canvasRef.current!;
    const ctx = c.getContext("2d")!;
    let w = (c.width = c.offsetWidth * devicePixelRatio);
    let h = (c.height = c.offsetHeight * devicePixelRatio);

    const rnd = (n=1)=>Math.random()*n;
    const sign = ()=> (Math.random() < 0.5 ? -1 : 1);

    // init particles
    const pts: Vec[] = Array.from({ length: particleCount }, () => ({
      x: rnd(w), y: rnd(h),
      vx: (rnd(0.5)+0.2) * SPEED * sign(),
      vy: (rnd(0.5)+0.2) * SPEED * sign(),
      life: rnd(1)
    }));

    // pick anchor indices for service labels
    const anchorIdxs = new Set<number>();
    while (anchorIdxs.size < Math.min(SERVICES.length, Math.max(3, Math.floor(particleCount/30)))){
      anchorIdxs.add(Math.floor(Math.random() * particleCount));
    }
    Array.from(anchorIdxs).forEach(i => pts[i].anchor = true);

    // expose anchors to overlay
    const readAnchors = () => {
      const a = Array.from(anchorIdxs).slice(0, SERVICES.length).map((i, k) => ({
        x: pts[i].x, y: pts[i].y, label: SERVICES[k]
      }));
      setAnchors(a);
    };

    // resize handling
    const onResize = () => {
      w = (c.width = c.offsetWidth * devicePixelRatio);
      h = (c.height = c.offsetHeight * devicePixelRatio);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(c);

    let id = 0;
    let last = performance.now();

    const tick = () => {
      id = requestAnimationFrame(tick);
      const now = performance.now();
      // dt in milliseconds but bounded so tab-jumps don't explode motion
      const dt = Math.min(32, now - last);          // max ~30ms step
      const dtSec = dt / 1000;                      // seconds
      last = now;

      // backdrop gradient
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, "#0b1220");
      g.addColorStop(1, "#0e0f1a");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      // optional tiny grain
      ctx.globalAlpha = 0.05;
      for (let i = 0; i < 20; i++) {
        ctx.fillStyle = i % 2 ? "#111423" : "#0b0f1c";
        ctx.fillRect(Math.random()*w, Math.random()*h, 2, 2);
      }
      ctx.globalAlpha = 1;

      // update positions (TIME-BASED + DAMPING + CLAMP)
      for (const p of pts) {
        if (!prefersReduced) {
          // gentle "breath" force (very small)
          const ax = Math.sin((p.y + p.life * 200) * 0.0006) * BREATH;
          const ay = Math.cos((p.x + p.life * 200) * 0.0006) * BREATH;

          p.vx = (p.vx + ax) * DAMPING;
          p.vy = (p.vy + ay) * DAMPING;

          // clamp velocity magnitude
          const v2 = p.vx*p.vx + p.vy*p.vy;
          const max2 = MAX_SPEED * MAX_SPEED;
          if (v2 > max2) {
            const s = MAX_SPEED / Math.sqrt(v2);
            p.vx *= s; p.vy *= s;
          }

          // integrate with dt (device pixels per ms)
          p.x += p.vx * dt;
          p.y += p.vy * dt;
        }

        // soft wrap
        if (p.x < -10) p.x = w+10; if (p.x > w+10) p.x = -10;
        if (p.y < -10) p.y = h+10; if (p.y > h+10) p.y = -10;

        p.life += dtSec * 0.6;   // life advances slower now
      }

      // connections
      ctx.lineCap = "round";
      let links = 0;
      for (let i = 0; i < pts.length; i++) {
        let linked = 0;
        for (let j = i+1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d2 = dx*dx + dy*dy;
          if (d2 < linkDistance2) {
            const t = 1 - d2 / linkDistance2;
            const alpha = Math.min(0.7, 0.15 + t*0.6);
            const width = 0.6 + t * 1.8;
            ctx.strokeStyle = `rgba(162, 90, 255, ${alpha})`; // plum
            ctx.lineWidth = width;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
            links++; linked++;
            if (linked >= maxLinksPer) break;
          }
        }
      }

      // dots (slower pulse)
      for (const p of pts) {
        const pulse = prefersReduced ? 1 : (0.75 + 0.25 * Math.sin(p.life * PULSE_SPEED + (p.x+p.y) * 0.00035));
        ctx.fillStyle = `rgba(210, 180, 255, ${0.35 + 0.45*pulse})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.0 + 1.5*pulse, 0, Math.PI*2);
        ctx.fill();
        if (p.anchor) {
          ctx.strokeStyle = "rgba(180, 120, 255, 0.65)";
          ctx.lineWidth = 1.0;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3.5, 0, Math.PI*2);
          ctx.stroke();
        }
      }

      // update overlay tags occasionally (not every frame)
      if ((performance.now() % 500) < 16) readAnchors();
    };

    tick();
    return () => { cancelAnimationFrame(id); ro.disconnect(); };
  }, [particleCount, linkDistance2, maxLinksPer, prefersReduced]);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden" }} aria-hidden>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
      {/* Floating service tags */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {anchors.map((a, i) => (
          <FloatingTag key={i} x={a.x} y={a.y} label={a.label} />
        ))}
      </div>
    </div>
  );
}

function FloatingTag({ x, y, label }: { x: number; y: number; label: string }) {
  // convert device pixels back to CSS px
  const px = x / devicePixelRatio;
  const py = y / devicePixelRatio;
  const drift = 2 * Math.sin((x + y) * 0.001 + performance.now()*0.0005); // much slower drift

  return (
    <div
      style={{
        position: "absolute",
        left: px + 10, top: py - 10 + drift,
        transform: "translate(-50%, -50%)",
        padding: "6px 10px",
        borderRadius: 999,
        fontSize: 12,
        letterSpacing: 0.3,
        color: "rgba(235,235,255,0.92)",
        background: "rgba(26, 18, 40, 0.55)",
        border: "1px solid rgba(168, 120, 255, 0.35)",
        backdropFilter: "blur(4px)",
        pointerEvents: "none",
        whiteSpace: "nowrap"
      }}
    >
      {label}
    </div>
  );
}
