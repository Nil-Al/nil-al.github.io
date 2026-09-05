import {
  Code2,
  Database,
  Globe,
  Layers,
  Cpu,
  GitBranch,
  Terminal,
  Paintbrush,
  Smartphone,
  Server,
  BarChart3,
  FileCode2,
  Braces,
  Container,
} from "lucide-react";
import type { TechItem } from "@/types/tech";

interface TechIconMap {
  [key: string]: React.ReactNode;
}

const TECH_ICONS: TechIconMap = {
  react: <Globe className="h-5 w-5" />,
  nextjs: <Layers className="h-5 w-5" />,
  typescript: <FileCode2 className="h-5 w-5" />,
  javascript: <Braces className="h-5 w-5" />,
  python: <Code2 className="h-5 w-5" />,
  tailwind: <Paintbrush className="h-5 w-5" />,
  nodejs: <Server className="h-5 w-5" />,
  git: <GitBranch className="h-5 w-5" />,
  postgresql: <Database className="h-5 w-5" />,
  docker: <Container className="h-5 w-5" />,
  figma: <Smartphone className="h-5 w-5" />,
  terminal: <Terminal className="h-5 w-5" />,
  analytics: <BarChart3 className="h-5 w-5" />,
  cpu: <Cpu className="h-5 w-5" />,
};

const ROW_ONE: TechItem[] = [
  { name: "React", icon: "react", category: "Frontend" },
  { name: "Next.js", icon: "nextjs", category: "Frontend" },
  { name: "TypeScript", icon: "typescript", category: "Language" },
  { name: "JavaScript", icon: "javascript", category: "Language" },
  { name: "Python", icon: "python", category: "Language" },
  { name: "Tailwind CSS", icon: "tailwind", category: "Styling" },
  { name: "Node.js", icon: "nodejs", category: "Backend" },
];

const ROW_TWO: TechItem[] = [
  { name: "Git", icon: "git", category: "Tools" },
  { name: "PostgreSQL", icon: "postgresql", category: "Database" },
  { name: "Docker", icon: "docker", category: "DevOps" },
  { name: "Figma", icon: "figma", category: "Design" },
  { name: "Terminal", icon: "terminal", category: "Tools" },
  { name: "Analytics", icon: "analytics", category: "Data" },
  { name: "Machine Learning", icon: "cpu", category: "AI/ML" },
];

interface TechPillProps {
  item: TechItem;
}

function TechPill({ item }: TechPillProps) {
  return (
    <div className="flex-shrink-0 flex items-center gap-3 px-5 py-3 mx-3 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-sm hover:border-emerald-500/30 hover:bg-zinc-900/70 transition-all duration-300 group">
      <span className="text-zinc-400 group-hover:text-emerald-400 transition-colors">
        {TECH_ICONS[item.icon] ?? <Code2 className="h-5 w-5" />}
      </span>
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-zinc-200 group-hover:text-zinc-50 transition-colors whitespace-nowrap">
          {item.name}
        </span>
        <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">
          {item.category}
        </span>
      </div>
    </div>
  );
}

export default function TechStackSection() {
  /* Duplicate items for seamless infinite scroll */
  const rowOneItems = [...ROW_ONE, ...ROW_ONE];
  const rowTwoItems = [...ROW_TWO, ...ROW_TWO];

  return (
    <section id="tech-stack" className="w-full py-16 sm:py-24 overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50">
          Tech Stack
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-base sm:text-lg text-zinc-400">
          Core technologies, frameworks, and developer tools I work with.
        </p>
      </div>

      {/* Marquee Row 1 — scrolling left */}
      <div className="relative mb-4">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee-left hover:[animation-play-state:paused]">
          {rowOneItems.map((item, i) => (
            <TechPill key={`r1-${item.name}-${i}`} item={item} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 — scrolling right */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee-right hover:[animation-play-state:paused]">
          {rowTwoItems.map((item, i) => (
            <TechPill key={`r2-${item.name}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
