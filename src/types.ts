export interface WorkItem {
  id: string;
  title: string;
  category: 'Podcast' | 'Cinematic' | 'Short' | 'Showcase';
  description: string;
  videoUrl: string; // YouTube embed URL or watch link
  youtubeId: string; // The specific YT ID for embedding if applicable
  metrics?: {
    label: string;
    value: string;
  };
  tags: string[];
  thumbnail: string;
  softwareUsed: string[];
}

export interface SkillItem {
  name: string;
  percentage: number;
  description: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  items: SkillItem[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company?: string;
  text: string;
  rating: number;
}
