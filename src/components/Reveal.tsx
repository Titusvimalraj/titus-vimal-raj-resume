import React from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealElement = "div" | "li" | "article";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: RevealElement;
};

const motionMap = {
  div: motion.div,
  li: motion.li,
  article: motion.article,
};

export function Reveal({ children, className, delay = 0, as = "div" }: Props) {
  const reduce = useReducedMotion();
  const Tag = as;

  if (reduce) {
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = motionMap[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionTag>
  );
}
