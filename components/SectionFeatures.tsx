"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SectionFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="space-y-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold">Öne Çıkan Özellikler</h2>

      <p className="text-base md:text-lg text-white leading-relaxed">
        Demir, çelik, alüminyum ve bakır gibi temel metalleri güvenilir
        kaynaklardan temin ediyor, ihtiyaç duyduğunuz ürünleri hızlı ve uygun
        fiyatlarla sunuyoruz.
      </p>
    </motion.div>
  );
}
