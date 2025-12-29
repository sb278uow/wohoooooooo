import { motion } from "framer-motion";
import photo3 from "@/assets/photo-3.png";

const MusicSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background blur orb */}
      <motion.div
        className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-violet/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Floating photo - right side */}
      <motion.div
        className="hidden md:block absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 w-48 lg:w-64 aspect-[3/4] rounded-2xl overflow-hidden"
        initial={{ opacity: 0, x: 100, rotate: 8 }}
        whileInView={{ opacity: 0.6, x: 0, rotate: 6 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="w-full h-full"
          animate={{ y: [0, -15, 0], rotate: [6, 8, 6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={photo3} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/30 to-background/60" />
          <div className="absolute inset-0 border-2 border-gold/20 rounded-2xl" />
        </motion.div>
      </motion.div>

      <div className="max-w-3xl text-center relative z-10">
        {/* Spinning vinyl */}
        <motion.div
          className="mx-auto w-32 h-32 md:w-40 md:h-40 mb-10 relative"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <motion.svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            {/* Outer ring */}
            <circle cx="50" cy="50" r="48" fill="hsl(var(--muted))" />
            {/* Grooves */}
            {[42, 36, 30, 24].map((r, i) => (
              <circle
                key={i}
                cx="50"
                cy="50"
                r={r}
                fill="none"
                stroke="hsl(var(--border))"
                strokeWidth="0.5"
              />
            ))}
            {/* Label */}
            <circle cx="50" cy="50" r="18" fill="hsl(var(--gold))" />
            <circle cx="50" cy="50" r="3" fill="hsl(var(--background))" />
            {/* Shine */}
            <path
              d="M25,25 Q50,10 75,25"
              fill="none"
              stroke="hsl(var(--foreground) / 0.1)"
              strokeWidth="2"
            />
          </motion.svg>
        </motion.div>

        {/* Main quote */}
        <motion.h2
          className="font-serif text-3xl md:text-5xl text-foreground mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-gold text-glow-gold">"Music saved you."</span>
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          When the world felt heavy, you pressed play.
        </motion.p>

        {/* Glass card with quote */}
        <motion.div
          className="glass rounded-2xl p-8 border border-border/30 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-violet/10 blur-2xl" />
          <p className="font-serif text-xl md:text-2xl italic text-primary relative z-10">
            "That band became the friends I didn't have yet."
          </p>
        </motion.div>

        {/* Decorative notes */}
        <motion.div
          className="flex justify-center gap-8 mt-10 text-muted-foreground/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {["♪", "♫", "♪"].map((note, i) => (
            <motion.span
              key={i}
              className="text-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
            >
              {note}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MusicSection;
