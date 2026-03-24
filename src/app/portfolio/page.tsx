"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink, ArrowRight, Globe, Megaphone, Users, ShoppingBag,
  GraduationCap, ImageIcon, MessageSquare, Youtube, Facebook, Play, X,
} from "lucide-react";

/* ── TikTok SVG ── */
function TikTokIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.28 8.28 0 004.84 1.55V7.05a4.85 4.85 0 01-1.07-.36z" />
    </svg>
  );
}

/* ════════════════════════════════════════════
   CLIENT WORK TYPES + DATA
════════════════════════════════════════════ */
type Category = "All" | "Academies & Tutors" | "Local Services" | "Products & Brands" | "Web Development";
type Platform = "facebook" | "youtube" | "tiktok" | "website";

interface SocialLink { platform: Platform; url: string; label?: string; }
interface ClientWork {
  id: string; client: string; project: string; blurb: string;
  category: Exclude<Category, "All">; badge: string; images: string[];
  socialLinks?: SocialLink[]; url?: string; ctaLabel: string; waText: string;
}

const works: ClientWork[] = [
  { id: "viron", client: "Viron Japan Academy", project: "Japanese Language Career Path Promotion", blurb: "Targeted FB & IG campaign for student recruitment across Japan-bound career paths.", category: "Academies & Tutors", badge: "Social Media Campaign", images: ["/images/advertisment-post/japan.jpeg"], socialLinks: [{ platform: "facebook", url: "https://facebook.com", label: "FB Page" }], ctaLabel: "education campaigns", waText: "Hi Digihub Pro Team, I saw your work for Viron Japan Academy and I need a similar education campaign." },
  { id: "tamil-classes", client: "Tamil Language Classes", project: "Qualified Teacher Personal Branding", blurb: "Professional personal brand for a language teacher — class locations, qualifications, and trust signals.", category: "Academies & Tutors", badge: "Personal Branding", images: ["/images/advertisment-post/duminda.jpeg"], socialLinks: [{ platform: "facebook", url: "https://facebook.com", label: "FB Page" }], ctaLabel: "teacher personal branding", waText: "Hi Digihub Pro Team, I saw your work for Tamil Language Classes and I need a personal branding campaign." },
  { id: "smartphone-repair", client: "Smartphone Repair Course", project: "Vocational Training Promotion", blurb: "Recruitment campaign for technical repair courses with value-added free Solar, CCTV highlights.", category: "Academies & Tutors", badge: "Facebook Ad Campaign", images: ["/images/advertisment-post/mobile course.jpeg"], socialLinks: [{ platform: "facebook", url: "https://facebook.com", label: "FB Ad" }], ctaLabel: "vocational course promotion", waText: "Hi Digihub Pro Team, I saw your work for the Smartphone Repair Course and I need a similar training promotion." },
  { id: "newsolid", client: "NewSolid Higher Education", project: "Science & Buddhism Seminar Awareness", blurb: "Local ad campaign generated awareness and registrations for an educational seminar.", category: "Academies & Tutors", badge: "Event Awareness", images: ["/images/advertisment-post/lahiru sampath.jpeg"], socialLinks: [{ platform: "facebook", url: "https://facebook.com", label: "FB Event" }], ctaLabel: "seminar & event promotion", waText: "Hi Digihub Pro Team, I saw your work for NewSolid and I need a similar seminar awareness campaign." },
  { id: "bed-online", client: "BEd University Online", project: "Online BC Course Promotion", blurb: "Targeted digital marketing for an online education program attracting distance learners across Sri Lanka.", category: "Academies & Tutors", badge: "Digital Marketing", images: ["/images/advertisment-post/palitha abesinghe.jpeg"], socialLinks: [{ platform: "facebook", url: "https://facebook.com", label: "FB Page" }], ctaLabel: "online education promotion", waText: "Hi Digihub Pro Team, I saw your work for BEd Online and I need a similar online course promotion." },
  { id: "snm", client: "SNM Environment Cleaners", project: "Sanitation Service Location Marketing", blurb: "Localised advertising for sewage & waste removal, emphasising reliability and fast response.", category: "Local Services", badge: "Local Ad Campaign", images: ["/images/advertisment-post/gali bausar.jpeg", "/images/advertisment-post/gali.jpeg"], socialLinks: [{ platform: "facebook", url: "https://facebook.com", label: "FB Page" }], ctaLabel: "local service advertising", waText: "Hi Digihub Pro Team, I saw your work for SNM Environment and I need similar local service marketing." },
  { id: "sigiri", client: "Sigiri Cafe & Rent a Car", project: "Unified Branding for Sigiriya", blurb: "One cohesive brand identity for a cafe and rental service targeting Sigiriya tourist traffic.", category: "Local Services", badge: "Brand Identity", images: ["/images/advertisment-post/sigiri cafe.jpeg"], socialLinks: [{ platform: "facebook", url: "https://facebook.com", label: "FB Page" }], ctaLabel: "local business branding", waText: "Hi Digihub Pro Team, I saw your work for Sigiri Cafe and I need a unified branding package." },
  { id: "apex-aura", client: "Apex Aura Inginee", project: "Herbal Energy Supplement Launch", blurb: "Product branding and dynamic social posts for a nutritional drink launch.", category: "Products & Brands", badge: "Product Launch", images: ["/images/advertisment-post/igini-kiri.jpeg"], socialLinks: [{ platform: "facebook", url: "https://facebook.com", label: "FB" }, { platform: "tiktok", url: "https://tiktok.com", label: "TikTok" }], ctaLabel: "product launches", waText: "Hi Digihub Pro Team, I saw your work for Apex Aura and I need a similar product launch campaign." },
  { id: "yasidhu", client: "Singer Hiru Star Yasidhu", project: "Fan Support & Voting Campaign", blurb: "Social engagement campaign for a national talent show contestant — votes, reach, fan community.", category: "Products & Brands", badge: "Engagement Campaign", images: ["/images/advertisment-post/yasindu.jpeg"], socialLinks: [{ platform: "facebook", url: "https://facebook.com", label: "FB" }, { platform: "youtube", url: "https://youtube.com", label: "YT" }, { platform: "tiktok", url: "https://tiktok.com", label: "TikTok" }], ctaLabel: "social engagement campaigns", waText: "Hi Digihub Pro Team, I saw your work for Yasidhu Hiru Star and I need a fan engagement campaign." },
  { id: "rng-web", client: "RNG Advertising", project: "Advanced Corporate Website", blurb: "High-performance web platform with agency branding, service showcase, and lead generation focus.", category: "Web Development", badge: "Corporate Site", images: ["/images/rng-advertising.jpeg"], url: "https://darkgoldenrod-herring-699984.hostingersite.com/", socialLinks: [{ platform: "website", url: "https://darkgoldenrod-herring-699984.hostingersite.com/", label: "Live Site" }], ctaLabel: "a similar corporate site", waText: "Hi Digihub Pro Team, I saw the RNG Advertising site and I'd like to discuss a corporate website." },
];

const CATEGORIES: Category[] = ["All", "Academies & Tutors", "Local Services", "Products & Brands", "Web Development"];
const catIcons: Record<Category, React.ReactNode> = {
  "All": <Megaphone size={13} />, "Academies & Tutors": <GraduationCap size={13} />,
  "Local Services": <Users size={13} />, "Products & Brands": <ShoppingBag size={13} />, "Web Development": <Globe size={13} />,
};

const platformStyles: Record<Platform, { bg: string; text: string; icon: React.ReactNode }> = {
  facebook: { bg: "bg-blue-600/20 border-blue-500/30", text: "text-blue-400", icon: <Facebook size={12} /> },
  youtube: { bg: "bg-red-600/20 border-red-500/30", text: "text-red-400", icon: <Youtube size={12} /> },
  tiktok: { bg: "bg-zinc-800 border-zinc-600/30", text: "text-white", icon: <TikTokIcon size={12} /> },
  website: { bg: "bg-accent/10 border-accent/30", text: "text-accent", icon: <Globe size={12} /> },
};

function SocialPill({ link }: { link: SocialLink }) {
  const s = platformStyles[link.platform];
  return (
    <a href={link.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-bold hover:opacity-80 transition-opacity ${s.bg} ${s.text}`}>
      {s.icon} {link.label}
    </a>
  );
}

/* ── Client Work Card ── */
function WorkCard({ work }: { work: ClientWork }) {
  const [imgErr, setImgErr] = useState(false);
  return (
    <motion.div layout initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.94 }}
      whileHover={{ y: -6 }} transition={{ duration: 0.3, ease: "easeOut" as const }}
      className="group relative rounded-2xl overflow-hidden bg-zinc-950 border border-white/[0.08] hover:border-accent/50 cursor-pointer transition-colors duration-300 hover:shadow-[0_20px_60px_-10px_rgba(0,229,255,0.25)]">
      <div className="relative aspect-square overflow-hidden bg-zinc-900">
        {!imgErr ? (
          <Image src={work.images[0]} alt={work.client} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" onError={() => setImgErr(true)} />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-zinc-700">
            <ImageIcon size={32} /><span className="text-xs text-center px-4">{work.client}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-accent z-10">{work.badge}</span>
        {work.socialLinks && work.socialLinks.length > 0 && (
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5 z-10">
            {work.socialLinks.map((sl) => <SocialPill key={sl.platform + sl.url} link={sl} />)}
          </div>
        )}
        {/* Hover overlay slides up */}
        <motion.div initial={{ y: "100%" }} whileHover={{ y: "0%" }} transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black via-black/80 to-transparent z-20">
          <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-1">{work.category}</p>
          <h3 className="text-white font-black text-sm leading-tight mb-0.5">{work.client}</h3>
          <p className="text-zinc-400 text-[11px] mb-3 font-medium">{work.project}</p>
          <div className="flex gap-2">
            {work.url && (
              <a href={work.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-white/20 text-white text-[11px] font-bold hover:border-accent hover:text-accent transition-colors flex-shrink-0">
                <ExternalLink size={11} /> Live
              </a>
            )}
            <a href={`https://wa.me/94713676540?text=${encodeURIComponent(work.waText)}`} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-1.5 flex-1 py-1.5 px-3 rounded-lg bg-accent text-black text-[11px] font-black hover:brightness-110 transition-all">
              <MessageSquare size={11} /> Get Similar
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ════════════════════════════════════════════
   VIDEO SECTION TYPES + DATA
════════════════════════════════════════════ */
type VideoPlatform = "youtube" | "facebook" | "tiktok";
interface VideoItem {
  id: string; title: string; channel: string; platform: VideoPlatform;
  youtubeId?: string; externalUrl?: string; coverImage?: string;
}

const videos: VideoItem[] = [
  //{ id: "greek-yt-1", title: "Ancient Greece — Untold Stories", channel: "GREEK HISTORIAN", platform: "youtube", youtubeId: "fd8pgVoKCCg", externalUrl: "https://youtu.be/fd8pgVoKCCg" },
  //{ id: "greek-fb-1", title: "Historical Reel — FB Campaign", channel: "GREEK HISTORIAN", platform: "facebook", coverImage: "/images/GREEK HISTORIAN.png", externalUrl: "https://www.facebook.com/profile.php?id=61580149986477" },
  //{ id: "dhamma-yt", title: "Dhamma Vision — YouTube", channel: "DHAMMA VISION", platform: "youtube", youtubeId: "pJyN1viJ9gigNBaM", externalUrl: "https://youtu.be/1kiGDc5BsAQ?si=pJyN1viJ9gigNBaM" },
  //{ id: "bihan-tech-yt", title: "Tech Tutorial — Bihan Tech", channel: "Bihan Tech", platform: "youtube", youtubeId: "dQw4w9WgXcQ", externalUrl: "https://youtu.be/dQw4w9WgXcQ" },
  //{ id: "hela-tiktok", title: "HELA CINEMA — TikTok Reel", channel: "HELA CINEMA", platform: "tiktok", coverImage: "/images/HELA CINEMA.jpeg", externalUrl: "https://tiktok.com" },
  // { id: "mashi-tiktok", title: "MASHI — Product Reel", channel: "MASHI", platform: "tiktok", coverImage: "/images/MASHI.jpeg", externalUrl: "https://tiktok.com" },
];

const videoPlatformStyle: Record<VideoPlatform, { label: string; bg: string; text: string; icon: React.ReactNode }> = {
  youtube: { label: "YouTube", bg: "bg-red-600/20 border-red-500/30", text: "text-red-400", icon: <Youtube size={12} /> },
  facebook: { label: "Facebook", bg: "bg-blue-600/20 border-blue-500/30", text: "text-blue-400", icon: <Facebook size={12} /> },
  tiktok: { label: "TikTok", bg: "bg-zinc-700/60 border-zinc-500/30", text: "text-white", icon: <TikTokIcon size={12} /> },
};

/* ── Video Modal ── */
function VideoModal({ video, onClose }: { video: VideoItem; onClose: () => void }) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4" onClick={onClose}>
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 26 }}
        className="relative w-full max-w-3xl bg-zinc-950 rounded-3xl overflow-hidden border border-white/10"
        onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
          <X size={15} />
        </button>
        {video.platform === "youtube" && video.youtubeId ? (
          <div className="aspect-video">
            <iframe src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`} title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
          </div>
        ) : (
          <div className="aspect-video relative bg-zinc-900">
            {video.coverImage && <Image src={video.coverImage} alt={video.title} fill className="object-cover opacity-40" />}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <p className="text-white font-bold text-lg text-center px-6">{video.title}</p>
              <a href={video.externalUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-accent text-black font-black rounded-full hover:scale-105 transition-transform">
                <ExternalLink size={16} /> Open on {videoPlatformStyle[video.platform].label}
              </a>
            </div>
          </div>
        )}
        <div className="p-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-0.5">{video.channel}</p>
            <h3 className="text-white font-black text-base">{video.title}</h3>
          </div>
          {video.externalUrl && (
            <a href={video.externalUrl} target="_blank" rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 border border-white/10 rounded-xl text-xs font-bold text-zinc-300 hover:border-accent hover:text-accent transition-colors">
              <ExternalLink size={13} /> Open
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Video Card ── */
function VideoCard({ video, onClick }: { video: VideoItem; onClick: () => void }) {
  const p = videoPlatformStyle[video.platform];
  const thumb = video.youtubeId
    ? `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`
    : video.coverImage ?? "";

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      whileHover={{ y: -5 }} transition={{ duration: 0.3 }} onClick={onClick}
      className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-accent/40 hover:shadow-[0_16px_50px_-10px_rgba(0,229,255,0.3)] transition-all duration-300">
      <div className="relative aspect-video bg-zinc-900 overflow-hidden">
        {thumb && <Image src={thumb} alt={video.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div whileHover={{ scale: 1.15 }}
            className="w-12 h-12 rounded-full bg-accent/90 flex items-center justify-center shadow-[0_0_30px_rgba(0,229,255,0.5)] group-hover:shadow-[0_0_50px_rgba(0,229,255,0.8)] transition-shadow">
            <Play size={20} className="text-black ml-0.5" fill="black" />
          </motion.div>
        </div>
        <span className={`absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-bold backdrop-blur-sm ${p.bg} ${p.text}`}>
          {p.icon} {p.label}
        </span>
      </div>
      <div className="p-3 bg-zinc-950">
        <p className="text-[10px] text-accent/70 font-bold uppercase tracking-widest mb-0.5">{video.channel}</p>
        <p className="text-white text-xs font-bold line-clamp-1 group-hover:text-accent transition-colors">{video.title}</p>
      </div>
    </motion.div>
  );
}

/* ════════════════════════════════════════════
   PAGE
════════════════════════════════════════════ */
export default function Portfolio() {
  const [active, setActive] = useState<Category>("All");
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const filtered = active === "All" ? works : works.filter((w) => w.category === active);

  return (
    <main className="relative overflow-hidden">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-accent/5 rounded-full blur-[160px] -z-10 pointer-events-none" />

      {/* ── Hero ── */}
      <section className="min-h-[45vh] flex items-center justify-center px-6 py-24 text-center relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image src="/images/bihan-2.png" alt="" fill className="object-cover object-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-background" />
        </div>
        <motion.div className="flex flex-col items-center gap-5 max-w-3xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-accent text-xs font-bold uppercase tracking-[0.25em]">Real Results · Real Clients</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
            Success Stories from{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Our Clients.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="text-zinc-400 text-base max-w-2xl leading-relaxed">
            10+ brands across education, local services, products &amp; web — every campaign built around real goals.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Filter Bar + Client Grid ── */}
      <section className="px-6 pt-10 pb-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
            className="flex flex-wrap justify-center gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full border font-bold text-xs transition-all duration-300 ${active === cat
                  ? "border-accent bg-accent/10 text-accent shadow-[0_0_20px_-5px_rgba(0,229,255,0.5)]"
                  : "border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:text-zinc-200"}`}>
                {catIcons[cat]} {cat}
              </button>
            ))}
          </motion.div>

          <LayoutGroup>
            <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              <AnimatePresence mode="popLayout">
                {filtered.map((work) => <WorkCard key={work.id} work={work} />)}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>

          {filtered.length === 0 && <p className="text-center text-zinc-600 py-20 text-sm">No items in this category yet.</p>}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURED VIDEO WORK
      ══════════════════════════════════════════ 
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5 }} className="mb-10">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-2">Video Content</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Video Work</span>
            </h2>
            <p className="text-zinc-500 text-sm mt-2">Click any card to watch inline or open on platform.</p>
          </motion.div>

          {/* Platform legend pills 
          <div className="flex gap-2 mb-8 flex-wrap">
            {(["youtube", "facebook", "tiktok"] as VideoPlatform[]).map((pl) => {
              const s = videoPlatformStyle[pl];
              return (
                <span key={pl} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-bold ${s.bg} ${s.text}`}>
                  {s.icon} {s.label}
                </span>
              );
            })}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {videos.map((v) => <VideoCard key={v.id} video={v} onClick={() => setActiveVideo(v)} />)}
          </div>
        </div>
      </section>
      */}

      {/* ── Bottom CTA ── */}
      <section className="px-6 py-20 border-t border-white/5">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }} className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
            Like what you see? <span className="text-accent">Let's build your success story.</span>
          </h2>
          <p className="text-zinc-400 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
            Whether you're a tutor, local business, or product brand — every campaign starts with one conversation.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/pricing"
              className="flex items-center gap-2 px-7 py-3.5 bg-accent text-black font-black rounded-full hover:scale-105 transition-transform shadow-[0_0_25px_rgba(0,229,255,0.4)] text-sm">
              View Pricing &amp; Packages <ArrowRight size={16} />
            </Link>
            <a href="https://wa.me/94764682362?text=Hi%20Digihub%20Pro%20Team%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20start%20a%20project"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold rounded-full hover:border-accent hover:text-accent transition-all text-sm">
              <MessageSquare size={16} /> Start a Project
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── Video Lightbox Modal ── */}
      <AnimatePresence>
        {activeVideo && <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />}
      </AnimatePresence>
    </main>
  );
}
