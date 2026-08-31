import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans transition-colors">
      {/* Header / Hero */}
      <header className="border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-8 w-8 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold flex items-center justify-center text-sm shadow-sm">
              NA
            </span>
            <span className="font-semibold tracking-tight text-sm sm:text-base">
              Nil Benedict Alvarez
            </span>
          </div>

          <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a
              href="#projects"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              Projects
            </a>
            <a
              href="https://github.com/Nil-Al"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-xs font-semibold transition-all inline-flex items-center gap-1.5"
            >
              GitHub Profile
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center">
        {/* Intro Hero Banner */}
        <section className="w-full max-w-5xl mx-auto pt-16 pb-8 px-4 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Building software with <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              data, precision & passion.
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Software developer and data analytics enthusiast crafting responsive web applications, statistical models, and machine learning pipelines.
          </p>
        </section>

        {/* Projects Section */}
        <ProjectsSection />
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-zinc-200 dark:border-zinc-800 py-8 text-center text-xs text-zinc-500 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} Nil Benedict Alvarez. All rights reserved.</p>
      </footer>
    </div>
  );
}
