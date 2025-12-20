import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';

const WebAppIllustration = () => (
  <div className="relative w-full h-36 flex items-center justify-center">
    {/* Backdrop glow - stronger cyan */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-500/15 via-cyan-400/8 to-transparent blur-2xl" />

    <div className="relative" style={{ transform: "rotate(-6deg)" }}>
      {/* Back window */}
      <div className="absolute top-8 left-8 w-32 h-24 rounded-lg bg-[#161616] border border-white/[0.03] shadow-2xl opacity-50">
        <div className="h-4 border-b border-white/[0.03] flex items-center px-2 gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/5" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/5" />
        </div>
        <div className="p-3 space-y-2">
          <div className="w-14 h-1.5 rounded bg-white/5" />
          <div className="w-10 h-1.5 rounded bg-white/[0.03]" />
        </div>
      </div>

      {/* Middle window */}
      <div className="absolute top-4 left-4 w-32 h-24 rounded-lg bg-[#1a1a1a] border border-white/5 shadow-2xl opacity-70">
        <div className="h-4 border-b border-white/5 flex items-center px-2 gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-white/15" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
        </div>
        <div className="p-3 space-y-2">
          <div className="w-16 h-1.5 rounded bg-white/10" />
          <div className="w-12 h-1.5 rounded bg-white/5" />
        </div>
      </div>

      {/* Front window with cyan accent */}
      <div className="relative w-32 h-24 rounded-lg bg-[#252525] border border-white/10 shadow-2xl">
        <div className="absolute -top-px left-4 right-4 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        <div className="h-4 border-b border-white/10 flex items-center px-2 gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
        </div>
        <div className="p-3 space-y-2">
          <div className="w-18 h-1.5 rounded bg-cyan-400/30" />
          <div className="w-12 h-1.5 rounded bg-white/15" />
          <div className="w-16 h-1.5 rounded bg-white/10" />
        </div>
      </div>
    </div>
  </div>
);

const SEOIllustration = () => (
  <div className="relative w-full h-36 flex items-center justify-center">
    {/* Violet backdrop glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-violet-500/15 via-violet-400/8 to-transparent blur-2xl" />

    {/* Minimal diagonal grid */}
    <svg className="absolute inset-0 w-full h-full">
      <line x1="30%" y1="25%" x2="70%" y2="75%" stroke="rgba(167,139,250,0.12)" strokeWidth="1" strokeDasharray="6 6" />
      <line x1="70%" y1="25%" x2="30%" y2="75%" stroke="rgba(167,139,250,0.12)" strokeWidth="1" strokeDasharray="6 6" />
      <circle cx="50%" cy="50%" r="4" fill="rgba(167,139,250,0.5)" />
    </svg>

    {/* Rising trend line */}
    <svg className="relative w-48 h-28" viewBox="0 0 192 112">
      <path
        d="M24 84 Q72 78 96 50 T168 18"
        stroke="rgba(167,139,250,0.6)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="168" cy="18" r="5" fill="rgb(167,139,250)" />
    </svg>

    {/* Label */}
    <div className="absolute top-10 right-16 px-2.5 py-1.5 rounded-md bg-[#1a1a1a] border border-violet-500/40 shadow-lg shadow-violet-500/10">
      <span className="text-violet-400 text-sm font-semibold">↑ 47%</span>
    </div>
  </div>
);

const AIBotIllustration = () => (
  <div className="relative w-full h-36 flex items-center justify-center">
    {/* Fuchsia backdrop glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-fuchsia-500/15 via-fuchsia-400/8 to-transparent blur-2xl" />

    {/* Dotted connection */}
    <svg className="absolute inset-0 w-full h-full">
      <line
        x1="38%"
        y1="35%"
        x2="62%"
        y2="60%"
        stroke="rgba(232,121,249,0.25)"
        strokeWidth="1.5"
        strokeDasharray="5 5"
      />
    </svg>

    <div className="relative">
      {/* User bubble */}
      <div className="absolute -top-8 -left-12 w-24 h-9 rounded-2xl rounded-bl-sm bg-[#1f1f1f] border border-white/10 shadow-lg">
        <div className="flex items-center gap-2 p-2.5">
          <div className="w-14 h-1.5 rounded bg-white/20" />
        </div>
      </div>

      {/* AI response bubble */}
      <div className="relative w-28 h-14 rounded-2xl rounded-br-sm bg-[#252525] border border-fuchsia-500/30 shadow-lg shadow-fuchsia-500/5">
        <div className="absolute -top-px left-4 right-4 h-px bg-gradient-to-r from-transparent via-fuchsia-400/40 to-transparent" />
        <div className="p-3 space-y-1.5">
          <div className="w-16 h-1.5 rounded bg-fuchsia-400/35" />
          <div className="w-12 h-1.5 rounded bg-fuchsia-400/20" />
        </div>
      </div>

      {/* Typing cursor */}
      <div className="absolute -bottom-5 left-3 flex items-center">
        <div className="w-0.5 h-5 bg-fuchsia-400/70 rounded-full" />
      </div>
    </div>
  </div>
);

const APIIllustration = () => (
  <div className="relative w-full h-36 flex items-center justify-center">
    {/* Purple backdrop glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/15 via-purple-400/8 to-transparent blur-2xl" />

    {/* Dotted box grid */}
    <svg className="absolute inset-0 w-full h-full">
      <line x1="28%" y1="32%" x2="72%" y2="32%" stroke="rgba(168,85,247,0.12)" strokeWidth="1" strokeDasharray="6 6" />
      <line x1="28%" y1="68%" x2="72%" y2="68%" stroke="rgba(168,85,247,0.12)" strokeWidth="1" strokeDasharray="6 6" />
      <line x1="28%" y1="32%" x2="28%" y2="68%" stroke="rgba(168,85,247,0.12)" strokeWidth="1" strokeDasharray="6 6" />
      <line x1="72%" y1="32%" x2="72%" y2="68%" stroke="rgba(168,85,247,0.12)" strokeWidth="1" strokeDasharray="6 6" />
    </svg>

    <div className="relative">
      {/* Connection arc */}
      <svg className="absolute -inset-10 w-40 h-28" viewBox="0 0 160 112">
        <path
          d="M24 56 Q80 20 136 56"
          stroke="rgba(168,85,247,0.5)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Left node */}
      <div className="absolute -left-14 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-purple-500/30 border-2 border-purple-400/60 shadow-lg shadow-purple-500/20" />

      {/* Right node */}
      <div className="absolute -right-14 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-purple-500/30 border-2 border-purple-400/60 shadow-lg shadow-purple-500/20" />

      {/* Center code label */}
      <div className="relative px-4 py-2 rounded-lg bg-[#1a1a1a] border border-purple-500/40 shadow-lg shadow-purple-500/10">
        <span className="text-purple-400 text-base font-mono font-semibold">{"{ }"}</span>
      </div>
    </div>
  </div>
);

const PaymentIllustration = () => (
  <div className="relative w-full h-36 flex items-center justify-center">
    {/* Emerald backdrop glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500/15 via-emerald-400/8 to-transparent blur-2xl" />

    <div className="relative" style={{ transform: "rotate(-4deg)" }}>
      {/* Back card */}
      <div className="absolute top-4 left-4 w-32 h-20 rounded-xl bg-[#1a1a1a] border border-white/5 shadow-xl" />

      {/* Front card */}
      <div className="relative w-32 h-20 rounded-xl bg-[#252525] border border-emerald-500/25 shadow-xl">
        <div className="absolute -top-px left-4 right-4 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
        <div className="p-3 space-y-2.5">
          <div className="w-7 h-5 rounded bg-emerald-500/30 border border-emerald-400/30" />
          <div className="flex gap-2">
            <div className="w-5 h-1.5 rounded bg-white/15" />
            <div className="w-5 h-1.5 rounded bg-white/15" />
            <div className="w-5 h-1.5 rounded bg-white/15" />
            <div className="w-5 h-1.5 rounded bg-white/15" />
          </div>
        </div>
      </div>

      {/* Checkmark accent */}
      <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-emerald-500/25 border-2 border-emerald-400/50 flex items-center justify-center shadow-lg shadow-emerald-500/20">
        <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    </div>
  </div>
);

const MobileIllustration = () => (
  <div className="relative w-full h-36 flex items-center justify-center">
    {/* Amber backdrop glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-amber-500/15 via-amber-400/8 to-transparent blur-2xl" />

    <div className="relative">
      {/* Phone */}
      <div className="relative w-20 h-36 rounded-2xl bg-[#1a1a1a] border border-white/10 shadow-xl">
        <div className="absolute -top-px left-4 right-4 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1.5 rounded-full bg-white/10" />

        {/* Screen glow element */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400/25 via-orange-400/15 to-transparent" />

        {/* UI lines */}
        <div className="absolute top-20 left-3 right-3 space-y-2">
          <div className="w-full h-1.5 rounded bg-white/12" />
          <div className="w-3/4 h-1.5 rounded bg-white/8" />
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-white/20" />
      </div>

      {/* Notification badge */}
      <div className="absolute -top-2 -right-6 px-2 py-1 rounded-md bg-amber-500/35 border border-amber-400/50 shadow-lg shadow-amber-500/20">
        <span className="text-amber-300 text-xs font-bold">NEW</span>
      </div>
    </div>
  </div>
);

const features = [
  {
    id: 1,
    title: "Web Applications",
    shortDescription: "Custom web apps built in days, not months.",
    fullContent: {
      intro: "Custom web apps built fast. You tell us what you need, we build it, and you launch.",
      timeline: [
        { step: "Day 1", desc: "Discovery call - map features" },
        { step: "Day 2-3", desc: "We build, you review daily" },
        { step: "Day 4", desc: "Launch & hand over keys" }
      ],
      included: [
        "Live web app in 3-5 days",
        "Admin dashboard",
        "Mobile-responsive",
        "Source code ownership"
      ],
      timeframe: "3-5 days from kickoff to launch",
      example: "Client needed a booking system - built and launched in 72 hours."
    },
    illustration: <WebAppIllustration />,
    bulletPoints: ["3-5 day delivery", "Admin dashboard", "Mobile-responsive", "Source code yours"],
    accentColor: "cyan",
  },
  {
    id: 2,
    title: "SEO & Content",
    shortDescription: "Content that ranks in Google and gets you customers.",
    fullContent: {
      intro: "We write content that shows up when people search. AI drafts it, our team edits it, you approve it.",
      process: [
        "Find what people search for",
        "AI writes, humans edit",
        "You approve before publishing",
        "Rankings climb over 60-90 days"
      ],
      included: [
        "10-20 articles per month",
        "Keyword research included",
        "Monthly traffic reports",
        "Unlimited edits"
      ],
      timeframe: "First content published in 1 week, rankings appear in 30-90 days",
      example: "Coffee shop went from page 3 to position 2 for 'best coffee in Austin' in 8 weeks."
    },
    illustration: <SEOIllustration />,
    bulletPoints: ["10-20 articles/month", "Keyword research", "Traffic reports", "Unlimited edits"],
    accentColor: "violet",
  },
  {
    id: 3,
    title: "Custom AI Bots",
    shortDescription: "AI trained on your docs, answers questions 24/7.",
    fullContent: {
      intro: "Train AI on your FAQs and docs. It answers customer questions instantly, hands off to humans when stumped.",
      flow: [
        "Customer asks question",
        "AI answers (80% of the time)",
        "If stuck → Hands to your team",
        "You reply with full context"
      ],
      included: [
        "AI trained on your content",
        "Deploy anywhere (website, Slack, WhatsApp)",
        "Live in 5-7 days",
        "Update knowledge anytime"
      ],
      timeframe: "Live in 5-7 days",
      example: "Support team answered same 20 questions daily - AI now handles 80% automatically."
    },
    illustration: <AIBotIllustration />,
    bulletPoints: ["Trained on your docs", "24/7 answers", "Hands to humans", "Live in 5-7 days"],
    accentColor: "fuchsia",
  },
  {
    id: 4,
    title: "API Integrations",
    shortDescription: "Connect your tools so data flows automatically.",
    fullContent: {
      intro: "Connect your tools so data flows automatically. No more copy-paste between systems.",
      workflows: [
        "CRM deal closes → Invoice sent → Accounting updated",
        "New signup → Welcome email → Task created",
        "Order placed → Inventory updated → Shipping label"
      ],
      included: [
        "Connect any 2+ systems",
        "Automatic data sync",
        "Error notifications",
        "Live in 1-2 weeks"
      ],
      timeframe: "Most integrations live in 1-2 weeks",
      example: "Client's CRM now talks to accounting - invoices generate automatically when deals close."
    },
    illustration: <APIIllustration />,
    bulletPoints: ["Connect any tools", "Auto data sync", "Error alerts", "1-2 week delivery"],
    accentColor: "purple",
  },
  {
    id: 5,
    title: "Payment Systems",
    shortDescription: "Accept payments with Stripe. Fast checkouts that convert.",
    fullContent: {
      intro: "Accept payments with Stripe. One-time, subscriptions, or payment plans. We optimize so fewer people abandon checkout.",
      optimization: [
        "Before: 8 fields, 3 pages, 45 seconds → 40% abandon",
        "After: 3 fields, 1 page, 12 seconds → 18% abandon"
      ],
      included: [
        "Stripe checkout integration",
        "Customer payment portal",
        "Auto invoices & receipts",
        "Revenue dashboard"
      ],
      timeframe: "Live in 5-7 days",
      example: "Reduced checkout abandonment from 40% to 18% by simplifying the payment flow."
    },
    illustration: <PaymentIllustration />,
    bulletPoints: ["Stripe integration", "One-time & subscriptions", "Auto invoices", "5-7 days live"],
    accentColor: "emerald",
  },
  {
    id: 6,
    title: "Mobile Apps",
    shortDescription: "iOS & Android apps from one codebase.",
    fullContent: {
      intro: "Build your app once, launch on both iPhone and Android. We handle App Store submissions too.",
      timeline: [
        { week: "Week 1-2", desc: "Design & plan features" },
        { week: "Week 3-5", desc: "Build for both platforms" },
        { week: "Week 6-7", desc: "Polish & test" },
        { week: "Week 8", desc: "Submit to App Stores" }
      ],
      included: [
        "Apps for iOS + Android",
        "Push notifications",
        "Works offline",
        "App Store submissions handled"
      ],
      timeframe: "6-8 weeks from design to App Store approval",
      example: "Fitness studio needed class booking app - built, submitted, approved in 7 weeks."
    },
    illustration: <MobileIllustration />,
    bulletPoints: ["iOS + Android", "Push notifications", "Offline support", "6-8 weeks"],
    accentColor: "amber",
  },
];

const getAccentColorClasses = (accentColor: string) => {
  const colors: Record<string, string> = {
    cyan: "bg-cyan-400",
    violet: "bg-violet-400",
    fuchsia: "bg-fuchsia-400",
    purple: "bg-purple-400",
    emerald: "bg-emerald-400",
    amber: "bg-amber-400",
  };
  return colors[accentColor] || "bg-white";
};

const getAccentBorderGlow = (accentColor: string) => {
  const glows: Record<string, string> = {
    cyan: "shadow-cyan-500/20",
    violet: "shadow-violet-500/20",
    fuchsia: "shadow-fuchsia-500/20",
    purple: "shadow-purple-500/20",
    emerald: "shadow-emerald-500/20",
    amber: "shadow-amber-500/20",
  };
  return glows[accentColor] || "";
};

export function SolutionsSection() {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4 tracking-tight">
            Everything You Need to Ship
          </h2>
          <p className="text-lg text-gray-400">
            From concept to launch, we've got you covered.
          </p>
        </motion.div>

        {/* Feature Cards - 3 Column Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {features.map((feature) => (
            <div key={feature.id}>
              {selectedFeature !== feature.id && (
                <motion.div
                  layoutId={`feature-${feature.id}`}
                  className={`relative bg-[#1a1a1a]/50 p-3 cursor-pointer group h-full border border-[rgba(255,255,255,0.03)] rounded-[20px] transition-all duration-300 hover:bg-[#1f1f1f]/70 hover:border-white/10 hover:shadow-lg hover:shadow-white/5 hover:-translate-y-1 ${getAccentBorderGlow(feature.accentColor)}`}
                  onClick={() => setSelectedFeature(feature.id)}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                    duration: 1.2,
                  }}
                >
                  <button className="absolute bottom-3 right-3 w-7 h-7 rounded-full border border-[#404040] flex items-center justify-center transition-all duration-200 group-hover:bg-white/10 group-hover:border-white/20">
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#666666] group-hover:text-white transition-colors duration-200" />
                  </button>

                  <motion.div layoutId={`illustration-${feature.id}`}>{feature.illustration}</motion.div>

                  <div className="mt-3">
                    <motion.h3
                      layoutId={`title-${feature.id}`}
                      className="text-base leading-tight h-10 flex items-center text-balance font-medium"
                    >
                      {feature.title}
                    </motion.h3>
                    <p className="text-[#8b8b8b] text-xs mt-1 mb-2">{feature.shortDescription}</p>
                    <ul className="space-y-1 mt-2">
                      {feature.bulletPoints.slice(0, 3).map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[#8b8b8b] text-xs">
                          <span className={`w-1.5 h-1.5 rounded-full ${getAccentColorClasses(feature.accentColor)}`} />
                          {point}
                        </li>
                      ))}
                      {feature.bulletPoints.length > 3 && (
                        <li className="text-[#666666] text-[10px] mt-0.5">+{feature.bulletPoints.length - 3} more</li>
                      )}
                    </ul>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedFeature && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-[#0d0d0d]/95 backdrop-blur-sm z-40"
              onClick={() => setSelectedFeature(null)}
            />

            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedFeature(null)}
            >
              <motion.div
                layoutId={`feature-${selectedFeature}`}
                className="bg-[#1a1a1a] rounded-2xl p-6 max-w-lg w-full max-h-[85vh] border border-[#2a2a2a] relative overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  duration: 1.2,
                }}
              >
                {/* Close button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  onClick={() => setSelectedFeature(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full border border-[#404040] flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                >
                  <X className="w-3.5 h-3.5 text-[#8b8b8b] hover:text-white" />
                </motion.button>

                {features.find((f) => f.id === selectedFeature) && (
                  <>
                    <motion.div
                      layoutId={`illustration-${selectedFeature}`}
                      className="relative w-full h-32 flex items-center justify-center mb-4"
                    >
                      {features.find((f) => f.id === selectedFeature)?.illustration}
                    </motion.div>

                    <div className="mb-4">
                      <motion.h2
                        layoutId={`title-${selectedFeature}`}
                        className="text-2xl tracking-tight font-semibold leading-tight"
                        transition={{
                          type: "spring",
                          stiffness: 120,
                          damping: 20,
                          duration: 1.2,
                        }}
                      >
                        {features.find((f) => f.id === selectedFeature)?.title}
                      </motion.h2>
                    </div>

                    {/* Additional content that appears only in modal */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                      className="space-y-4 text-left"
                    >
                      {/* Intro */}
                      {features.find((f) => f.id === selectedFeature)?.fullContent.intro && (
                        <p className="text-white text-sm leading-relaxed">
                          {features.find((f) => f.id === selectedFeature)?.fullContent.intro}
                        </p>
                      )}

                      {/* Timeline (Web Apps & Mobile Apps) */}
                      {features.find((f) => f.id === selectedFeature)?.fullContent.timeline && (
                        <div className="bg-[#0d0d0d]/50 rounded-lg p-3 border border-white/5">
                          <div className="space-y-2">
                            {features.find((f) => f.id === selectedFeature)?.fullContent.timeline.map((item: any, idx: number) => (
                              <div key={idx} className="flex items-start gap-3">
                                <span className={`text-xs font-semibold ${getAccentColorClasses(features.find((f) => f.id === selectedFeature)?.accentColor || 'white')} text-black px-2 py-0.5 rounded`}>
                                  {item.step || item.week}
                                </span>
                                <span className="text-[#8b8b8b] text-xs">
                                  {item.desc}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Process (SEO) */}
                      {features.find((f) => f.id === selectedFeature)?.fullContent.process && (
                        <div className="bg-[#0d0d0d]/50 rounded-lg p-3 border border-white/5">
                          <ol className="space-y-1.5">
                            {features.find((f) => f.id === selectedFeature)?.fullContent.process.map((step: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-2 text-[#8b8b8b] text-xs">
                                <span className={`${getAccentColorClasses(features.find((f) => f.id === selectedFeature)?.accentColor || 'white')} text-black font-bold w-4 h-4 rounded-full flex items-center justify-center text-[10px] flex-shrink-0 mt-0.5`}>
                                  {idx + 1}
                                </span>
                                {step}
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}

                      {/* Flow (AI Bots) */}
                      {features.find((f) => f.id === selectedFeature)?.fullContent.flow && (
                        <div className="bg-[#0d0d0d]/50 rounded-lg p-3 border border-white/5">
                          <div className="space-y-2">
                            {features.find((f) => f.id === selectedFeature)?.fullContent.flow.map((step: string, idx: number) => (
                              <div key={idx} className="flex items-center gap-2">
                                <span className="text-[#8b8b8b] text-xs">{step}</span>
                                {idx < (features.find((f) => f.id === selectedFeature)?.fullContent.flow.length || 0) - 1 && (
                                  <span className="text-[#666666]">↓</span>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Workflows (API Integrations) */}
                      {features.find((f) => f.id === selectedFeature)?.fullContent.workflows && (
                        <div className="bg-[#0d0d0d]/50 rounded-lg p-3 border border-white/5">
                          <p className="text-white text-xs font-semibold mb-2">Example Workflows:</p>
                          <div className="space-y-1.5">
                            {features.find((f) => f.id === selectedFeature)?.fullContent.workflows.map((workflow: string, idx: number) => (
                              <div key={idx} className="text-[#8b8b8b] text-xs">
                                {workflow}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Optimization (Payment Systems) */}
                      {features.find((f) => f.id === selectedFeature)?.fullContent.optimization && (
                        <div className="bg-[#0d0d0d]/50 rounded-lg p-3 border border-white/5">
                          <div className="space-y-1.5">
                            {features.find((f) => f.id === selectedFeature)?.fullContent.optimization.map((line: string, idx: number) => (
                              <div key={idx} className="text-[#8b8b8b] text-xs">
                                {line}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* What's Included */}
                      {features.find((f) => f.id === selectedFeature)?.fullContent.included && (
                        <div className="bg-[#0d0d0d]/50 rounded-lg p-3 border border-white/5">
                          <p className="text-white text-xs font-semibold mb-2">What's Included:</p>
                          <ul className="space-y-1">
                            {features.find((f) => f.id === selectedFeature)?.fullContent.included.map((item: string, idx: number) => (
                              <li key={idx} className="flex items-center gap-2 text-[#8b8b8b] text-xs">
                                <span className={`w-1 h-1 rounded-full ${getAccentColorClasses(features.find((f) => f.id === selectedFeature)?.accentColor || 'white')}`} />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Timeframe */}
                      {features.find((f) => f.id === selectedFeature)?.fullContent.timeframe && (
                        <div className="border-t border-white/5 pt-3">
                          <p className="text-[#8b8b8b] text-xs">
                            <span className="text-white font-semibold">Timeline:</span> {features.find((f) => f.id === selectedFeature)?.fullContent.timeframe}
                          </p>
                        </div>
                      )}

                      {/* Real Example */}
                      {features.find((f) => f.id === selectedFeature)?.fullContent.example && (
                        <div className="bg-[#0d0d0d]/50 rounded-lg p-3 border border-white/5">
                          <p className="text-[#8b8b8b] text-xs italic">
                            "{features.find((f) => f.id === selectedFeature)?.fullContent.example}"
                          </p>
                        </div>
                      )}
                    </motion.div>
                  </>
                )}
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
