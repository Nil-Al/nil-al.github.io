import { FileText } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      {/* Subtle minimalist grid and single low-opacity radial accent */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/[0.04] rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-50 leading-[1.12]">
          Building Smart, Responsive
          <br className="hidden sm:inline" />
          <span className="text-emerald-400 sm:ml-3">
            Digital Solutions.
          </span>
        </h1>

        {/* Bio paragraph */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          I am a versatile software developer specializing in full-stack web development and robust database architecture. Driven by a continuous learning mindset, I thrive on exploring emerging technologies—from engineering seamless, data-driven web applications to designing interactive game experiences.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/documents/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-500 text-zinc-950 font-semibold text-sm hover:bg-emerald-400 shadow-[0_0_24px_rgba(16,185,129,0.22)] hover:shadow-[0_0_32px_rgba(16,185,129,0.35)] transition-all duration-200 group"
          >
            <FileText className="h-4.5 w-4.5 group-hover:-translate-y-0.5 transition-transform" />
            View Resume
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-300 font-semibold text-sm hover:bg-zinc-800 hover:border-zinc-700 hover:text-zinc-100 transition-all duration-200"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
    </section>
  );
}
