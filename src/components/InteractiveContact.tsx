import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageSquare, Send, CheckCircle2, Clock, MapPin, DollarSign, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function InteractiveContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    channel: '',
    projectType: 'Podcast clips',
    budget: '$500 - $1,000',
    details: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const projectTypes = [
    'Podcast clips',
    'Long-form YouTube Editing',
    'Shorts / TikTok retainer',
    'Cinematic Promo sequence'
  ];

  const budgetRanges = [
    '<$500 per month',
    '$500 - $1,000',
    '$1,000 - $3,000',
    '$3,000+'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);

    // Simulate database write & local storage persistence
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Save locally to simulate durable user queries
      const existingQueries = JSON.parse(localStorage.getItem('dragon_portfolio_inquiries') || '[]');
      existingQueries.push({
        ...formData,
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem('dragon_portfolio_inquiries', JSON.stringify(existingQueries));

      // Compose the mailto draft to dracodigitalagency@gmail.com so they can easily hit send
      const subject = encodeURIComponent(`Video inquiry from ${formData.name} - ${formData.projectType}`);
      const body = encodeURIComponent(
        `Hi Dragon,\n\nI just viewed your cinematic portfolio and wanted to inquire about a video project.\n\n` +
        `My Name: ${formData.name}\n` +
        `E-mail: ${formData.email}\n` +
        `Creator/Channel: ${formData.channel || 'N/A'}\n` +
        `Project Type: ${formData.projectType}\n` +
        `Budget Range: ${formData.budget}\n\n` +
        `Project Details:\n${formData.details}\n\n` +
        `Looking forward to collaborating!`
      );
      
      // Auto-open mail client after showing positive visual feedback
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-28 bg-[#0b0c10] text-[#f3f4f6]">
      {/* Background neon dots */}
      <div className="absolute top-[30%] left-[10%] w-[350px] h-[350px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Dragon Professional handles */}
          <div className="lg:col-span-5 text-left space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-mono tracking-widest text-[#9c9ca4] uppercase block">
                / LAUNCH PROJECT COLLABORATION
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-white uppercase">
                Ready to level up your content?
              </h2>
              <p className="text-gray-400 text-sm max-w-md leading-relaxed">
                Transform your raw capture reels and interviews into viral sensations. Drop your project brief and let's craft something immaculate together.
              </p>
            </div>

            <div className="space-y-6">
              {/* Professional Mail contact layout */}
              <div className="flex items-center space-x-4 p-4 rounded-xl border border-zinc-900 bg-zinc-950/80 max-w-md">
                <div className="p-3 bg-brand-purple/10 border border-brand-purple/20 text-brand-purple rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block">DIRECT EMAIL AGENT</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-display font-bold text-sm sm:text-base text-white hover:text-brand-purple hover:underline transition-colors block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Geographic availability details */}
              <div className="flex items-center space-x-4 p-4 rounded-xl border border-zinc-900 bg-zinc-950/80 max-w-md">
                <div className="p-3 bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan rounded-lg">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase block">RESPONSE RANGE</span>
                  <p className="font-semibold text-xs text-white">Under 24 hours GMT+5:30</p>
                  <p className="text-[10px] text-gray-500">Global async / Remote workspace</p>
                </div>
              </div>
            </div>

            {/* Verification marker */}
            <div className="p-5 rounded-lg border border-zinc-900 bg-zinc-950/40 text-xs text-gray-400 leading-normal max-w-md">
              <span className="text-[9px] font-mono font-bold text-brand-cyan uppercase tracking-widest block mb-2">&bull; VERIFIED PLATFORM EDITOR</span>
              All pipeline renders are finished in high bitrate HEVC formats and synced to custom server endpoints.
            </div>
          </div>

          {/* Column 2: Interactive Email Proposal Form */}
          <div className="lg:col-span-7">
            <div className="relative p-6 sm:p-8 rounded-2xl border border-zinc-900 bg-zinc-950/80 backdrop-blur-md shadow-2xl">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label className="text-[9px] font-mono tracking-widest text-[#9c9ca4] uppercase block">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Doe"
                          className="w-full px-4 py-3 text-xs bg-[#0b0c10] border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-brand-purple transition-all"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[9px] font-mono tracking-widest text-[#9c9ca4] uppercase block">
                          Creator Channel E-mail *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. john@creator.com"
                          className="w-full px-4 py-3 text-xs bg-[#0b0c10] border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-brand-purple transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] font-mono tracking-widest text-[#9c9ca4] uppercase block">
                        Channel Name or Company website (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.channel}
                        onChange={(e) => setFormData({ ...formData, channel: e.target.value })}
                        placeholder="e.g. YouTube @johnslips"
                        className="w-full px-4 py-3 text-xs bg-[#0b0c10] border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-brand-purple transition-all"
                      />
                    </div>

                    {/* Radio Select for Clip Services */}
                    <div className="space-y-2">
                      <label className="text-[9px] font-mono tracking-widest text-[#9c9ca4] uppercase block">
                        Project post-production service
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {projectTypes.map((type) => (
                          <button
                            type="button"
                            key={type}
                            onClick={() => setFormData({ ...formData, projectType: type })}
                            className={`p-3 text-[10px] font-mono font-bold text-left rounded-lg border transition-all cursor-pointer ${
                              formData.projectType === type
                                ? 'bg-brand-purple/10 border-brand-purple text-brand-purple'
                                : 'bg-[#0b0c10] border-zinc-900 text-gray-400 hover:border-zinc-800 hover:text-white'
                            }`}
                          >
                            {type.toUpperCase()}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget Tiers selector */}
                    <div className="space-y-2">
                      <label className="text-[9px] font-mono tracking-widest text-[#9c9ca4] uppercase block">
                        Estimated monthly budget tier
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {budgetRanges.map((range) => (
                          <button
                            type="button"
                            key={range}
                            onClick={() => setFormData({ ...formData, budget: range })}
                            className={`p-2.5 text-[9px] font-mono font-semibold text-center rounded-lg border transition-all cursor-pointer ${
                              formData.budget === range
                                ? 'bg-brand-cyan/10 border-brand-cyan text-brand-cyan font-bold'
                                : 'bg-[#0b0c10] border-zinc-900 text-gray-500 hover:text-white hover:border-zinc-800'
                            }`}
                          >
                            {range}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[9px] font-mono tracking-widest text-[#9c9ca4] uppercase block">
                        Project details / Vision parameters
                      </label>
                      <textarea
                        rows={4}
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        placeholder="Tell me about your channel style, raw file duration, and turnarounds..."
                        className="w-full px-4 py-3 text-xs bg-[#0b0c10] border border-zinc-800 rounded-lg text-white placeholder-zinc-600 focus:outline-none focus:border-brand-purple transition-all resize-none"
                      />
                    </div>

                    {/* Submit Work Form Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple hover:to-brand-purple text-white text-xs font-black uppercase tracking-wider shadow-lg flex items-center justify-center space-x-2.5 transition-all transform active:scale-95 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Preparing draft console...</span>
                        </>
                      ) : (
                        <>
                          <span>Work With Me</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500 text-emerald-400 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="font-display font-black text-2xl text-white mb-2 uppercase tracking-wide">
                      PROPOSAL DRAFTED!
                    </h3>
                    <p className="text-gray-400 text-xs max-w-sm leading-relaxed mb-6">
                      I have compiled your details and opened your default e-mail client to deliver your brief. If nothing opened, please send your project outline directly to:
                    </p>
                    
                    <span className="font-mono text-xs font-bold text-brand-cyan bg-[#0b0c10] border border-zinc-800 px-4 py-2 rounded-lg select-auto">
                      {PERSONAL_INFO.email}
                    </span>

                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-8 text-xs font-mono font-bold text-zinc-500 hover:text-white uppercase tracking-widest cursor-pointer border-none bg-transparent"
                    >
                      &larr; Draft another brief
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
