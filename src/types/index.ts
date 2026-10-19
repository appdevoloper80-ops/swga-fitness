export interface ProgramItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  alt: string;
  features: string[];
}

export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  isPopular: boolean;
  badge?: string;
  features: string[];
  ctaText: string;
  actionType: string;
  note: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  badge: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
  isSampleTag: boolean;
}

export interface TimelineItem {
  time: string;
  segment: string;
  tagline: string;
  description: string;
  vibe: string;
  peakLevel: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface DayPassResult {
  name: string;
  email: string;
  phone: string;
  passCode: string;
  validUntil: string;
}
