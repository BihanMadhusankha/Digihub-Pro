"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Users, TrendingUp, Radio, MessageSquare, Youtube, Facebook, ArrowRight, Zap, Target, Globe } from "lucide-react";
import AdCalculator from "@/components/AdCalculator";

/* ════════════════════════════════════════
   ANIMATION VARIANT
════════════════════════════════════════ */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const } }),
};

/* ════════════════════════════════════════
   HERO STATS
════════════════════════════════════════ */
const stats = [
  { icon: <Users size={26} className="text-accent" />, value: "3.5M+", label: "Aggregate Followers" },
  { icon: <Radio size={26} className="text-accent" />, value: "25+", label: "Engagement Channels" },
  { icon: <TrendingUp size={26} className="text-accent" />, value: "10M+", label: "Monthly Organic Reach" },
];

/* ════════════════════════════════════════
   FACEBOOK PAGES — CORE ASSETS
════════════════════════════════════════ */
export interface FBPage {
  name: string;
  followers: string;
  logo?: string;   // /images/... if available
  color: string;   // tailwind bg for avatar fallback
  basePrice: number; // base ad price in LKR
}

export const corePages: FBPage[] = [
  { name: "සිනාව", followers: "813k+", logo: "/images/sinawa.jpeg", color: "from-violet-600 to-purple-800", basePrice: 15000 },
  { name: "SUPUN LIYANARACHCHI", followers: "559k+", logo: "/images/supun liyanarachchi.jpeg", color: "from-blue-500 to-cyan-700", basePrice: 12000 },
  { name: "පිස්සුඅන්දරෙ", followers: "341k+", logo: "/images/pissu andare.jpeg", color: "from-orange-500 to-red-700", basePrice: 8000 },
  { name: "Madu", followers: "333k+", logo: "/images/madu.jpeg", color: "from-pink-500 to-rose-700", basePrice: 8000 },
  { name: "දිලු", followers: "279k+", logo: "/images/dilu.jpeg", color: "from-green-500 to-emerald-700", basePrice: 7000 },
  { name: "සිතූ sithu", followers: "232k+", logo: "/images/sithu.jpeg", color: "from-yellow-500 to-amber-700", basePrice: 6000 },
  { name: "මැන්ටලේ mantale", followers: "215k+", logo: "/images/mantale.jpeg", color: "from-teal-500 to-cyan-700", basePrice: 6000 },
];

export const nichePages: FBPage[] = [
  { name: "මාලිමා කාරයෝ", followers: "121k+", logo: "/images/malima karayo.jpeg", color: "from-indigo-500 to-violet-700", basePrice: 5000 },
  { name: "USA", followers: "87k+", logo: "/images/usa.jpeg", color: "from-red-500 to-rose-700", basePrice: 4000 },
  { name: "Real වෙස්-ටෝක්", followers: "84k+", logo: "/images/real wes talk.jpeg", color: "from-blue-600 to-indigo-800", basePrice: 4000 },
  { name: "රශ්", followers: "75k+", logo: "/images/rash.jpeg", color: "from-emerald-500 to-green-700", basePrice: 3500 },
  { name: "Drama Land", followers: "60k+", logo: "/images/drama land.jpeg", color: "from-fuchsia-500 to-purple-700", basePrice: 3000 },
  { name: "HELA CINEMA", followers: "56k+", logo: "/images/HELA CINEMA.jpeg", color: "from-zinc-600 to-zinc-800", basePrice: 3000 },
  { name: "Walauwa", followers: "31k+", logo: "/images/walauwa.jpeg", color: "from-amber-500 to-orange-700", basePrice: 2500 },
  { name: "Yanthare", followers: "17k+", logo: "/images/yanthare.jpeg", color: "from-sky-500 to-blue-700", basePrice: 2000 },
];

/* ════════════════════════════════════════
   AD SEGMENTS
════════════════════════════════════════ */
const segments = [
  {
    icon: <Zap size={22} className="text-yellow-400" />,
    label: "Entertainment & Viral",
    purpose: "Mass Awareness",
    desc: "Reach millions instantly through high-engagement comedy and viral content pages.",
    pages: ["සිනාව", "පිස්සුඅන්දරෙ", "DONI"],
    accent: "border-yellow-400/30 bg-yellow-400/5",
    badge: "bg-yellow-400/20 text-yellow-300",
  },
  {
    icon: <Users size={22} className="text-pink-400" />,
    label: "Lifestyle & Influencer",
    purpose: "Engagement & Trust",
    desc: "Build brand affinity through personal influencer connections and lifestyle audiences.",
    pages: ["SUPUN LIYANARACHCHI", "Madu Page", "MASHI"],
    accent: "border-pink-400/30 bg-pink-400/5",
    badge: "bg-pink-400/20 text-pink-300",
  },
  {
    icon: <Target size={22} className="text-accent" />,
    label: "Community & Local",
    purpose: "Niche Focus",
    desc: "Target tightly-knit communities with specific interests for high-conversion campaigns.",
    pages: ["USA-USA", "Yanthare", "Real වෙස්-ටෝක්"],
    accent: "border-accent/30 bg-accent/5",
    badge: "bg-accent/20 text-accent",
  },
];

/* ════════════════════════════════════════
   MULTI-PLATFORM & YOUTUBE CHANNELS
════════════════════════════════════════ */
const hybridChannels = [
  { name: "DHAMMA VISION", logo: "/images/DHAMMA VISION.png", platforms: ["facebook", "youtube"] as const },
  { name: "DR ROSHEL", logo: "/images/DR ROSHEL.png", platforms: ["facebook", "youtube"] as const },
  { name: "GREEK HISTORIAN", logo: "/images/GREEK HISTORIAN.png", platforms: ["facebook", "youtube"] as const, note: "10k+" },
  { name: "PROFESSOR", logo: "/images/PROFESSOR.png", platforms: ["facebook", "youtube"] as const },
  { name: "WISHWA AGAMANAYA", logo: "/images/WISHWA AGAMANAYA.png", platforms: ["facebook", "youtube"] as const },
];

const youtubeChannels = [
  { name: "Bihan Tech", logo: "/images/bihan-1.jpg", desc: "Technology tutorials & reviews" },
  { name: "ASMRCUT-p9t", logo: "/images/bihan-3.png", desc: "Relaxation & ASMR content" },
];

/* ════════════════════════════════════════
   COMPONENTS
════════════════════════════════════════ */
function PageAvatar({ page }: { page: FBPage }) {
  const initials = page.name.replace(/[^a-zA-Z\u0D80-\u0DFF]/g, "").slice(0, 2).toUpperCase() || page.name.slice(0, 2);
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4, scale: 1.03 }}
      transition={{ duration: 0.25 }}
      className="group flex flex-col items-center gap-3 text-center"
    >
      {/* Avatar circle */}
      <div className="relative">
        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${page.color} flex items-center justify-center shadow-lg overflow-hidden border-2 border-white/10 group-hover:border-accent/50 transition-colors`}>
          {page.logo ? (
            <Image src={page.logo} alt={page.name} fill className="object-cover rounded-full" />
          ) : (
            <span className="text-white font-black text-sm">{initials}</span>
          )}
        </div>
        {/* FB badge */}
        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center border border-black">
          <Facebook size={10} className="text-white" />
        </div>
      </div>
      <div>
        <p className="text-white font-bold text-xs leading-tight line-clamp-2 max-w-[88px]">{page.name}</p>
        <p className="text-accent font-black text-sm mt-0.5">{page.followers}</p>
      </div>
    </motion.div>
  );
}

function PlatformBadge({ platform }: { platform: "facebook" | "youtube" }) {
  return platform === "facebook" ? (
    <span className="flex items-center gap-1 px-2 py-0.5 bg-blue-600/20 border border-blue-500/30 rounded-full text-[10px] font-bold text-blue-400">
      <Facebook size={10} /> FB
    </span>
  ) : (
    <span className="flex items-center gap-1 px-2 py-0.5 bg-red-600/20 border border-red-500/30 rounded-full text-[10px] font-bold text-red-400">
      <Youtube size={10} /> YT
    </span>
  );
}

/* ════════════════════════════════════════
   PAGE
════════════════════════════════════════ */
export default function Ecosystem() {
  return (
    <main className="relative overflow-hidden">
      {/* Ambient glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-accent/4 rounded-full blur-[180px] -z-10 pointer-events-none" />

      {/* ════════ HERO ════════ */}
      <section className="relative min-h-screen flex items-center px-6 overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(0,229,255,0.08),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_80%,rgba(99,102,241,0.07),transparent_60%)]" />
          {/* Subtle grid */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center py-24 lg:py-32">

          {/* ── LEFT: Text ── */}
          <motion.div initial="hidden" animate="visible" className="flex flex-col gap-7">
            <motion.div variants={fadeUp} custom={0}
              className="self-start inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-wider">
              <Radio size={12} className="animate-pulse" />
              Sri Lanka&apos;s #1 Digital Advertising Network
            </motion.div>

            <motion.h1 variants={fadeUp} custom={1}
              className="text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[1.0]">
              Sri Lanka&apos;s<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-cyan-300 to-white">
                Largest Digital
              </span><br />
              Network for<br />
              <span className="text-white">Guaranteed</span><br />
              <span className="text-zinc-400 text-4xl md:text-5xl font-black">Brand Exposure.</span>
            </motion.h1>

            <motion.p variants={fadeUp} custom={2}
              className="text-zinc-400 text-base max-w-md leading-relaxed">
              A curated ecosystem of <span className="text-white font-semibold">25+ high-reach</span> Facebook &amp; YouTube channels — delivering targeted audiences across entertainment, lifestyle, community &amp; beyond.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-3">
              <a href="https://wa.me/94764682362?text=Hi%20Digihub%20Pro%20Team%2C%20I%20want%20to%20advertise%20on%20your%20network"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-8 py-4 bg-accent text-black font-black rounded-full hover:scale-[1.04] transition-transform shadow-[0_0_35px_rgba(0,229,255,0.45)] text-sm">
                <MessageSquare size={16} /> Advertise on Our Network
              </a>
              <Link href="/pricing"
                className="flex items-center gap-2.5 px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:border-accent/60 hover:text-accent transition-all text-sm">
                View Packages <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Trust bar */}
            <motion.div variants={fadeUp} custom={4}
              className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-3">
                {corePages.slice(0, 5).map((page, i) => (
                  <div
                    key={i}
                    className={`relative w-9 h-9 rounded-full bg-gradient-to-br ${page.color} border-2 border-black overflow-hidden shadow-lg`}
                  >
                    {page.logo ? (
                      <Image
                        src={page.logo}
                        alt={page.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full" />
                    )}
                  </div>
                ))}
              </div>
              <p className="text-zinc-500 text-xs">
                <span className="text-white font-semibold">25+ pages</span> · Active daily ·{" "}
                <span className="text-accent font-semibold">Slots available now</span>
              </p>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Stat Cards ── */}
          <motion.div initial="hidden" animate="visible" className="flex flex-col gap-4">
            {[
              { value: "3.5M+", label: "Aggregate Followers", sub: "Across all channels combined", icon: <Users size={28} className="text-accent" />, glow: "shadow-[0_0_60px_-10px_rgba(0,229,255,0.35)]", border: "border-accent/25", bg: "bg-gradient-to-br from-accent/10 via-black to-black" },
              { value: "25+", label: "Engagement Channels", sub: "Facebook, YouTube & more", icon: <Radio size={28} className="text-violet-400" />, glow: "shadow-[0_0_60px_-10px_rgba(139,92,246,0.3)]", border: "border-violet-400/25", bg: "bg-gradient-to-br from-violet-400/10 via-black to-black" },
              { value: "10M+", label: "Monthly Organic Reach", sub: "Estimated across the network", icon: <TrendingUp size={28} className="text-emerald-400" />, glow: "shadow-[0_0_60px_-10px_rgba(52,211,153,0.3)]", border: "border-emerald-400/25", bg: "bg-gradient-to-br from-emerald-400/10 via-black to-black" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                custom={i + 1}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.25 }}
                className={`flex items-center gap-6 p-6 rounded-2xl border ${s.border} ${s.bg} ${s.glow} transition-all duration-300`}
              >
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex-shrink-0">
                  {s.icon}
                </div>
                <div>
                  <p className="text-5xl font-black text-white tracking-tight leading-none">{s.value}</p>
                  <p className="text-white font-bold text-sm mt-1">{s.label}</p>
                  <p className="text-zinc-500 text-xs mt-0.5">{s.sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scrolling ticker */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-black/50 py-3 overflow-hidden">
          <div className="flex gap-12 animate-[marquee_30s_linear_infinite] whitespace-nowrap">
            {["සිනාව 813k+", "SUPUN 559k+", "පිස්සුඅන්දරෙ 341k+", "Madu Page 333k+", "දිලු 279k+", "GREEK HISTORIAN", "DHAMMA VISION", "HELA CINEMA 56k+", "Drama Land 60k+", "USA-USA 87k+",
              "සිනාව 813k+", "SUPUN 559k+", "පිස්සුඅන්දරෙ 341k+", "Madu Page 333k+", "දිලු 279k+", "GREEK HISTORIAN", "DHAMMA VISION", "HELA CINEMA 56k+", "Drama Land 60k+", "USA-USA 87k+"].map((n, i) => (
                <span key={i} className="text-zinc-500 text-xs font-semibold flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full inline-block" />
                  {n}
                </span>
              ))}
          </div>
        </div>
      </section>



      {/* ════════ CORE FB PAGES ════════ */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="mb-12">
            <motion.div variants={fadeUp} custom={0}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/15 border border-blue-500/25 text-blue-400 text-xs font-bold mb-4">
              <Facebook size={13} /> Available for Advertising
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1}
              className="text-3xl md:text-4xl font-black tracking-tight mb-2">
              Our High-Growth <span className="text-accent">Facebook Pages</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-zinc-500 text-sm">
              Core assets — premium placements with massive organic reach.
            </motion.p>
          </motion.div>

          {/* Core 7 — large grid */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-4 sm:grid-cols-7 gap-6 mb-16 p-8 rounded-3xl bg-white/[0.03] border border-white/8">
            {corePages.map((p, i) => <PageAvatar key={p.name} page={p} />)}
          </motion.div>

          {/* Niche pages label */}
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-6">
            Niche Community Pages
          </motion.p>

          {/* Niche grid */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid grid-cols-4 sm:grid-cols-8 gap-5 p-6 rounded-3xl bg-white/[0.02] border border-white/6">
            {nichePages.map((p) => <PageAvatar key={p.name} page={p} />)}
          </motion.div>
        </div>
      </section>

      {/* ════════ AD SEGMENTS ════════ */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
            <motion.div variants={fadeUp} custom={0}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold mb-4">
              <Target size={13} /> Advertising Segments
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-black tracking-tight mb-2">
              Reach Your <span className="text-accent">Ideal Audience</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-zinc-500 text-sm max-w-lg">
              Select the right segment for your campaign goal — from mass awareness to niche conversions.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {segments.map((seg, i) => (
              <motion.div key={seg.label}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.4 }}
                whileHover={{ y: -5 }}
                className={`rounded-3xl p-6 border ${seg.accent} transition-all duration-300 hover:shadow-[0_20px_50px_-10px_rgba(0,229,255,0.15)]`}>
                <div className="flex items-center gap-3 mb-3">
                  {seg.icon}
                  <div>
                    <p className="text-white font-black text-sm">{seg.label}</p>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${seg.badge}`}>{seg.purpose}</span>
                  </div>
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed mb-4">{seg.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {seg.pages.map((pg) => (
                    <span key={pg} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-[11px] text-zinc-300 font-semibold">{pg}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ MULTI-PLATFORM CHANNELS ════════ */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
            <motion.div variants={fadeUp} custom={0}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/15 text-zinc-300 text-xs font-bold mb-4">
              <Globe size={13} /> Multi-Platform
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-black tracking-tight mb-2">
              Facebook &amp; YouTube <span className="text-accent">Hybrid Channels</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-zinc-500 text-sm">Active simultaneously on both platforms for maximum cross-platform reach.</motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {hybridChannels.map((ch, i) => (
              <motion.div key={ch.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-accent/30 text-center transition-all duration-300">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-accent/40 transition-colors">
                  <Image src={ch.logo} alt={ch.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-white font-bold text-xs leading-tight">{ch.name}</p>
                  {ch.note && <p className="text-accent text-[11px] font-bold mt-0.5">{ch.note}</p>}
                </div>
                <div className="flex gap-1.5">
                  {ch.platforms.map((pl) => <PlatformBadge key={pl} platform={pl} />)}
                </div>
              </motion.div>
            ))}
          </div>

          {/* YouTube-only */}
          <div className="mt-10">
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-5">Specialised YouTube Channels</p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-lg">
              {youtubeChannels.map((ch, i) => (
                <motion.div key={ch.name}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-red-500/30 transition-all duration-300">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 flex-shrink-0">
                    <Image src={ch.logo} alt={ch.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{ch.name}</p>
                    <p className="text-zinc-500 text-xs">{ch.desc}</p>
                    <div className="mt-1"><PlatformBadge platform="youtube" /></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ AD PRICE CALCULATOR ════════ */}
      <AdCalculator />

      {/* ════════ ADVERTISER CTA BANNER ════════ */}
      <section className="px-6 py-10 mb-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/10 via-black to-black p-10 md:p-14 text-center shadow-[0_0_80px_-20px_rgba(0,229,255,0.4)]"
          >
            {/* Background glow orbs */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -z-1" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-[60px] -z-1" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/25 text-accent text-xs font-bold mb-6">
                <Zap size={13} /> Limited Advertising Slots
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
                Get Guaranteed Leads with Our<br />
                <span className="text-accent">Multi-Million Reach.</span>
              </h2>
              <p className="text-zinc-400 text-base max-w-xl mx-auto mb-8 leading-relaxed">
                One campaign. 25+ channels. 3.5M+ targeted followers. From brand awareness to direct conversions — we deliver.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://wa.me/94764682362?text=Hi%20Digihub%20Pro%20Team%2C%20I%20want%20to%20advertise%20on%20your%20network%20and%20get%20guaranteed%20leads"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-8 py-4 bg-accent text-black font-black rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(0,229,255,0.5)] text-sm">
                  <MessageSquare size={17} /> Advertise on Our Network
                </a>
                <Link href="/pricing"
                  className="flex items-center gap-2.5 px-8 py-4 border border-white/25 text-white font-semibold rounded-full hover:border-accent hover:text-accent transition-all text-sm">
                  View Ad Packages <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
