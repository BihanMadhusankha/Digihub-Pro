"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Globe, BarChart3, Share2, MessageSquare, ArrowRight,
  Lightbulb, Target, Zap, TrendingUp, Building2
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const services = [
  {
    icon: <Globe size={28} className="text-accent" />,
    title: "High-Performance Web Architecture",
    badge: "Conversion-Focused",
    description:
      "We don't just build websites; we engineer high-speed digital assets. Leveraging Next.js and React, we create SEO-optimised, mobile-first platforms designed to turn your organic traffic into high-value leads and sales.",
    points: [
      "Next.js 15 & React Server Components",
      "Free Domain & Premium Hosting (1 Year)",
      "Advanced SEO & Core Web Vitals Mastery",
      "Tailwind CSS & Framer Motion UI/UX",
    ],
    image: "/images/web-architecture.png", // ඔයාගේ හොඳම project එකක් නිසා මේකම තියන්න.
  },
  {
    icon: <BarChart3 size={28} className="text-accent" />,
    title: "Enterprise Data Intelligence",
    badge: "Strategic ROI",
    description:
      "We transform fragmented business data into actionable growth strategies. Born from real-world expertise in large-scale retail coordination, our Power BI ecosystems empower leadership to track sales performance, optimize inventory, and maximize ROI with surgical precision.",
    points: [
      "Custom Power BI Analytics Ecosystems",
      "Real-time Retail & Inventory KPIs",
      "Automated Financial & Performance Reporting",
      "Strategic Business Intelligence (BI) Consulting",
    ],
    image: "/images/power-bi-analysis.png", // මෙතනට පට්ට Dashboard එකක conceptual image එකක් ජෙනරේට් කරලා දාමු.
  },
  {
    icon: <Share2 size={28} className="text-accent" />,
    title: "Omnichannel Social Dominance",
    badge: "3.5M+ Reach Powered",
    description:
      "We don't just post content; we build digital authority. Leveraging our massive 25+ channel ecosystem and a 3.5M+ aggregate reach, we engineer viral growth and consistent brand presence across Facebook, YouTube, and TikTok to dominate your niche.",
    points: [
      "Strategic Content Mapping & Viral Scripting",
      "Cross-Platform Synchronization (FB, YT, TikTok)",
      "Advanced Audience Growth & Retargeting",
      "Performance Analytics & Engagement ROI",
    ],
    image: "/images/social-dominance.png", // මේක ඔයාගේ පරණ සාර්ථක project එකක් නිසා ඒ විදිහටම තියන්න.
  },
];

const howWeWork = [
  { step: "01", icon: <Lightbulb size={20} className="text-accent" />, title: "Discovery", desc: "Understanding your goals, audience, and current digital position through a free consultation." },
  { step: "02", icon: <Target size={20} className="text-accent" />, title: "Strategy", desc: "Custom roadmap with timelines, platform choices, content calendar, and KPI targets." },
  { step: "03", icon: <Zap size={20} className="text-accent" />, title: "Execution", desc: "Building, publishing, and launching across channels with precision-crafted content." },
  { step: "04", icon: <TrendingUp size={20} className="text-accent" />, title: "Optimisation", desc: "Monthly analytics review — doubling down on what works, eliminating what doesn't." },
];

const brands = [
  { name: "THILINA BORALASSA", logo: "/images/THILINA BORALASSA.jpeg" },
  { name: "SPARTA", logo: "/images/SPARTA.png" },
  { name: "DUMITH BANDARA", logo: "images/DUMITH BANDARA.jpg" },
  { name: "SASIP", logo: "/images/SASIP.png" },
  { name: "RNG ADVERTISING", logo: "/images/rng-advertising.jpeg" },
];

export default function Services() {
  return (
    <main className="relative overflow-hidden">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-accent/5 rounded-full blur-[160px] -z-10 pointer-events-none" />

      {/* ── Hero ── */}
      <section className="min-h-[50vh] flex items-center justify-center px-6 py-28 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto flex flex-col items-center gap-6"
        >
          <motion.p variants={fadeUp} custom={0} className="text-accent text-xs font-bold uppercase tracking-[0.25em]">
            Technical Expertise
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
            Expert Solutions for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
              Digital Growth.
            </span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            We bridge Sales & Marketing coordination with IT expertise from the University of Moratuwa — building systems that engineer digital dominance for real businesses.
          </motion.p>
          <motion.div variants={fadeUp} custom={3} className="flex gap-4 flex-wrap justify-center">
            <Link
              href="/pricing"
              className="px-8 py-4 bg-accent text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,229,255,0.35)] flex items-center gap-2"
            >
              View Our Packages <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/94764682362?text=Hi%20Digihub%20Pro%20Team,%20I%20want%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:border-accent hover:text-accent transition-all flex items-center gap-2"
            >
              <MessageSquare size={18} /> Consult with the Team
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── 3 Core Services ── */}
      <section className="px-6 pb-28 border-t border-white/5 pt-20">
        <div className="max-w-7xl mx-auto space-y-20">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-2/5 relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/20 to-transparent blur-2xl scale-110 -z-10" />
                <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/3]">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* Text */}
              <div className="w-full md:w-3/5 flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center">
                    {svc.icon}
                  </div>
                  <span className="px-3 py-1 text-xs font-bold bg-accent/10 border border-accent/20 text-accent rounded-full">{svc.badge}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white">{svc.title}</h2>
                <p className="text-zinc-400 leading-relaxed">{svc.description}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {svc.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-zinc-300">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link href="/pricing" className="inline-flex items-center gap-2 text-accent text-sm font-bold hover:underline underline-offset-4 mt-1">
                  See pricing for this service <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── How We Work ── */}
      <section className="px-6 py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">Our Process</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">How We <span className="text-accent">Work</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWeWork.map((step, i) => (
              <motion.div
                key={step.step}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group glassmorphism rounded-3xl border border-white/10 hover:border-accent/40 p-7 flex flex-col gap-4 relative overflow-hidden transition-all duration-300"
              >
                <div className="absolute top-4 right-5 text-5xl font-black text-white/[0.04] select-none">{step.step}</div>
                <div className="w-11 h-11 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-lg font-black text-white group-hover:text-accent transition-colors">{step.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand Social Proof ── */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs text-zinc-500 uppercase tracking-[0.25em] font-semibold mb-3">Social Proof</p>
          <h2 className="text-2xl md:text-3xl font-black mb-10">Brands We've <span className="text-accent">Empowered</span></h2>
          <div className="flex flex-wrap justify-center gap-8">
            {brands.map((brand, i) => (
              <motion.div
                key={brand.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group flex flex-col items-center gap-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 group-hover:border-accent/40 group-hover:shadow-[0_0_20px_-5px_rgba(0,229,255,0.3)] flex items-center justify-center overflow-hidden [filter:grayscale(1)] group-hover:[filter:none] transition-all duration-500">
                  <Image src={brand.logo} alt={brand.name} width={64} height={64} className="object-contain w-full h-full p-2"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; const fb = e.currentTarget.nextSibling as HTMLElement | null; if (fb) fb.style.display = "flex"; }} />
                  <span className="hidden w-full h-full items-center justify-center text-zinc-600"><Building2 size={22} /></span>
                </div>
                <span className="text-[10px] text-zinc-600 group-hover:text-zinc-300 transition-colors font-medium">{brand.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 py-24 border-t border-white/5">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glassmorphism rounded-3xl border border-white/10 p-10 md:p-16 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden"
        >
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -z-10" />
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-black mb-4 leading-tight">
              Ready to Select Your <span className="text-accent">Package?</span>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              View our transparent pricing plans for Tutors, Professionals, and Business Owners.
            </p>
          </div>
          <Link
            href="/pricing"
            className="flex-shrink-0 flex items-center gap-3 px-10 py-5 bg-accent text-black font-black text-base rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(0,229,255,0.4)] whitespace-nowrap"
          >
            View Our Packages <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
