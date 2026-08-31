---
name: github-showcase
description: Fetches GitHub project data and formats it into portfolio cards.
---

# Instructions
1. Query connected GitHub MCP server to list public repositories.
2. Select repositories with topics tagged `portfolio-featured` or with high star counts.
3. Extract `repo_name`, `description`, `primary_language`, `topics`, and `stargazers_count`.
4. Generate a typed JSON structure under `data/projects.json` mapping these properties.
5. Create/Update the UI component at `components/ProjectsSection.tsx` to render these cards using Framer Motion animations.