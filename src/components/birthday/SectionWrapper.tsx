import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ children, className = "" }: SectionWrapperProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className={`min-h-screen flex items-center justify-center px-4 py-16 relative ${className}`}
    >
      <div className="max-w-3xl w-full mx-auto text-center">
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;
