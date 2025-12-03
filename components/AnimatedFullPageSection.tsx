"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AnimatedFullPageSection({ children, className }: any) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], 
  });

  // GENİŞLİĞİ DARALT (sağdan-soldan merkeze doğru)
  const width = useTransform(scrollYProgress, [0, 1], ["100%", "40%"]);

  // YUKARI KAYDIR
  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  // OPACITY azalt
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.section
      ref={ref}
      style={{
        width,
        opacity,
        y: translateY,
      }}
      className={`relative h-screen snap-start flex items-center justify-center mx-auto origin-top ${className}`}
    >
      <div className="absolute inset-0 bg-black/40 z-[1]" />
      <div className="relative z-[2] text-center px-4">
        {children}
      </div>
    </motion.section>
  );
}

