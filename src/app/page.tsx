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

              {/* Trust Bar */}
              <FadeIn delay={0.5} className="mt-20 flex flex-col items-center gap-4">
                <p className="text-zinc-500 text-xs font-black uppercase tracking-[0.3em]">Trusted by Sri Lankan Brands &amp; Tutors</p>
                <div className="flex items-center">
                  <div className="flex -space-x-3">
                    {[
                      "/images/sinawa.jpeg",
                      "/images/SASIP.png",
                      "/images/SPARTA.png",
                      "/images/DUMITH BANDARA.jpg",
                      "/images/THILINA BORALASSA.jpeg"
                    ].map((src, i) => (
                      <div key={i} className="relative w-12 h-12 rounded-full border-2 border-black overflow-hidden bg-zinc-900 shadow-xl">
                        <Image src={src} alt="Client partner" fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="ml-4 flex flex-col items-start">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="fill-accent text-accent" />
                      ))}
                    </div>
                    <span className="text-white text-[10px] font-bold">3.5M+ Combined Reach</span>
                  </div>
                </div>
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
          4. EXPERTISE "WHY ME" SECTION
      ══════════════════════════════════════ */}
      {/* ══════════════════════════════════════
          4. WHY DIGIHUB PRO? (EDGE SECTION)
      ══════════════════════════════════════ */}
      {/* ══════════════════════════════════════
          4. WHY DIGIHUB PRO? (EDGE SECTION)
      ══════════════════════════════════════ */}
      <section className="px-6 py-32 border-t border-white/5 relative z-10 bg-zinc-950/20">
        <div className="max-w-7xl mx-auto">
          <FadeInStagger>
            {/* Section Header */}
            <div className="max-w-4xl mb-20">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-black uppercase tracking-widest mb-6">
                  <Zap size={12} fill="currentColor" /> The Digihub Pro Edge
                </div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-8">
                  Where Data Meets <span className="text-accent">Dominance.</span>
                </h2>
                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
                  We don&apos;t just build tools; we engineer growth. At Digihub Pro, we unite decade-long <strong className="text-white">Enterprise Operations Management</strong> experience with elite <strong className="text-white underline decoration-accent/30 underline-offset-4">Systems Engineering</strong>. Our solutions are built on the same foundations that power multi-branch enterprise networks, delivering high-performance digital assets that drive real measurable impact.
                </p>
              </FadeIn>
            </div>

            {/* Triple Threat Strategy Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {[
                {
                  icon: <BarChart3 className="text-accent" size={28} />,
                  title: "Data Intelligence",
                  desc: "Turning raw business numbers into strategic growth decisions through Power BI & Advanced Analytics.",
                },
                {
                  icon: <Globe className="text-emerald-400" size={28} />,
                  title: "High-Performance Web",
                  desc: "Ultra-fast Next.js websites designed specifically for high conversion and seamless SEO.",
                },
                {
                  icon: <TrendingUp className="text-purple-400" size={28} />,
                  title: "Social Dominance",
                  desc: "Leveraging a 3.5M+ Network reach to build your audience at scale across FB, YT, and TikTok.",
                },
                {
                  icon: <Layers className="text-blue-400" size={28} />,
                  title: "Systems Automation",
                  desc: "Eliminating manual bottlenecks with custom n8n workflows for 24/7 business efficiency.",
                },
              ].map((strategy, i) => (
                <FadeIn key={i} delay={0.1 * i}>
                  <div className="group relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-accent/30 hover:-translate-y-2 transition-all duration-500 shadow-xl">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/10 transition-all">
                      {strategy.icon}
                    </div>
                    <h3 className="text-xl font-black text-white mb-4 group-hover:text-accent transition-colors">
                      {strategy.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
                      {strategy.desc}
                    </p>
                    {/* Hover Glow */}
                    <div className="absolute inset-0 rounded-3xl bg-accent/5 opacity-0 group-hover:opacity-100 blur-2xl -z-10 transition-opacity" />
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Experience Meets Innovation Feature Block */}
            <FadeIn delay={0.4}>
              <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-r from-accent/20 via-white/5 to-accent/20 overflow-hidden group">
                <div className="relative bg-black rounded-[2.4rem] p-10 md:p-14 overflow-hidden border border-white/10">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.05),transparent_70%)]" />
                  
                  <div className="relative z-10 grid md:grid-cols-[1fr_auto_1fr] items-center gap-10 text-center">
                    {/* Left Side */}
                    <div className="space-y-3">
                      <p className="text-xs font-black text-zinc-500 uppercase tracking-widest">Institutional Roots</p>
                      <h4 className="text-xl md:text-2xl font-black text-white">Enterprise Operations</h4>
                      <p className="text-zinc-400 text-sm">Large-Scale Systems Management</p>
                    </div>

                    {/* Center Divider/Bridge */}
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-[1px] h-12 bg-gradient-to-t from-accent/50 to-transparent hidden md:block" />
                      <div className="w-16 h-16 rounded-full border border-accent/40 bg-accent/5 flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.2)]">
                        <Zap size={24} className="text-accent animate-pulse" />
                      </div>
                      <p className="text-accent text-[10px] font-black uppercase tracking-[0.3em] whitespace-nowrap px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">The Growth Engine</p>
                      <div className="w-[1px] h-12 bg-gradient-to-b from-accent/50 to-transparent hidden md:block" />
                    </div>

                    {/* Right Side */}
                    <div className="space-y-3">
                      <p className="text-xs font-black text-zinc-500 uppercase tracking-widest">Technical Precision</p>
                      <h4 className="text-xl md:text-2xl font-black text-white">Systems Engineering</h4>
                      <p className="text-zinc-400 text-sm">Elite Mathematical &amp; Logic Rigor</p>
                    </div>
                  </div>

                  {/* Summary Footer */}
                  <div className="mt-12 pt-8 border-t border-white/5 text-center">
                    <p className="text-lg md:text-xl font-bold text-zinc-300 italic">
                      &quot;The perfect bridge between complex technology and sustainable business profits.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </FadeInStagger>
        </div>
      </section>
    </main>
  );
}
