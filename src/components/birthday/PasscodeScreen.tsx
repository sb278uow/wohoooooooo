import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { Delete } from "lucide-react";

interface PasscodeScreenProps {
  onUnlock: () => void;
}

const PasscodeScreen = ({ onUnlock }: PasscodeScreenProps) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const correctCode = "2008";

  const sparkles = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      duration: Math.random() * 3 + 2,
    }));
  }, []);

  const handleDigit = (digit: string) => {
    if (code.length < 4) {
      const newCode = code + digit;
      setCode(newCode);
      setError(false);

      if (newCode.length === 4) {
        if (newCode === correctCode) {
          setTimeout(onUnlock, 500);
        } else {
          setError(true);
          setTimeout(() => {
            setCode("");
            setError(false);
          }, 800);
        }
      }
    }
  };

  const handleDelete = () => {
    setCode(code.slice(0, -1));
    setError(false);
  };

  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "del"];

  return (
    <motion.div
      className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet/10 via-transparent to-gold/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet/5 to-transparent" />

      {/* Floating sparkles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute w-1 h-1 bg-gold rounded-full"
          style={{ left: `${sparkle.x}%`, top: `${sparkle.y}%` }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Lock icon with path animation */}
      <motion.svg
        width="80"
        height="80"
        viewBox="0 0 24 24"
        fill="none"
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.path
          d="M19 11H5V21H19V11Z"
          stroke="hsl(var(--gold))"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.path
          d="M17 11V7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7V11"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
        <motion.circle
          cx="12"
          cy="16"
          r="1"
          fill="hsl(var(--gold))"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, type: "spring" }}
        />
      </motion.svg>

      {/* Passcode dots */}
      <motion.div
        className="flex gap-4 mb-4"
        animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
        transition={{ duration: 0.4 }}
      >
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className={`w-4 h-4 rounded-full border-2 transition-colors duration-200 ${
              error
                ? "border-destructive bg-destructive"
                : code.length > i
                ? "border-gold bg-gold"
                : "border-muted-foreground/50 bg-transparent"
            }`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 * i + 1.5 }}
          />
        ))}
      </motion.div>

      {/* Hint */}
      <motion.p
        className="text-muted-foreground text-sm mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        Your birth year ✧
      </motion.p>

      {/* Keypad */}
      <motion.div
        className="grid grid-cols-3 gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8 }}
      >
        {keys.map((key, i) => (
          <motion.button
            key={i}
            className={`w-16 h-16 rounded-full glass flex items-center justify-center text-xl font-medium
              ${key === "" ? "invisible" : ""}
              ${key === "del" ? "text-muted-foreground" : "text-foreground"}
              hover:bg-muted/50 active:scale-95 transition-all`}
            onClick={() => (key === "del" ? handleDelete() : key !== "" && handleDigit(key))}
            whileTap={{ scale: 0.9 }}
            disabled={key === ""}
          >
            {key === "del" ? <Delete size={20} /> : key}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default PasscodeScreen;
