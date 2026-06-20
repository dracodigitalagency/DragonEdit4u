import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquare, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="relative py-28 bg-[#08080a] text-white overflow-hidden border-t border-zinc-950">
      {/* Background flares */}
      <div className="absolute top-[10%] right-[20%] w-60 h-60 bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[20%] w-60 h-60 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Header section info */}
        <div className="space-y-2 mb-16">
          <span className="text-xs font-mono tracking-widest text-brand-purple uppercase bg-brand-purple/10 px-3 py-1 rounded-full inline-block">
            / Client Feedback
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight uppercase">
            CREATOR TESTIMONIALS
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            What partners and podcasters say about our high-impact storytelling layouts.
          </p>
        </div>

        {/* Carousel slide block */}
        <div className="relative p-8 sm:p-12 rounded-2xl border border-zinc-900 bg-zinc-950/80 backdrop-blur-md glow-card text-left max-w-3xl mx-auto">
          {/* Hanging style quotation icon */}
          <div className="absolute top-6 right-8 text-white/[0.03] pointer-events-none">
            <Quote className="w-24 h-24 stroke-[4]" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Rating stars */}
              <div className="flex space-x-1">
                {Array.from({ length: TESTIMONIALS[activeIndex].rating }).map((_, key) => (
                  <Star key={key} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed italic pr-4">
                "{TESTIMONIALS[activeIndex].text}"
              </p>

              {/* User credentials */}
              <div className="flex items-center space-x-3.5 pt-4 border-t border-zinc-900">
                <div className="w-10 h-10 rounded-full bg-brand-purple/20 border border-brand-purple/40 flex items-center justify-center font-bold text-xs uppercase text-brand-purple">
                  {TESTIMONIALS[activeIndex].author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-white">{TESTIMONIALS[activeIndex].author}</h4>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-mono">
                    {TESTIMONIALS[activeIndex].role} &bull; {TESTIMONIALS[activeIndex].company}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation keys row */}
          <div className="flex items-center space-x-2.5 mt-8 justify-end">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-gray-400 hover:text-white bg-zinc-950 hover:bg-zinc-900 transition-colors cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-lg border border-zinc-900 hover:border-zinc-800 text-gray-400 hover:text-white bg-zinc-950 hover:bg-zinc-900 transition-colors cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
