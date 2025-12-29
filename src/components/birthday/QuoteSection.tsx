import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const QuoteSection = () => {
  const quotes = [
    "The music you love becomes the soundtrack of your soul.",
    "She was made of music and stardust.",
    "Dreams don't work unless you do.",
    "Your vibe attracts your tribe.",
    "Be the energy you want to attract.",
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-violet/5 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-gold/5 blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-3xl text-center relative z-10">
        <motion.p
          className="text-muted-foreground text-sm tracking-widest mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ✧ words to live by ✧
        </motion.p>

        {/* Quote container */}
        <div className="h-40 md:h-48 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={currentQuote}
              className="font-serif text-2xl md:text-4xl text-foreground px-4"
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.6 }}
            >
              "{quotes[currentQuote]}"
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuote(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentQuote
                  ? "w-6 bg-gold"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
