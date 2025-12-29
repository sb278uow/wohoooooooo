import { motion } from "framer-motion";
import photo6 from "@/assets/photo-6.png";

const MessageSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background orbs */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-gold/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Floating photo - left side */}
      <motion.div
        className="hidden md:block absolute left-8 lg:left-20 bottom-1/4 w-36 lg:w-48 aspect-[3/4] rounded-2xl overflow-hidden"
        initial={{ opacity: 0, x: -100, rotate: -12 }}
        whileInView={{ opacity: 0.5, x: 0, rotate: -8 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.div
          className="w-full h-full"
          animate={{ y: [0, 10, 0], rotate: [-8, -10, -8] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={photo6} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-background/60" />
          <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl" />
        </motion.div>
      </motion.div>

      <div className="max-w-2xl text-center relative z-10">
        {/* Animated heart */}
        <motion.div
          className="w-20 h-20 mx-auto mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <motion.path
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            />
          </svg>
        </motion.div>

        {/* Header */}
        <motion.p
          className="text-muted-foreground text-sm tracking-widest mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ✧ for you ✧
        </motion.p>

        {/* Glass card with message */}
        <motion.div
          className="glass rounded-2xl p-8 md:p-12 border border-border/30 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Corner orbs */}
          <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-gold/10 blur-2xl" />
          <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-violet/10 blur-2xl" />

          <motion.p
            className="text-lg md:text-xl text-foreground mb-6 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            I see your quiet strength. The dreams you protect like sacred flames.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-foreground mb-8 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            I believe in the label you'll build. In every version of you.
          </motion.p>

          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          />

          <motion.p
            className="font-serif text-xl md:text-2xl text-primary italic relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            With endless belief in you, <span className="text-gold">Tarnija</span>.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default MessageSection;
