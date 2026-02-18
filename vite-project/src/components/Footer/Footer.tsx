import { Linkedin, Instagram, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Petal {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  vx: number;
  vy: number;
}

export const Footer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [, setPetals] = useState<Petal[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const prevMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const initialPetals: Petal[] = [];
    const petalCount = 30;

    for (let i = 0; i < petalCount; i++) {
      initialPetals.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -20 - Math.random() * 100,
        size: 15 + Math.random() * 20,
        rotation: Math.random() * 360,
        vx: (Math.random() - 0.5) * 2,
        vy: 2 + Math.random() * 2,
      });
    }

    setPetals(initialPetals);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = 400;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      prevMousePos.current = { ...mousePos.current };
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      setPetals((prevPetals) =>
        prevPetals.map((petal) => {
          let newX = petal.x + petal.vx;
          let newY = petal.y + petal.vy;
          let newVx = petal.vx;
          let newVy = petal.vy;

          const dx = mousePos.current.x - newX;
          const dy = mousePos.current.y - newY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            const mouseDx = mousePos.current.x - prevMousePos.current.x;
            const mouseDy = mousePos.current.y - prevMousePos.current.y;
            const mouseSpeed = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

            if (mouseSpeed > 2) {
              const force = Math.min(mouseSpeed * 0.5, 20);
              newVx += (mouseDx / mouseSpeed) * force;
              newVy += (mouseDy / mouseSpeed) * force;
            }
          }

          newVx *= 0.95;
          newVy *= 0.95;

          if (Math.abs(newVx) < 0.1) newVx = (Math.random() - 0.5) * 0.5;
          if (Math.abs(newVy) < 0.1) newVy = 0.5 + Math.random() * 0.5;

          if (newY > canvas.height) {
            newY = -20;
            newX = Math.random() * canvas.width;
            newVy = 2 + Math.random() * 2;
          }

          if (newX < 0) newX = canvas.width;
          if (newX > canvas.width) newX = 0;

          ctx.save();
          ctx.translate(newX, newY);
          ctx.rotate((petal.rotation * Math.PI) / 180);
          ctx.fillStyle = "rgba(196, 181, 253, 0.35)";
          ctx.beginPath();
          ctx.arc(0, 0, petal.size / 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();

          return {
            ...petal,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
            rotation: petal.rotation + 2,
          };
        }),
      );

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <footer className="relative bg-gradient-to-b from-transparent to-purple-200/50 pt-40">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-[400px] pointer-events-auto cursor-pointer"
      />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <img src="/logo_footer.png" alt="ED Logo" className="h-12 w-auto" />

            <p className="text-gray-800 text-base max-w-sm leading-relaxed">
              You can also connect with me through these links:
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-10">
            <nav className="flex flex-col md:flex-row justify-start md:justify-end gap-8 md:gap-12 w-full">
              <a
                href="/"
                className="text-lg font-medium text-gray-800 hover:text-purple-600 transition-colors"
              >
                Home
              </a>
              <a
                href="/projects"
                className="text-lg font-medium text-gray-800 hover:text-purple-600 transition-colors"
              >
                Projects
              </a>
              <a
                href="/gallery"
                className="text-lg font-medium text-gray-800 hover:text-purple-600 transition-colors"
              >
                Gallery
              </a>
              <a
                href="/about"
                className="text-lg font-medium text-gray-800 hover:text-purple-600 transition-colors"
              >
                About
              </a>
            </nav>

            <div className="space-y-1 text-left md:text-right w-full">
              <p className="text-gray-700 text-sm">
                Coded & Designed by © Emmalee Dhaliwal, 2026
              </p>
              <p className="text-gray-700 text-sm">
                May your trials end in full bloom &lt;3
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
