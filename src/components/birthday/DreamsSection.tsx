import { motion } from "framer-motion";
import photo4 from "@/assets/photo-4.png";

const DreamsSection = () => {
  // Equalizer bars with varied heights
  const bars = Array.from({ length: 13 }, (_, i) => ({
    id: i,
    delay: i * 0.1,
    baseHeight: 20 + Math.random() * 40,
  }));

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Floating photo - left side */}
      <motion.div
        className="hidden md:block absolute left-8 lg:left-16 top-1/2 -translate-y-1/2 w-44 lg:w-56 aspect-[3/4] rounded-2xl overflow-hidden"
        initial={{ opacity: 0, x: -100, rotate: -8 }}
        whileInView={{ opacity: 0.5, x: 0, rotate: -5 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.div
          className="w-full h-full"
          animate={{ y: [0, 12, 0], rotate: [-5, -7, -5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={photo4} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/30 to-background/70" />
          <div className="absolute inset-0 border-2 border-violet/20 rounded-2xl" />
        </motion.div>
      </motion.div>

      <div className="max-w-3xl text-center relative z-10">
        {/* Animated equalizer bars */}
        <motion.div
          className="flex justify-center items-end gap-1 md:gap-2 h-20 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {bars.map((bar) => (
            <motion.div
              key={bar.id}
              className="w-2 md:w-3 rounded-full"
              style={{
                background: `linear-gradient(to top, hsl(var(--gold)), hsl(var(--violet)))`,
                height: bar.baseHeight,
              }}
              animate={{
                scaleY: [1, 0.4, 1],
              }}
              transition={{
                duration: 0.8,
                delay: bar.delay,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </motion.div>

        {/* Header */}
        <motion.p
          className="text-muted-foreground text-sm tracking-widest mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ✧ your dream ✧
        </motion.p>

        {/* Main dream */}
        <motion.h2
          className="font-serif text-4xl md:text-6xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="gradient-text-gold text-glow-gold">"A music label."</span>
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-6 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          You're not abandoning your dream — you're building weapons for it.
        </motion.p>

        <motion.p
          className="font-serif text-xl md:text-2xl text-primary italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Your empire of sound is coming.
        </motion.p>

        {/* Decorative wave form */}
        <motion.svg
          className="w-full max-w-md mx-auto mt-12 opacity-30"
          viewBox="0 0 200 40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.path
            d="M0,20 Q25,0 50,20 T100,20 T150,20 T200,20"
            fill="none"
            stroke="hsl(var(--gold))"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.8 }}
          />
        </motion.svg>
      </div>
    </section>
  );
};

export default DreamsSection;
