import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import photo2 from "@/assets/photo-2.png";
import photo5 from "@/assets/photo-5.png";

const CountdownSection = () => {
  const birthDate = new Date("2008-01-30T00:00:00");
  
  const [time, setTime] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const diff = now.getTime() - birthDate.getTime();
      
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      const remainingAfterYears = diff - years * (1000 * 60 * 60 * 24 * 365.25);
      const days = Math.floor(remainingAfterYears / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remainingAfterYears % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remainingAfterYears % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remainingAfterYears % (1000 * 60)) / 1000);

      setTime({ years, days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { value: time.years, label: "years" },
    { value: time.days, label: "days" },
    { value: time.hours, label: "hours" },
    { value: time.minutes, label: "minutes" },
    { value: time.seconds, label: "seconds" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Floating photo - top left */}
      <motion.div
        className="hidden lg:block absolute left-12 top-1/4 w-36 aspect-square rounded-full overflow-hidden"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.4, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="w-full h-full"
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={photo2} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-background/80" />
          <div className="absolute inset-0 border-2 border-gold/30 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Floating photo - bottom right */}
      <motion.div
        className="hidden lg:block absolute right-16 bottom-1/4 w-32 aspect-square rounded-full overflow-hidden"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.35, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <motion.div
          className="w-full h-full"
          animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={photo5} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-background/80" />
          <div className="absolute inset-0 border-2 border-violet/30 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Background orbs */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-violet/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full bg-gold/10 blur-3xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-4xl text-center relative z-10">
        {/* Header */}
        <motion.p
          className="text-muted-foreground text-sm tracking-widest mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ✧ time alive ✧
        </motion.p>

        <motion.h2
          className="font-serif text-2xl md:text-4xl text-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          You've been making the world brighter for
        </motion.h2>

        {/* Time cards */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              className="glass rounded-xl p-4 md:p-6 min-w-[70px] md:min-w-[100px] border border-border/30"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: "hsl(var(--gold) / 0.5)" }}
            >
              <motion.span
                key={unit.value}
                className="block text-2xl md:text-4xl font-serif text-gold text-glow-gold"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 0.3 }}
              >
                {unit.value}
              </motion.span>
              <span className="text-xs md:text-sm text-muted-foreground mt-2 block">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Footer message */}
        <motion.p
          className="text-lg md:text-xl text-primary italic font-serif"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          And every second has been worth it.
        </motion.p>
      </div>
    </section>
  );
};

export default CountdownSection;
