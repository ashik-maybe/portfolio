# ASHIK // PORTFOLIO

A responsive, minimalist developer log and portfolio built with Astro and Bun.

---

## Quick Start

Manage the project from the terminal root using these commands:

```sh
bun install    # Install dependencies
bun dev        # Start local dev server at localhost:4321
bun build      # Compile production build to ./dist/
bun sync       # Refresh Astro Content Collection cache

```

---

## Adding a Blog Post

The blog feed utilizes Astro content collections. To add a new post, drop a markdown file into the content directory.

### 1. Create the File

Create a new markdown file using a clean slug for the filename:
`src/content/blog/your-post-slug.md`

### 2. Add the Frontmatter Header

Every post requires this exact metadata structure at the top of the file:

```markdown
---
title: "Your Post Title Here"
description: "A brief summary for the feed card view."
date: "2026.05.17"
tags: ["Linux", "WebDev"]
tagLabel: "SYSTEM LOG"
---

Your markdown content goes here.

## Section Heading

- Bullet points format automatically.
- Inline code formats cleanly.
```

### 3. Verification

Save the file. If the development server (`bun dev`) is running, the page will dynamically generate and update the feed at `
