import { useInView, motion } from "framer-motion";
import { useRef } from "react";

function Reveal({
  children,
  delay = 0.25,
  classes,
}: {
  children: React.ReactNode;
  delay?: number;
  classes?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  return (
    <motion.div
      className={`relative  z-50 ${classes}`}
      ref={ref}
      initial={{ opacity: 0, y: 75 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 75 }}
      transition={{ duration: 0.5, delay: delay, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
