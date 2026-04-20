# Personal Website Design Requirements (v3)

## 1. Overview & Objectives

- **Persona:** Engineer, current Master's student, tech enthusiast.
- **Core Goal:** Showcase engineering projects, academic background, technical skills, and writings.
- **Framework:** **SvelteKit** (chosen for its excellent performance, elegant state management, and seamless routing).
- **Vibe/Style:** Clean, minimal, modern, dark mode with a teal bioluminescent/cyber-glow.

---

## 2. Definitive Design System

This section outlines the exact CSS values and typographic choices to ensure absolute consistency across the SvelteKit application.

### 2.1. Typography

- **Primary Font (Headings & Body):** `Inter` (sans-serif)
  - _Why:_ Extremely legible, modern, and scales beautifully across devices.
  - _Weights:_ 400 (Body), 500 (Subheadings), 700 (Headings), 800 (Hero Title).
- **Accent Font (Code & Tags):** `JetBrains Mono` (monospace)
  - _Why:_ Distinctly "engineer" aesthetic, high readability for syntax.
  - _Weights:_ 400.

### 2.2. Definitive Color Palette

- **Background (`bg-app`):** `#0A0F1C` (Deep void navy/black)
- **Surface / Cards (`bg-surface`):** `#111827` (Slightly elevated dark slate for contrast)
- **Borders (`border-subtle`):** `#1F2937` (Faint structural lines)
- **Primary Text (`text-main`):** `#F3F4F6` (Soft off-white, prevents eye strain)
- **Secondary Text (`text-muted`):** `#9CA3AF` (Cool gray for dates, roles, and minor details)
- **Main Accent / Glow (`accent-teal`):** `#2DD4BF` (Vibrant Teal)

### 2.3. UI Components & Effects

- **The "Glow" Effect:** \* Apply on hover states for interactive elements (cards, buttons, links).
  - _CSS/Tailwind translation:_ `hover:border-[#2DD4BF] hover:shadow-[0_0_15px_rgba(45,212,191,0.4)] transition-all duration-300`.
- **Border Radius:** `0.5rem` (Tailwind `rounded-lg`) for a soft but modern geometric feel.
- **Whitespace:** Use Tailwind's `max-w-4xl` or `max-w-5xl` for the main container to keep the site constrained and readable, with `gap-8` to `gap-12` between major vertical sections.

---

## 3. SvelteKit Architecture & Component Hierarchy

To maintain a clean and scalable codebase, the SvelteKit project should be structured as follows:

### 3.1. Routing Structure (`src/routes/`)

SvelteKit relies on file-based routing.

- `src/routes/+layout.svelte` — The global wrapper (contains Navbar, Footer, and Page Transitions).
- `src/routes/+page.svelte` — **Home** (Hero, recent projects snippet, recent blog posts).
- `src/routes/about/+page.svelte` — **About Me** (Bio, Timeline, Tech Stack).
- `src/routes/projects/+page.svelte` — **Projects** (Full grid of all projects).
- `src/routes/blog/+page.svelte` — **Blog** (List of all published articles).
- `src/routes/blog/[slug]/+page.svelte` — **Dynamic Blog Post Route** (Renders individual markdown/mdsvex files).

### 3.2. Svelte Component Library (`src/lib/components/`)

Break down the UI into highly reusable Svelte components.

#### 📂 Layout Components

- `Navbar.svelte` — Top navigation, sticky, blurry translucent background (`backdrop-blur-md bg-[#0A0F1C]/80`).
- `Footer.svelte` — Minimalist bottom bar with copyright and `SocialLinks.svelte`.
- `Section.svelte` — Wrapper for page sections to enforce consistent vertical padding and max-width.

#### 📂 UI Primitives

- `Button.svelte` — Reusable button component. Props: `href` (optional for link behavior), `variant` (primary with glow, or ghost/outline).
- `Tag.svelte` — Small pill component for tech stack elements using `JetBrains Mono`. Props: `text`.
- `GlowingCard.svelte` — Base wrapper for anything that needs the subtle 1px border and teal glow on hover.

#### 📂 Feature Components

- **Home:**
  - `Hero.svelte` — The introduction, tagline, and CTA.
- **About:**
  - `Timeline.svelte` & `TimelineItem.svelte` — For Education and Experience. Vertical line with teal nodes.
  - `TechStackGrid.svelte` — Maps through an array of skills and renders them via `Tag.svelte`.
- **Projects:**
  - `ProjectCard.svelte` — Composes `GlowingCard`, `Tag` (for tech stack), and standard HTML for images/links.
- **Blog:**
  - `ArticleCard.svelte` — Minimalist list item for the blog feed showing Title, Date, and Reading Time.
  - `Prose.svelte` — A wrapper utilizing `@tailwindcss/typography` (`prose prose-invert prose-teal`) to style the rendered Markdown content beautifully.

---

## 4. Final Recommended Tech Stack

- **Framework:** SvelteKit (App routing, SSR/SSG capabilities).
- **Styling:** Tailwind CSS (Perfect for mapping the definitive color palette to custom variables in `tailwind.config.js`).
- **Icons:** `lucide-svelte` (Clean, minimal SVG icons for GitHub, External Links, Socials).
