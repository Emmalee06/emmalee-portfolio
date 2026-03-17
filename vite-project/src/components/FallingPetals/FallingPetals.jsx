import { useEffect, useState } from "react";

const PETAL_SVGS = [
  "/petals/petal_varOne.svg",
  "/petals/petal_varTwo.svg",
  "/petals/petal_varThree.svg",
  "/petals/petal_varFour.svg",
  "/petals/petal_varFive.svg",
  "/petals/petal_varSix.svg",
  "/petals/petal_varSeven.svg",
  "/petals/petal_varEight.svg",
];

export const FallingPetals = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const petalCount = 15;
    const newPetals = [];

    for (let i = 0; i < petalCount; i++) {
      const duration = 10 + Math.random() * 10;
      newPetals.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: duration,
        animationDelay: -(Math.random() * duration),
        width: 25 + Math.random() * 45,
        src: PETAL_SVGS[Math.floor(Math.random() * PETAL_SVGS.length)],
      });
    }

    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute -top-20 animate-fall"
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.animationDuration}s`,
            animationDelay: `${petal.animationDelay}s`,
          }}
        >
          <img
            src={petal.src}
            alt=""
            style={{ width: `${petal.width}px`, height: `${petal.width}px` }}
          />
        </div>
      ))}
    </div>
  );
};
