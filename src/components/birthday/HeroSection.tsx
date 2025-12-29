import { motion } from "framer-motion";
import photo1 from "@/assets/photo-1.png";
import photo2 from "@/assets/photo-2.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-gold/10 via-transparent to-transparent" />

      {/* Floating photo - left */}
      <motion.div
        className="absolute left-4 md:left-16 top-1/4 w-32 md:w-48 lg:w-56 aspect-[3/4] rounded-2xl overflow-hidden opacity-30 md:opacity-40 pointer-events-none"
        initial={{ opacity: 0, x: -50, rotate: -15 }}
        animate={{ 
          opacity: [0.3, 0.4, 0.3],
          x: 0, 
          rotate: -12,
          y: [0, -20, 0],
        }}
        transition={{ 
          opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          default: { duration: 1.5, delay: 0.5 }
        }}
        style={{ filter: "blur(1px)" }}
      >
        <img src={photo1} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </motion.div>

      {/* Floating photo - right */}
      <motion.div
        className="absolute right-4 md:right-16 bottom-1/4 w-28 md:w-40 lg:w-48 aspect-[3/4] rounded-2xl overflow-hidden opacity-25 md:opacity-35 pointer-events-none"
        initial={{ opacity: 0, x: 50, rotate: 15 }}
        animate={{ 
          opacity: [0.25, 0.35, 0.25],
          x: 0, 
          rotate: 10,
          y: [0, 15, 0],
        }}
        transition={{ 
          opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          default: { duration: 1.5, delay: 0.8 }
        }}
        style={{ filter: "blur(1px)" }}
      >
        <img src={photo2} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent" />
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 md:w-48 md:h-48 rounded-full bg-violet/10 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 md:w-56 md:h-56 rounded-full bg-gold/10 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="text-center max-w-4xl relative z-10">
        {/* Main headline */}
        <motion.h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="text-foreground">For the soul who </span>
          <span className="italic text-primary text-glow">found home in melodies</span>
          <span className="text-foreground">.</span>
        </motion.h1>

        {/* Divider with sparkle */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50" />
          <motion.span
            className="text-gold text-xl"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            ✧
          </motion.span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50" />
        </motion.div>

        {/* Happy Birthday */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">Happy Birthday,</p>
          <h2 className="font-serif text-3xl md:text-5xl text-gold text-glow-gold">
            Tarnija
          </h2>
        </motion.div>

        {/* Decorative sparkles */}
        <motion.div
          className="flex justify-center gap-6 mt-12 text-primary/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
            >
              ✧
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
