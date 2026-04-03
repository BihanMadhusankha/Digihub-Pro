"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, CheckCircle2, Star, User2, Building2 } from "lucide-react";
import ServiceCalculator from "@/components/ServiceCalculator";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const plans = {
  tutor: [
    {
      tier: "Starter",
      name: "Digihub Starter",
      price: "LKR 20,000",
      popular: false,
      description: "Focused social media presence to kickstart your professional brand on Facebook.",
      features: [
        "5 FB Reels / month",
        "8 FB Posts / month",
        "Content strategy foundation",
        "Basic audience engagement",
        "Brand alignment setup",
        "Monthly performance check"
      ],
      waMsg: "Hi Digihub Pro Team, I'm a Tutor/Professional interested in the Digihub Starter SMM package at LKR 20,000 (Includes 5 Reels & 8 Posts per month).",
    },
    {
      tier: "Professional",
      name: "Digihub Professional",
      price: "LKR 45,000",
      popular: true,
      description: "Advanced multi-platform social media growth and strategic engagement management.",
      features: [
        "10 Reels / month (FB, YT & TikTok)",
        "20 FB Posts / month",
        "Platform optimization (FB, YT & TikTok)",
        "Advanced Content Strategy",
        "Student / tutor trust signals setup",
        "Analytics reporting",
        "Competitor analysis",
        "Priority content scheduling"
      ],
      waMsg: "Hi Digihub Pro Team, I'm a Tutor/Professional interested in the Digihub Professional SMM package at LKR 45,000 (Includes 10 Reels, 20 Posts, and multi-platform growth).",
    },
    {
      tier: "Enterprise",
      name: "Digihub Enterprise",
      price: "LKR 100,000",
      popular: false,
      description: "Complete digital dominance — custom hub, daily content, and full automation pipelines.",
      features: [
        "Custom multi-page premium hub",
        "15 Reels / month (FB, YT, TikTok & IG)",
        "30 Posts / month (FB & IG)",
        "n8n Content Automation setup",
        "Newsletter & Ad campaign management",
        "Free Hosting included",
        "Free Domain Name included",
        "Dedicated Team support",
      ],
      waMsg: "Hi Digihub Pro Team, I'm a Tutor/Professional interested in the Digihub Enterprise package at LKR 100,000 (Includes 15 Reels, 30 Posts, Automation, Hosting & Domain).",
    },
  ],
  business: [
    {
      tier: "Starter",
      name: "Business Kickstart",
      price: "LKR 25,000",
      popular: false,
      description: "Get your business online with a professional site and social presence managed by Digihub Pro.",
      features: [
        "3-Page Modern business website",
        "5 FB Reels / month",
        "8 FB Posts / month",
        "Google & Facebook Business setup",
        "SEO foundation",
        "Free Hosting included",
        "Free Domain Name included"
      ],
      waMsg: "Hi Digihub Pro Team, I'm a Business Owner interested in the Business Kickstart (Starter) package at LKR 25,000 (Includes 5 Reels, 8 Posts, Hosting & Domain).",
    },
    {
      tier: "Professional",
      name: "Digihub Growth",
      price: "LKR 50,000",
      popular: true,
      description: "The complete agency growth stack — website, Power BI dashboards, and managed ads.",
      features: [
        "Full business website (6 Pages)",
        "Power BI Sales Dashboard",
        "Inventory & Promotion tracking",
        "10 Reels / month (FB, YT & TikTok)",
        "20 FB Posts / month",
        "Ad campaign management",
        "Monthly performance report",
        "Free Hosting included",
        "Free Domain Name included"
      ],
      waMsg: "Hi Digihub Pro Team, I'm a Business Owner interested in the Digihub Growth package at LKR 50,000 (Includes 6-Page Site, Power BI, 10 Reels & 20 Posts).",
    },
    {
      tier: "Enterprise",
      name: "Dominance Engine",
      price: "LKR 120,000",
      popular: false,
      description: "Enterprise-level digital operations built to engineer digital dominance in your market.",
      features: [
        "High-performance Premium Web Platform",
        "15 Reels / month (FB, YT, TikTok & IG)",
        "30 Posts / month (FB & IG)",
        "Advanced Power BI (Inventory & ROI Analytics)",
        "Full Network Management (5 channels)",
        "n8n Automation pipelines setup",
        "Free Hosting & Professional Domain",
        "Dedicated account manager",
        "Priority support",
      ],
      waMsg: "Hi Digihub Pro Team, I'm a Business Owner interested in the Dominance Engine (Enterprise) package at LKR 120,000 (Includes 15 Reels, 30 Posts, Power BI & Automation).",
    },
  ],
};

export default function Pricing() {
  const [userType, setUserType] = useState<"tutor" | "business">("business");
  const activePlans = plans[userType];

  return (
    <main className="relative overflow-hidden">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-[160px] -z-10 pointer-events-none" />

      {/* ── Hero ── */}
      <section className="min-h-[45vh] flex items-center justify-center px-6 py-24 text-center">
        <motion.div initial="hidden" animate="visible" className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <motion.p variants={fadeUp} custom={0} className="text-accent text-xs font-bold uppercase tracking-[0.25em]">
            Transparent Pricing
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
            Plans Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">
              Your Goals.
            </span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="text-zinc-400 text-base max-w-lg leading-relaxed">
            Choose your path below — tailored packages for Tutors & Professionals or Business Owners.
          </motion.p>

          {/* Toggle */}
          <motion.div variants={fadeUp} custom={3} className="flex gap-4 flex-col sm:flex-row w-full max-w-md mt-2">
            {(["tutor", "business"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setUserType(type)}
                className={`flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl border font-bold text-sm transition-all duration-300 ${userType === type
                  ? "border-accent bg-accent/10 text-accent shadow-[0_0_25px_-5px_rgba(0,229,255,0.5)]"
                  : "border-white/10 bg-white/5 text-zinc-400 hover:border-white/20"
                  }`}
              >
                {type === "tutor" ? <User2 size={17} /> : <Building2 size={17} />}
                {type === "tutor" ? "Tutor / Professional" : "Business Owner"}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="px-6 pb-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={userType}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6"
          >
            {activePlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-300 ${plan.popular
                  ? "border-accent bg-accent/5 shadow-[0_0_70px_-15px_rgba(0,229,255,0.45)]"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20"
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 bg-accent rounded-full text-black text-xs font-black shadow-lg whitespace-nowrap">
                    <Star size={11} className="fill-black" /> Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{plan.tier}</span>
                  <h2 className={`text-2xl font-black mt-1 mb-1 leading-tight ${plan.popular ? "text-accent" : "text-white"}`}>
                    {plan.name}
                  </h2>
                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 mb-3 mt-2">
                    <span className={`text-3xl font-black ${plan.popular ? "text-accent" : "text-white"}`}>
                      {plan.price}
                    </span>
                  </div>
                  <div className="w-full h-[1px] bg-white/10 mb-3" />
                  <p className="text-zinc-400 text-sm leading-relaxed">{plan.description}</p>
                </div>

                <ul className="flex-1 space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <CheckCircle2 size={14} className="text-accent mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/94764682362?text=${encodeURIComponent(plan.waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm transition-all hover:scale-105 ${plan.popular
                    ? "bg-accent text-black shadow-[0_0_20px_rgba(0,229,255,0.4)]"
                    : "bg-white/5 border border-white/10 text-white hover:border-accent/50"
                    }`}
                >
                  <MessageSquare size={15} /> Get Started on WhatsApp
                </a>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Note */}
        <p className="text-center text-zinc-600 text-xs mt-10 max-w-md mx-auto">
          All packages are negotiable based on scope. Contact via WhatsApp for a custom quote tailored to your specific needs.
        </p>
      </section>

      {/* ══ SERVICE CALCULATOR ══ */}
      <ServiceCalculator />
    </main>
  );
}
