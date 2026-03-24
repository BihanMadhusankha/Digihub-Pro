"use client";

import { motion } from "framer-motion";
import { MessageSquare, Mail, Youtube, Facebook, Linkedin, ArrowRight, TrendingUp, Target, Zap, Globe, MapPin, Calculator } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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

/* ════════════════════════════════════════
   CONTACT PAGE
 ════════════════════════════════════════ */
export default function Contact() {
  return (
    <main className="relative overflow-hidden bg-black selection:bg-accent/30 selection:text-white">
      {/* Ambient background glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/5 rounded-full blur-[160px] -z-10 pointer-events-none" />

      {/* ════════ HERO SECTION ════════ */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Contact Gateway Image - Subtle background integration */}
        <div className="absolute right-0 top-0 w-full h-full lg:w-1/2 z-0 opacity-40 lg:opacity-75 pointer-events-none">
          <Image
            src="/images/contact-gateway.png"
            alt="Digital Gateway"
            fill
            className="object-cover lg:object-contain object-right"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center relative z-10">
          <motion.div initial="hidden" animate="visible" className="flex flex-col gap-8">
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-widest self-start">
              <Zap size={13} fill="currentColor" /> Direct Access to Growth
            </motion.div>

            <motion.h1 variants={fadeUp} custom={1} className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
              Stop Dreaming. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
                Start Dominating.
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} custom={2} className="text-zinc-400 text-lg md:text-xl max-w-xl leading-relaxed">
              Connect with the Digihub Pro team to discuss high-stakes ROI, data intelligence, and massive network exposure.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ════════ CONTACT METHODS ════════ */}
      <section className="pb-32 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Primary CTA: WhatsApp */}
          <motion.a
            href="https://wa.me/94764682362"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[2.5rem] border border-accent/30 bg-accent/5 p-10 transition-all hover:bg-accent/10 flex flex-col items-center text-center shadow-[0_0_50px_-20px_rgba(0,229,255,0.4)]"
          >
            <div className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center text-black mb-8 rotate-3 group-hover:rotate-0 transition-all duration-500 shadow-lg shadow-accent/20">
              <MessageSquare size={32} />
            </div>
            <h3 className="text-3xl font-black text-white mb-3">Chat on WhatsApp</h3>
            <p className="text-zinc-400 text-sm mb-8 max-w-xs leading-relaxed">The fastest gateway to your scaling journey. Response within minutes.</p>
            <div className="flex items-center gap-3 px-6 py-3 bg-accent/20 rounded-full text-accent font-black text-xs uppercase tracking-[0.2em] group-hover:bg-accent group-hover:text-black transition-all">
              Start Chat Now <ArrowRight size={16} />
            </div>
          </motion.a>

          {/* Secondary CTA: Email */}
          <motion.a
            href="mailto:contact@digihubpro.com"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 transition-all hover:bg-white/[0.05] flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-8 -rotate-3 group-hover:rotate-0 transition-all duration-500 border border-white/10 shadow-xl">
              <Mail size={32} />
            </div>
            <h3 className="text-3xl font-black text-white mb-3">Formal Inquiry</h3>
            <p className="text-zinc-400 text-sm mb-8 max-w-xs leading-relaxed">For strategic partnerships, institutional inquiries, and formal documentation.</p>
            <div className="text-white font-black text-sm tracking-tight border-b-2 border-accent pb-1 group-hover:text-accent transition-colors">contact@digihubpro.com</div>
          </motion.a>

        </div>
      </section>

      {/* ════════ STRATEGY SESSION ════════ */}
      <section className="py-32 px-6 border-t border-white/5 bg-zinc-950/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 opacity-[0.02] -z-10" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-20 items-center">

          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-[0.3em]">
              Executive Consultation
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">
              Book Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Strategy Session.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-lg">
              We move beyond basic design. We engineer <strong className="text-white">ROI</strong>,
              <strong className="text-white">Data Intelligence</strong>, and <strong className="text-white">Global Scale</strong>.
              Let&apos;s map out your dominance.
            </p>

            <div className="grid sm:grid-cols-3 gap-8 pt-6">
              {[
                { icon: <TrendingUp size={24} />, label: "ROI Focus", desc: "Measurable gains" },
                { icon: <Target size={24} />, label: "Data Driven", desc: "Zero guesswork" },
                { icon: <Zap size={24} />, label: "Scale Fast", desc: "Network power" },
              ].map((item, i) => (
                <motion.div key={item.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="space-y-3">
                  <div className="text-accent">{item.icon}</div>
                  <p className="text-white font-black text-base tracking-tight">{item.label}</p>
                  <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative group">
            {/* Visual Backplate */}
            <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full scale-75 opacity-20 -z-10 group-hover:opacity-40 transition-opacity duration-700" />

            <div className="relative glassmorphism rounded-[3rem] border border-white/10 p-10 md:p-14 overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.01]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -z-10 opacity-30" />

              {/* Strategy Image integration */}
              <div className="relative z-10 flex flex-col gap-8">
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 group-hover:border-accent/30 transition-colors mb-4">
                  <Image src="/images/strategy-session.png" alt="Strategy Session" fill className="object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>

                <div className="flex -space-x-3">
                  {[1, 2, 3, 4, 1].map((n, i) => (
                    <div key={i} className={`w-12 h-12 rounded-full border-4 border-black bg-zinc-900 overflow-hidden relative`}>
                      <Image src={`/images/bihan-${i + 1}.png`} alt="Client" fill className="object-cover opacity-80" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full bg-accent text-black flex items-center justify-center text-xs font-black border-4 border-black shadow-lg">
                    +100
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight">Join 100+ Brands Dominating the Digital Space.</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-md">
                    Digihub Pro engineers high-performance digital infrastructure &amp; influencer network strategy tailored for the global market.
                  </p>
                </div>

                <div className="h-[1px] bg-white/10 w-full" />

                <Link href="/services#calculator" className="flex items-center justify-center gap-3 py-5 bg-white text-black rounded-[1.5rem] font-black text-sm hover:bg-accent transition-all group active:scale-95">
                  <Calculator size={18} /> Build Your Growth Package <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ════════ SOCIAL & LOCATION ════════ */}
      <section className="py-24 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">

          <div className="space-y-8">
            <h3 className="text-xs font-black text-zinc-500 uppercase tracking-[0.3em]">Social Connectivity</h3>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <Facebook size={20} />, label: "Agency FB", href: "https://facebook.com/digihubpro" },
                { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://linkedin.com/company/digihubpro" },
              ].map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-sm hover:border-accent hover:text-accent transition-all">
                  {social.icon} {social.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8 md:text-right">
            <h3 className="text-xs font-black text-zinc-500 uppercase tracking-[0.3em]">Global Operations</h3>
            <div className="flex items-center md:justify-end gap-3 text-white font-bold">
              <MapPin size={22} className="text-accent" />
              <span className="text-lg">Colombo, Sri Lanka</span>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs md:ml-auto leading-relaxed italic">
              &quot;Operating from Colombo, Sri Lanka | Serving the Global Digital Economy.&quot;
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}

