"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, CheckCircle2, MessageSquare, Gift, Calculator, Facebook, Youtube, Instagram, Share2, Info } from "lucide-react";

/* ─── pricing constants ─── */
const REEL_PRICE = 1_000;
const POST_PRICE = 500;
const THUMB_PRICE = 2_000;
const BROLL_PRICE = 8_000;
const WEB_BASE = 6_000;
const WEB_EXTRA = 3_000;
const SMM_PRICE_PER_PLATFORM = 5_000;

const platforms = [
  { id: "facebook", label: "Facebook", icon: <Facebook size={20} /> },
  { id: "youtube", label: "YouTube", icon: <Youtube size={20} /> },
  { id: "instagram", label: "Instagram", icon: <Instagram size={20} /> },
  {
    id: "tiktok", label: "TikTok", icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20}>
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.5.34-.9.84-1.08 1.42-.25.82-.14 1.73.31 2.47.45.75 1.24 1.27 2.1 1.41.67.12 1.38.03 2.01-.24.78-.34 1.41-1.01 1.67-1.81.16-.51.18-1.05.18-1.58V0z" />
      </svg>
    )
  },
] as const;

const addOns = [
  { id: "powerbi", label: "Power BI Dashboard", price: 20_000 },
  { id: "excel", label: "Advanced Excel Dashboard", price: 15_000 },
  { id: "n8n", label: "n8n FB Automation (150 posts)", price: 15_000 },
  { id: "branding", label: "Logo & Branding Pack", price: 5_000 },
] as const;

type AddOnId = typeof addOns[number]["id"];
type PlatformId = typeof platforms[number]["id"];

function Counter({
  value, onDec, onInc, min = 0,
}: { value: number; onDec: () => void; onInc: () => void; min?: number }) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={onDec}
        disabled={value <= min}
        className="w-8 h-8 rounded-full border border-accent/50 text-accent flex items-center justify-center hover:bg-accent hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
      >
        <Minus size={14} />
      </button>
      <span className="text-lg font-black text-white w-6 text-center">{value}</span>
      <button
        onClick={onInc}
        className="w-8 h-8 rounded-full border border-accent/50 text-accent flex items-center justify-center hover:bg-accent hover:text-black transition-all flex-shrink-0"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}

function fmt(n: number) {
  return `LKR ${n.toLocaleString("en-LK")}`;
}

export default function ServiceCalculator() {
  const [needsSMM, setNeedsSMM] = useState(false);
  const [selectedPlatforms, setSelectedPlatforms] = useState<Set<PlatformId>>(new Set());
  const [reels, setReels] = useState(0);
  const [posts, setPosts] = useState(0);
  const [thumbs, setThumbs] = useState(0);
  const [broll, setBroll] = useState(0);
  const [pages, setPages] = useState(0);
  const [selectedAddOns, setSelectedAddOns] = useState<Set<AddOnId>>(new Set());
  const [showBreakdown, setShowBreakdown] = useState(false);

  function togglePlatform(id: PlatformId) {
    setSelectedPlatforms((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function toggleAddOn(id: AddOnId) {
    setSelectedAddOns((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  /* ─── calculations ─── */
  const smmTotal = needsSMM ? selectedPlatforms.size * SMM_PRICE_PER_PLATFORM : 0;
  const reelTotal = reels * REEL_PRICE;
  const postTotal = posts * POST_PRICE;
  const thumbTotal = thumbs * THUMB_PRICE;
  const brollTotal = broll * BROLL_PRICE;
  const webTotal = pages === 0 ? 0 : WEB_BASE + Math.max(0, pages - 1) * WEB_EXTRA;
  const freeHosting = pages >= 5;
  const addOnTotal = addOns.reduce((s, a) => s + (selectedAddOns.has(a.id) ? a.price : 0), 0);
  const grandTotal = smmTotal + reelTotal + postTotal + thumbTotal + brollTotal + webTotal + addOnTotal;

  /* ─── WhatsApp message ─── */
  const platformList = Array.from(selectedPlatforms).map(p => platforms.find(pl => pl.id === p)?.label).join(", ");

  const servicesLines: string[] = [];
  if (reels > 0) servicesLines.push(`- ${reels} x Reels`);
  if (posts > 0) servicesLines.push(`- ${posts} x Static Posts`);
  if (thumbs > 0) servicesLines.push(`- ${thumbs} x YouTube Thumbnails`);
  if (broll > 0) servicesLines.push(`- ${broll} x B-roll / AI Videos`);
  if (pages > 0) servicesLines.push(`- Web Pages: ${pages}${freeHosting ? " (Incl. Free Hosting)" : ""}`);
  addOns.forEach(a => {
    if (selectedAddOns.has(a.id)) servicesLines.push(`- ${a.label}`);
  });

  const waMsg = `Hi Digihub Pro, I'd like a custom package:
---
MANAGEMENT:
- Platforms: ${needsSMM && selectedPlatforms.size > 0 ? platformList : "None"}
- Management Fee: ${fmt(smmTotal)}
---
SERVICES:
${servicesLines.length > 0 ? servicesLines.join("\n") : "- No additional services selected"}
---
ESTIMATED TOTAL: ${fmt(grandTotal)}
Please get back to me to start the project.`;

  const hasSelections = grandTotal > 0;

  return (
    <section className="px-6 py-20 border-t border-white/5 relative bg-black overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold mb-5">
            <Calculator size={14} /> Service Calculator
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            Custom <span className="text-accent underline decoration-accent/20 underline-offset-8">Package</span> Builder
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-base">
            Select your management needs and scale your services with real-time pricing.
          </p>
        </motion.div>

        <div className="space-y-12">

          {/* STEP 1: SMM Multiplier */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glassmorphism rounded-[32px] border border-white/10 p-8 md:p-10"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <Share2 className="text-accent" size={24} />
                  Social Media Management
                </h3>
                <p className="text-zinc-500 text-sm mt-1">Do you need full Social Media Management?</p>
              </div>

              <button
                onClick={() => setNeedsSMM(!needsSMM)}
                className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${needsSMM ? 'bg-accent' : 'bg-white/10'}`}
              >
                <motion.div
                  animate={{ x: needsSMM ? 34 : 4 }}
                  className="absolute top-1 w-6 h-6 rounded-full bg-white shadow-lg"
                />
              </button>
            </div>

            <AnimatePresence>
              {needsSMM && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-4">
                    {platforms.map((platform) => {
                      const isSelected = selectedPlatforms.has(platform.id);
                      return (
                        <button
                          key={platform.id}
                          onClick={() => togglePlatform(platform.id)}
                          className={`relative p-6 rounded-2xl border transition-all duration-500 flex flex-col items-center gap-3 group ${isSelected
                              ? "border-accent bg-accent/5 shadow-[0_0_20px_-5px_rgba(0,229,255,0.4)]"
                              : "border-white/5 bg-white/[0.02] hover:border-white/20"
                            }`}
                        >
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${isSelected ? "bg-accent text-black scale-110" : "bg-white/5 text-zinc-500 group-hover:text-white"
                            }`}>
                            {platform.icon}
                          </div>
                          <span className={`text-xs font-bold ${isSelected ? "text-white" : "text-zinc-500"}`}>
                            {platform.label}
                          </span>

                          {isSelected && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute top-2 right-2 w-5 h-5 bg-accent rounded-full flex items-center justify-center shadow-lg"
                            >
                              <CheckCircle2 size={12} className="text-black" />
                            </motion.div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-center text-[10px] text-zinc-600 mt-4 uppercase tracking-[0.1em]">
                    + {fmt(SMM_PRICE_PER_PLATFORM)} per platform / month
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* STEP 2: Service Counters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Reels */}
            <div className="glassmorphism rounded-3xl border border-white/10 p-6 flex flex-col justify-between gap-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-white text-base">Short Videos</p>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-wider font-medium mt-1">Reels / Shorts · {fmt(REEL_PRICE)}/ea</p>
                </div>
                {reels > 0 && <span className="text-accent font-black text-sm">{fmt(reelTotal)}</span>}
              </div>
              <Counter value={reels} onDec={() => setReels(Math.max(0, reels - 1))} onInc={() => setReels(reels + 1)} />
            </div>

            {/* Static Posts */}
            <div className="glassmorphism rounded-3xl border border-white/10 p-6 flex flex-col justify-between gap-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-white text-base">Static 1:1 Posts</p>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-wider font-medium mt-1">Creatives · {fmt(POST_PRICE)}/ea</p>
                </div>
                {posts > 0 && <span className="text-accent font-black text-sm">{fmt(postTotal)}</span>}
              </div>
              <Counter value={posts} onDec={() => setPosts(Math.max(0, posts - 1))} onInc={() => setPosts(posts + 1)} />
            </div>

            {/* Thumbnails */}
            <div className="glassmorphism rounded-3xl border border-white/10 p-6 flex flex-col justify-between gap-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-white text-base">YouTube Thumbnails</p>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-wider font-medium mt-1">Clickbait Designs · {fmt(THUMB_PRICE)}/ea</p>
                </div>
                {thumbs > 0 && <span className="text-accent font-black text-sm">{fmt(thumbTotal)}</span>}
              </div>
              <Counter value={thumbs} onDec={() => setThumbs(Math.max(0, thumbs - 1))} onInc={() => setThumbs(thumbs + 1)} />
            </div>

            {/* B-roll */}
            <div className="glassmorphism rounded-3xl border border-white/10 p-6 flex flex-col justify-between gap-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-white text-base">B-roll / AI Video</p>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-wider font-medium mt-1">5-8 Mins · {fmt(BROLL_PRICE)}/ea</p>
                </div>
                {broll > 0 && <span className="text-accent font-black text-sm">{fmt(brollTotal)}</span>}
              </div>
              <Counter value={broll} onDec={() => setBroll(Math.max(0, broll - 1))} onInc={() => setBroll(broll + 1)} />
            </div>

            {/* Web Dev */}
            <div className={`md:col-span-2 glassmorphism rounded-3xl border p-6 transition-all duration-500 ${freeHosting ? "border-accent bg-accent/5 shadow-[0_0_30px_-10px_rgba(0,229,255,0.3)]" : "border-white/10"}`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3">
                    <p className="font-bold text-white text-base">Web Development</p>
                    {freeHosting && (
                      <span className="px-2 py-0.5 bg-accent text-[9px] text-black font-black rounded uppercase tracking-tighter">Bonus: Free Hosting & Free Domain</span>
                    )}
                  </div>
                  <p className="text-zinc-500 text-[10px] uppercase tracking-wider font-medium mt-1">
                    {fmt(WEB_BASE)} (1st Page) + {fmt(WEB_EXTRA)} / Extra Page
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  {pages > 0 && <span className="text-accent font-black text-lg">{fmt(webTotal)}</span>}
                  <Counter value={pages} onDec={() => setPages(Math.max(0, pages - 1))} onInc={() => setPages(pages + 1)} />
                </div>
              </div>
            </div>
          </div>

          {/* Add-ons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {addOns.map((addon) => {
              const isOn = selectedAddOns.has(addon.id);
              return (
                <button
                  key={addon.id}
                  onClick={() => toggleAddOn(addon.id)}
                  className={`text-center p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center gap-2 ${isOn
                      ? "border-accent bg-accent text-black scale-[1.02]"
                      : "border-white/5 bg-white/[0.03] text-zinc-500 hover:border-white/20"
                    }`}
                >
                  <p className="font-bold text-[10px] leading-tight uppercase tracking-tighter">{addon.label}</p>
                  <p className={`text-[9px] font-black ${isOn ? "text-black/60" : "text-zinc-600"}`}>{fmt(addon.price)}</p>
                </button>
              );
            })}
          </div>

          <p className="text-center text-[10px] text-zinc-600 pt-8 uppercase tracking-[0.2em] mb-20">
            Final inquiry confirms availability & exact timeline.
          </p>
        </div>
      </div>

      {/* STEP 3: Floating Total Bar */}
      <div className="fixed bottom-8 left-0 right-0 z-50 px-6">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: hasSelections ? 0 : 150 }}
          className="max-w-xl mx-auto glassmorphism border border-accent/30 rounded-3xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),0_10px_30px_-10px_rgba(0,229,255,0.2)] p-4 md:p-5 flex items-center justify-between gap-4"
        >
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest leading-none">Total Investment</span>
              <button
                onClick={() => setShowBreakdown(!showBreakdown)}
                className="text-accent/50 hover:text-accent transition-colors"
                title="View Breakdown"
              >
                <Info size={12} />
              </button>
            </div>
            <motion.p
              key={grandTotal}
              initial={{ scale: 1.1, color: "#fff" }}
              animate={{ scale: 1, color: "#00E5FF" }}
              className="text-xl md:text-2xl font-black tabular-nums"
            >
              {fmt(grandTotal)}
            </motion.p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/94764682362?text=${encodeURIComponent(waMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-black px-6 py-3 rounded-2xl font-black text-sm flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)]"
            >
              <MessageSquare size={16} /> <span className="hidden sm:inline">Get Quote</span>
            </a>
          </div>

          {/* Breakdown Tooltip */}
          <AnimatePresence>
            {showBreakdown && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: -20, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute bottom-full mb-4 left-0 right-0 bg-zinc-900 border border-white/10 p-6 rounded-[24px] shadow-2xl z-40 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-accent/20" />
                <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-[0.2em] text-accent">Price Breakdown</h4>
                <div className="space-y-2.5">
                  {needsSMM && selectedPlatforms.size > 0 && (
                    <div className="flex justify-between text-xs">
                      <span className="text-zinc-500">Management ({selectedPlatforms.size} Platforms)</span>
                      <span className="text-white font-bold tabular-nums">{fmt(smmTotal)}</span>
                    </div>
                  )}
                  {reels > 0 && (
                    <div className="flex justify-between text-xs">
                      <span className="text-zinc-500">{reels} x Reels</span>
                      <span className="text-white font-bold tabular-nums">{fmt(reelTotal)}</span>
                    </div>
                  )}
                  {posts > 0 && (
                    <div className="flex justify-between text-xs">
                      <span className="text-zinc-500">{posts} x Static Posts</span>
                      <span className="text-white font-bold tabular-nums">{fmt(postTotal)}</span>
                    </div>
                  )}
                  {thumbs > 0 && (
                    <div className="flex justify-between text-xs">
                      <span className="text-zinc-500">{thumbs} x YT Thumbnails</span>
                      <span className="text-white font-bold tabular-nums">{fmt(thumbTotal)}</span>
                    </div>
                  )}
                  {broll > 0 && (
                    <div className="flex justify-between text-xs">
                      <span className="text-zinc-500">{broll} x B-roll Video</span>
                      <span className="text-white font-bold tabular-nums">{fmt(brollTotal)}</span>
                    </div>
                  )}
                  {pages > 0 && (
                    <div className="flex justify-between text-xs">
                      <span className="text-zinc-500">Web Dev ({pages} Pages)</span>
                      <span className="text-white font-bold tabular-nums">{fmt(webTotal)}</span>
                    </div>
                  )}
                  {addOns.map(a => selectedAddOns.has(a.id) && (
                    <div key={a.id} className="flex justify-between text-xs">
                      <span className="text-zinc-500">{a.label}</span>
                      <span className="text-white font-bold tabular-nums">{fmt(a.price)}</span>
                    </div>
                  ))}
                  <div className="border-t border-white/5 pt-3 mt-1 flex justify-between text-sm font-black text-accent uppercase tracking-widest">
                    <span>Total</span>
                    <span className="tabular-nums">{fmt(grandTotal)}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

    </section>
  );
}
