import { useRef, useEffect } from "react";
import gsap from "gsap";

const H = {
  One: 71,
  Two: 77,
  Three: 61,
  Four: 64,
  Five: 52,
  Six: 51,
  Seven: 60,
  Eight: 72,
};

const arcY = (x) => {
  const t = 2 * (x / 100) - 1;
  return 25 * (1 - Math.sqrt(1 - t * t));
};

const offset = (variant, scale) =>
  Math.round((H[variant] * (1 - scale)) / 2) - 12;

const PETALS = [
  // ── far left ────────────────────────────────────────────────────
  { id: 1, v: "Four", left: "3%", scale: 0.55, rot: -45, nudge: 10 },

  // ── left slope ──────────────────────────────────────────────────
  { id: 3, v: "One", left: "15%", scale: 0.75, rot: -28, nudge: 4 },
  { id: 5, v: "Three", left: "27%", scale: 0.88, rot: -16, nudge: 0 },

  // ── approaching crown ────────────────────────────────────────────
  { id: 6, v: "Five", left: "33%", scale: 0.95, rot: 44, nudge: -20 },
  { id: 7, v: "Eight", left: "38%", scale: 1.05, rot: -22, nudge: -30 },
  { id: 8, v: "Six", left: "41%", scale: 1.12, rot: 18, nudge: -38 },

  // ── crown pile back layer ────────────────────────────────────────
  { id: 9, v: "Four", left: "43%", scale: 1.02, rot: -38, nudge: -35 },
  { id: 11, v: "Three", left: "46%", scale: 1.4, rot: -21, nudge: -45 },
  { id: 13, v: "Eight", left: "50%", scale: 1.45, rot: -6, nudge: -54 },

  // ── crown pile mid layer ─────────────────────────────────────────
  { id: 10, v: "One", left: "45%", scale: 1.28, rot: 9, nudge: -57 },
  { id: 14, v: "Six", left: "51%", scale: 1.3, rot: 16, nudge: -45 },

  // ── crown pile top layer ─────────────────────────────────────────
  { id: 12, v: "Two", left: "48%", scale: 1.12, rot: 30, nudge: -65 },
  { id: 16, v: "Five", left: "55%", scale: 1.2, rot: 42, nudge: -53 },

  // ── small pile petals on top ─────────────────────────────────────
  { id: 15, v: "Seven", left: "53%", scale: 1.0, rot: -33, nudge: -42 },
  { id: 17, v: "One", left: "57%", scale: 0.9, rot: -13, nudge: -44 },

  // ── retreating from crown ────────────────────────────────────────
  { id: 18, v: "Three", left: "62%", scale: 1.08, rot: 26, nudge: -32 },
  { id: 19, v: "Four", left: "67%", scale: 0.9, rot: -35, nudge: -22 },
  { id: 20, v: "Two", left: "73%", scale: 0.82, rot: 20, nudge: -8 },

  // ── right slope ──────────────────────────────────────────────────
  { id: 21, v: "Eight", left: "78%", scale: 0.76, rot: -42, nudge: 6 },
  { id: 23, v: "Seven", left: "89%", scale: 0.63, rot: -20, nudge: 2 },

  // ── far right ────────────────────────────────────────────────────
  { id: 25, v: "Three", left: "97%", scale: 0.5, rot: -36, nudge: 10 },
];

const FooterPetals = () => {
  const wrapRefs = useRef([]);

  useEffect(() => {
    wrapRefs.current.forEach((el) => {
      if (el) gsap.set(el, { x: 0, y: 0, rotation: 0, opacity: 1 });
    });

    return () => {
      wrapRefs.current.forEach((el) => {
        if (el) gsap.killTweensOf(el);
      });
    };
  }, []);

  const animatePetal = (index) => {
    const wrap = wrapRefs.current[index];
    const p = PETALS[index];
    if (!wrap) return;
    gsap.killTweensOf(wrap);

    const leftPct = parseFloat(p.left);
    const side = (leftPct - 50) / 50;
    const flyX =
      side * (150 + Math.random() * 100) + (Math.random() - 0.5) * 50;
    const flyY = -(180 + Math.random() * 120);
    const rotDelta = (side >= 0 ? 1 : -1) * (80 + Math.random() * 80);

    const tl = gsap.timeline();

    //Phase 1: fly away animation
    tl.to(wrap, {
      x: flyX,
      y: flyY,
      rotation: rotDelta,
      opacity: 0,
      scale: 0.6,
      duration: 2.5,
      ease: "power2.out",
    });

    //Phase 2: reset to start position while invisible
    tl.set(wrap, { x: 0, y: -24, rotation: 0, scale: 1, opacity: 0 });

    //Phase 3: drift back in from slightly above
    tl.to(wrap, {
      y: 0,
      opacity: 1,
      duration: 0.55,
      ease: "power2.out",
      delay: 0.08,
    });
  };

  return (
    <div className="footer-petals-layer">
      {PETALS.map((p, i) => {
        const x = parseFloat(p.left);
        const ay = arcY(x);
        const off = offset(p.v, p.scale);
        return (
          <div
            key={p.id}
            ref={(el) => {
              wrapRefs.current[i] = el;
            }}
            className="footer-petal-wrap"
            onMouseEnter={() => animatePetal(i)}
            style={{
              left: p.left,
              top: `calc(${ay.toFixed(3)}% - ${off}px + ${p.nudge ?? 0}px)`,
            }}
          >
            <img
              src={`/petals/petal_var${p.v}.svg`}
              alt=""
              draggable={false}
              className="footer-petal-img"
              style={{
                transform: `rotate(${p.rot}deg) scale(${p.scale})`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default FooterPetals;
