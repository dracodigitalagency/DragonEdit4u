import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Film, Mic, Sparkles, Layout, Zap, Flame, Terminal } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data';

export default function SkillsAnalytics() {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const iconsMap: Record<string, React.ReactNode> = {
    Film: <Film className="w-5 h-5 text-brand-purple" />,
    Mic: <Mic className="w-5 h-5 text-brand-cyan" />,
    Sparkles: <Sparkles className="w-5 h-5 text-brand-blue" />,
  };

  const softwareStack = [
    { name: 'Adobe Premiere Pro', level: 'Expert', years: '5 Yrs', color: 'bg-[#00005c] text-[#00c5ff]' },
    { name: 'DaVinci Resolve Studio', level: 'Advanced / Colorist', years: '4 Yrs', color: 'bg-[#da3e22]/10 text-[#da3e22]' },
    { name: 'Adobe After Effects', level: 'Expert Motion', years: '4 Yrs', color: 'bg-[#000021] text-[#9044ff]' },
    { name: 'Adobe Audition', level: 'Expert dialog', years: '3 Yrs', color: 'bg-[#011d1a] text-[#01e0a8]' },
    { name: 'CapCut Studio Pro', level: 'High retention speeds', years: '2 Yrs', color: 'bg-white/5 text-white' }
  ];

  return (
    <section id="skills" className="relative py-28 bg-[#0b0c10] text-[#f3f4f6]">
      {/* Background neon dots */}
      <div className="absolute top-[20%] left-[20%] w-[1px] h-[1px] bg-brand-cyan shadow-[0_0_100px_60px_rgba(6,182,212,0.06)] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-[1px] h-[1px] bg-brand-purple shadow-[0_0_100px_60px_rgba(168,85,247,0.06)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header content Area */}
        <div className="text-center mb-16 space-y-2">
          <span className="text-xs font-mono tracking-widest text-[#9c9ca4] uppercase">
            / Post-Production Infrastructure
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-white uppercase">
            CORE EXPERTISE & GEAR
          </h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            A high-fidelity suite of editing systems calibrated to produce viral hooks and immaculate audio streams.
          </p>
        </div>

        {/* 2-Column Dashboard layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column A: Interactive Software Stack Selection */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl border border-zinc-900 bg-zinc-950/80 backdrop-blur-md">
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-4">
                SYSTEM GEAR & NATIVE CODECS
              </span>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
                <Terminal className="w-4.5 h-4.5 text-brand-cyan" />
                <span>Creative Engine Stack</span>
              </h3>

              <div className="space-y-4">
                {softwareStack.map((sw, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3.5 rounded-xl border border-zinc-900 bg-zinc-900/10 hover:bg-zinc-900/40 transition-colors"
                  >
                    <div>
                      <p className="font-semibold text-xs text-white">{sw.name}</p>
                      <span className="text-[9px] font-mono text-zinc-500 block uppercase mt-0.5">{sw.years} EXPERIENCE</span>
                    </div>
                    <span className={`text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-1 rounded-full ${sw.color}`}>
                      {sw.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Retention advice quote */}
            <div className="p-6 rounded-xl border border-brand-purple/20 bg-brand-purple/5 text-left space-y-3">
              <div className="flex items-center space-x-2 text-brand-purple">
                <Flame className="w-5 h-5 fill-current" />
                <span className="text-xs uppercase tracking-widest font-mono font-bold">The Dragon Standard</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                "Podcast clips are won or lost in the **first three seconds**. We structure custom visual cues, sound sweeps, and color pop filters that make scrolling impossible."
              </p>
            </div>
          </div>

          {/* Column B: Render progress capabilities of selected segment */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Horizontal menu toggle */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(idx)}
                  className={`flex items-center space-x-3 p-4 rounded-xl text-left border cursor-pointer transition-all ${
                    selectedCategory === idx
                      ? 'bg-[#151322] border-brand-purple/50 text-white shadow-[0_0_20px_rgba(139,92,246,0.1)]'
                      : 'bg-[#101014]/60 border-zinc-900 text-gray-400 hover:text-white hover:border-zinc-800'
                  }`}
                >
                  <div className="p-2 rounded bg-zinc-900/90 border border-zinc-800 flex items-center justify-center">
                    {iconsMap[cat.icon]}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase block">CATEGORY {idx + 1}</span>
                    <span className="text-xs font-bold uppercase tracking-wider">{cat.title}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Active metrics display area */}
            <div className="p-6 sm:p-8 rounded-2xl border border-zinc-900 bg-zinc-950/80 backdrop-blur-md space-y-8 text-left">
              <div>
                <span className="text-[10px] font-mono text-brand-cyan tracking-widest uppercase">
                  / WORKFLOW BREAKDOWN
                </span>
                <h3 className="text-xl font-display font-black text-white uppercase mt-1">
                  {SKILL_CATEGORIES[selectedCategory].title} PERFORMANCE METRICS
                </h3>
              </div>

              {/* Progress meters */}
              <div className="space-y-6">
                {SKILL_CATEGORIES[selectedCategory].items.map((item, id) => (
                  <div key={id} className="space-y-2">
                    <div className="flex justify-between items-end text-xs">
                      <div>
                        <span className="font-semibold text-white tracking-wide">{item.name}</span>
                        <p className="text-zinc-500 text-[10px] leading-normal">{item.description}</p>
                      </div>
                      <span className="font-mono font-bold text-brand-cyan">{item.percentage}%</span>
                    </div>

                    {/* Progress slider base */}
                    <div className="relative h-2 bg-zinc-900 rounded-full overflow-hidden">
                      {/* Interactive sliding glow light */}
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Technical specs of the selected pipeline */}
              <div className="pt-6 border-t border-zinc-900 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-400">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" />
                  <span>ProRes 422 HQ / AV1 Rendering compatibility</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" />
                  <span>ITU-R BT.709 Color Space workflows</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" />
                  <span>Multichannel Stems EBU R128 Loudness Standards</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" />
                  <span>Lossless master exports in custom bitrates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
