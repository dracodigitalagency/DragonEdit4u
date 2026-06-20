import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ExternalLink, X, Film, Sparkles, Zap, Tv } from 'lucide-react';
import { PORTFOLIO_ITEMS, PERSONAL_INFO } from '../data';
import { WorkItem } from '../types';

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedVideo, setSelectedVideo] = useState<WorkItem | null>(null);

  const categories = ['All', 'Podcast', 'Short', 'Cinematic', 'Showcase'];

  const filteredItems = activeCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-28 bg-[#08080a] text-white">
      {/* Background decorations */}
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-brand-neon/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header content and Direct YouTube link promotion */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left space-y-2">
            <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1 rounded-full">
              / Featured Production Output
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight">
              PORTFOLIO SHOWCASE
            </h2>
            <p className="text-gray-400 text-sm max-w-lg">
              Explore custom podcast snippets, high-velocity shorts, and cinematic edits optimized for platforms.
            </p>
          </div>

          {/* Glowing External YouTube Channel Button */}
          <a
            href={PERSONAL_INFO.youtubeChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-semibold text-xs tracking-wider uppercase px-6 py-3.5 rounded-lg shadow-[0_0_15px_rgba(239,68,68,0.25)] hover:shadow-[0_0_25px_rgba(239,68,68,0.45)] transition-all duration-300"
          >
            <Tv className="w-4 h-4 text-white" />
            <span>@dragon_edit4u Channel</span>
            <ExternalLink className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Filter Navigation Links */}
        <div className="flex flex-wrap gap-2.5 justify-start md:justify-center mb-12 bg-zinc-950/40 p-1.5 rounded-xl border border-zinc-900 w-max mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs font-mono uppercase font-bold rounded-lg tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-brand-purple text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-zinc-900/60'
              }`}
            >
              {cat === 'All' ? 'ALL WORK' : `${cat.toUpperCase()} SAMPLES`}
            </button>
          ))}
        </div>

        {/* Grid Display of items */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                key={item.id}
                className="group relative rounded-xl border border-zinc-900 bg-zinc-950/70 overflow-hidden hover:border-brand-purple/40 hover:shadow-2xl hover:shadow-brand-purple/5 transition-all duration-300"
              >
                {/* Image thumb overlay with play marker */}
                <div className="relative aspect-video overflow-hidden bg-zinc-900">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors z-10" />
                  
                  {/* Subtle color code highlight */}
                  <div className="absolute top-3 left-3 bg-[#08080a]/90 backdrop-blur-sm px-2.5 py-1 text-[9px] font-mono tracking-widest text-brand-cyan rounded uppercase border border-white/5 z-20">
                    {item.category}
                  </div>

                  {/* Performance metric badge always shown, colored depending on metrics */}
                  {item.metrics && (
                    <div className="absolute top-3 right-3 bg-brand-cyan/80 text-black px-2.5 py-0.5 text-[10px] font-mono font-bold rounded-full border border-brand-cyan/30 z-20 flex items-center space-x-1">
                      <Zap className="w-2.5 h-2.5 fill-black" />
                      <span>{item.metrics.value}</span>
                    </div>
                  )}

                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Play click handle */}
                  <button
                    onClick={() => setSelectedVideo(item)}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-full bg-brand-purple/90 backdrop-blur-sm flex items-center justify-center border border-brand-purple/30 text-white shadow-2xl scale-95 group-hover:scale-100 transition-all duration-300">
                      <Play className="w-6 h-6 fill-white ml-1" />
                    </div>
                  </button>
                </div>

                {/* Card copy listing details */}
                <div className="p-6 space-y-4 text-left">
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-semibold text-white group-hover:text-brand-cyan transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Program list */}
                  <div className="flex flex-wrap gap-1.5 pt-1.5 border-t border-zinc-900">
                    {item.softwareUsed.map((sw, i) => (
                      <span key={i} className="text-[9px] font-mono tracking-wider text-gray-500 bg-zinc-900 border border-zinc-800/80 px-2 py-0.5 rounded">
                        {sw}
                      </span>
                    ))}
                  </div>

                  {/* Actions footer */}
                  <div className="flex items-center justify-between text-xs pt-1">
                    <button
                      onClick={() => setSelectedVideo(item)}
                      className="text-brand-purple hover:text-brand-cyan font-mono font-bold tracking-wider flex items-center space-x-1 uppercase bg-transparent border-none cursor-pointer"
                    >
                      <span>Launch Player</span>
                      <Play className="w-3 h-3 fill-current ml-0.5" />
                    </button>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">
                      / 1080P PRO RES
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Cinematic Youtube Embed Video Player Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Header row of the previewer */}
              <div className="flex items-center justify-between p-4 bg-zinc-900/80 border-b border-zinc-800">
                <div className="overflow-hidden">
                  <span className="text-[10px] font-mono text-brand-cyan tracking-widest uppercase">
                    / Dragon Post-Production Preview Terminal
                  </span>
                  <h3 className="text-sm font-semibold text-white truncate max-w-xs sm:max-w-md">
                    {selectedVideo.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="p-1 rounded-full text-gray-400 hover:text-white bg-zinc-950/60 border border-zinc-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Real YouTube Embedded Iframe */}
              <div className="aspect-video bg-black w-full relative">
                {selectedVideo.youtubeId ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}${selectedVideo.youtubeId.includes('?') ? '&' : '?'}autoplay=1&mute=0`}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="w-full h-full flex flex-col justify-center items-center text-zinc-500">
                    <Film className="w-12 h-12 mb-2 animate-pulse text-brand-purple" />
                    <span>Rendering Player Stream...</span>
                  </div>
                )}
              </div>

              {/* Informational Footer of Video Player */}
              <div className="p-6 bg-zinc-950 text-left border-t border-zinc-900 grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-8 space-y-2">
                  <div className="flex flex-wrap gap-1.5">
                    {selectedVideo.tags.map((tag, k) => (
                      <span key={k} className="text-[9px] font-mono text-brand-purple border border-brand-purple/20 bg-brand-purple/5 px-2.5 py-0.5 rounded-full uppercase">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {selectedVideo.description}
                  </p>
                </div>
                <div className="md:col-span-4 flex flex-col justify-between items-start md:items-end p-4 rounded-xl border border-zinc-900 bg-zinc-900/30">
                  {selectedVideo.metrics && (
                    <div className="text-left md:text-right">
                      <span className="text-[9px] font-mono text-zinc-500 uppercase block">METRICS ARCHIEVED</span>
                      <span className="text-xl font-black text-brand-cyan tracking-tight">{selectedVideo.metrics.value}</span>
                      <span className="text-[10px] text-gray-400 block">{selectedVideo.metrics.label}</span>
                    </div>
                  )}
                  <a
                    href={PERSONAL_INFO.youtubeChannel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 md:mt-0 text-[10px] font-bold text-white bg-red-600 hover:bg-red-500 px-3 py-1.5 rounded uppercase tracking-widest flex items-center space-x-1.5 w-full md:w-auto text-center justify-center"
                  >
                    <span>View More Edits</span>
                    <ExternalLink className="w-3 h-3 text-white" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
