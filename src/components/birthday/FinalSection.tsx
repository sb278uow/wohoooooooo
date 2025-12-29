import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Lock, Moon } from "lucide-react";

const FinalSection = () => {
  const birthdayDate = new Date("2026-01-30T00:00:00");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const moonClickCount = useRef(0);
  const moonClickTimer = useRef<NodeJS.Timeout | null>(null);

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const checkUnlock = () => {
      const now = new Date();
      if (now >= birthdayDate) {
        setIsUnlocked(true);
      } else {
        const diff = birthdayDate.getTime() - now.getTime();
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };

    checkUnlock();
    const interval = setInterval(checkUnlock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleMoonClick = () => {
    moonClickCount.current += 1;
    
    if (moonClickTimer.current) {
      clearTimeout(moonClickTimer.current);
    }

    if (moonClickCount.current >= 3) {
      setShowEasterEgg(true);
      moonClickCount.current = 0;
    } else {
      moonClickTimer.current = setTimeout(() => {
        moonClickCount.current = 0;
      }, 500);
    }
  };

  const handleBlowCandles = () => {
    setCandlesBlown(true);
    setShowFireworks(true);
    setTimeout(() => setShowFireworks(false), 3000);
  };

  if (!isUnlocked) {
    return (
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="max-w-xl text-center relative z-10">
          {/* Moons for easter egg */}
          <motion.div
            className="absolute top-10 left-10 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            onClick={handleMoonClick}
          >
            <Moon className="text-muted-foreground/30 w-6 h-6" />
          </motion.div>
          <motion.div
            className="absolute top-10 right-10 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            onClick={handleMoonClick}
          >
            <Moon className="text-muted-foreground/30 w-6 h-6" />
          </motion.div>

          {/* Animated lock */}
          <motion.div
            className="w-24 h-24 mx-auto mb-8 relative"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-violet/20"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <Lock className="w-full h-full text-primary p-4" />
          </motion.div>

          <motion.h2
            className="font-serif text-2xl md:text-4xl text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            A surprise awaits...
          </motion.h2>

          <motion.p
            className="text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            This section unlocks on your birthday
          </motion.p>

          {/* Countdown */}
          <div className="flex justify-center gap-3 mb-8">
            {[
              { value: countdown.days, label: "days" },
              { value: countdown.hours, label: "hrs" },
              { value: countdown.minutes, label: "min" },
              { value: countdown.seconds, label: "sec" },
            ].map((unit, i) => (
              <motion.div
                key={unit.label}
                className="glass rounded-xl p-3 min-w-[60px] border border-border/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <span className="block text-xl font-serif text-gold">{unit.value}</span>
                <span className="text-xs text-muted-foreground">{unit.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-gold text-sm tracking-widest"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            ✧ January 30, 2026 ✧
          </motion.p>
        </div>

        {/* Easter egg modal */}
        <AnimatePresence>
          {showEasterEgg && (
            <motion.div
              className="fixed inset-0 bg-background/95 backdrop-blur-xl z-50 flex items-center justify-center p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="text-center"
                initial={{ scale: 0.5, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", damping: 15 }}
              >
                <motion.span
                  className="text-6xl block mb-6"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  🌙
                </motion.span>
                <p className="font-serif text-2xl text-foreground mb-2">
                  You found the secret, <span className="text-gold">Tarnija</span>.
                </p>
                <p className="text-muted-foreground mb-6">
                  The moon always knew you were special.
                </p>
                <button
                  className="glass px-6 py-2 rounded-full text-sm hover:bg-muted/50 transition-colors"
                  onClick={() => setShowEasterEgg(false)}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    );
  }

  // UNLOCKED STATE
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 relative overflow-hidden">
      <div className="max-w-xl text-center relative z-10">
        {/* Birthday Cake */}
        <motion.div
          className="relative w-64 h-80 mx-auto mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Cake SVG */}
          <svg viewBox="0 0 200 250" className="w-full h-full">
            {/* Bottom tier */}
            <rect x="30" y="180" width="140" height="50" rx="5" fill="hsl(var(--gold))" />
            <rect x="30" y="175" width="140" height="10" rx="3" fill="hsl(var(--primary) / 0.5)" />
            
            {/* Middle tier */}
            <rect x="50" y="130" width="100" height="50" rx="5" fill="hsl(var(--primary))" />
            <rect x="50" y="125" width="100" height="10" rx="3" fill="hsl(var(--violet))" />
            
            {/* Top tier */}
            <rect x="70" y="85" width="60" height="45" rx="5" fill="hsl(var(--gold) / 0.8)" />
            <rect x="70" y="80" width="60" height="10" rx="3" fill="hsl(var(--secondary))" />
            
            {/* Decorative dots */}
            {[45, 85, 125, 165].map((x) => (
              <circle key={x} cx={x} cy="200" r="4" fill="hsl(var(--violet))" />
            ))}
            
            {/* Stars */}
            <text x="45" y="155" fill="hsl(var(--gold))" fontSize="12">✦</text>
            <text x="145" y="155" fill="hsl(var(--gold))" fontSize="12">✦</text>
          </svg>

          {/* Candles */}
          <div className="absolute top-[60px] left-1/2 -translate-x-1/2 flex gap-4">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="relative">
                {/* Candle body */}
                <div 
                  className="w-2 h-8 rounded-sm"
                  style={{
                    background: `linear-gradient(to top, hsl(var(--gold)), hsl(var(--primary)))`,
                  }}
                />
                {/* Flame */}
                <AnimatePresence>
                  {!candlesBlown && (
                    <motion.div
                      className="absolute -top-4 left-1/2 -translate-x-1/2"
                      initial={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <motion.div
                        className="w-3 h-5 rounded-full"
                        style={{
                          background: "radial-gradient(ellipse at bottom, #fbbf24, #f97316, transparent)",
                          boxShadow: "0 0 10px 3px rgba(251, 191, 36, 0.5)",
                        }}
                        animate={{
                          scaleY: [1, 1.1, 0.9, 1],
                          scaleX: [1, 0.9, 1.1, 1],
                        }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Wish button or birthday message */}
        <AnimatePresence mode="wait">
          {!candlesBlown ? (
            <motion.button
              key="wish-btn"
              className="relative px-8 py-4 rounded-full glass border border-gold/30 text-lg font-serif overflow-hidden group"
              onClick={handleBlowCandles}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <span className="relative z-10">Close your eyes & make a wish 💫</span>
              <div className="absolute inset-0 shimmer" />
            </motion.button>
          ) : (
            <motion.div
              key="message"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", damping: 15, delay: 0.5 }}
            >
              <motion.span
                className="text-5xl block mb-6"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                🎉
              </motion.span>
              <h2 className="font-serif text-3xl md:text-4xl mb-4 gradient-text-rainbow">
                Happy 18th Birthday, Tarnija!
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                May all your dreams come true ✧
              </p>
              <p className="font-serif text-xl text-primary italic mb-6">
                "You were never lost. You were just becoming."
              </p>
              <p className="text-gold text-sm tracking-widest">with love, always</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fireworks */}
        <AnimatePresence>
          {showFireworks && (
            <>
              {[
                { x: "20%", y: "30%", delay: 0 },
                { x: "80%", y: "25%", delay: 0.2 },
                { x: "50%", y: "15%", delay: 0.4 },
                { x: "30%", y: "40%", delay: 0.6 },
                { x: "70%", y: "35%", delay: 0.8 },
              ].map((fw, i) => (
                <motion.div
                  key={i}
                  className="fixed pointer-events-none"
                  style={{ left: fw.x, top: fw.y }}
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: [0, 1.5, 2], opacity: [1, 1, 0] }}
                  transition={{ duration: 1, delay: fw.delay }}
                >
                  {Array.from({ length: 12 }).map((_, j) => (
                    <motion.div
                      key={j}
                      className="absolute w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: ["#ff6b6b", "#feca57", "#48dbfb", "#ff9ff3", "#54a0ff"][j % 5],
                      }}
                      initial={{ x: 0, y: 0 }}
                      animate={{
                        x: Math.cos((j * 30 * Math.PI) / 180) * 100,
                        y: Math.sin((j * 30 * Math.PI) / 180) * 100,
                        opacity: [1, 0],
                      }}
                      transition={{ duration: 1, delay: fw.delay }}
                    />
                  ))}
                </motion.div>
              ))}

              {/* Confetti */}
              {Array.from({ length: 60 }).map((_, i) => (
                <motion.div
                  key={`confetti-${i}`}
                  className="fixed pointer-events-none"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: "-20px",
                    width: Math.random() * 10 + 5,
                    height: Math.random() * 10 + 5,
                    borderRadius: Math.random() > 0.5 ? "50%" : "2px",
                    backgroundColor: ["#ff6b6b", "#feca57", "#48dbfb", "#ff9ff3", "#54a0ff", "#5f27cd"][i % 6],
                  }}
                  initial={{ y: 0, rotate: 0, opacity: 1 }}
                  animate={{
                    y: window.innerHeight + 50,
                    rotate: Math.random() * 720,
                    opacity: [1, 1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 2 + 2,
                    delay: Math.random() * 0.5,
                    ease: "easeOut",
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FinalSection;
