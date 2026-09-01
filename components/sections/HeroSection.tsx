import { Download } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow [animation-delay:3s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 bg-indigo-500/10 rounded-full blur-[100px] animate-pulse-slow [animation-delay:1.5s]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-zinc-800/60 text-zinc-300 border border-zinc-700/50 backdrop-blur-sm mb-8">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for opportunities
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-50 leading-[1.1]">
          Building Smart, Responsive
          <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Digital Solutions.
          </span>
        </h1>

        {/* Bio paragraph */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          I am a versatile software developer specializing in full-stack web development and robust database architecture. Driven by a continuous learning mindset, I thrive on exploring emerging technologies—from engineering seamless, data-driven web applications to designing interactive game experiences.
        </p>

        {/* CTA Button */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:brightness-110 transition-all duration-300 group"
          >
            <Download className="h-4.5 w-4.5 group-hover:-translate-y-0.5 transition-transform" />
            Download Resume
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-zinc-700 text-zinc-300 font-semibold text-sm hover:bg-zinc-800/50 hover:border-zinc-600 hover:text-zinc-100 transition-all duration-300"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
    </section>
  );
}
