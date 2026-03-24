import Link from "next/link";
import { Mail, Youtube, Facebook, ArrowRight, Phone, ExternalLink } from "lucide-react";
import { BRAND_FIRST_PART, BRAND_SECOND_PART, BRAND_NAME } from "@/constants/brand";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 items-start text-center md:text-left">
          
          {/* Column 1: Brand Identity */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="text-2xl font-black tracking-tighter mb-6 hover:text-accent transition-colors flex items-center">
              {BRAND_FIRST_PART}<span className="text-accent"> {BRAND_SECOND_PART}</span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-xs">
              Engineering Digital Dominance through Data, Automation & Reach.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-accent/50 hover:text-accent transition-all group">
                <Facebook size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-accent/50 hover:text-accent transition-all group">
                <Youtube size={18} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-accent/50 hover:text-accent transition-all group">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] group-hover:scale-110 transition-transform">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.5.34-.9.84-1.08 1.42-.25.82-.14 1.73.31 2.47.45.75 1.24 1.27 2.1 1.41.67.12 1.38.03 2.01-.24.78-.34 1.41-1.01 1.67-1.81.16-.51.18-1.05.18-1.58V0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Portfolio', 'Ecosystem', 'Pricing'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-zinc-500 text-sm hover:text-accent transition-colors flex items-center gap-2 group justify-center md:justify-start">
                    <span className="w-1 h-1 rounded-full bg-accent/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Our Solutions</h4>
            <ul className="space-y-4">
              {[
                { name: 'Web Development', href: '/services' },
                { name: 'Power BI Insights', href: '/services' },
                { name: 'n8n Automation', href: '/services' },
                { name: 'Ad Campaigns', href: '/ecosystem' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-zinc-500 text-sm hover:text-accent transition-colors flex items-center gap-2 group justify-center md:justify-start">
                    <span className="w-1 h-1 rounded-full bg-accent/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Connect */}
          <div className="flex flex-col items-center md:items-start p-6 rounded-3xl bg-white/[0.02] border border-white/5">
            <h4 className="text-white font-bold text-sm mb-2">Ready to scale?</h4>
            <p className="text-zinc-500 text-xs mb-6">Let&apos;s engineer your dominance.</p>
            <div className="w-full space-y-3">
              <a href="https://wa.me/94764682362" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-accent text-black text-xs font-black rounded-xl hover:bg-white transition-all">
                <Phone size={14} fill="currentColor" /> Chat on WhatsApp
              </a>
              <a href="mailto:contact@digihubpro.com" className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-white/5 border border-white/10 text-white text-xs font-bold rounded-xl hover:bg-white/10 transition-all">
                <Mail size={14} /> Email Us
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-[10px] md:text-xs">
            © {currentYear} {BRAND_NAME}. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] md:text-xs text-zinc-600 uppercase tracking-tighter">
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
