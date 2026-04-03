"use client";

import FadeIn, { FadeInStagger } from "@/components/FadeIn";
import Link from "next/link";
import {
  ArrowRight, Brain, Clock, LineChart, Users, MessageSquare,
  Code, Megaphone, Share2, Star, BarChart3, Laptop, CheckCircle2,
  ShieldCheck, Zap, Globe, TrendingUp, Layers
} from "lucide-react";
import { BRAND_NAME } from "@/constants/brand";
import Image from "next/image";
import BrandLogoGrid from "@/components/BrandLogoGrid";

/* ─── Data ─── */
const coreSkills = [
  { icon: <Brain className="text-accent" size={24} />, title: "Analytical Thinking", description: "Transforming raw data into dashboards for strategic business decisions." },
  { icon: <Clock className="text-accent" size={24} />, title: "Time Management", description: "Successfully balancing professional responsibilities with academic pursuits in IT." },
  { icon: <LineChart className="text-accent" size={24} />, title: "Retail Analytics", description: "Sales Forecasting, Promotion Tracking, Inventory Auditing, Advanced Excel." },
  { icon: <Users className="text-accent" size={24} />, title: "Leadership & Team Coord.", description: "Proven ability to lead operations across multiple branches and diverse teams." },
  { icon: <MessageSquare className="text-accent" size={24} />, title: "Effective Communication", description: "Strong interpersonal skills for stakeholder management and negotiation." },
];

const techRetailSkills = [
  { icon: <Code className="text-accent mb-4" size={32} />, title: "IT Knowledge", skills: ["MERN Stack", "Node.js", "PHP", "SQL", "Kotlin/Java", "PowerBI", "Advanced Excel"] },
  { icon: <Megaphone className="text-accent mb-4" size={32} />, title: "Marketing", skills: ["Facebook Marketing", "Audience Targeting", "Content Strategy"] },
];

const networkBrands = [
  { name: "DUMITH BANDARA", logo: "/images/DUMITH BANDARA.jpg" },
  { name: "SASIP", logo: "/images/SASIP.png" },
  { name: "SPARTA", logo: "/images/SPARTA.png" },
  { name: "THILINA BORALASSA", logo: "/images/THILINA BORALASSA.jpeg" },
];

const services = [
  {
    icon: <Laptop className="text-accent" size={28} />,
    title: "Small Business Web Dev",
    description: "Custom websites built for conversion — fast, SEO-friendly, and tailored to grow your local business online.",
    badge: "Business Grouth",
  },
  {
    icon: <Star className="text-accent" size={28} />,
    title: "Professional Portfolios",
    description: "Premium personal branding for individuals. Minimalist, modern portfolios that make a powerful first impression.",
    badge: "Personal Branding",
  },
  {
    icon: <Share2 className="text-accent" size={28} />,
    title: "Social Media Growth",
    description: "Full-service management for Facebook, YouTube, and TikTok — content creation, scheduling, and performance analytics.",
    badge: "FB · YouTube · TikTok",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col relative overflow-hidden">
      {/* Background glow */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-accent/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

      {/* ══════════════════════════════════════
          1. CINEMATIC HERO SECTION
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-gen.png"
            alt="Digihub Pro Engineering"
            fill
            className="object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
            priority
          />
          {/* Radial Gradient for text legibility */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_90%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-12">
          <FadeInStagger>
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              {/* Tag */}
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold uppercase tracking-widest mb-10 shadow-[0_0_20px_rgba(0,229,255,0.15)]">
                  <ShieldCheck size={16} />
                  Sri Lanka&apos;s Premier Digital Growth Agency
                </div>
              </FadeIn>

              {/* Headline */}
              <FadeIn delay={0.1}>
                <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9] text-white mb-8">
                  Engineering Digital <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-accent to-white/60">
                    Dominance.
                  </span>
                </h1>
              </FadeIn>

              {/* Subheadline */}
              <FadeIn delay={0.2}>
                <p className="text-zinc-400 text-lg md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
                  We leverage advanced <span className="text-white">Data Intelligence</span>, custom <span className="text-white">Automation Workflows</span>, and Sri Lanka&apos;s largest <span className="text-accent underline decoration-accent/30 underline-offset-4">3.5M+ Collective Social Reach</span> for guaranteed brand growth.
                </p>
              </FadeIn>

              {/* CTAs */}
              <FadeIn delay={0.3} className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
                <a
                  href={`https://wa.me/94713676540?text=Hi%20${BRAND_NAME.replace(" ", "%20")}%20Team,%20I%20want%20to%20consult%20regarding%20a%20digital%20growth%20strategy.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-10 py-5 bg-accent text-black font-black rounded-full hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(0,229,255,0.45)]"
                >
                  <MessageSquare size={20} /> Consult Our Team
                </a>
                <Link
                  href="/pricing"
                  className="w-full sm:w-auto px-10 py-5 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 hover:border-white/40 transition-all flex items-center justify-center gap-2"
                >
                  View Solutions <ArrowRight size={20} />
                </Link>
              </FadeIn>


            </div>
          </FadeInStagger>
        </div>
        
        {/* Bottom Ambient Glow */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full h-48 bg-accent/20 blur-[100px] -z-10" />
      </section>

      {/* ══════════════════════════════════════
          2. TRUST / BRAND NETWORK SECTION
      ══════════════════════════════════════ */}
      <section className="px-6 py-10 border-t border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto">
          <BrandLogoGrid />
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. CORE SERVICES GRID
      ══════════════════════════════════════ */}
      <section className="px-6 py-24 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <FadeInStagger>
            <FadeIn className="text-center mb-16">
              <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">Our Expertise</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
                Our Digital <span className="text-accent">Solutions</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl mx-auto">
                End-to-end services for businesses that want to compete and win online.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
              {services.map((svc, i) => (
                <FadeIn key={i} delay={0.1 * i}>
                  <div className="group glassmorphism p-8 rounded-3xl border border-white/10 hover:border-accent/50 hover:shadow-[0_0_50px_-15px_rgba(0,229,255,0.25)] transition-all duration-400 h-full flex flex-col gap-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-[50px] -z-10" />
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        {svc.icon}
                      </div>
                      <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-xs font-semibold text-accent">
                        {svc.badge}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-black mb-3 group-hover:text-accent transition-colors">{svc.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">{svc.description}</p>
                    </div>
                    <Link href="/services" className="mt-auto inline-flex items-center gap-2 text-xs font-bold text-accent/70 group-hover:text-accent transition-colors">
                      Learn More <ArrowRight size={14} />
                    </Link>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Services CTA */}
            <FadeIn delay={0.3} className="text-center mt-10">
              <a
                href="https://wa.me/94764682362?text=Hi%20Digihub%20Pro%20Team,%20I%20want%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 bg-accent text-black font-black rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,229,255,0.3)]"
              >
                <MessageSquare size={20} /> Start Your Project Free
              </a>
            </FadeIn>
          </FadeInStagger>
        </div>
      </section>
      {/* ══════════════════════════════════════
          4. MOBILE ADVERTISING SHOWCASE
      ══════════════════════════════════════ */}
      <section className="px-6 py-24 relative overflow-hidden bg-zinc-950/40">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <FadeIn className="lg:w-1/2">
            <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">Social Dominance</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Captivate Your <span className="text-accent">Audience</span> Where They Are.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              In a world of constant scrolling, we engineer thumb-stopping advertisements that command attention. Our data-driven creative strategies don't just get views — they build communities and drive high-intent conversions.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
               {[
                 { title: "Vertical First", desc: "Optimised for TikTok, Reels & Shorts." },
                 { title: "High Engagement", desc: "Proven to boost CTR by up to 40%." }
               ].map((item) => (
                 <div key={item.title} className="p-5 rounded-2xl bg-white/5 border border-white/10">
                   <h4 className="text-white font-bold mb-1">{item.title}</h4>
                   <p className="text-zinc-500 text-sm">{item.desc}</p>
                 </div>
               ))}
            </div>
          </FadeIn>
          
          <FadeIn className="lg:w-1/2 relative" delay={0.2}>
            {/* Ambient glows behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/20 rounded-full blur-[100px] -z-10" />
            <div className="relative mx-auto max-w-[320px] aspect-[9/19.5] rounded-[3rem] border-[8px] border-zinc-900 shadow-2xl overflow-hidden group bg-zinc-900 flex items-center justify-center">
              <Image 
                src="/images/phone-ad.png" 
                alt="High-converting mobile advertisement" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              {/* Fallback mockup UI */}
              <div className="flex flex-col items-center text-center p-6 gap-4 z-0">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                   <Share2 size={32} />
                </div>
                <h4 className="text-white font-black">Digihub Pro</h4>
                <div className="w-full h-32 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-600">
                   Ad Preview
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. PLANS BUILT FOR YOUR GOALS
      ══════════════════════════════════════ */}
      <section className="px-6 py-32 border-t border-white/5 relative z-10 bg-zinc-950/20">
        <div className="max-w-7xl mx-auto">
          <FadeInStagger>
            {/* Section Header */}
            <FadeIn className="text-center mb-16">
              <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">Transparent Pricing</p>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                Plans Built for <span className="text-accent">Your Goals.</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10">
                Tailored packages for Tutors, Professionals & Business Owners — starting from just LKR 20,000.
              </p>
            </FadeIn>

            {/* Plan highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                { label: "Starter", price: "LKR 20,000", desc: "5 Reels & 8 Posts per month. Focused on boosting your social media presence and engagement.", badge: "Tutors & Professionals", color: "border-white/10" },
                { label: "Professional", price: "LKR 45,000", desc: "10 Reels across FB/YT/TikTok per month, complete with analytics and strategic growth planning.", badge: "Most Popular", color: "border-accent bg-accent/5 shadow-[0_0_60px_-15px_rgba(0,229,255,0.35)]" },
                { label: "Enterprise", price: "LKR 100,000", desc: "Premium hub, 15 Reels, 30 Posts, automation pipelines & dedicated support.", badge: "Full Dominance", color: "border-white/10" },
              ].map((plan, i) => (
                <FadeIn key={i} delay={0.1 * i}>
                  <div className={`group relative p-8 rounded-3xl border ${plan.color} hover:border-accent/40 hover:-translate-y-2 transition-all duration-400 h-full flex flex-col gap-4`}>
                    <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{plan.badge}</span>
                    <div>
                      <h3 className="text-xl font-black text-white group-hover:text-accent transition-colors mb-1">{plan.label}</h3>
                      <p className="text-3xl font-black text-accent">{plan.price}</p>
                    </div>
                    <p className="text-zinc-400 text-sm leading-relaxed flex-1">{plan.desc}</p>
                    <Link href="/pricing" className="inline-flex items-center gap-2 text-xs font-bold text-accent/70 group-hover:text-accent transition-colors mt-2">
                      See full details <ArrowRight size={14} />
                    </Link>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.3} className="text-center">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-3 px-10 py-4 bg-accent text-black font-black rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,229,255,0.3)]"
              >
                View All Plans <ArrowRight size={20} />
              </Link>
            </FadeIn>
          </FadeInStagger>
        </div>
      </section>
    </main>
  );
}
