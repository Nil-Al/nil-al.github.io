---
name: new-component
description: Scaffolds a new React component using TypeScript and Tailwind CSS according to project standards.
---

# Instructions

1. Identify the requested component name and its primary purpose. 
2. Determine the correct location based on our architecture:
   - Reusable primitives (buttons, cards) go in `components/ui/`.
   - Larger layout blocks (hero, projects list) go in `components/sections/`.
3. Create the `.tsx` file using the following strict template guidelines:
   - Define and export a TypeScript interface named `<ComponentName>Props`.
   - Use a functional component export: `export default function <ComponentName>({ ... }: <ComponentName>Props)`.
   - Use Tailwind CSS utility classes exclusively. Ensure it is responsive (using `md:`, `lg:`).
   - Default to a React Server Component. Only prepend `"use client";` at the top of the file if interactivity (e.g., `useState`, `onClick`) is strictly necessary.
4. Verify that no placeholder styling or inline CSS was used.
5. Provide the user with a brief example of how to import and mount this component in `app/page.tsx`.