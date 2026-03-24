"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Brain,
  Shield,
  Server,
  Users,
  Zap,
  CheckCircle2,
  Clock,
  Layers,
  GitBranch,
  Database,
  Cloud,
  Lock,
  Rocket,
  Target,
  ArrowRight,
  ChevronRight,
  Monitor,
  Cpu,
  Globe,
  TrendingUp,
  Calendar,
  MessageSquare,
  Wand2,
  Search,
  Box,
  Workflow,
  AlertTriangle,
  CheckCheck,
  Sparkles,
  ShieldCheck,
  IndianRupee,
  Blocks,
  Menu,
  X,
  Hash,
  BookOpen,
  Lightbulb,
  Info,
  Copy,
  Check,
  ChevronDown,
  TestTube,
  KeyRound,
  Eye,
  Gauge,
  type LucideIcon,
} from "lucide-react";

/* ================================================================
   TYPES
   ================================================================ */

interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  children?: { id: string; label: string }[];
}

interface TeamMember {
  role: string;
  count: number;
  monthly: string;
  total: string;
  responsibilities: string;
}

interface InfraItem {
  name: string;
  monthly: string;
  total: string;
  specs: string;
}

/* ================================================================
   NAVIGATION
   ================================================================ */

const navigation: NavItem[] = [
  {
    id: "introduction",
    label: "Introduction",
    icon: BookOpen,
    children: [
      { id: "project-overview", label: "Project Overview" },
      { id: "what-we-build", label: "What We Are Building" },
      { id: "technical-justification", label: "Technical Justification" },
    ],
  },
  {
    id: "core-features",
    label: "Core Features",
    icon: Sparkles,
    children: [
      { id: "ai-code-completion", label: "AI Code Completion" },
      { id: "codebase-chat", label: "Codebase Chat" },
      { id: "inline-editing", label: "Inline Editing" },
      { id: "semantic-search", label: "Semantic Search" },
      { id: "code-review", label: "AI Code Review" },
    ],
  },
  {
    id: "architecture",
    label: "Architecture",
    icon: Blocks,
    children: [
      { id: "system-design", label: "System Design" },
      { id: "context-engine", label: "Context Engine (RAG)" },
      { id: "tech-stack", label: "Tech Stack" },
    ],
  },
  {
    id: "phase-1",
    label: "Phase 1: MVP",
    icon: Rocket,
    children: [
      { id: "mvp-overview", label: "Overview" },
      { id: "mvp-team", label: "Engineering Team" },
      { id: "mvp-infrastructure", label: "Infrastructure" },
      { id: "mvp-total", label: "Total Cost" },
    ],
  },
  {
    id: "phase-2",
    label: "Phase 2: Production",
    icon: Globe,
    children: [
      { id: "prod-overview", label: "Overview" },
      { id: "prod-team", label: "Engineering Team" },
      { id: "prod-infrastructure", label: "Infrastructure" },
      { id: "prod-security", label: "Security & Testing" },
      { id: "prod-rnd", label: "R&D" },
      { id: "prod-total", label: "Total Cost" },
    ],
  },
  {
    id: "timeline",
    label: "Development Timeline",
    icon: Calendar,
    children: [
      { id: "timeline-roadmap", label: "18-Month Roadmap" },
      { id: "milestones", label: "Milestones" },
    ],
  },
  {
    id: "budget",
    label: "Budget Summary",
    icon: IndianRupee,
    children: [
      { id: "total-investment", label: "Total Investment" },
      { id: "cost-breakdown", label: "Cost Breakdown" },
      { id: "payment-schedule", label: "Payment Schedule" },
    ],
  },
  {
    id: "risks",
    label: "Technical Risks",
    icon: ShieldCheck,
    children: [
      { id: "identified-risks", label: "Identified Risks" },
      { id: "ai-cost-control", label: "AI Cost Control" },
    ],
  },
  {
    id: "deliverables",
    label: "Deliverables",
    icon: Box,
  },
  {
    id: "next-steps",
    label: "Next Steps",
    icon: ArrowRight,
  },
];

/* ================================================================
   DATA - DEVELOPMENT COSTS ONLY
   ================================================================ */

// MVP Team (6 months)
const mvpTeam: TeamMember[] = [
  {
    role: "Tech Lead / Architect",
    count: 1,
    monthly: "₹1,80,000",
    total: "₹10,80,000",
    responsibilities: "System architecture, VS Code fork setup, code reviews, technical decisions",
  },
  {
    role: "Senior Backend Engineer",
    count: 2,
    monthly: "₹1,20,000",
    total: "₹14,40,000",
    responsibilities: "API development, authentication, database design, real-time sync",
  },
  {
    role: "ML / AI Engineer",
    count: 1,
    monthly: "₹1,40,000",
    total: "₹8,40,000",
    responsibilities: "RAG pipeline, embeddings, LLM integration, context engine development",
  },
  {
    role: "Frontend / Electron Engineer",
    count: 1,
    monthly: "₹1,00,000",
    total: "₹6,00,000",
    responsibilities: "VS Code UI modifications, React components, chat interface, diff viewer",
  },
  {
    role: "DevOps Engineer",
    count: 1,
    monthly: "₹1,00,000",
    total: "₹6,00,000",
    responsibilities: "CI/CD pipelines, cloud infrastructure, Kubernetes, monitoring setup",
  },
  {
    role: "UI/UX Designer",
    count: 1,
    monthly: "₹80,000",
    total: "₹4,80,000",
    responsibilities: "IDE interface design, interaction patterns, design system, prototyping",
  },
];

// MVP Infrastructure (6 months)
const mvpInfra: InfraItem[] = [
  {
    name: "Cloud Hosting (AWS/GCP)",
    monthly: "₹40,000",
    total: "₹2,40,000",
    specs: "Compute instances, managed databases, object storage, load balancers",
  },
  {
    name: "Vector Database (Pinecone)",
    monthly: "₹30,000",
    total: "₹1,80,000",
    specs: "Code embeddings storage, semantic similarity search, 1M+ vectors",
  },
  {
    name: "OpenAI API (GPT-4o)",
    monthly: "₹1,00,000",
    total: "₹6,00,000",
    specs: "Primary LLM for completions, chat, inline editing (~500 beta users)",
  },
  {
    name: "Anthropic API (Claude 3.5)",
    monthly: "₹60,000",
    total: "₹3,60,000",
    specs: "Secondary LLM for complex reasoning, long-context tasks",
  },
  {
    name: "Embedding API (OpenAI)",
    monthly: "₹20,000",
    total: "₹1,20,000",
    specs: "text-embedding-3 for code chunk vectorization",
  },
  {
    name: "Redis (Caching)",
    monthly: "₹15,000",
    total: "₹90,000",
    specs: "Semantic cache, session management, rate limiting",
  },
  {
    name: "Monitoring (DataDog/Sentry)",
    monthly: "₹15,000",
    total: "₹90,000",
    specs: "APM, error tracking, log aggregation, alerting",
  },
  {
    name: "GitHub / Dev Tools",
    monthly: "₹10,000",
    total: "₹60,000",
    specs: "Repository hosting, CI/CD minutes, code scanning",
  },
];

// Production Team (12 months)
const prodTeam: TeamMember[] = [
  {
    role: "AI / ML Engineers",
    count: 3,
    monthly: "₹1,30,000",
    total: "₹46,80,000",
    responsibilities: "Context engine optimization, model fine-tuning, RAG improvements, prompt engineering",
  },
  {
    role: "IDE Core Engineers",
    count: 4,
    monthly: "₹1,20,000",
    total: "₹57,60,000",
    responsibilities: "VS Code fork maintenance, Electron optimization, LSP development, extensions API",
  },
  {
    role: "Backend Engineers",
    count: 3,
    monthly: "₹1,10,000",
    total: "₹39,60,000",
    responsibilities: "API scaling, billing integration, analytics pipeline, real-time features",
  },
  {
    role: "Frontend Engineers",
    count: 2,
    monthly: "₹1,00,000",
    total: "₹24,00,000",
    responsibilities: "Web dashboard, settings panel, onboarding flows, documentation site",
  },
  {
    role: "DevOps / SRE Engineers",
    count: 2,
    monthly: "₹1,20,000",
    total: "₹28,80,000",
    responsibilities: "Kubernetes orchestration, auto-scaling, 99.9% uptime, disaster recovery",
  },
  {
    role: "QA Engineers",
    count: 2,
    monthly: "₹80,000",
    total: "₹19,20,000",
    responsibilities: "Automated testing, regression suites, performance testing, security testing",
  },
  {
    role: "Product Designer",
    count: 1,
    monthly: "₹1,00,000",
    total: "₹12,00,000",
    responsibilities: "UX research, interaction design, design system evolution, user testing",
  },
  {
    role: "Engineering Manager / CTO",
    count: 1,
    monthly: "₹2,50,000",
    total: "₹30,00,000",
    responsibilities: "Technical leadership, architecture decisions, team management, roadmap",
  },
];

// Production Infrastructure (12 months)
const prodInfra: InfraItem[] = [
  {
    name: "Cloud Hosting (Production)",
    monthly: "₹4,00,000",
    total: "₹48,00,000",
    specs: "Multi-AZ deployment, auto-scaling, load balancers, CDN, WAF",
  },
  {
    name: "AI Inference (OpenAI + Claude)",
    monthly: "₹10,00,000",
    total: "₹1,20,00,000",
    specs: "10k users × 30 req/day with 80% cache hit rate, model routing",
  },
  {
    name: "Vector Database (Enterprise)",
    monthly: "₹1,50,000",
    total: "₹18,00,000",
    specs: "Enterprise Pinecone or self-hosted Qdrant cluster, 10M+ vectors",
  },
  {
    name: "PostgreSQL (Managed)",
    monthly: "₹50,000",
    total: "₹6,00,000",
    specs: "User data, billing, analytics, high availability, backups",
  },
  {
    name: "Redis Cluster",
    monthly: "₹40,000",
    total: "₹4,80,000",
    specs: "Distributed caching, semantic cache, session management",
  },
  {
    name: "Monitoring & Observability",
    monthly: "₹50,000",
    total: "₹6,00,000",
    specs: "Full-stack APM, distributed tracing, log aggregation, alerting",
  },
  {
    name: "CI/CD & Dev Tools",
    monthly: "₹30,000",
    total: "₹3,60,000",
    specs: "GitHub Enterprise, automated testing, deployment pipelines",
  },
  {
    name: "Backup & DR",
    monthly: "₹30,000",
    total: "₹3,60,000",
    specs: "Cross-region replication, point-in-time recovery, DR testing",
  },
];

// Security & Testing Costs (12 months)
const securityCosts = [
  { name: "Penetration Testing", cost: "₹8,00,000", desc: "Quarterly third-party security audits (4 per year)" },
  { name: "Security Tools", cost: "₹6,00,000", desc: "SAST, DAST, dependency scanning, secrets management" },
  { name: "SOC 2 Preparation", cost: "₹15,00,000", desc: "Compliance implementation, documentation, audit prep" },
  { name: "Bug Bounty Program", cost: "₹5,00,000", desc: "Platform fees and bounty payouts" },
];

// R&D Costs (12 months)
const rndCosts = [
  { name: "Model Fine-Tuning", cost: "₹20,00,000", desc: "Custom models trained on code patterns, GPU compute" },
  { name: "GPU Infrastructure", cost: "₹15,00,000", desc: "Self-hosted Llama/Mistral for cost optimization" },
  { name: "RAG Research", cost: "₹10,00,000", desc: "Advanced retrieval algorithms, re-ranking models" },
  { name: "Performance R&D", cost: "₹5,00,000", desc: "Indexing optimization, latency reduction experiments" },
];

/* ================================================================
   COMPONENTS
   ================================================================ */

function Callout({
  type = "info",
  title,
  children,
}: {
  type?: "info" | "warning" | "success" | "note";
  title?: string;
  children: React.ReactNode;
}) {
  const styles = {
    info: {
      border: "border-blue-500/20",
      bg: "bg-blue-500/5",
      icon: <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />,
      titleColor: "text-blue-400",
    },
    warning: {
      border: "border-yellow-500/20",
      bg: "bg-yellow-500/5",
      icon: <AlertTriangle className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />,
      titleColor: "text-yellow-400",
    },
    success: {
      border: "border-emerald-500/20",
      bg: "bg-emerald-500/5",
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />,
      titleColor: "text-emerald-400",
    },
    note: {
      border: "border-zinc-500/20",
      bg: "bg-zinc-500/5",
      icon: <Lightbulb className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />,
      titleColor: "text-zinc-300",
    },
  };
  const s = styles[type];

  return (
    <div className={`${s.border} ${s.bg} border rounded-lg p-4 my-6`}>
      <div className="flex items-start gap-3">
        {s.icon}
        <div className="min-w-0">
          {title && <p className={`font-semibold text-sm ${s.titleColor} mb-1`}>{title}</p>}
          <div className="text-sm text-zinc-400 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

function CodeBlock({ code, language = "text" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-4 rounded-lg border border-zinc-800 bg-zinc-950 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-900/50">
        <span className="text-[11px] text-zinc-500 font-mono uppercase">{language}</span>
        <button onClick={handleCopy} className="text-zinc-500 hover:text-zinc-300 transition-colors">
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono text-zinc-300 leading-relaxed">{code}</pre>
    </div>
  );
}

function DataTable({
  headers,
  rows,
  footer,
}: {
  headers: string[];
  rows: string[][];
  footer?: string[];
}) {
  return (
    <div className="my-6 overflow-x-auto rounded-lg border border-zinc-800">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-zinc-800 bg-zinc-900/60">
            {headers.map((h, i) => (
              <th
                key={i}
                className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider text-zinc-500 ${
                  i === 0 ? "text-left" : i === headers.length - 1 ? "text-right" : "text-center"
                }`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-zinc-800/50 hover:bg-zinc-800/20 transition-colors">
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`py-3 px-4 ${
                    ci === 0
                      ? "text-left font-medium text-white"
                      : ci === row.length - 1
                        ? "text-right font-mono text-white font-semibold text-xs"
                        : "text-center text-zinc-400 font-mono text-xs"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {footer && (
          <tfoot>
            <tr className="border-t-2 border-zinc-700 bg-zinc-900/40">
              {footer.map((f, i) => (
                <td
                  key={i}
                  className={`py-3 px-4 font-bold ${
                    i === footer.length - 1 ? "text-right text-white font-mono" : i === 0 ? "text-left text-zinc-300" : "text-center text-zinc-400"
                  }`}
                >
                  {f}
                </td>
              ))}
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, children }: { icon: LucideIcon; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-5 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg bg-white/5 border border-zinc-800 flex items-center justify-center shrink-0">
          <Icon className="w-4 h-4 text-zinc-300" />
        </div>
        <div>
          <h4 className="font-semibold text-white text-sm mb-1.5">{title}</h4>
          <div className="text-sm text-zinc-400 leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4 text-center">
      <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">{label}</p>
      <p className="text-2xl font-bold text-white font-mono">{value}</p>
      {sub && <p className="text-xs text-zinc-500 mt-1">{sub}</p>}
    </div>
  );
}

function CostCard({ title, amount, items }: { title: string; amount: string; items: { name: string; cost: string; desc: string }[] }) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-5">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-semibold text-white">{title}</h4>
        <span className="text-lg font-bold text-white font-mono">{amount}</span>
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.name} className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-zinc-300">{item.name}</p>
              <p className="text-xs text-zinc-500">{item.desc}</p>
            </div>
            <span className="text-xs text-zinc-400 font-mono shrink-0">{item.cost}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================================================================
   MAIN COMPONENT
   ================================================================ */

export default function ProposalPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("project-overview");
  const [expandedNav, setExpandedNav] = useState<string[]>(["introduction"]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -70% 0px" }
    );

    navigation.forEach((nav) => {
      const el = document.getElementById(nav.id);
      if (el) observer.observe(el);
      nav.children?.forEach((child) => {
        const childEl = document.getElementById(child.id);
        if (childEl) observer.observe(childEl);
      });
    });

    return () => observer.disconnect();
  }, []);

  const toggleNav = useCallback((id: string) => {
    setExpandedNav((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setSidebarOpen(false);
    }
  }, []);

  const isActive = useCallback((id: string) => activeSection === id, [activeSection]);

  const SidebarContent = () => (
    <nav className="space-y-1 py-4">
      {navigation.map((item) => (
        <div key={item.id}>
          <button
            onClick={() => {
              toggleNav(item.id);
              scrollTo(item.id);
            }}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
              isActive(item.id) ? "bg-white/10 text-white" : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
            }`}
          >
            <span className="flex items-center gap-2.5">
              <item.icon className="w-4 h-4" />
              {item.label}
            </span>
            {item.children && (
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expandedNav.includes(item.id) ? "rotate-180" : ""}`} />
            )}
          </button>
          {item.children && expandedNav.includes(item.id) && (
            <div className="ml-4 mt-1 space-y-0.5 border-l border-zinc-800 pl-3">
              {item.children.map((child) => (
                <button
                  key={child.id}
                  onClick={() => scrollTo(child.id)}
                  className={`w-full text-left px-3 py-1.5 rounded-md text-[13px] transition-colors ${
                    isActive(child.id) ? "text-white bg-white/5" : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {child.label}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );

  // Calculate totals
  const mvpTeamTotal = 5040000 + 1440000 + 840000 + 600000 + 600000 + 480000; // ₹50,40,000
  const mvpInfraTotal = 240000 + 180000 + 600000 + 360000 + 120000 + 90000 + 90000 + 60000; // ₹17,40,000
  const mvpDesignTotal = 200000; // Design system, prototyping
  const mvpTotal = mvpTeamTotal + mvpInfraTotal + mvpDesignTotal; // ₹70,80,000

  const prodTeamTotal = 4680000 + 5760000 + 3960000 + 2400000 + 2880000 + 1920000 + 1200000 + 3000000; // ₹2,58,00,000
  const prodInfraTotal = 4800000 + 12000000 + 1800000 + 600000 + 480000 + 600000 + 360000 + 360000; // ₹2,10,00,000
  const prodSecurityTotal = 800000 + 600000 + 1500000 + 500000; // ₹34,00,000
  const prodRndTotal = 2000000 + 1500000 + 1000000 + 500000; // ₹50,00,000
  const prodTotal = prodTeamTotal + prodInfraTotal + prodSecurityTotal + prodRndTotal; // ₹5,52,00,000

  const grandTotal = mvpTotal + prodTotal; // ₹6,22,80,000

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800/60 bg-black/80 backdrop-blur-xl">
        <div className="flex items-center justify-between h-14 px-4 lg:px-6">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden p-1.5 rounded-md hover:bg-zinc-800">
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-white flex items-center justify-center">
                <Code2 className="w-4 h-4 text-black" />
              </div>
              <span className="font-bold text-sm">AI IDE</span>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-400 text-sm">Development Costs</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="border-zinc-700 text-zinc-400 text-[10px] hidden sm:inline-flex">
              CONFIDENTIAL
            </Badge>
            <Button
              size="sm"
              className="bg-white text-black hover:bg-zinc-200 text-xs h-8 px-4 font-semibold"
            >
              Approve Proposal
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        {sidebarOpen && <div className="fixed inset-0 z-30 bg-black/60 lg:hidden" onClick={() => setSidebarOpen(false)} />}
        <aside
          className={`fixed top-14 bottom-0 z-40 w-64 border-r border-zinc-800 bg-black overscroll-contain transition-transform duration-300 lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="px-3 overflow-y-auto h-full">
            <SidebarContent />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 px-4 sm:px-8 lg:px-12 xl:px-16 py-10 max-w-4xl lg:ml-64">

          {/* ════════════════════════════════════════
              INTRODUCTION
             ════════════════════════════════════════ */}
          <section id="introduction">
            <Badge variant="outline" className="border-zinc-700 text-zinc-500 text-[10px] mb-4">
              DEVELOPMENT PROPOSAL
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              AI-Powered IDE: Development Costs
            </h1>
            <p className="text-zinc-400 text-base leading-relaxed mb-6">
              Complete technical breakdown for building an enterprise-grade, context-aware AI code editor. 
              This document covers <strong className="text-zinc-200">engineering, infrastructure, and R&D costs only</strong>.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
              <StatCard label="Timeline" value="18 Mo" sub="6 MVP + 12 Prod" />
              <StatCard label="Dev Cost" value="₹6.2Cr" sub="~$750k USD" />
              <StatCard label="Peak Team" value="19" sub="Engineers" />
              <StatCard label="Target" value="50K" sub="Users" />
            </div>

            <Separator className="bg-zinc-800/60 my-10" />

            {/* Project Overview */}
            <div id="project-overview" className="scroll-mt-20">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Hash className="w-4 h-4 text-zinc-600" />
                Project Overview
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                We are building an AI-powered Integrated Development Environment (IDE) that understands 
                entire codebases and provides intelligent assistance for code completion, refactoring, 
                and code generation. The product is similar to Cursor in functionality.
              </p>

              <Callout type="info" title="Development-Only Costs">
                This proposal includes only engineering, infrastructure, AI APIs, security testing, and R&D costs. 
                It excludes office space, HR, marketing, legal, and other operational expenses.
              </Callout>
            </div>

            {/* What We Build */}
            <div id="what-we-build" className="scroll-mt-20 mt-10">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Hash className="w-4 h-4 text-zinc-600" />
                What We Are Building
              </h2>
              <ul className="space-y-2 mb-4">
                {[
                  "Desktop IDE application based on VS Code (Electron + Monaco Editor)",
                  "AI code completion with full project context awareness",
                  "Natural language chat interface for codebase Q&A",
                  "Inline editing via Cmd+K with diff viewer",
                  "Semantic code search (search by meaning, not keywords)",
                  "Real-time codebase indexing and embedding generation",
                  "Multi-model AI inference (GPT-4o + Claude 3.5 Sonnet)",
                  "Enterprise security with SOC 2 preparation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-zinc-300">
                    <ChevronRight className="w-3.5 h-3.5 text-zinc-600 mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Justification */}
            <div id="technical-justification" className="scroll-mt-20 mt-10">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Hash className="w-4 h-4 text-zinc-600" />
                Why This Costs What It Does
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                Building an AI IDE requires specialized engineering that goes beyond typical web development:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <FeatureCard icon={Brain} title="AI/ML Engineering">
                  Building a RAG (Retrieval-Augmented Generation) system that indexes millions of lines of code 
                  and retrieves relevant context in &lt;100ms requires specialized ML engineers.
                </FeatureCard>
                <FeatureCard icon={Cpu} title="IDE Core Development">
                  Forking and modifying VS Code requires deep knowledge of Electron, Monaco Editor, 
                  Language Server Protocol, and extension APIs.
                </FeatureCard>
                <FeatureCard icon={Zap} title="High-Scale Inference">
                  Every keystroke can trigger an AI request. Managing thousands of concurrent inference 
                  calls with sub-second latency requires sophisticated orchestration.
                </FeatureCard>
                <FeatureCard icon={Database} title="Vector Database">
                  Storing and querying millions of code embeddings for semantic search requires 
                  specialized vector database infrastructure.
                </FeatureCard>
              </div>
            </div>
          </section>

          <Separator className="bg-zinc-800/60 my-12" />

          {/* ════════════════════════════════════════
              CORE FEATURES
             ════════════════════════════════════════ */}
          <section id="core-features" className="scroll-mt-20">
            <Badge variant="outline" className="border-zinc-700 text-zinc-500 text-[10px] mb-4">
              PRODUCT SCOPE
            </Badge>
            <h1 className="text-3xl font-extrabold tracking-tight mb-2">Core Features</h1>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              The technical features that define the product and drive the engineering effort.
            </p>

            {/* AI Code Completion */}
            <div id="ai-code-completion" className="scroll-mt-20 mb-10">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Hash className="w-4 h-4 text-zinc-600" />
                AI Code Completion
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                Context-aware, multi-line code suggestions that understand the entire project structure, 
                not just the current file.
              </p>
              <CodeBlock
                language="pipeline"
                code={`Keystroke → Extract Context (cursor position, open files)
  → Query Vector DB (retrieve relevant code chunks)
  → Build Prompt (current code + retrieved context)
  → LLM Inference (GPT-4o or Claude)
  → Stream Response → Display Inline Suggestion`}
              />
            </div>

            {/* Codebase Chat */}
            <div id="codebase-chat" className="scroll-mt-20 mb-10">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Hash className="w-4 h-4 text-zinc-600" />
                Codebase Chat
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                Sidebar chat interface where developers ask questions about their codebase. 
                The AI retrieves relevant files and provides grounded, accurate answers.
              </p>
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-4 my-4">
                <p className="text-xs text-zinc-500 mb-3 uppercase tracking-wider">Example</p>
                <div className="space-y-3 text-sm">
                  <p className="text-zinc-300">"How does authentication work in this project?"</p>
                  <p className="text-zinc-500">
                    → AI retrieves <code className="text-zinc-400 bg-zinc-800 px-1 rounded">src/auth/</code>, 
                    analyzes JWT implementation, and explains the flow.
                  </p>
                </div>
              </div>
            </div>

            {/* Inline Editing */}
            <div id="inline-editing" className="scroll-mt-20 mb-10">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Hash className="w-4 h-4 text-zinc-600" />
                Inline Editing (Cmd+K)
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Select code, press Cmd+K, describe changes in natural language. The AI generates a 
                diff with red/green highlighting that can be accepted or rejected.
              </p>
            </div>

            {/* Semantic Search */}
            <div id="semantic-search" className="scroll-mt-20 mb-10">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Hash className="w-4 h-4 text-zinc-600" />
                Semantic Search
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                Find code by meaning, not just text matching.
              </p>
              <CodeBlock
                language="examples"
                code={`Query: "where do we validate user input?"
→ Finds: src/utils/validation.ts, src/middleware/sanitize.ts

Query: "the function that sends emails"  
→ Finds: src/services/email/sendEmail.ts`}
              />
            </div>

            {/* Code Review */}
            <div id="code-review" className="scroll-mt-20 mb-10">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Hash className="w-4 h-4 text-zinc-600" />
                AI Code Review
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Automated analysis of code changes for bugs, security issues, performance problems, 
                and style inconsistencies. Provides actionable suggestions with one-click fixes.
              </p>
            </div>
          </section>

          <Separator className="bg-zinc-800/60 my-12" />

          {/* ════════════════════════════════════════
              ARCHITECTURE
             ════════════════════════════════════════ */}
          <section id="architecture" className="scroll-mt-20">
            <Badge variant="outline" className="border-zinc-700 text-zinc-500 text-[10px] mb-4">
              TECHNICAL DESIGN
            </Badge>
            <h1 className="text-3xl font-extrabold tracking-tight mb-2">Architecture</h1>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              System design and technology choices.
            </p>

            {/* System Design */}
            <div id="system-design" className="scroll-mt-20 mb-10">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Hash className="w-4 h-4 text-zinc-600" />
                System Design
              </h2>
              <CodeBlock
                language="architecture"
                code={`┌────────────────────────────────────────────────┐
│              DESKTOP APP (Electron)             │
│  ┌─────────┐ ┌─────────┐ ┌──────────────────┐  │
│  │ Monaco  │ │  Chat   │ │  Inline Editor   │  │
│  │ Editor  │ │  Panel  │ │    (Cmd+K)       │  │
│  └────┬────┘ └────┬────┘ └───────┬──────────┘  │
│       └───────────┼──────────────┘              │
│                   ▼                             │
│  ┌────────────────────────────────────────────┐│
│  │         LOCAL CONTEXT ENGINE               ││
│  │  • File Watcher  • AST Parser              ││
│  │  • Embeddings    • Semantic Cache          ││
│  └────────────────────┬───────────────────────┘│
└───────────────────────┼─────────────────────────┘
                        ▼
              ┌─────────────────────┐
              │     CLOUD API       │
              │  • Auth & Sessions  │
              │  • Model Router     │
              │  • Rate Limiting    │
              │  • Usage Analytics  │
              └──────────┬──────────┘
                         │
      ┌──────────────────┼──────────────────┐
      ▼                  ▼                  ▼
┌──────────┐      ┌──────────┐      ┌──────────┐
│  GPT-4o  │      │ Claude   │      │ Vector   │
│          │      │  3.5     │      │   DB     │
└──────────┘      └──────────┘      └──────────┘`}
              />
            </div>

            {/* Context Engine */}
            <div id="context-engine" className="scroll-mt-20 mb-10">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Hash className="w-4 h-4 text-zinc-600" />
                Context Engine (RAG)
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                The core AI component that gives the LLM awareness of the entire codebase:
              </p>
              <ol className="space-y-3 mb-4">
                {[
                  { title: "File Watching", desc: "Monitor filesystem for changes, trigger re-indexing" },
                  { title: "AST Parsing", desc: "Parse code into functions, classes, imports for semantic chunking" },
                  { title: "Embedding Generation", desc: "Convert code chunks to vectors using text-embedding-3" },
                  { title: "Vector Storage", desc: "Store embeddings in Pinecone/Qdrant with metadata" },
                  { title: "Retrieval", desc: "Query top-k relevant chunks for each AI request" },
                ].map((step, i) => (
                  <li key={step.title} className="flex items-start gap-3 text-sm">
                    <span className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center text-xs font-bold shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <span className="text-white font-medium">{step.title}:</span>{" "}
                      <span className="text-zinc-400">{step.desc}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Tech Stack */}
            <div id="tech-stack" className="scroll-mt-20 mb-10">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Hash className="w-4 h-4 text-zinc-600" />
                Tech Stack
              </h2>

              <DataTable
                headers={["Layer", "Technology", "Purpose"]}
                rows={[
                  ["IDE", "VS Code OSS + Electron", "Desktop application foundation"],
                  ["IDE", "Monaco Editor", "Code editor component"],
                  ["IDE", "TypeScript", "Extension and UI development"],
                  ["AI", "GPT-4o", "Primary LLM for completions"],
                  ["AI", "Claude 3.5 Sonnet", "Long-context tasks"],
                  ["AI", "text-embedding-3", "Code vectorization"],
                  ["AI", "LangChain", "RAG orchestration"],
                  ["Storage", "Pinecone / Qdrant", "Vector database"],
                  ["Storage", "PostgreSQL", "User data, metadata"],
                  ["Storage", "Redis", "Caching, sessions"],
                  ["Infra", "AWS / GCP", "Cloud hosting"],
                  ["Infra", "Kubernetes", "Container orchestration"],
                  ["Infra", "GitHub Actions", "CI/CD pipelines"],
                ]}
              />
            </div>
          </section>

          <Separator className="bg-zinc-800/60 my-12" />

          {/* ════════════════════════════════════════
              PHASE 1: MVP
             ════════════════════════════════════════ */}
          <section id="phase-1" className="scroll-mt-20">
            <Badge variant="outline" className="border-zinc-700 text-zinc-500 text-[10px] mb-4">
              PHASE 1
            </Badge>
            <h1 className="text-3xl font-extrabold tracking-tight mb-2">MVP Development</h1>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              6-month sprint to build a working prototype with core AI features.
            </p>

            {/* MVP Overview */}
            <div id="mvp-overview" className="scroll-mt-20 mb-10">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Hash className="w-4 h-4 text-zinc-600" />
                Overview
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <StatCard label="Duration" value="6 Mo" />
                <StatCard label="Team" value="7" sub="Engineers" />
                <StatCard label="Dev Cost" value="₹70.8L" />
                <StatCard label="Target" value="500" sub="Beta users" />
              </div>

              <Callout type="note" title="MVP Goal">
                Validate the core product hypothesis: Can we build an AI that accurately understands 
                codebases and makes useful edits? The MVP proves this before larger investment.
              </Callout>
            </div>

            {/* MVP Team */}
            <div id="mvp-team" className="scroll-mt-20 mb-10">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Hash className="w-4 h-4 text-zinc-600" />
                Engineering Team
              </h2>

              <DataTable
                headers={["Role", "Count", "Monthly", "6-Month Total"]}
                rows={mvpTeam.map((m) => [m.role, String(m.count), m.monthly, m.total])}
                footer={["Engineering Subtotal", "7", "", "₹50,40,000"]}
              />

              <div className="space-y-2 mt-4">
                {mvpTeam.map((m) => (
                  <div key={m.role} className="rounded-lg border border-zinc-800/50 bg-zinc-900/20 px-4 py-3">
                    <p className="text-sm font-medium text-white">{m.role}</p>
                    <p className="text-xs text-zinc-500 mt-1">{m.responsibilities}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* MVP Infrastructure */}
            <div id="mvp-infrastructure" className="scroll-mt-20 mb-10">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Hash className="w-4 h-4 text-zinc-600" />
                Infrastructure & AI APIs
              </h2>

              <DataTable
                headers={["Component", "Monthly", "6-Month Total"]}
                rows={mvpInfra.map((i) => [i.name, i.monthly, i.total])}
                footer={["Infrastructure Subtotal", "", "₹17,40,000"]}
              />
            </div>

            {/* MVP Total */}
            <div id="mvp-total" className="scroll-mt-20 mb-10">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Hash className="w-4 h-4 text-zinc-600" />
                MVP Total Development Cost
              </h2>

              <DataTable
                headers={["Category", "Cost"]}
                rows={[
                  ["Engineering Team (7 engineers × 6 months)", "₹50,40,000"],
                  ["Infrastructure & AI APIs", "₹17,40,000"],
                  ["Design System & Prototyping", "₹2,00,000"],
                  ["Contingency (10%)", "₹7,00,000"],
                ]}
                footer={["PHASE 1 TOTAL", "₹76,80,000"]}
              />

              <div className="rounded-xl border border-zinc-700/40 bg-gradient-to-r from-zinc-900/60 to-zinc-950 p-6 text-center mt-6">
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Phase 1 Development Cost</p>
                <p className="text-4xl font-black text-white font-mono">₹76.8 Lakhs</p>
                <p className="text-zinc-500 text-sm mt-1">~$93,000 USD</p>
              </div>
            </div>
          </section>

          <Separator className="bg-zinc-800/60 my-12" />

          {/* ════════════════════════════════════════
              PHASE 2: PRODUCTION
             ════════════════════════════════════════ */}
          <section id="phase-2" className="scroll-mt-20">
            <Badge variant="outline" className="border-zinc-700 text-zinc-500 text-[10px] mb-4">
              PHASE 2
            </Badge>
            <h1 className="text-3xl font-extrabold tracking-tight mb-2">Production Development</h1>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              12-month build to scale from MVP to enterprise-ready product.
            </p>

            {/* Prod Overview */}
            <div id="prod-overview" className="scroll-mt-20 mb-10">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Hash className="w-4 h-4 text-zinc-600" />
                Overview
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <StatCard label="Duration" value="12 Mo" />
                <StatCard label="Team" value="19" sub="Engineers" />
                <StatCard label="Dev Cost" value="₹5.5Cr" />
                <StatCard label="Target" value="50K" sub="Users" />
              </div>
            </div>

            {/* Prod Team */}
            <div id="prod-team" className="scroll-mt-20 mb-10">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Hash className="w-4 h-4 text-zinc-600" />
                Engineering Team
              </h2>

              <DataTable
                headers={["Department", "Count", "Monthly/Person", "Annual Total"]}
                rows={prodTeam.map((m) => [m.role, String(m.count), m.monthly, m.total])}
                footer={["Engineering Subtotal", "19", "", "₹2,58,00,000"]}
              />
            </div>

            {/* Prod Infrastructure */}
            <div id="prod-infrastructure" className="scroll-mt-20 mb-10">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Hash className="w-4 h-4 text-zinc-600" />
                Infrastructure (Annual)
              </h2>

              <DataTable
                headers={["Component", "Monthly", "Annual Total"]}
                rows={prodInfra.map((i) => [i.name, i.monthly, i.total])}
                footer={["Infrastructure Subtotal", "", "₹2,10,00,000"]}
              />

              <Callout type="warning" title="AI Inference Costs">
                AI API costs (₹1.2 Cr/year) are the largest infrastructure expense. This assumes 
                10,000 active users with 80% cache hit rate and intelligent model routing. 
                Without optimization, this would be ₹6+ Cr/year.
              </Callout>
            </div>

            {/* Prod Security */}
            <div id="prod-security" className="scroll-mt-20 mb-10">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Hash className="w-4 h-4 text-zinc-600" />
                Security & Testing
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                Security testing and compliance preparation for enterprise customers.
              </p>

              <CostCard
                title="Security & Testing"
                amount="₹34,00,000"
                items={securityCosts}
              />
            </div>

            {/* Prod R&D */}
            <div id="prod-rnd" className="scroll-mt-20 mb-10">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Hash className="w-4 h-4 text-zinc-600" />
                Research & Development
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                Advanced AI research and optimization to improve accuracy and reduce costs.
              </p>

              <CostCard
                title="R&D Investment"
                amount="₹50,00,000"
                items={rndCosts}
              />
            </div>

            {/* Prod Total */}
            <div id="prod-total" className="scroll-mt-20 mb-10">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Hash className="w-4 h-4 text-zinc-600" />
                Phase 2 Total Development Cost
              </h2>

              <DataTable
                headers={["Category", "Cost"]}
                rows={[
                  ["Engineering Team (19 engineers × 12 months)", "₹2,58,00,000"],
                  ["Infrastructure & AI APIs", "₹2,10,00,000"],
                  ["Security & Testing", "₹34,00,000"],
                  ["R&D (Fine-tuning, GPU, Research)", "₹50,00,000"],
                ]}
                footer={["PHASE 2 TOTAL", "₹5,52,00,000"]}
              />

              <div className="rounded-xl border border-zinc-700/40 bg-gradient-to-r from-zinc-900/60 to-zinc-950 p-6 text-center mt-6">
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Phase 2 Development Cost</p>
                <p className="text-4xl font-black text-white font-mono">₹5.52 Crores</p>
                <p className="text-zinc-500 text-sm mt-1">~$670,000 USD</p>
              </div>
            </div>
          </section>

          <Separator className="bg-zinc-800/60 my-12" />

          {/* ════════════════════════════════════════
              TIMELINE
             ════════════════════════════════════════ */}
          <section id="timeline" className="scroll-mt-20">
            <Badge variant="outline" className="border-zinc-700 text-zinc-500 text-[10px] mb-4">
              EXECUTION PLAN
            </Badge>
            <h1 className="text-3xl font-extrabold tracking-tight mb-2">Development Timeline</h1>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              18-month roadmap with clear milestones.
            </p>

            <div id="timeline-roadmap" className="scroll-mt-20 mb-10">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Hash className="w-4 h-4 text-zinc-600" />
                18-Month Roadmap
              </h2>

              {[
                {
                  month: "Month 1–2",
                  title: "Foundation",
                  phase: "MVP",
                  progress: 15,
                  items: ["Team onboarding", "VS Code fork setup", "Cloud infrastructure", "Auth system", "First LLM integration"],
                  target: "Development environment ready",
                },
                {
                  month: "Month 3–4",
                  title: "Core AI",
                  phase: "MVP",
                  progress: 35,
                  items: ["Code completion working", "Vector DB integration", "Chat interface", "Inline editing prototype", "Internal alpha testing"],
                  target: "3 core features functional",
                },
                {
                  month: "Month 5–6",
                  title: "Beta Launch",
                  phase: "MVP",
                  progress: 50,
                  items: ["Caching layer (70%+ hit)", "Performance optimization", "Diff viewer polish", "Settings panel", "500 beta users"],
                  target: "Public beta",
                },
                {
                  month: "Month 7–9",
                  title: "Enterprise Features",
                  phase: "PROD",
                  progress: 65,
                  items: ["Multi-workspace", "Team collaboration", "SSO/SAML", "Audit logging", "Advanced code review"],
                  target: "5,000 users",
                },
                {
                  month: "Month 10–12",
                  title: "Scale",
                  phase: "PROD",
                  progress: 80,
                  items: ["50% faster indexing", "Offline mode", "Extension marketplace", "Public API", "Git integration improvements"],
                  target: "15,000 users",
                },
                {
                  month: "Month 13–18",
                  title: "Polish & Security",
                  phase: "PROD",
                  progress: 100,
                  items: ["SOC 2 preparation", "On-premise option", "Custom model training", "99.9% uptime", "Analytics dashboard"],
                  target: "50,000 users",
                },
              ].map((t) => (
                <div key={t.month} className="mb-4 rounded-lg border border-zinc-800 bg-zinc-900/30 p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="border-zinc-700 text-zinc-300 text-xs">
                        {t.month}
                      </Badge>
                      <h3 className="font-bold text-white">{t.title}</h3>
                      <Badge
                        className={`text-[10px] ${
                          t.phase === "MVP"
                            ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                            : "bg-purple-500/10 text-purple-400 border-purple-500/20"
                        }`}
                      >
                        {t.phase}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3">
                      <Progress value={t.progress} className="h-1.5 w-24 bg-zinc-800 [&>div]:bg-white" />
                      <span className="text-xs text-zinc-500 font-mono">{t.progress}%</span>
                    </div>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 mb-3">
                    {t.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-zinc-400">
                        <CheckCheck className="w-3.5 h-3.5 text-zinc-600 mt-1 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 pt-2 border-t border-zinc-800/50">
                    <Target className="w-3.5 h-3.5 text-zinc-500" />
                    <span className="text-xs text-zinc-500">Target: </span>
                    <span className="text-xs text-white font-medium">{t.target}</span>
                  </div>
                </div>
              ))}
            </div>

            <div id="milestones" className="scroll-mt-20">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Hash className="w-4 h-4 text-zinc-600" />
                Key Milestones
              </h2>

              <DataTable
                headers={["Milestone", "Timeline", "Deliverable"]}
                rows={[
                  ["Alpha", "Month 3", "Core features working internally"],
                  ["Beta", "Month 6", "500 external users testing"],
                  ["v0.5", "Month 9", "Enterprise features, 5k users"],
                  ["v1.0", "Month 12", "Production-ready, 15k users"],
                  ["v1.5", "Month 15", "SOC 2 ready, 30k users"],
                  ["v2.0", "Month 18", "Enterprise-grade, 50k users"],
                ]}
              />
            </div>
          </section>

          <Separator className="bg-zinc-800/60 my-12" />

          {/* ════════════════════════════════════════
              BUDGET SUMMARY
             ════════════════════════════════════════ */}
          <section id="budget" className="scroll-mt-20">
            <Badge variant="outline" className="border-zinc-700 text-zinc-500 text-[10px] mb-4">
              FINANCIALS
            </Badge>
            <h1 className="text-3xl font-extrabold tracking-tight mb-2">Budget Summary</h1>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              Complete financial overview for development costs only.
            </p>

            {/* Total Investment */}
            <div id="total-investment" className="scroll-mt-20 mb-10">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Hash className="w-4 h-4 text-zinc-600" />
                Total Investment
              </h2>

              <div className="rounded-xl border border-zinc-700/40 bg-gradient-to-br from-zinc-900/60 to-black p-8 text-center mb-6">
                <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Total Development Cost (18 Months)</p>
                <p className="text-5xl md:text-6xl font-black text-white font-mono">₹6.29 Cr</p>
                <p className="text-zinc-500 text-sm mt-2">Approximately $760,000 USD</p>

                <div className="flex justify-center gap-6 mt-6">
                  <div className="text-center">
                    <p className="text-xl font-bold text-white font-mono">₹76.8L</p>
                    <p className="text-[10px] text-zinc-500 uppercase">Phase 1 (MVP)</p>
                  </div>
                  <div className="text-zinc-700 text-xl">+</div>
                  <div className="text-center">
                    <p className="text-xl font-bold text-white font-mono">₹5.52Cr</p>
                    <p className="text-[10px] text-zinc-500 uppercase">Phase 2 (Prod)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Breakdown */}
            <div id="cost-breakdown" className="scroll-mt-20 mb-10">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Hash className="w-4 h-4 text-zinc-600" />
                Cost Breakdown by Category
              </h2>

              {[
                { label: "Engineering Team", amount: "₹3.08 Cr", pct: 49 },
                { label: "AI Inference APIs", amount: "₹1.30 Cr", pct: 21 },
                { label: "Cloud Infrastructure", amount: "₹63 L", pct: 10 },
                { label: "R&D (Fine-tuning, GPU)", amount: "₹50 L", pct: 8 },
                { label: "Security & Testing", amount: "₹34 L", pct: 5 },
                { label: "Vector Database", amount: "₹20 L", pct: 3 },
                { label: "Dev Tools & Monitoring", amount: "₹17 L", pct: 3 },
                { label: "Contingency", amount: "₹7 L", pct: 1 },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4 py-3 border-b border-zinc-800/30">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-zinc-300">{c.label}</span>
                      <span className="text-sm text-white font-mono font-semibold">{c.amount}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                        <div className="h-full bg-white rounded-full" style={{ width: `${c.pct}%` }} />
                      </div>
                      <span className="text-xs text-zinc-500 font-mono w-8 text-right">{c.pct}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Payment Schedule */}
            <div id="payment-schedule" className="scroll-mt-20 mb-10">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Hash className="w-4 h-4 text-zinc-600" />
                Payment Schedule
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                Milestone-based payments tied to deliverables.
              </p>

              <DataTable
                headers={["Milestone", "Timeline", "Amount", "Deliverable"]}
                rows={[
                  ["M0", "Month 0", "₹1.00 Cr", "Team hired, infrastructure ready"],
                  ["M1", "Month 3", "₹0.75 Cr", "Alpha – core features working"],
                  ["M2", "Month 6", "₹1.00 Cr", "Beta – 500 users onboarded"],
                  ["M3", "Month 9", "₹1.00 Cr", "v0.5 – Enterprise features"],
                  ["M4", "Month 12", "₹1.00 Cr", "v1.0 – Production ready"],
                  ["M5", "Month 15", "₹0.79 Cr", "v1.5 – SOC 2 prep complete"],
                  ["M6", "Month 18", "₹0.75 Cr", "v2.0 – 50k users, enterprise-grade"],
                ]}
                footer={["TOTAL", "", "₹6.29 Cr", ""]}
              />
            </div>
          </section>

          <Separator className="bg-zinc-800/60 my-12" />

          {/* ════════════════════════════════════════
              TECHNICAL RISKS
             ════════════════════════════════════════ */}
          <section id="risks" className="scroll-mt-20">
            <Badge variant="outline" className="border-zinc-700 text-zinc-500 text-[10px] mb-4">
              RISK MANAGEMENT
            </Badge>
            <h1 className="text-3xl font-extrabold tracking-tight mb-2">Technical Risks</h1>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              Key technical risks and mitigation strategies.
            </p>

            <div id="identified-risks" className="scroll-mt-20 mb-10">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Hash className="w-4 h-4 text-zinc-600" />
                Identified Risks
              </h2>

              <Accordion type="single" collapsible className="space-y-2">
                {[
                  {
                    risk: "AI API costs exceed projections",
                    prob: "60%",
                    severity: "Critical",
                    color: "red",
                    mitigation:
                      "Implement semantic caching (target 80%+ hit rate) from Day 1. Deploy model routing: GPT-3.5-turbo for simple tasks, GPT-4o for complex. Set hard daily limits per user. Budget includes contingency.",
                  },
                  {
                    risk: "RAG accuracy below 70% on large codebases",
                    prob: "50%",
                    severity: "High",
                    color: "red",
                    mitigation:
                      "Dedicate Month 4 to prompt engineering and RAG tuning. Implement hybrid retrieval (keyword + semantic). Use re-ranking models. Accept 70-80% accuracy for MVP, iterate post-launch.",
                  },
                  {
                    risk: "Cannot hire ML engineer with production RAG experience",
                    prob: "40%",
                    severity: "High",
                    color: "yellow",
                    mitigation:
                      "Use pre-built LangChain/LlamaIndex pipelines. Engage external ML consultant for architecture review. Post on specialized AI job boards.",
                  },
                  {
                    risk: "VS Code fork complexity exceeds estimates",
                    prob: "30%",
                    severity: "Medium",
                    color: "yellow",
                    mitigation:
                      "Start as VS Code extension for first 2 months. If extension approach works, continue. Fork only if necessary – extension work remains reusable.",
                  },
                  {
                    risk: "Performance issues at scale (>10k users)",
                    prob: "45%",
                    severity: "High",
                    color: "yellow",
                    mitigation:
                      "Load testing from Month 8 (not Month 18). Auto-scaling from Day 1. Database optimization sprint in Month 10.",
                  },
                ].map((r, i) => (
                  <AccordionItem key={i} value={`risk-${i}`} className="border border-zinc-800 rounded-lg bg-zinc-900/30 overflow-hidden">
                    <AccordionTrigger className="px-4 py-3.5 text-left hover:no-underline">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <AlertTriangle className={`w-4 h-4 shrink-0 ${r.color === "red" ? "text-red-400" : "text-yellow-400"}`} />
                        <span className="text-sm text-zinc-200 font-medium flex-1 text-left">{r.risk}</span>
                        <Badge
                          className={`shrink-0 text-[10px] ml-2 ${
                            r.color === "red" ? "bg-red-500/10 text-red-400" : "bg-yellow-500/10 text-yellow-400"
                          }`}
                        >
                          {r.prob} · {r.severity}
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <div className="pl-7 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/50 pt-3">
                        <p className="font-semibold text-zinc-300 mb-1">Mitigation:</p>
                        {r.mitigation}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div id="ai-cost-control" className="scroll-mt-20 mb-10">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Hash className="w-4 h-4 text-zinc-600" />
                AI Cost Control Strategy
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                Detailed strategy to keep AI inference costs manageable at scale:
              </p>

              <CodeBlock
                language="cost-analysis"
                code={`WITHOUT optimization (50,000 users):
  50k users × 30 requests/day × ₹2/request
  = ₹30,00,000/day = ₹9 Crore/month ❌

WITH optimization stack:
  1. Semantic Cache (80% hit)  → 50k × 30 × 20% = 300k requests/day
  2. Model Routing (60% mini)  → 300k × 40% GPT-4 = 120k
  3. Prompt Compression (40%)  → 120k × 0.6 = 72k effective
  4. Cost per optimized req    → ₹0.40

  Final: 300k × ₹0.40 = ₹1,20,000/day = ₹36L/month ✅

  SAVINGS: 96% cost reduction`}
              />

              <Callout type="success" title="Result">
                With four-layer optimization, we reduce AI costs from ₹9 Cr/month to ₹36L/month at 50k users. 
                This makes the unit economics viable.
              </Callout>
            </div>
          </section>

          <Separator className="bg-zinc-800/60 my-12" />

          {/* ════════════════════════════════════════
              DELIVERABLES
             ════════════════════════════════════════ */}
          <section id="deliverables" className="scroll-mt-20">
            <Badge variant="outline" className="border-zinc-700 text-zinc-500 text-[10px] mb-4">
              OUTPUT
            </Badge>
            <h1 className="text-3xl font-extrabold tracking-tight mb-2">Deliverables</h1>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              Complete list of technical deliverables at end of 18 months.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Application",
                  items: [
                    "Desktop IDE (macOS, Windows, Linux)",
                    "AI code completion engine",
                    "Codebase chat interface",
                    "Inline editing (Cmd+K)",
                    "Semantic code search",
                    "AI code review",
                    "Extension marketplace",
                    "Settings dashboard",
                  ],
                },
                {
                  title: "Backend Systems",
                  items: [
                    "Authentication & authorization",
                    "Billing & subscription system",
                    "Analytics pipeline",
                    "Real-time sync service",
                    "Multi-model inference router",
                    "Semantic caching layer",
                    "Rate limiting system",
                    "Webhook integrations",
                  ],
                },
                {
                  title: "AI/ML Pipeline",
                  items: [
                    "RAG context engine",
                    "Code embedding generator",
                    "Vector database cluster",
                    "Model routing logic",
                    "Prompt templates library",
                    "Fine-tuned models (if applicable)",
                    "A/B testing framework",
                    "Quality evaluation suite",
                  ],
                },
                {
                  title: "Infrastructure",
                  items: [
                    "Kubernetes manifests",
                    "CI/CD pipelines",
                    "Infrastructure-as-Code",
                    "Monitoring dashboards",
                    "Alerting rules",
                    "Backup & DR procedures",
                    "Security configurations",
                    "Load testing reports",
                  ],
                },
              ].map((group) => (
                <div key={group.title} className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-5">
                  <h3 className="font-bold text-white mb-4">{group.title}</h3>
                  <div className="space-y-2">
                    {group.items.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span className="text-zinc-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-lg border border-zinc-800 bg-zinc-900/30 p-5">
              <h3 className="font-bold text-white mb-4">Documentation & Source Code</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Complete source code (all repositories)",
                  "API documentation (OpenAPI spec)",
                  "Architecture Decision Records",
                  "Database schemas & migrations",
                  "Deployment runbooks",
                  "Security audit reports",
                  "Performance benchmarks",
                  "Handover & training sessions",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Separator className="bg-zinc-800/60 my-12" />

          {/* ════════════════════════════════════════
              NEXT STEPS
             ════════════════════════════════════════ */}
          <section id="next-steps" className="scroll-mt-20">
            <Badge variant="outline" className="border-zinc-700 text-zinc-500 text-[10px] mb-4">
              ACTION ITEMS
            </Badge>
            <h1 className="text-3xl font-extrabold tracking-tight mb-2">Next Steps</h1>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              Required actions to begin development.
            </p>

            <ol className="space-y-4 mb-10">
              {[
                { title: "Approve Proposal", desc: "Review and approve scope, timeline, and budget" },
                { title: "Sign Agreement", desc: "Execute development agreement with milestone terms" },
                { title: "Initial Payment (₹1 Cr)", desc: "Release kickoff payment to begin hiring" },
                { title: "Begin Hiring (Week 1-3)", desc: "Recruit Tech Lead, ML Engineer, Backend Engineers" },
                { title: "Development Starts (Week 4)", desc: "Infrastructure setup, VS Code fork initialization" },
              ].map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold text-sm">{i + 1}</div>
                    {i < 4 && <div className="w-px flex-1 bg-zinc-800 mt-2" />}
                  </div>
                  <div className="pb-4">
                    <h4 className="font-semibold text-white">{step.title}</h4>
                    <p className="text-sm text-zinc-400">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            {/* CTA */}
            <div className="rounded-xl border border-zinc-700/40 bg-gradient-to-br from-zinc-900/60 to-black p-8 text-center">
              <h2 className="text-2xl font-extrabold text-white mb-3">Ready to Build?</h2>
              <p className="text-zinc-400 text-sm max-w-lg mx-auto mb-6">
                This proposal covers complete development costs for an 18-month build of an enterprise-grade AI IDE.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <StatCard label="Timeline" value="18 Mo" />
                <StatCard label="Dev Cost" value="₹6.29Cr" />
                <StatCard label="Team" value="19" />
                <StatCard label="Target" value="50K" />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button size="lg" className="bg-white text-black hover:bg-zinc-200 font-semibold px-8 rounded-lg">
                  Approve Proposal <Rocket className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg" className="border-zinc-700 text-zinc-300 hover:bg-zinc-900 rounded-lg px-8">
                  Request Changes
                </Button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-zinc-800/60 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-5 h-5 rounded bg-white flex items-center justify-center">
                <Code2 className="w-3 h-3 text-black" />
              </div>
              <span className="text-sm text-zinc-500">AI IDE · Development Proposal</span>
            </div>
            <p className="text-xs text-zinc-600">© {new Date().getFullYear()} · Development Costs Only · Confidential</p>
          </footer>
        </main>
      </div>
    </div>
  );
}