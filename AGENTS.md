# [Portfolio Site] — Agent Rulebook

These rules apply to all AI coding agents working in this repository. Adhere to them strictly on every invocation. This is a single unified rulebook (context rules + scope/safety + coding standards + git discipline).

---

## 1. Context Acquisition

**Always read, every session, regardless of task size:**

* `README.md` — project architecture, setup instructions, and tech stack overview. Read this FIRST.



**Read only when the task touches that area — don't pay the full cascade for a small fix:**

| If your task involves... | Also read |
| --- | --- |
| Modifying project data (e.g., project list, resume items) | `data/` or corresponding JSON/TypeScript data models |
| Adding complex UI components or animations | Component file specs or target files directly |
| A single, well-scoped bug fix in one known file | Only the specific file being edited

 |

If you're unsure whether a task needs wider context, say so and ask, rather than guessing either direction.

---

## 2. Sync Order & Version Discipline

1. **Pull `main` before branching.** Every new branch starts from a freshly pulled `main` — never off a stale local copy.


2. **Code first, documentation update last.** Complete your code edits before updating documentation or changelogs.


3. **Merge to `main` before starting the next branch.** Do not stack a new branch on top of an unmerged one. Wait for review or work on something explicitly unrelated.



---

## 3. Scope and Authority

| You CAN | You CANNOT |
| --- | --- |
| Write Next.js components, page routes, styling, and UI logic.

 | Install heavy npm dependencies without asking.

 |
| Ask for clarification if a feature or design is ambiguous.

 | Hardcode API keys, secrets, or credentials directly into scripts.

 |
| Run local development scripts (`npm run dev`, `npm run build`).

 | Merge directly to `main` yourself.

 |
|  | Bundle unrelated fixes into an active branch.

 |

---

## 4. Technology & Coding Standards

* **Core Stack:** Next.js (App Router), React, TypeScript, and Tailwind CSS.
* **Component Architecture:**
* Build functional components using explicit TypeScript interfaces for all props.
* Keep the frontend structure clean and flat: place reusable UI primitives in `components/ui/` and page section components in `components/sections/`.


* Prefer pulling `components/`, `hooks/`, and `types/` close to the project root (`src/` or root directory).




* **Styling & Aesthetics:**
* Use Tailwind CSS utility classes exclusively for layout and styling; avoid inline styles or standard CSS files.
* Ensure all components are responsive by default (mobile-first design using Tailwind's `sm:`, `md:`, and `lg:` breakpoints).
* Implement dark mode accessibility using Tailwind's `dark:` variant.


* **State & Performance:**
* Default to React Server Components (RSC) where possible. Only add `"use client"` directives to components that require browser interactivity or local state.
* Optimize images using Next.js `Image` components (`next/image`) with standard `width`, `height`, and `alt` properties.



---

## 5. Git & Version Control

* **One feature, one branch.** Create a branch off `main` before starting (e.g., `feature/projects-section`, `fix/navbar-mobile-toggle`). Never commit directly to `main`.


* **Clean commits.** Format commit messages clearly: `<type>: <short description>` (e.g., `feat: add mobile navigation drawer`).


* **Test before opening a PR.** Confirm the site builds without errors before submitting:


* [ ] App launches without runtime errors (`npm run dev`).
* [ ] Production build succeeds without TypeScript or linting errors (`npm run build`).
* [ ] Layout scales cleanly across mobile and desktop viewports.


* **Open a PR, even solo.** Push the branch and present the pull request link. Do not merge the PR automatically unless instructed.


* **Never commit secrets.** Keep environment variables in `.env.local` and confirm it remains gitignored.



---

## 6. Definition of Done

Before considering a task complete, verify:

* [ ] No debug `console.log` statements left in production code.


* [ ] Any new environment variables are documented in `.env.example`.


* [ ] TypeScript types are fully defined with no explicit `any` usage.
* [ ] The app builds cleanly using `npm run build`.