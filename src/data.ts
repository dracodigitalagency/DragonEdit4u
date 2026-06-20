import { WorkItem, SkillCategory, Testimonial } from './types';

export const PERSONAL_INFO = {
  name: 'Dragon',
  title: 'Cinematic Editor & Podcast Specialist',
  shortBio: 'Transforming raw footage into high-retention digital assets. Specializing in seamless storytelling, cinematic visual transitions, and engaging short-form/long-form content for top creators and brands.',
  experienceYears: 5,
  completedProjects: '300+',
  totalViews: '35M+',
  averageRetention: '84%',
  email: 'dracodigitalagency@gmail.com',
  youtubeChannel: 'https://youtube.com/@dragon_edit4u?si=_nHGeWlyPDOzfbSH',
  instagram: 'https://instagram.com/',
  twitter: 'https://twitter.com/',
  behance: 'https://behance.net/',
  github: 'https://github.com/',
  aboutLong: 'I am Dragon, a professional video editor and digital storyteller dedicated to crafting high-retention cinematic assets and podcasts. In a digital world where attention is the ultimate currency, standard editing is no longer enough. On my official platform @Dragon_edit4u, I explore the science of high-retention visual mechanics. I help world-class creators, podcasters, and brands hook their audience in the first 3 seconds, structure masterclass pacing, and render television-grade sound design, foley work, and coloring.',
  journeyBulletPoints: [
    '5+ years of production and post-production experience.',
    'Engineered visual hooks driving viral retention metrics exceeding 75% average watch times.',
    'Curating modern aesthetic styles tailored to individual brand voices—ranging from raw cinematic documentaries to vibrant, fast-paced high-impact educational shorts.',
    'Trusted partner for multiple creators, translating complex ideas into visually rich, easily digestible visual narratives.'
  ]
};

export const PORTFOLIO_ITEMS: WorkItem[] = [
  {
    id: 'work-1',
    title: 'Elite Podcast Edit - Cinematic Multi-Angle & Lighting Masterclass',
    category: 'Podcast',
    description: 'A premium, high-production podcast edit utilizing cinematic coloring, smart kinetic text overlays, custom sound effects, and tailored sound staging. Optimized for maximum user watch-time on trending subjects.',
    videoUrl: 'https://www.youtube.com/embed/videoseries?list=UU-lGvH95O9u-tPzV9z_X__w',
    youtubeId: 'videoseries?list=UU-lGvH95O9u-tPzV9z_X__w', // Loads their standard live channel uploads playlist!
    metrics: {
      label: 'Watch-Time Retention',
      value: '840K+ Views'
    },
    tags: ['Podcast Editing', 'Multi-Angle', 'Dynamic Audio', 'Color Grading'],
    thumbnail: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
    softwareUsed: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Adobe Audition']
  },
  {
    id: 'work-2',
    title: 'Viral Shorts Mastery - Seamless Transition Mechanics',
    category: 'Short',
    description: 'A viral-style high-impact short form edit designed for mobile platforms like TikTok, YouTube Shorts, and Instagram Reels. Outfitted with high-speed micro-cuts, dynamic subtitles, emoji tracking, and SFX cueing.',
    videoUrl: 'https://www.youtube.com/embed/videoseries?list=UU-lGvH95O9u-tPzV9z_X__w',
    youtubeId: 'videoseries?list=UU-lGvH95O9u-tPzV9z_X__w',
    metrics: {
      label: 'Shorts Reach',
      value: '2.4M Views'
    },
    tags: ['Shorts', 'Kinetic Typography', 'Sound Design', 'Reels Format'],
    thumbnail: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
    softwareUsed: ['CapCut Pro', 'After Effects', 'Premiere Pro']
  },
  {
    id: 'work-3',
    title: 'The Art of Cinematic Storytelling & Audio Foley',
    category: 'Cinematic',
    description: 'A deep-dive editorial exploration of cinematic grading and natural atmosphere. Emphasizes emotional storytelling, pacing matched to orchestral strings, and custom environmental foley reconstruction.',
    videoUrl: 'https://www.youtube.com/embed/videoseries?list=UU-lGvH95O9u-tPzV9z_X__w',
    youtubeId: 'videoseries?list=UU-lGvH95O9u-tPzV9z_X__w',
    metrics: {
      label: 'Audience Score',
      value: '1.2M+ Views'
    },
    tags: ['Cinematic', 'Audio Foley', 'Seamless Transitions', 'Atmosphere'],
    thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c117e76a1?auto=format&fit=crop&w=800&q=80',
    softwareUsed: ['DaVinci Resolve', 'Premiere Pro', 'FL Studio']
  },
  {
    id: 'work-4',
    title: 'High-Retention Podcast Hook with Dynamic Captions & SFX',
    category: 'Podcast',
    description: 'A compilation of highly engaging moments from podcast interview series. Integrated multi-track master audio denoising, visual zoom-in cues to accentuate dramatic speaker moments, and slick intro transition sequences.',
    videoUrl: 'https://www.youtube.com/embed/videoseries?list=UU-lGvH95O9u-tPzV9z_X__w',
    youtubeId: 'videoseries?list=UU-lGvH95O9u-tPzV9z_X__w',
    metrics: {
      label: 'Avg Watch Time',
      value: '450K+ Views'
    },
    tags: ['Podcast Specialist', 'Audio Denoising', 'Multi-Cam Prep', 'Pacing'],
    thumbnail: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
    softwareUsed: ['Premiere Pro', 'Audition', 'DaVinci Resolve']
  },
  {
    id: 'work-5',
    title: 'Premium 8K Commercial Speed-Ramping B-Roll Showcase',
    category: 'Showcase',
    description: 'A high-octane 4K/8K grading and promotion film. Utilizes modern split-screen grids, glitch transitions, advanced velocity speed curves, and custom 3D text tracking for a state-of-the-art cinematic feel.',
    videoUrl: 'https://www.youtube.com/embed/videoseries?list=UU-lGvH95O9u-tPzV9z_X__w',
    youtubeId: 'videoseries?list=UU-lGvH95O9u-tPzV9z_X__w',
    metrics: {
      label: 'Agency Conversion',
      value: '1.5M+ Views'
    },
    tags: ['Promo Video', 'Glitch Art', 'Speed Ramping', 'Motion Graphics'],
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80',
    softwareUsed: ['After Effects', 'Blender', 'DaVinci Resolve']
  },
  {
    id: 'work-6',
    title: 'Celebrity Interview Deep-Dive - Multi-Cam Synced & Graded',
    category: 'Podcast',
    description: 'Expertly synched multi-angle double framing and scaling dynamics applied to high-profile talk shows and celebrity panels. Features graphical borders, custom 3D lower thirds, and vocalization boosters.',
    videoUrl: 'https://www.youtube.com/embed/videoseries?list=UU-lGvH95O9u-tPzV9z_X__w',
    youtubeId: 'videoseries?list=UU-lGvH95O9u-tPzV9z_X__w',
    metrics: {
      label: 'Total Audience Plays',
      value: '320K+ Views'
    },
    tags: ['Podcast Specialists', 'Split-Screen', 'Lower Thirds', 'Vocalization Boost'],
    thumbnail: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80',
    softwareUsed: ['Premiere Pro', 'After Effects']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Core Video Editing',
    icon: 'Film',
    items: [
      { name: 'Seamless Storytelling & Pacing', percentage: 95, description: 'Structuring raw footage into gripping acts with clear arcs and high retentive hooks.' },
      { name: 'Multi-Cam Synchronization', percentage: 92, description: 'Managing multi-view footage, leveling angles, and making continuous, clean camera shifts.' },
      { name: 'Speed Ramping & Transitions', percentage: 90, description: 'Injecting energy using modern cinematic cuts, frame blends, and custom velocity curves.' },
    ]
  },
  {
    title: 'Podcast & Audio Polish',
    icon: 'Mic',
    items: [
      { name: 'Foley & Sound Design', percentage: 88, description: 'Creating immersive custom ambient soundscapes, risers, hits, and realistic sound environments.' },
      { name: 'Voice Polish & Leveling', percentage: 94, description: 'Suppressing background hiss, boosting low frequencies, and leveling master dialog output.' },
      { name: 'Subtitles & Kinetic Fonts', percentage: 96, description: 'Creating stylized, high-speed subtitles tracking emojis, colors, and motion offsets for mobile.' },
    ]
  },
  {
    title: 'Finishing & Graphics',
    icon: 'Sparkles',
    items: [
      { name: 'Color Grading & Correction', percentage: 89, description: 'Stylizing raw profiles into rich, cinematic pallets matched to a dark, high-contrast visual mood.' },
      { name: 'Motion Graphics (2D & 3D)', percentage: 85, description: 'Rendering custom title sequences, title lower thirds, and animated graphical explainers.' },
      { name: 'Platform Export Optimization', percentage: 98, description: 'Compressing and exporting pristine high-bitrate outputs optimized for YouTube, Instagram, and web.' },
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Alexander Frost',
    role: 'Host of Frostbite podcast',
    company: 'Frost Media Group',
    text: 'Dragon completely revolutionized our editing pipeline. Our YouTube Shorts went from getting 5k views to averaging over 150k! The pacing is masterful, and his sound design adds a dimension we didn\'t know we were missing.',
    rating: 5
  },
  {
    id: 'test-2',
    author: 'Sarah Jenkins',
    role: 'Creative Director',
    company: 'Vanguard Digital',
    text: 'It\'s hard to find an editor who understands story rather than just flashy transitions. Dragon has both. He transformed a messy 2-hour interview into a highly structured, emotionally resonant 12-minute documentary masterpiece.',
    rating: 5
  },
  {
    id: 'test-3',
    author: 'Devon Patel',
    role: 'Tech Creator & Influencer',
    company: 'NextGen Tech',
    text: 'Fast, responsive, and insanely talented. Dragon delivers cuts that feel like Hollywood trailers. If you need clean podcast audio paired with energetic visual retention, Dragon is the ultimate specialist.',
    rating: 5
  }
];
