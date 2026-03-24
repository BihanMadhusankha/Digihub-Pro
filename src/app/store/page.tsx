"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingBag, 
  Zap, 
  Star, 
  Download, 
  Users, 
  MessageSquare, 
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Gift,
  X,
  CreditCard,
  Receipt
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/* ════════════════════════════════════════
   ANIMATION VARIANTS
   ════════════════════════════════════════ */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const }
  })
} as any;

/* ════════════════════════════════════════
   DATA: STORE CATEGORIES
   ════════════════════════════════════════ */
const storeCategories = [
  {
    title: "Premium Subscriptions",
    icon: <ShieldCheck className="text-accent" size={24} />,
    description: "Legal, stable, and high-performance premium accounts.",
    items: [
      { name: "Canva Pro", price: "LKR 1,500/Year", value: 1500, badge: "Hot" },
      { name: "CapCut Desktop Pro", price: "LKR 2,000/Year", value: 2000 },
      { name: "Filmora 13 Full", price: "LKR 3,000", value: 3000 },
      { name: "ChatGPT Plus (Shared)", price: "LKR 2,500/Mo", value: 2500 },
      { name: "Grok AI Access", price: "LKR 1,500/Mo", value: 1500 },
    ]
  },
  {
    title: "Design & Content Bundles",
    icon: <Gift className="text-accent" size={24} />,
    description: "Kickstart your creativity with massive asset packs.",
    items: [
      { name: "Viral Reel Bundles (2000+)", price: "LKR 5,000", value: 5000, badge: "Best Value" },
      { name: "50+ Flyer Templates", price: "LKR 2,500", value: 2500 },
      { name: "500+ Premium E-books", price: "LKR 3,000", value: 3000 },
      { name: "Motion Graphic Pack", price: "LKR 4,500", value: 4500 },
    ]
  },
  {
    title: "Growth & Leads",
    icon: <Users className="text-accent" size={24} />,
    description: "Instantly access massive organic network channels.",
    items: [
      { name: "20k Telegram/FB Groups", price: "LKR 8,000", value: 8000, badge: "Dominance" },
      { name: "5,000 WhatsApp Groups", price: "LKR 6,000", value: 6000 },
      { name: "Targeted Email List (SL)", price: "LKR 10,000", value: 10000 },
      { name: "B2B Lead Generation Pack", price: "LKR 15,000", value: 15000 },
    ]
  },
  {
    title: "Marketing & Reputation",
    icon: <Star className="text-accent" size={24} />,
    description: "Build authority and trust in minutes.",
    items: [
      { name: "GMB Account Reviews (50)", price: "LKR 10,000", value: 10000, badge: "ROI" },
      { name: "FB Page Real Reviews", price: "LKR 5,000", value: 5000 },
      { name: "SMM Panel Access (VIP)", price: "FREE with Order", value: 0 },
      { name: "Google Map SEO Pack", price: "LKR 12,000", value: 12000 },
    ]
  }
];

export default function Store() {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const whatsappUrlBase = "https://wa.me/94764682362";

  const toggleItem = (name: string) => {
    const next = new Set(selectedItems);
    if (next.has(name)) next.delete(name);
    else next.add(name);
    setSelectedItems(next);
  };

  const selectedList = useMemo(() => {
    return storeCategories.flatMap(c => c.items).filter(i => selectedItems.has(i.name));
  }, [selectedItems]);

  const totalBill = selectedList.reduce((sum, i) => sum + i.value, 0);

  const generateWhatsAppMsg = () => {
    if (selectedList.length === 0) return "";
    
    let msg = `Hi Digihub Pro Team, I want to order the following digital assets:\n\n`;
    selectedList.forEach((item, idx) => {
      msg += `${idx + 1}. ${item.name} - ${item.price}\n`;
    });
    msg += `\n--- BILL SUMMARY ---\n`;
    msg += `Total Items: ${selectedList.length}\n`;
    msg += `TOTAL PAYABLE: LKR ${totalBill.toLocaleString("en-LK")}\n\n`;
    msg += `Please confirm the order details.`;
    
    return encodeURIComponent(msg);
  };

  return (
    <main className="bg-black text-white min-h-screen selection:bg-accent/30 selection:text-white pb-40">
      {/* ════════ HERO SECTION ════════ */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute top-0 right-0 w-full h-full lg:w-3/4 z-0 opacity-40 lg:opacity-75 pointer-events-none">
          <Image 
            src="/images/store-hero.png" 
            alt="Digital Assets" 
            fill 
            className="object-contain object-right"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
              <ShoppingBag size={14} /> Digihub Pro Custom Store
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              Select Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Digital Assets.</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="text-zinc-400 text-xl md:text-2xl leading-relaxed">
              Tinker with your toolkit. Select the assets you need, calculate your total instantly, and checkout via WhatsApp.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ════════ PRODUCT GRID ════════ */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
          {storeCategories.map((category, idx) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glassmorphism rounded-[3rem] border border-white/5 p-8 md:p-12"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-accent/10 border border-accent/20 text-accent">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-black text-white tracking-tight">{category.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{category.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                {category.items.map((item) => {
                  const isSelected = selectedItems.has(item.name);
                  return (
                    <motion.button
                      key={item.name}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleItem(item.name)}
                      className={`w-full flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 text-left ${
                        isSelected 
                          ? "border-accent bg-accent/10 shadow-[0_0_20px_rgba(0,229,255,0.15)]" 
                          : "border-white/5 bg-white/[0.02] hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                          isSelected ? "bg-accent border-accent" : "border-white/20"
                        }`}>
                          {isSelected && <CheckCircle2 size={14} className="text-black" />}
                        </div>
                        <div className="flex flex-col">
                          <span className={`font-black text-sm ${isSelected ? "text-white" : "text-zinc-300"}`}>{item.name}</span>
                          {item.badge && <span className="text-accent text-[8px] font-black uppercase tracking-widest">{item.badge}</span>}
                        </div>
                      </div>
                      <span className={`font-bold text-xs ${isSelected ? "text-accent" : "text-zinc-500"}`}>{item.price}</span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════ STICKY CHECKOUT BAR ════════ */}
      <AnimatePresence>
        {selectedItems.size > 0 && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-10 left-6 right-6 z-50 pointer-events-none"
          >
            <div className="max-w-4xl mx-auto glassmorphism border border-accent/30 rounded-[2.5rem] p-6 md:p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] pointer-events-auto flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-accent/5 -z-10 animate-pulse" />
              
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent">
                  <Receipt size={30} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded-md bg-accent text-black text-[10px] font-black uppercase">Live Bill</span>
                    <span className="text-zinc-500 text-xs font-bold">{selectedItems.size} Items Selected</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-white leading-none">LKR {totalBill.toLocaleString("en-LK")}</span>
                    <span className="text-zinc-600 text-xs font-bold uppercase tracking-widest">Total</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 w-full md:w-auto">
                <button 
                  onClick={() => setSelectedItems(new Set())}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all"
                >
                  <X size={20} />
                </button>
                <a 
                  href={`${whatsappUrlBase}?text=${generateWhatsAppMsg()}`}
                  target="_blank"
                  className="flex-1 md:flex-none flex items-center justify-center gap-3 px-10 py-5 bg-accent text-black font-black text-lg rounded-2xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,229,255,0.4)]"
                >
                  Confirm Order & WhatsApp <MessageSquare size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ════════ FLOATING WHATSAPP CTA ════════ */}
      {!selectedItems.size && (
        <motion.a 
          href={whatsappUrlBase}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-10 right-10 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-black shadow-2xl z-50 shadow-accent/20 cursor-pointer"
        >
          <MessageSquare size={28} />
        </motion.a>
      )}

    </main>
  );
}
