export interface Metric {
  label: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
  icon?: any;
}

export interface Persona {
  id: string;
  name: string;
  role: string;
  location: string;
  image: string;
  painPoints: string[];
  goals: string[];
  quote: string;
}

export interface CompetitorData {
  name: string;
  fees: number;
  speed: number; // in hours
  transparency: number; // 1-5 scale
  automation: number; // 1-5 scale
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  duration: string;
  goal: string;
  deliverables: string[];
}