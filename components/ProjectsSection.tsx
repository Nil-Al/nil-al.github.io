"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Project } from "@/types/project";
import projectsData from "@/data/projects.json";

export interface ProjectsSectionProps {
  initialProjects?: Project[];
  title?: string;
  subtitle?: string;
}

const LANGUAGE_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  PHP: {
    bg: "bg-indigo-500/10 dark:bg-indigo-400/10",
    text: "text-indigo-700 dark:text-indigo-300",
    dot: "bg-indigo-500",
  },
  Python: {
    bg: "bg-blue-500/10 dark:bg-blue-400/10",
    text: "text-blue-700 dark:text-blue-300",
    dot: "bg-blue-500",
  },
  "Jupyter Notebook": {
    bg: "bg-orange-500/10 dark:bg-orange-400/10",
    text: "text-orange-700 dark:text-orange-300",
    dot: "bg-orange-500",
  },
  JavaScript: {
    bg: "bg-amber-500/10 dark:bg-amber-400/10",
    text: "text-amber-700 dark:text-amber-300",
    dot: "bg-amber-500",
  },
  TypeScript: {
    bg: "bg-cyan-500/10 dark:bg-cyan-400/10",
    text: "text-cyan-700 dark:text-cyan-300",
    dot: "bg-cyan-500",
  },
  Kotlin: {
    bg: "bg-purple-500/10 dark:bg-purple-400/10",
    text: "text-purple-700 dark:text-purple-300",
    dot: "bg-purple-500",
  },
  Java: {
    bg: "bg-rose-500/10 dark:bg-rose-400/10",
    text: "text-rose-700 dark:text-rose-300",
    dot: "bg-rose-500",
  },
  Android: {
    bg: "bg-emerald-500/10 dark:bg-emerald-400/10",
    text: "text-emerald-700 dark:text-emerald-300",
    dot: "bg-emerald-500",
  },
};

export default function ProjectsSection({
  initialProjects = projectsData as Project[],
  title = "Featured Projects",
  subtitle = "A curated collection of my software engineering, web applications, and mobile projects sourced directly from GitHub.",
}: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "featured", label: "Featured" },
    { id: "web", label: "Web Systems" },
    { id: "mobile", label: "Mobile Apps" },
  ];

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.topics.some((topic) => topic.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.primary_language.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;

      if (activeFilter === "featured") {
        return project.featured;
      }
      if (activeFilter === "web") {
        return (
          project.primary_language.toLowerCase().includes("php") ||
          project.primary_language.toLowerCase().includes("typescript") ||
          project.primary_language.toLowerCase().includes("javascript") ||
          project.topics.some((t) => t.includes("pos") || t.includes("web") || t.includes("react") || t.includes("nextjs"))
        );
      }
      if (activeFilter === "mobile") {
        return (
          project.primary_language.toLowerCase().includes("kotlin") ||
          project.primary_language.toLowerCase().includes("java") ||
          project.primary_language.toLowerCase().includes("android") ||
          project.topics.some((t) => t.includes("android") || t.includes("mobile"))
        );
      }

      return true;
    });
  }, [initialProjects, activeFilter, searchQuery]);

  return (
    <section id="projects" className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50 sm:leading-none">
          {title}
        </h2>
        <p className="mt-3 max-w-2xl text-base sm:text-lg text-zinc-400">
          {subtitle}
        </p>
      </div>

      {/* Controls: Search & Category Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
          {categories.map((category) => {
            const isActive = activeFilter === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-emerald-500 text-zinc-950 font-semibold shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                    : "bg-zinc-900/60 text-zinc-400 border border-zinc-800/80 hover:bg-zinc-900 hover:border-zinc-700 hover:text-zinc-200"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Search projects or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pl-9 rounded-xl text-sm bg-zinc-900/80 border border-zinc-800 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/60 transition-all"
          />
          <svg
            className="absolute left-3 top-2.5 h-4 w-4 text-zinc-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-2.5 text-xs text-zinc-400 hover:text-zinc-200 cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-12 text-center rounded-2xl border border-dashed border-zinc-800">
          <p className="text-zinc-400 font-medium">No projects matched your criteria.</p>
          <button
            onClick={() => {
              setActiveFilter("all");
              setSearchQuery("");
            }}
            className="mt-3 text-sm font-semibold text-emerald-400 hover:underline cursor-pointer"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const langStyle =
              LANGUAGE_COLORS[project.primary_language] || {
                bg: "bg-zinc-800",
                text: "text-zinc-300",
                dot: "bg-zinc-400",
              };

            return (
              <div
                key={project.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-900/50 backdrop-blur-sm overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-2xl hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Project Image (rendered if provided) */}
                {project.image_url && (
                  <div className="relative w-full aspect-video overflow-hidden bg-zinc-800">
                    <Image
                      src={project.image_url}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
                  </div>
                )}

                <div className="p-6">
                  {/* Top Bar: Language & Star count */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold ${langStyle.bg} ${langStyle.text}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${langStyle.dot}`}></span>
                      {project.primary_language}
                    </span>

                    <div className="flex items-center gap-3 text-xs text-zinc-400">
                      {project.stargazers_count > 0 && (
                        <span className="flex items-center gap-1">
                          <svg
                            className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          {project.stargazers_count}
                        </span>
                      )}
                      {project.forks_count > 0 && (
                        <span className="flex items-center gap-1">
                          <svg
                            className="h-3.5 w-3.5 stroke-current"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                          >
                            <circle cx="12" cy="18" r="3" />
                            <circle cx="6" cy="6" r="3" />
                            <circle cx="18" cy="6" r="3" />
                            <path d="M18 9v2a2 2 0 01-2 2H8a2 2 0 01-2-2V9" />
                            <path d="M12 12v3" />
                          </svg>
                          {project.forks_count}
                        </span>
                      )}
                      {project.featured && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-sm text-zinc-400 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Topics / Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.topics.slice(0, 4).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
                      >
                        #{topic}
                      </span>
                    ))}
                    {project.topics.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded-md text-[11px] font-medium text-zinc-500">
                        +{project.topics.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Links */}
                <div className="px-6 pb-5 pt-0 border-t border-zinc-800/80 mt-auto">
                  <div className="flex items-center justify-between pt-4">
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-zinc-800/80 border border-zinc-700/60 text-zinc-300 hover:bg-zinc-800 hover:text-white hover:border-zinc-600 transition-all group/link"
                    >
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      GitHub
                    </a>
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-emerald-500 text-zinc-950 hover:bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live Site
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
