import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  delay?: number;
  wordDelay?: number;
  className?: string;
}

const AnimatedText = ({ text, delay = 0, wordDelay = 0.1, className = "" }: AnimatedTextProps) => {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: delay + index * wordDelay,
            duration: 0.5,
            type: "spring",
            damping: 20,
            stiffness: 100,
          }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

export default AnimatedText;
