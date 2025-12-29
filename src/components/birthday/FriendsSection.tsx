import { motion } from "framer-motion";
import photo5 from "@/assets/photo-5.png";

const FriendsSection = () => {
  // Constellation nodes
  const nodes = [
    { x: 50, y: 30, main: true },
    { x: 25, y: 50, main: false },
    { x: 75, y: 50, main: false },
    { x: 35, y: 75, main: false },
    { x: 65, y: 75, main: false },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Floating photo - right side */}
      <motion.div
        className="hidden md:block absolute right-8 lg:right-20 top-1/3 w-40 lg:w-52 aspect-[3/4] rounded-2xl overflow-hidden"
        initial={{ opacity: 0, x: 100, rotate: 10 }}
        whileInView={{ opacity: 0.55, x: 0, rotate: 7 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <motion.div
          className="w-full h-full"
          animate={{ y: [0, -18, 0], rotate: [7, 9, 7] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={photo5} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/20 to-background/60" />
          <div className="absolute inset-0 border-2 border-gold/20 rounded-2xl" />
        </motion.div>
      </motion.div>

      <div className="max-w-3xl text-center relative z-10">
        {/* Constellation SVG */}
        <motion.div
          className="w-48 h-48 mx-auto mb-10 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Connecting lines */}
            {[
              [nodes[0], nodes[1]],
              [nodes[0], nodes[2]],
              [nodes[1], nodes[3]],
              [nodes[2], nodes[4]],
              [nodes[3], nodes[4]],
            ].map(([from, to], i) => (
              <motion.line
                key={i}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="hsl(var(--violet) / 0.4)"
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 + i * 0.2 }}
              />
            ))}

            {/* Nodes */}
            {nodes.map((node, i) => (
              <motion.circle
                key={i}
                cx={node.x}
                cy={node.y}
                r={node.main ? 4 : 2}
                fill={node.main ? "hsl(var(--gold))" : "hsl(var(--violet) / 0.5)"}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
              />
            ))}

            {/* Center glow */}
            <motion.circle
              cx={nodes[0].x}
              cy={nodes[0].y}
              r={8}
              fill="hsl(var(--gold) / 0.3)"
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </svg>
        </motion.div>

        {/* Header */}
        <motion.p
          className="text-muted-foreground text-sm tracking-widest mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          ✧ across the distance ✧
        </motion.p>

        {/* Main message */}
        <motion.h2
          className="font-serif text-3xl md:text-5xl text-foreground mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-gold text-glow-gold">"They're still your people."</span>
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          className="text-lg md:text-xl text-muted-foreground mb-6 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Real connection doesn't dissolve with distance.
        </motion.p>

        <motion.p
          className="font-serif text-xl md:text-2xl text-primary italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          The right people will find you.
        </motion.p>
      </div>
    </section>
  );
};

export default FriendsSection;
