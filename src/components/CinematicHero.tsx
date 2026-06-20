import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Film, Play, Pause, Sparkles, Sliders, Type, Volume2, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function CinematicHero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [timelineProgress, setTimelineProgress] = useState(35); // Initial percentage
  const [sliderPosition, setSliderPosition] = useState(50); // Color grading slider percent
  const [captionStyle, setCaptionStyle] = useState<'hormozi' | 'minimal' | 'mrbeast'>('hormozi');
  const [activeTab, setActiveTab] = useState<'grading' | 'timeline' | 'captions'>('grading');
  
  const sliderRef = useRef<HTMLDivElement>(null);
  const timelineInterval = useRef<NodeJS.Timeout | null>(null);

  // Auto transition timeline playhead
  useEffect(() => {
    if (isPlaying && activeTab === 'timeline') {
      timelineInterval.current = setInterval(() => {
        setTimelineProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 1;
        });
      }, 75);
    } else {
      if (timelineInterval.current) {
        clearInterval(timelineInterval.current);
        timelineInterval.current = null;
      }
    }
    return () => {
      if (timelineInterval.current) {
        clearInterval(timelineInterval.current);
        timelineInterval.current = null;
      }
    };
  }, [isPlaying, activeTab]);

  // Handle Before/After grading slider drag & click
  const handleSliderMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches && e.touches[0]) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    // Also track primary click to swipe or let hovering dictate on desktop
    handleSliderMove(e.clientX);
  };

  // Render Caption text inside video based on selection
  const renderInteractiveCaption = () => {
    switch (captionStyle) {
      case 'hormozi':
        return (
          <div className="absolute text-center select-none bottom-10 left-1/2 -translate-x-1/2 scale-110">
            <span className="font-display font-black text-2xl uppercase tracking-wider text-yellow-300 bg-black/80 px-3 py-1 rounded inline-block rotate-[-2deg] border-2 border-yellow-400 shadow-xl">
              🔥 TRIPLE THE <span className="text-white">RETENTION</span>
            </span>
          </div>
        );
      case 'mrbeast':
        return (
          <div className="absolute text-center select-none bottom-12 left-1/2 -translate-x-1/2 scale-105">
            <span className="font-sans font-black text-3xl tracking-tight text-white stroke-black drop-shadow-[0_4px_8px_rgba(0,0,0,1)] uppercase">
              THAT'S INSANE!! 🤯
            </span>
          </div>
        );
      case 'minimal':
      default:
        return (
          <div className="absolute text-center select-none bottom-12 left-1/2 -translate-x-1/2">
            <span className="font-sans font-medium text-lg text-gray-100 bg-black/50 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
              Seamless modern storytelling for brands.
            </span>
          </div>
        );
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-[#08080a] text-white flex flex-col justify-center overflow-hidden pt-28 pb-16">
      {/* Background Cinematic Lighting Overlays */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-purple/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent pointer-events-none -z-10" />
      <div className="absolute inset-0 cinematic-grid opacity-[0.25] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Editorial Typography Headers */}
        <div className="lg:col-span-6 flex flex-col space-y-6 text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 border border-brand-purple/30 rounded-full px-3 py-1 w-max"
          >
            <span className="w-2 h-2 rounded-full bg-brand-neon animate-pulse" />
            <span className="text-xs uppercase font-mono tracking-widest text-brand-purple font-semibold">
              PREMIUM POST-PRODUCTION STUDIO
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight leading-none"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-400">
                {PERSONAL_INFO.name.toUpperCase()}
              </span>
              <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan font-semibold">
                {PERSONAL_INFO.title}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl"
            >
              {PERSONAL_INFO.shortBio}
            </motion.p>
          </div>

          {/* Quick Metrics Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-4 border-y border-white/5 py-4 max-w-md"
          >
            <div>
              <p className="text-2xl font-black font-display text-brand-purple">{PERSONAL_INFO.completedProjects}</p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500">Projects Cuts</p>
            </div>
            <div>
              <p className="text-2xl font-black font-display text-brand-cyan">{PERSONAL_INFO.totalViews}</p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500">Total Reach</p>
            </div>
            <div>
              <p className="text-2xl font-black font-display text-brand-blue">{PERSONAL_INFO.averageRetention}</p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500">Audience Hold</p>
            </div>
          </motion.div>

          {/* Call to Actions & Highlight link */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a
              href="#portfolio"
              className="px-6 py-3.5 rounded-lg bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all flex items-center space-x-2"
            >
              <span>Explore Portfolio</span>
              <Film className="w-3.5 h-3.5 text-black" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-lg border border-white/10 hover:border-brand-purple/50 bg-[#121217]/50 backdrop-blur-sm text-white font-semibold text-xs uppercase tracking-wider transition-all"
            >
              Start Your Video Project
            </a>
          </motion.div>
        </div>

        {/* Right Side: Sleek Sandbox Editing Console */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="lg:col-span-6 w-full"
        >
          <div className="relative border border-zinc-800 rounded-2xl bg-zinc-950/90 shadow-2xl overflow-hidden backdrop-blur-xl">
            {/* Window bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900 border-b border-zinc-800 select-none">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase ml-2">Dragon_Console_v2.0.exe</span>
              </div>
              <div className="flex items-center space-x-3 text-xs bg-zinc-950 px-2.5 py-1 rounded border border-zinc-800 text-brand-purple font-mono">
                <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-ping" />
                INTERACTIVE DEMO
              </div>
            </div>

            {/* Workplace Content Container */}
            <div className="p-4 sm:p-6 space-y-6">
              {/* Feature Tabs */}
              <div className="grid grid-cols-3 gap-2 p-1 bg-zinc-900/60 rounded-lg border border-zinc-800">
                <button
                  onClick={() => setActiveTab('grading')}
                  className={`py-2 px-1 text-[11px] font-mono uppercase tracking-wider rounded-md font-semibold transition-all flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-1.5 ${
                    activeTab === 'grading'
                      ? 'bg-brand-neon text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Color Grading</span>
                </button>
                <button
                  onClick={() => setActiveTab('timeline')}
                  className={`py-2 px-1 text-[11px] font-mono uppercase tracking-wider rounded-md font-semibold transition-all flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-1.5 ${
                    activeTab === 'timeline'
                      ? 'bg-brand-blue text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Film className="w-3.5 h-3.5" />
                  <span>Scrub Live</span>
                </button>
                <button
                  onClick={() => setActiveTab('captions')}
                  className={`py-2 px-1 text-[11px] font-mono uppercase tracking-wider rounded-md font-semibold transition-all flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-1.5 ${
                    activeTab === 'captions'
                      ? 'bg-brand-cyan text-white'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Type className="w-3.5 h-3.5" />
                  <span>Viral Subtitles</span>
                </button>
              </div>

              {/* Active Workspace Screen */}
              <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-black group shadow-lg">
                
                {/* 1. COLOR GRADING PREVIEW */}
                {activeTab === 'grading' && (
                  <div
                    ref={sliderRef}
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                    className="relative w-full h-full cursor-ew-resize select-none overflow-hidden"
                  >
                    {/* Graded Layer (Base background) */}
                    <img
                      src="/src/assets/images/cinematic_scene_1781959103962.jpg"
                      alt="Cinematic graded video still of street"
                      className="absolute inset-0 w-full h-full object-cover saturate-125 contrast-115 brightness-100"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Raw Log Layer (Washed out) Clip Path */}
                    <div
                      className="absolute inset-0 w-full h-full overflow-hidden"
                      style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                    >
                      <img
                        src="/src/assets/images/cinematic_scene_1781959103962.jpg"
                        alt="RAW washed out log footage"
                        className="absolute inset-0 w-full h-full object-cover saturate-[0.3] contrast-[0.75] brightness-125"
                        style={{ width: sliderRef.current?.getBoundingClientRect().width || '100vw', maxWidth: 'none' }}
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Left washed-out and right vibrant text annotations */}
                    <div className="absolute top-3 left-4 bg-black/85 border border-white/5 text-[9px] font-mono tracking-widest text-[#9c9ca4] px-1.5 py-0.5 rounded pointer-events-none uppercase">
                      Before (RAW Log Profile)
                    </div>
                    <div className="absolute top-3 right-4 bg-brand-purple/90 border border-brand-purple/20 text-[9px] font-mono tracking-widest text-white px-1.5 py-0.5 rounded pointer-events-none uppercase">
                      After (DCO LUT LUT Grade)
                    </div>

                    {/* Centered vertical sliding handle */}
                    <div
                      className="absolute top-0 bottom-0 w-0.5 bg-white shadow-2xl pointer-events-none z-10"
                      style={{ left: `${sliderPosition}%` }}
                    >
                      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border border-brand-purple flex items-center justify-center pointer-events-none shadow-lg">
                        <Sliders className="w-3 h-3 text-brand-purple" />
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. LIVE SEAMLESS TIMELINE PLAYBACK REVIEW */}
                {activeTab === 'timeline' && (
                  <div className="relative w-full h-full bg-zinc-950 flex flex-col justify-between p-4">
                    <div className="flex-1 flex flex-col justify-center items-center">
                      <div className="flex space-x-1.5 mb-2">
                        {[0, 1, 2, 3, 4, 5, 6, 7].map((bar) => {
                          const heightFactor = Math.sin(bar + (timelineProgress * 0.4)) * 0.5 + 0.5;
                          return (
                            <div
                              key={bar}
                              className={`w-1 rounded-full bg-brand-cyan transition-all duration-75`}
                              style={{ height: `${20 + heightFactor * 40}px` }}
                            />
                          );
                        })}
                      </div>
                      <span className="text-[11px] font-mono text-zinc-400 mt-2">
                        {isPlaying ? 'SOUND EFFECTS LAYER IN SYNC' : 'PLAYBACK PAUSED'}
                      </span>
                    </div>

                    {/* Controls overlay */}
                    <div className="absolute top-3 left-4 flex items-center space-x-2">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="bg-brand-blue hover:bg-brand-blue/80 p-1.5 rounded-full text-white transition-colors"
                      >
                        {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                      </button>
                      <span className="text-[10px] font-mono text-zinc-500">
                        {Math.floor(timelineProgress).toString().padStart(2, '0')}:{(Math.floor(timelineProgress * 30) % 30).toString().padStart(2, '0')} FPS
                      </span>
                    </div>
                  </div>
                )}

                {/* 3. VIRAL PORTRAIT / SHORT CAPTIONS EXPERT */}
                {activeTab === 'captions' && (
                  <div className="relative w-full h-full bg-[#111116] flex items-center justify-center">
                    <img 
                      src="/src/assets/images/cinematic_scene_1781959103962.jpg" 
                      alt="Cinematic preview background for subtitles" 
                      className="absolute inset-0 w-full h-full object-cover opacity-60" 
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Centered video crop overlay mimicking vertical 9:16 layout */}
                    <div className="absolute inset-y-0 w-[42%] border-x border-dashed border-white/10 bg-black/10 backdrop-blur-[1px] flex flex-col justify-between">
                      <div className="text-[8px] font-mono text-zinc-500 py-2.5 text-center tracking-widest border-b border-white/5 bg-black/60">
                        9:16 CROP PREVIEW
                      </div>
                      <div className="p-3">
                        {renderInteractiveCaption()}
                      </div>
                      <div className="text-[8px] font-mono text-white/50 py-2 text-center bg-black/60 flex items-center justify-center space-x-1">
                        <Volume2 className="w-2.5 h-2.5 text-brand-cyan" />
                        <span>AUDIO HOOK READY</span>
                      </div>
                    </div>

                    {/* Side switch options */}
                    <div className="absolute right-3 top-3 bottom-0 flex flex-col space-y-2 justify-center z-20">
                      {(['hormozi', 'mrbeast', 'minimal'] as const).map((style) => (
                        <button
                          key={style}
                          onClick={() => setCaptionStyle(style)}
                          className={`px-2 py-1.5 text-[9px] font-mono font-bold tracking-wider rounded border text-left transition-all uppercase whitespace-nowrap ${
                            captionStyle === style
                              ? 'bg-brand-cyan border-brand-cyan text-black'
                              : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                          }`}
                        >
                          {style}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Advanced Timeline Tracks and Video Editors Layout */}
              <div className="space-y-2.5 border-t border-zinc-900 pt-4 bg-zinc-950/60 p-3 rounded-lg border border-zinc-900">
                <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500">
                  <span>TIMELINE LAYERS</span>
                  <span className="text-zinc-600">60 FPS</span>
                </div>
                
                {/* Track 1: Video */}
                <div className="relative h-6 bg-zinc-900/80 rounded border border-zinc-800 overflow-hidden flex items-center">
                  <div className="absolute left-0 bottom-0 top-0 w-[80px] bg-brand-purple/10 border-r border-brand-purple text-[8px] leading-6 px-2 font-mono text-brand-purple font-semibold whitespace-nowrap overflow-hidden">
                    Intro Hook
                  </div>
                  <div className="absolute left-[80px] bottom-0 top-0 w-[140px] bg-brand-blue/15 border-r border-brand-blue text-[8px] leading-6 px-2 font-mono text-brand-blue font-semibold whitespace-nowrap overflow-hidden">
                    Primary MultiCam A
                  </div>
                  <div className="absolute left-[220px] bottom-0 top-0 w-[90px] bg-brand-purple/15 border-r border-brand-purple text-[8px] leading-6 px-2 font-mono text-brand-purple font-semibold whitespace-nowrap overflow-hidden">
                    Reaction Zoom
                  </div>
                  <div className="absolute left-[310px] bottom-0 top-0 w-[110px] bg-brand-cyan/15 border-r border-brand-cyan text-[8px] leading-6 px-2 font-mono text-brand-cyan font-semibold whitespace-nowrap overflow-hidden">
                    B-Roll Rollout
                  </div>

                  {/* Red scrub line */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-10"
                    style={{ left: `${timelineProgress}%` }}
                  />
                </div>

                {/* Track 2: Audio / SFX */}
                <div className="relative h-6 bg-zinc-900/80 rounded border border-zinc-800 overflow-hidden flex items-center">
                  <div className="absolute left-0 bottom-0 top-0 w-[55px] bg-emerald-500/10 border-r border-emerald-500 text-[8px] leading-6 px-2 font-mono text-emerald-400 whitespace-nowrap overflow-hidden">
                    Whip Whoosh.wav
                  </div>
                  <div className="absolute left-[55px] bottom-0 top-0 w-[120px] bg-emerald-500/5 border-r border-emerald-500/40 text-[8px] leading-6 px-2 font-mono text-emerald-500/85 whitespace-nowrap overflow-hidden">
                    Dialog Normalize
                  </div>
                  <div className="absolute left-[175px] bottom-0 top-0 w-[70px] bg-emerald-500/10 border-r border-emerald-500 text-[8px] leading-6 px-2 font-mono text-emerald-400 whitespace-nowrap overflow-hidden">
                    Sub Bass Hit.mp3
                  </div>
                  <div className="absolute left-[245px] bottom-0 top-0 w-[120px] bg-emerald-500/5 border-r border-emerald-500/40 text-[8px] leading-6 px-2 font-mono text-emerald-500/85 whitespace-nowrap overflow-hidden">
                    Cyber Background.mp3
                  </div>

                  {/* Red scrub line */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-10"
                    style={{ left: `${timelineProgress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
