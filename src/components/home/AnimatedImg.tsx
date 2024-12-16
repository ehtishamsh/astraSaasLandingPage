import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const AnimatedImg = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 1]);

  return (
    <div
      ref={ref}
      className="flex justify-center relative z-30 max-w-6xl mx-auto px-5 overflow-hidden"
    >
      <motion.div
        className="w-full h-full"
        style={{
          willChange: "transform",
          transition: "2000ms cubic-bezier(0.03, 0.98, 0.52, 0.99)",
          rotateX,
          scale,
          transformPerspective: "1000px",
        }}
      >
        <img
          src="/hero-section-dashboard.png"
          alt="dashboard"
          className="w-full h-full"
        />
      </motion.div>
    </div>
  );
};
