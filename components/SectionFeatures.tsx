"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "./CountUp";
import GradientText from "./Gradient";

const items = [
  { label: "En Yüksek Ticaret Tonu", value: 150, suffix: "+", word: "Ton" },
  { label: "Yüksek Tonlarda Katedilen Mesafemiz", value: 10000, suffix: "+", word: "Km" },
  { label: "Hizmet Süremiz", value: 30, suffix: "+", word: "Yıl" },
];

export default function SectionFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="space-y-6 md:space-y-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white">Öne Çıkan Özellikler</h2>

      <div className="bg-gradient-to-br from-white via-[#8b6b2f] to-[#000] rounded-2xl p-4 sm:p-6">
        <div className="rounded-2xl p-6 sm:p-8 md:p-10 border border-[#8b6b2f]/20 
            bg-gradient-to-br from-black via-[#0a0a0a] to-[#000]
            shadow-[0_0_25px_rgba(139,107,47,0.15)]">          
          <div className="grid grid-cols-1 gap-y-6 sm:gap-y-8">
            {items.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-[1.6fr_auto] items-center gap-x-6 gap-y-3"
              >
                <span className="text-xl sm:text-2xl md:text-3xl text-white leading-tight">
                  {item.label}
                </span>
                <div className="flex items-baseline gap-2 text-white">
                  <span className="font-bold text-[#8b6b2f] text-2xl sm:text-3xl md:text-4xl">{item.suffix}</span>
                  <GradientText 
                    colors={["#dbdbdbff", "#c99a44ff", "#8b6b2f", "#4079ff", "#8b6b2f"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="font-bold text-2xl sm:text-3xl md:text-4xl"
                  >
                  <CountUp
                    from={0}
                    to={item.value}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text text-text-gradient-to-br from-black via-[#8b6b2f] to-[#FFD700] font-bold text-2xl sm:text-3xl md:text-4xl"
                  />
                  </GradientText>
                  <span className="font-bold text-gray-300 text-2xl sm:text-3xl md:text-4xl">{item.word}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-base md:text-lg text-white leading-relaxed">
        Demir, çelik, alüminyum ve bakır gibi temel metalleri güvenilir kaynaklardan temin ediyor,
        ihtiyaç duyduğunuz ürünleri hızlı ve uygun fiyatlarla sunuyoruz.
      </p>
    </motion.div>
  );
}
