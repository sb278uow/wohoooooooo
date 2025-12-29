import { motion } from "framer-motion";
import { useMemo } from "react";

interface SparkleSystemProps {
  intensity?: "subtle" | "medium" | "strong" | "magical";
}

const SparkleSystem = ({ intensity = "medium" }: SparkleSystemProps) => {
  const opacityMap = {
    subtle: 0.3,
    medium: 0.5,
    strong: 0.7,
    magical: 0.9,
  };

  const baseOpacity = opacityMap[intensity];

  const sparkles = useMemo(() => {
    return Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      color: ["violet", "gold", "white"][Math.floor(Math.random() * 3)],
      duration: Math.random() * 5 + 3,
      delay: Math.random() * 5,
    }));
  }, []);

  const orbs = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 80 + 40,
      color: Math.random() > 0.5 ? "violet" : "gold",
      duration: Math.random() * 8 + 8,
      delay: Math.random() * 3,
    }));
  }, []);

  const shootingStars = useMemo(() => {
    return Array.from({ length: 4 }, (_, i) => ({
      id: i,
      startX: Math.random() * 60,
      startY: Math.random() * 30,
      delay: Math.random() * 8 + 5,
    }));
  }, []);

  const colorClasses: Record<string, string> = {
    violet: "bg-violet",
    gold: "bg-gold",
    white: "bg-foreground",
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" style={{ opacity: baseOpacity }}>
      {/* Main sparkles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className={`absolute rounded-full ${colorClasses[sparkle.color]}`}
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: sparkle.size,
            height: sparkle.size,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -20, -40],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating orbs */}
      {orbs.map((orb) => (
        <motion.div
          key={`orb-${orb.id}`}
          className="absolute rounded-full"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
            background: orb.color === "violet" 
              ? "radial-gradient(circle, hsla(270, 40%, 75%, 0.15) 0%, transparent 70%)"
              : "radial-gradient(circle, hsla(38, 40%, 70%, 0.15) 0%, transparent 70%)",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute w-1 h-1 bg-foreground rounded-full"
          style={{
            left: `${star.startX}%`,
            top: `${star.startY}%`,
            boxShadow: "0 0 4px 2px hsla(40, 20%, 95%, 0.8), -10px 0 20px hsla(40, 20%, 95%, 0.4)",
          }}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{
            opacity: [0, 1, 0],
            x: [0, 100],
            y: [0, 60],
          }}
          transition={{
            duration: 1,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: star.delay + 5,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export default SparkleSystem;
