import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
  rotation: number;
}

export const FallingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const petalCount = 20;
    const newPetals: Petal[] = [];

    for (let i = 0; i < petalCount; i++) {
      newPetals.push({
        id: i,
        left: Math.random() * 100,
        animationDuration: 15 + Math.random() * 10,
        animationDelay: Math.random() * 10,
        size: 0.6 + Math.random() * 0.8,
        rotation: Math.random() * 360,
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
            transform: `scale(${petal.size}) rotate(${petal.rotation}deg)`,
          }}
        >
          <div className="w-8 h-8 bg-purple-300/40 rounded-full blur-sm" />
        </div>
      ))}
    </div>
  );
};
