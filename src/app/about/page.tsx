"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, BarChart3, Laptop, Radio, Zap, Target, Globe, ArrowRight, MessageSquare, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* ════════════════════════════════════════
   ANIMATION VARIANTS
 ════════════════════════════════════════ */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

/* ════════════════════════════════════════
   CORE PILLARS
 ════════════════════════════════════════ */
const corePillars = [
  {
    icon: <Laptop className="text-accent" size={28} />,
    title: "Technical Engineering",
    desc: "Next.js development & n8n workflow automation to eliminate manual bottlenecks. We build systems that work while you sleep.",
    accent: "border-accent/20 bg-accent/5",
  },
  {
    icon: <BarChart3 className="text-purple-400" size={28} />,
    title: "Data Intelligence",
    desc: "Utilizing Power BI for Retail & Sales analytics. We turn raw numbers into actionable business growth and ROI strategies.",
    accent: "border-purple-400/20 bg-purple-400/5",
  },
  {
    icon: <Radio className="text-emerald-400" size={28} />,
    title: "Media Dominance",
    desc: "Leveraging a cross-platform FB/YT network of 3.5M+ followers to give brands instant, massive-scale visibility.",
    accent: "border-emerald-400/20 bg-emerald-400/5",
  },
];


/* ════════════════════════════════════════
   ABOUT PAGE
 ════════════════════════════════════════ */
export default function About() {
  return (
    <main className="relative overflow-hidden bg-black selection:bg-accent/30 selection:text-white">
      {/* Ambient background glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-accent/5 rounded-full blur-[180px] -z-10 pointer-events-none" />

      {/* ════════ HERO SECTION ════════ */}
      <section className="relative pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
          <motion.div initial="hidden" animate="visible" className="flex flex-col gap-8">
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest self-start">
              <Zap size={13} fill="currentColor" /> Engineering Digital Dominance
            </motion.div>

            <motion.h1 variants={fadeUp} custom={1} className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] text-white">
              Merging Code, Data, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
                &amp; Massive Human Reach.
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} custom={2} className="text-zinc-400 text-lg md:text-xl max-w-xl leading-relaxed">
              We don&apos;t just build websites; we engineer self-sustaining digital assets that dominate markets.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-square md:aspect-[4/5] lg:aspect-auto h-full min-h-[500px] rounded-3xl overflow-hidden border border-white/10 group grayscale hover:grayscale-0 transition-all duration-700"
          >
            <Image
              src="/images/founder-hero.png"
              alt="Digihub Pro Founder"
              fill
              className="object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-1000"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 right-8 p-6 glassmorphism rounded-2xl border border-white/10 flex items-center justify-between">
              <div>
                <p className="text-accent font-black text-2xl tracking-tight">3.5M+</p>
                <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Network Reach</p>
              </div>
              <div className="w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center animate-pulse">
                <Globe size={20} className="text-accent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════ THE STORY ════════ */}
      <section className="py-24 px-6 border-t border-white/5 bg-zinc-950/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
            <motion.div variants={fadeUp} custom={0} className="inline-block p-4 rounded-2xl bg-white/5 border border-white/10 mb-4">
              <Quote size={32} className="text-accent opacity-50" />
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-black text-white">The Founding of Digihub Pro</motion.h2>
            <motion.div variants={fadeUp} custom={2} className="space-y-6 text-zinc-400 text-lg md:text-xl leading-relaxed text-left md:text-center mt-10">
              <p>
                What began as a personal mission has evolved into Digihub Pro—a elite digital agency designed for scale. Managing a <span className="text-white font-bold underline decoration-accent/30 decoration-4">3.5 Million+ follower ecosystem</span> taught us that visibility is nothing without <strong className="text-white">robust engineering.</strong>
              </p>
              <p>
                We bridge the gap between technical complexity and business ROI. Digihub Pro unites specialists in high-volume retail operations with elite systems engineering to deliver digital assets that provide a clear, competitive advantage in the modern market.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ════════ CORE PILLARS ════════ */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {corePillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -5 }}
                className={`p-8 rounded-3xl border ${pillar.accent} transition-all duration-300 hover:shadow-2xl`}
              >
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 w-fit mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-black text-white mb-4">{pillar.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ PERSONAL BRANDING & EXPERIENCE ════════ */}
      <section className="py-24 px-6 border-y border-white/5 relative">
        <div className="absolute inset-0 bg-accent/2 opacity-[0.02] -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-xs font-black text-accent uppercase tracking-[0.3em]">Credentials</span>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Proven Expertise.</h2>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Our strategies are forged in high-stakes environments where every data point counts.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { title: "Global Media Networks", desc: "Engineered the organic growth of massive educational hubs with 3.5M+ aggregate reach." },
                  { title: "Authority Tech Hubs", desc: "Scaling flagship technical platforms into authoritative digital communities and knowledge centers." },
                  { title: "Enterprise Retail Synergy", desc: "Orchestrating full-stack retail operations & data-driven marketing for multi-branch networks." },
                ].map((item, i) => (
                  <motion.div key={item.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-5 border-l border-white/10 pl-6 group hover:border-accent transition-colors">
                    <div>
                      <h4 className="text-white font-bold text-lg group-hover:text-accent transition-colors">{item.title}</h4>
                      <p className="text-zinc-500 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="group relative aspect-[4/5] rounded-2xl border border-white/10 bg-white/5 overflow-hidden p-6 flex flex-col justify-end">
                  <Image src="/images/uom-it.png" alt="UoM IT" fill className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="relative z-10">
                    <p className="text-3xl font-black text-white">IT</p>
                    <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mt-1">UoM Undergraduate</p>
                  </div>
                </div>
                <div className="group relative aspect-square rounded-2xl border border-accent/20 bg-accent/5 overflow-hidden p-6 flex flex-col justify-end">
                  <Image src="/images/strategic-roi.png" alt="Strategic ROI" fill className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="relative z-10">
                    <Target size={24} className="text-accent mb-auto" />
                    <p className="text-xl font-black text-white mt-4">Strategic ROI</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mt-12 pb-12">
                <div className="group relative aspect-square rounded-2xl border border-white/10 bg-white/5 overflow-hidden p-6 flex flex-col justify-end">
                  <Image src="/images/full-automation.png" alt="Full Automation" fill className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="relative z-10">
                    <Zap size={24} className="text-yellow-400 mb-auto" />
                    <p className="text-xl font-black text-white mt-4">Full Automation</p>
                  </div>
                </div>
                <div className="group relative aspect-[4/5] rounded-2xl border border-white/10 bg-white/5 overflow-hidden p-6 flex flex-col justify-end">
                  <Image src="/images/academic-bit.png" alt="Academic Core" fill className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="relative z-10">
                    <p className="text-3xl font-black text-white">BIT</p>
                    <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mt-1">Academic Core</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════ PHILOSOPHY CTA ════════ */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center border border-white/10 rounded-3xl p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 to-transparent -z-10" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-[100px] -z-10" />

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
              &quot;We don&apos;t just build websites; <br />
              we build <span className="text-accent">self-sustaining digital assets.</span>&quot;
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="flex items-center gap-2.5 px-10 py-5 bg-white text-black font-black rounded-full hover:bg-accent transition-colors group text-sm">
                Start Dominating <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="https://wa.me/94764682362" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-10 py-5 border border-white/10 text-white font-bold rounded-full hover:border-accent hover:text-accent transition-all text-sm">
                <MessageSquare size={18} /> Direct WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
