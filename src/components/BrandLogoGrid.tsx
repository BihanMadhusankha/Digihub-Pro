"use client";

import Image from "next/image";
import { Building2 } from "lucide-react";
import { motion } from "framer-motion";

const networkBrands = [
  { name: "DUMITH BANDARA", logo: "/images/DUMITH BANDARA.jpg" },
  { name: "SASIP", logo: "/images/SASIP.png" },
  { name: "SPARTA", logo: "/images/SPARTA.png" },
  { name: "THILINA BORALASSA", logo: "/images/THILINA BORALASSA.jpeg" },
];

/* Quadruple for a dense seamless loop with only 4 brands */
const ticker = [...networkBrands, ...networkBrands, ...networkBrands, ...networkBrands];

function BrandItem({ brand }: { brand: { name: string; logo: string } }) {
  return (
    <div className="group flex-shrink-0 flex flex-col items-center gap-2 mx-5 cursor-default">
      <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 group-hover:border-accent/50 group-hover:shadow-[0_0_20px_-5px_rgba(0,229,255,0.35)] flex items-center justify-center overflow-hidden [filter:grayscale(1)] group-hover:[filter:none] transition-all duration-500">
        <Image
          src={brand.logo}
          alt={brand.name}
          width={64}
          height={64}
          className="object-contain w-full h-full p-2"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
            const fb = e.currentTarget.nextSibling as HTMLElement | null;
            if (fb) fb.style.display = "flex";
          }}
        />
        <span className="hidden w-full h-full items-center justify-center text-zinc-600">
          <Building2 size={22} />
        </span>
      </div>
      <span className="text-[10px] text-zinc-600 group-hover:text-zinc-300 transition-colors text-center font-medium leading-tight max-w-[72px] whitespace-nowrap">
        {brand.name}
      </span>
    </div>
  );
}

export default function BrandLogoGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Heading */}
      <div className="text-center mb-6">
        <p className="text-xs text-zinc-500 uppercase tracking-[0.25em] font-semibold mb-3">
          Our Brand Network
        </p>
        <p className="text-zinc-400 text-base max-w-lg mx-auto">
          Managing a digital ecosystem of{" "}
          <strong className="text-white">10+ channels</strong> with global reach.
        </p>
      </div>

      {/* Marquee ticker */}
      <div className="relative overflow-hidden">
        {/* Left + Right fade masks */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee">
          {ticker.map((brand, i) => (
            <BrandItem key={`${brand.name}-${i}`} brand={brand} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
