import { Film, Youtube, ArrowUp, Mail, ShieldAlert } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08080a] text-gray-500 border-t border-zinc-950 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        
        {/* Brand identity */}
        <div className="space-y-2">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <span className="font-display font-black text-xl tracking-wider text-white">DRAGON</span>
            <span className="h-2 w-2 rounded-full bg-brand-purple" />
          </div>
          <p className="text-[11px] text-zinc-500 uppercase font-mono tracking-widest leading-relaxed">
            POST PRODUCTION PROFESSIONAL &bull; CODENAME: DRACO
          </p>
        </div>

        {/* Youtube Link promotion */}
        <div className="flex flex-col justify-center items-center md:items-start text-xs space-y-1">
          <span className="text-[10px] uppercase font-mono text-zinc-600 block">Creator Hub Connection</span>
          <a
            href={PERSONAL_INFO.youtubeChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-brand-cyan transition-colors font-medium flex items-center space-x-1"
          >
            <Youtube className="w-4 h-4 text-red-500 fill-current" />
            <span>@dragon_edit4u on YouTube</span>
          </a>
        </div>

        {/* Copy and Scroll Up action */}
        <div className="flex flex-col items-center md:items-end justify-between space-y-2.5">
          <button
            onClick={scrollToTop}
            className="p-2 border border-zinc-900 bg-zinc-950 text-gray-400 hover:text-white hover:border-zinc-800 rounded-lg transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
          <span className="text-[10px] font-mono uppercase tracking-wider">
            &copy; {new Date().getFullYear()} DRAGON DRACO AGENCY. ALL RIGHTS RESERVED.
          </span>
        </div>
      </div>
    </footer>
  );
}
