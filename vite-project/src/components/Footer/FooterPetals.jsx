/**
 * FooterPetals — natural petal scatter along the CSS dome arc.
 *
 * ── Arc formula ─────────────────────────────────────────────────
 * The dome uses  border-radius: 50% 50% 0 0 / 25% 25% 0 0
 * so the top curve is a half-ellipse:
 *
 *   arcY(x) = 25 × (1 − √(1 − (2x/100 − 1)²))   [% of footer height]
 *
 *   x = 0 % → arcY = 25 %    (arc at edges, lowest)
 *   x = 50% → arcY = 0  %    (arc at crown, touches footer top)
 *
 * ── Petal placement ─────────────────────────────────────────────
 * After algebra, visual_top = arcY% + 12px + nudge, regardless of
 * scale.  nudge > 0 sinks the petal; nudge < 0 lifts it.
 * To place the visual CENTER at the arc:
 *   nudge_center = -12 - H[v]*scale/2
 *
 * ── Crown pile ──────────────────────────────────────────────────
 * Petals at left 43–57 % sit near arcY ≈ 0 (the very top of the
 * footer).  Three z-layers (back / mid / front) with nudge values
 * around nudge_center create a "pile of leaves" where the top half
 * of the pile sits above the dome arc.  DOM order = back first,
 * front last so later petals always paint on top.
 *
 * ── Natural petal heights (px) ──────────────────────────────────
 *  One=71  Two=77  Three=61  Four=64  Five=52  Six=51  Seven=60  Eight=72
 */

const H = {
  One: 71, Two: 77, Three: 61, Four: 64,
  Five: 52, Six: 51, Seven: 60, Eight: 72,
};

/** arcY(x) — y position of dome arc as % of footer height */
const arcY = (x) => {
  const t = 2 * (x / 100) - 1;
  return 25 * (1 - Math.sqrt(1 - t * t));
};

/** topOffset — positions petal visual top 12 px inside the dome arc */
const offset = (variant, scale) =>
  Math.round((H[variant] * (1 - scale)) / 2) - 12;

// Crown pile nudges are calculated so visual center ≈ arc line:
//   nudge_center = -12 - H[v]*scale/2
// Back-of-pile petals: nudge_center + 10 (lower, partially buried)
// Top-of-pile petals:  nudge_center - 10 (higher, peeking further above arc)
// DOM order = back → front so later petals paint on top.

const PETALS = [
  // ── far left — 1 petal only (lone, creates open gap before slope) ──
  { id: 1,  v: "Four",  left:  "3%", scale: 0.55, rot: -45, nudge: 10 },

  // ── left slope — 2 petals, uneven gap (skipped 21%) ───────────────
  { id: 3,  v: "One",   left: "15%", scale: 0.75, rot: -28, nudge:  4 },
  { id: 5,  v: "Three", left: "27%", scale: 0.88, rot: -16, nudge:  0 },

  // ── approaching crown — nudges begin going negative ─────────────
  { id: 6,  v: "Five",  left: "33%", scale: 0.95, rot:  44, nudge: -20 },
  { id: 7,  v: "Eight", left: "38%", scale: 1.05, rot: -22, nudge: -30 },
  { id: 8,  v: "Six",   left: "41%", scale: 1.12, rot:  18, nudge: -38 },

  // ── crown pile back layer (rendered first, partially buried) ────
  { id: 9,  v: "Four",  left: "43%", scale: 1.02, rot: -38, nudge: -35 },
  { id: 11, v: "Three", left: "46%", scale: 1.40, rot: -21, nudge: -45 },
  { id: 13, v: "Eight", left: "50%", scale: 1.45, rot:  -6, nudge: -54 },

  // ── crown pile mid layer ─────────────────────────────────────────
  { id: 10, v: "One",   left: "45%", scale: 1.28, rot:   9, nudge: -57 },
  { id: 14, v: "Six",   left: "51%", scale: 1.30, rot:  16, nudge: -45 },

  // ── crown pile top layer ─────────────────────────────────────────
  { id: 12, v: "Two",   left: "48%", scale: 1.12, rot:  30, nudge: -65 },
  { id: 16, v: "Five",  left: "55%", scale: 1.20, rot:  42, nudge: -53 },

  // ── small pile petals rendered last — sit on top of big ones ────
  { id: 15, v: "Seven", left: "53%", scale: 1.00, rot: -33, nudge: -42 },
  { id: 17, v: "One",   left: "57%", scale: 0.90, rot: -13, nudge: -44 },

  // ── retreating from crown ────────────────────────────────────────
  { id: 18, v: "Three", left: "62%", scale: 1.08, rot:  26, nudge: -32 },
  { id: 19, v: "Four",  left: "67%", scale: 0.90, rot: -35, nudge: -22 },
  { id: 20, v: "Two",   left: "73%", scale: 0.82, rot:  20, nudge: -8 },

  // ── right slope — 2 petals, uneven gap (skipped 84%) ─────────────
  { id: 21, v: "Eight", left: "78%", scale: 0.76, rot: -42, nudge:  6 },
  { id: 23, v: "Seven", left: "89%", scale: 0.63, rot: -20, nudge:  2 },

  // ── far right — 1 petal only (lone, mirrors left) ─────────────────
  { id: 25, v: "Three", left: "97%", scale: 0.50, rot: -36, nudge: 10 },
];

const FooterPetals = () => (
  <div className="footer-petals-layer">
    {PETALS.map((p) => {
      const x = parseFloat(p.left);
      const ay = arcY(x);
      const off = offset(p.v, p.scale);
      return (
        <img
          key={p.id}
          src={`/petals/petal_var${p.v}.svg`}
          alt=""
          draggable={false}
          className="footer-petal"
          style={{
            left: p.left,
            top: `calc(${ay.toFixed(3)}% - ${off}px + ${p.nudge ?? 0}px)`,
            transform: `rotate(${p.rot}deg) scale(${p.scale})`,
          }}
        />
      );
    })}
  </div>
);

export default FooterPetals;
