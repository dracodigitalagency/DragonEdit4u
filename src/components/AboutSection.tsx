import { motion } from 'motion/react';
import { Shield, Radio, Volume2, TrendingUp, Award, PlayCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function AboutSection() {
  const values = [
    {
      icon: <Radio className="w-5 h-5 text-brand-purple" />,
      title: 'High-Retention Podcast Clips',
      desc: 'Slicing long-form interviews into ultra-engaging clips that capture audiences on YouTube, Reels, and TikTok instantly.'
    },
    {
      icon: <Volume2 className="w-5 h-5 text-brand-cyan" />,
      title: 'Seamless Storytelling & SFX',
      desc: 'Developing narratives with precise pacing, layered soundscapes, tension risers, and vocal clarity tuning.'
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-brand-blue" />,
      title: 'Engaging Video Engineering',
      desc: 'Infusing custom keyframed subtitles, tracking arrows, 2D visual elements, and graphics to hold visual focus.'
    }
  ];

  return (
    <section id="about" className="relative py-28 bg-[#0b0c10] text-gray-200 overflow-hidden border-t border-zinc-950">
      {/* Background decorations */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[15%] left-[-10%] w-[400px] h-[400px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Title */}
        <div className="text-center md:text-left mb-16 space-y-2">
          <span className="text-xs font-mono tracking-widest text-brand-purple uppercase bg-brand-purple/10 px-3 py-1 rounded-full">
            / Professional Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-white">
            ABOUT ME
          </h2>
          <p className="text-gray-400 text-sm max-w-lg">
            The creative engine transforming standard footage into high-retention digital masterpieces.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Column 1: Dragon Avatar Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="relative group w-full max-w-[380px]"
            >
              {/* Outer neon border decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan opacity-40 rounded-3xl blur-xl group-hover:opacity-75 transition duration-500" />
              
              <div className="relative rounded-2xl bg-[#12131a] overflow-hidden border border-zinc-800 shadow-2xl p-3">
                <img
                  src="/src/assets/images/aryan_avatar_1781959085107.jpg"
                  alt="Dragon - Cinematic Editor avatar"
                  className="w-full h-auto aspect-square object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-75"
                  referrerPolicy="no-referrer"
                />
                
                {/* Embedded Floating statistics inside overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/5 space-y-2.5">
                  <div className="flex justify-between items-center text-xs font-mono font-bold tracking-wider text-brand-purple">
                    <span>CREATOR PORTAL</span>
                    <span>ONLINE</span>
                  </div>
                  <div className="flex space-x-1 justify-center py-1">
                    <span className="w-2.5 h-1.5 bg-brand-purple rounded" />
                    <span className="w-2.5 h-1.5 bg-brand-blue rounded" />
                    <span className="w-2.5 h-1.5 bg-brand-cyan rounded animate-pulse" />
                  </div>
                  <p className="text-[11px] text-gray-300 text-center italic">
                    "I transform raw footage into highly engaging assets for global audiences."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Dragon Journey Copy */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-bold text-white">
                Designing content meant to captivate in the first 3 seconds.
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {PERSONAL_INFO.aboutLong}
              </p>
            </div>

            {/* List of Custom core value bullet highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {values.map((v, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-zinc-900 bg-zinc-950/60 hover:bg-zinc-900/40 hover:border-zinc-800 transition-colors"
                >
                  <div className="mb-3.5 flex items-center justify-center w-9 h-9 rounded-lg bg-zinc-900/90 border border-zinc-800">
                    {v.icon}
                  </div>
                  <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-1">{v.title}</h4>
                  <p className="text-[11px] text-gray-500 leading-normal">{v.desc}</p>
                </div>
              ))}
            </div>

            {/* Bullet list of milestones */}
            <div className="border-t border-zinc-900 pt-6 space-y-3.5">
              <span className="text-[10px] font-mono tracking-widest text-[#9c9ca4] uppercase block">
                EXPERIENCE FOCUS
              </span>
              <ul className="space-y-2">
                {PERSONAL_INFO.journeyBulletPoints.map((bp, key) => (
                  <li key={key} className="flex items-start text-xs text-gray-300">
                    <span className="inline-block p-1 bg-brand-purple/20 border border-brand-purple/40 rounded mr-3 mt-0.5" />
                    <span className="leading-relaxed">{bp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
