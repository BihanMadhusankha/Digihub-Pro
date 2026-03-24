"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, MessageSquare, Gift, Calculator, Pin, Users, Info } from "lucide-react";
import { FBPage, corePages, nichePages } from "@/app/ecosystem/page";
import Image from "next/image";

/* ─── constants ─── */
const PIN_OPTIONS = [
  { id: "none", label: "Standard (No Pin)", price: 0, duration: "No Pin" },
  { id: "24h",  label: "Pin 24 Hours",     price: 1500, duration: "24 Hours" },
  { id: "3d",   label: "Pin 3 Days",       price: 4000, duration: "3 Days" },
  { id: "7d",   label: "Pin 7 Days",       price: 8000, duration: "7 Days" },
] as const;

const BULK_DISCOUNT_THRESHOLD = 5;
const BULK_DISCOUNT_PERCENT = 0.15;

function fmt(n: number) {
  return `LKR ${n.toLocaleString("en-LK")}`;
}

export default function AdCalculator() {
  const [selectedPages, setSelectedPages] = useState<Set<string>>(new Set());
  const [pinId, setPinId] = useState<typeof PIN_OPTIONS[number]["id"]>("none");

  const allAvailablePages = [...corePages, ...nichePages];
  const selectedPageDatas = allAvailablePages.filter(p => selectedPages.has(p.name));
  
  const selectedPin = PIN_OPTIONS.find(o => o.id === pinId)!;

  /* ─── calculations ─── */
  const basePriceTotal = selectedPageDatas.reduce((sum, p) => sum + p.basePrice, 0);
  const pinningFeesTotal = selectedPageDatas.length * selectedPin.price;
  const subtotal = basePriceTotal + pinningFeesTotal;
  
  const isBulkDiscount = selectedPages.size >= BULK_DISCOUNT_THRESHOLD;
  const discountAmount = isBulkDiscount ? subtotal * BULK_DISCOUNT_PERCENT : 0;
  const finalTotal = subtotal - discountAmount;

  const totalFollowers = selectedPageDatas.reduce((sum, p) => {
    const f = parseInt(p.followers.replace(/[^0-9]/g, "")) || 0;
    return sum + (p.followers.includes("k") ? f * 1000 : p.followers.includes("M") ? f * 1000000 : f);
  }, 0);

  function togglePage(name: string) {
    setSelectedPages(prev => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  }

  /* ─── WhatsApp message ─── */
  const pageList = selectedPageDatas.map(p => p.name).join(", ");
  const waMsg = `Hi Digihub Pro Team, I want to dominate your network with an ad!
- Selected Pages: [${pageList}]
- Pinning Duration: [${selectedPin.duration}]
---
Total Reach: [${(totalFollowers / 1000000).toFixed(2)}M+ Followers]
Bonus Applied: [${isBulkDiscount ? "15% Bulk Discount" : "None"}]
FINAL TOTAL: ${fmt(finalTotal)}
Please confirm the slot availability.`;

  const hasSelections = selectedPages.size > 0;

  return (
    <section id="ad-calculator" className="px-6 py-20 border-t border-white/5 relative bg-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold mb-5 uppercase tracking-widest">
            <Calculator size={14} /> Ad Price Calculator
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Plan Your <span className="text-accent">Campaign</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base leading-relaxed">
            Select your target pages, choose pinning options, and see your high-impact reach instantly. 
            <span className="text-white font-semibold"> 15% Network Dominance discount</span> applied for 5+ pages.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-start">
          
          {/* ── LEFT: Selection ── */}
          <div className="space-y-10">
            
            {/* 1. Page Selection */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Users size={18} className="text-accent" />
                <h3 className="text-lg font-black text-white">Select Your Pages</h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {allAvailablePages.map((page) => {
                  const isSelected = selectedPages.has(page.name);
                  return (
                    <motion.button
                      key={page.name}
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => togglePage(page.name)}
                      className={`relative flex flex-col items-center p-4 rounded-2xl border transition-all duration-300 ${
                        isSelected 
                          ? "border-accent bg-accent/5 ring-1 ring-accent/30 shadow-[0_0_30px_-10px_rgba(0,229,255,0.4)]" 
                          : "border-white/10 bg-white/[0.03] hover:border-white/20"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full mb-3 bg-gradient-to-br ${page.color} flex items-center justify-center border-2 ${isSelected ? "border-accent" : "border-white/10"}`}>
                        {page.logo ? (
                          <Image src={page.logo} alt={page.name} width={48} height={48} className="rounded-full object-cover" />
                        ) : (
                          <span className="text-white text-xs font-bold">{page.name.slice(0, 2)}</span>
                        )}
                      </div>
                      <p className={`text-[10px] font-black leading-tight text-center ${isSelected ? "text-accent" : "text-white"}`}>
                        {page.name}
                      </p>
                      <p className="text-[10px] text-zinc-500 font-bold mt-1">{page.followers}</p>
                      
                      {isSelected && (
                        <div className="absolute top-2 right-2 text-accent">
                          <CheckCircle2 size={14} fill="currentColor" className="text-black" />
                        </div>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* 2. Pinning Options */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Pin size={18} className="text-accent" />
                <h3 className="text-lg font-black text-white">Pinning Duration <span className="text-xs font-normal text-zinc-500 ml-2">(Optional boost)</span></h3>
              </div>
              
              <div className="grid sm:grid-cols-4 gap-3">
                {PIN_OPTIONS.map((opt) => {
                  const isActive = pinId === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setPinId(opt.id)}
                      className={`flex flex-col p-4 rounded-xl border text-left transition-all duration-300 ${
                        isActive 
                          ? "border-accent bg-accent/10 shadow-[0_0_20px_rgba(0,229,255,0.2)]" 
                          : "border-white/10 bg-white/[0.02] hover:border-white/20"
                      }`}
                    >
                      <span className={`text-[10px] font-black uppercase tracking-wider mb-1 ${isActive ? "text-accent" : "text-zinc-500"}`}>
                        {opt.label}
                      </span>
                      <span className="text-white font-bold text-sm">
                        {opt.price === 0 ? "Default Post" : `+ ${fmt(opt.price)}`}
                      </span>
                      {opt.price > 0 && <span className="text-[10px] text-zinc-600 mt-1">per selected page</span>}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* ── RIGHT: Live Summary Bar ── */}
          <div className="lg:sticky lg:top-24 space-y-6">
            <motion.div 
              layout
              className="glassmorphism rounded-3xl border border-white/10 p-8 shadow-2xl relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10" />
              
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">Live Breakdown</h4>
                <div className="flex items-center gap-1 text-[10px] text-zinc-600">
                  <Info size={10} /> Real-time rates
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <p className="text-xs text-zinc-500 font-bold mb-1">Total Reach</p>
                  <p className="text-xl font-black text-white">{(totalFollowers / 1000000).toFixed(2)}M+</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                  <p className="text-xs text-zinc-500 font-bold mb-1">Pages</p>
                  <p className="text-xl font-black text-white">{selectedPages.size}</p>
                </div>
              </div>

              {/* Line Items */}
              <div className="space-y-4 mb-8 border-b border-white/5 pb-8 min-h-[100px]">
                {selectedPageDatas.length === 0 && (
                  <p className="text-zinc-600 text-sm italic text-center py-4">Click pages above to calculate reach…</p>
                )}
                
                {selectedPageDatas.length > 0 && (
                  <>
                    <div className="flex justify-between text-sm">
                      <span className="text-zinc-400">Base Ad Placement</span>
                      <span className="text-white font-bold">{fmt(basePriceTotal)}</span>
                    </div>
                    {pinId !== "none" && (
                      <div className="flex justify-between text-sm">
                        <span className="text-zinc-400">Pin Duration ({selectedPin.duration})</span>
                        <span className="text-white font-bold">{fmt(pinningFeesTotal)}</span>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Bonus Badge */}
              <AnimatePresence>
                {isBulkDiscount && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    className="mb-6 p-4 rounded-2xl bg-accent/10 border border-accent/30 flex items-center gap-3 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-accent/5 animate-pulse" />
                    <Gift size={20} className="text-accent relative z-10" />
                    <div className="relative z-10">
                      <p className="text-accent font-black text-xs uppercase tracking-wider">Bonus Applied!</p>
                      <p className="text-white font-bold text-sm">15% Network Dominance Discount</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Final Total */}
              <div className="space-y-4">
                {isBulkDiscount && (
                   <div className="flex justify-between text-sm">
                    <span className="text-zinc-500">Savings</span>
                    <span className="text-emerald-400 font-bold">- {fmt(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <span className="text-sm font-black text-zinc-400 uppercase tracking-widest">Final Payable</span>
                  <motion.span 
                    key={finalTotal}
                    initial={{ scale: 1.1, color: "#00E5FF" }}
                    animate={{ scale: 1, color: "#00E5FF" }}
                    className="text-3xl font-black text-accent"
                  >
                    {fmt(finalTotal)}
                  </motion.span>
                </div>
              </div>

              {/* CTA */}
              <a
                href={hasSelections ? `https://wa.me/94764682362?text=${encodeURIComponent(waMsg)}` : "#"}
                onClick={(e) => !hasSelections && e.preventDefault()}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 w-full flex items-center justify-center gap-3 py-5 rounded-2xl font-black text-sm transition-all shadow-xl ${
                  hasSelections 
                    ? "bg-accent text-black hover:scale-105 active:scale-95 shadow-accent/20 cursor-pointer" 
                    : "bg-white/5 text-zinc-700 cursor-not-allowed border border-white/5"
                }`}
              >
                <MessageSquare size={18} />
                {hasSelections ? "Book This Ad Slot" : "Select Pages First"}
              </a>
            </motion.div>

            <p className="text-[10px] text-zinc-600 text-center leading-relaxed">
              Price includes design optimization & targeting advisory. <br/>
              Standard delivery: within 24-48 hours.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
