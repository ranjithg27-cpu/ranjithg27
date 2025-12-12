import { Users, Globe, Zap, ShieldCheck } from 'lucide-react';
import { CompetitorData, Persona, RoadmapPhase } from './types';

export const METRICS = [
  { label: "TAM (B2B Cross-Border)", value: "$20T", trend: "+5% YoY", trendUp: true, icon: Globe },
  { label: "Freelancer Earnings", value: "$4-6T", trend: "Global", trendUp: true, icon: Users },
  { label: "Target Settlement Time", value: "15s", trend: "vs 3-5 days", trendUp: true, icon: Zap },
  { label: "Target Cost", value: "<$0.05", trend: "vs $25-50", trendUp: true, icon: ShieldCheck },
];

export const COMPETITORS: CompetitorData[] = [
  { name: 'StableFlow', fees: 1, speed: 100, transparency: 100, automation: 100 }, // Scaled for visualization
  { name: 'USDT', fees: 20, speed: 80, transparency: 40, automation: 20 },
  { name: 'USDC', fees: 25, speed: 80, transparency: 90, automation: 30 },
  { name: 'PayPal', fees: 90, speed: 40, transparency: 50, automation: 10 },
  { name: 'Wise', fees: 40, speed: 60, transparency: 80, automation: 20 },
  { name: 'SWIFT/Bank', fees: 100, speed: 10, transparency: 10, automation: 0 },
];

export const PERSONAS: Persona[] = [
  {
    id: 'fiona',
    name: "Freelancer Fiona",
    role: "Senior Graphic Designer",
    location: "Manila, Philippines",
    image: "https://picsum.photos/200/200?random=1",
    painPoints: [
      "Loses 6–10% of income to fees & FX spreads",
      "Waits 3–7 days for withdrawals",
      "Anxiety around funds 'in transit'",
      "No tax automation or income splitting"
    ],
    goals: [
      "Keep more of her hard-earned money",
      "Instant access to cash for emergencies",
      "Simple, reliable way to save for taxes"
    ],
    quote: "I just want to get paid for my work without feeling like I'm donating 10% to the bank every time."
  },
  {
    id: 'eric',
    name: "Exporter Eric",
    role: "Textile Manufacturer Owner",
    location: "Istanbul, Turkey",
    image: "https://picsum.photos/200/200?random=2",
    painPoints: [
      "Working capital freezes for 5 days during transfers",
      "Cannot plan inventory due to cash flow delays",
      "Pays $25-50 per wire transfer",
      "Heavy manual reconciliation overhead"
    ],
    goals: [
      "Instant liquidity to buy raw materials",
      "Automated invoicing and payment tracking",
      "Transparent fees for his international clients"
    ],
    quote: "In this business, cash flow is oxygen. Waiting 5 days for a wire is like holding your breath for a week."
  }
];

export const ROADMAP: RoadmapPhase[] = [
  {
    phase: "Phase 1",
    title: "MVP – 'Digital Cash'",
    duration: "Month 0–3",
    goal: "Establish trust and core utility",
    deliverables: [
      "Stablecoin contract (audited)",
      "Basic wallet (send/receive)",
      "US & EU fiat on-ramps",
      "Core compliance (KYC/AML)",
      "Proof-of-reserve dashboard"
    ]
  },
  {
    phase: "Phase 2",
    title: "Payments Rail for Businesses",
    duration: "Month 4–6",
    goal: "Enable SME + freelancer productivity",
    deliverables: [
      "Full gasless transaction support",
      "SME Web Dashboard",
      "Bulk payouts",
      "Accounting integrations (QuickBooks)",
      "Early API for pilot partners"
    ]
  },
  {
    phase: "Phase 3",
    title: "Programmable Economy",
    duration: "Month 7–12",
    goal: "Introduce automation, developer ecosystem",
    deliverables: [
      "Escrow & Split payments",
      "No-code programmable workflows",
      "Public API & Regional expansion",
      "Compliance automation (risk scoring)",
      "Regional expansion (LATAM + SEA)"
    ]
  }
];