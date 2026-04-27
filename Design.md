# Beem — Design System Direction

## Overview

Beem should feel like **guided discovery** — a product that helps you move from a vague question to a clear understanding. The interface is modern and polished, but it should not feel sterile, corporate, or chatbot-generic. It should feel like a calm instrument for thinking: fast when the user needs an answer, expansive when the user wants to explore.

The core atmosphere is a **luminous mist canvas** (`{colors.canvas}` — #f6f4ee): slightly warm, slightly diffuse, more atmospheric than pure white and more contemporary than a paper-cream editorial layout. It gives Beem its own lane: not the beige literary world of Claude, not the cool gray-white of SaaS dashboards, and not the black-glass neon look of AI toy products.

Beem's visual identity comes from a **graphite + beam-blue + aurora-gold** system:
1. **Luminous mist canvas** (`{colors.canvas}`) — the default floor, calm and airy
2. **Soft elevated surfaces** (`{colors.surface-card}`) — cards, search modules, article previews
3. **Deep focus surfaces** (`{colors.surface-deep}`) — research mode, preview panels, citation drawers, immersive reading states

The signature accent is **beam-blue** (`{colors.primary}` — #2f6df6). It is bright, intelligent, and directional — less corporate than standard blue, but still trustworthy. It should feel like a point of attention or an active thread being traced across knowledge. The companion highlight is **aurora-gold** (`{colors.accent-gold}` — #f2b84b), used sparingly for selected passages, relevance markers, and “insight” moments.

Typography should feel precise and contemporary, not literary and not aggressively futuristic. Headlines use a **high-clarity grotesk** such as **Satoshi / General Sans / Inter Tight**, while body text uses **Inter / Satoshi**. The result should feel sharp, legible, and product-native. Beem is not a publication and not a toy — it is a research instrument.

The product’s emotional signature is this: **clarity with lift**. Users should feel like the interface is helping them think better, not merely decorating information.

**Key Characteristics:**
- Luminous mist canvas (`{colors.canvas}` — #f6f4ee), warm-neutral and atmospheric rather than pure white.
- Beam-blue primary accent (`{colors.primary}` — #2f6df6), used for intent, focus, active selection, and primary actions.
- Aurora-gold secondary accent (`{colors.accent-gold}` — #f2b84b), used for AI highlights, relevance marks, and insight callouts.
- Deep focus surfaces (`{colors.surface-deep}` — #111827) for immersive research contexts, article reading, citation maps, and preview drawers.
- Bright, modern grotesk typography rather than editorial serif branding.
- A feeling of motion, relevance, and discovery — like following beams through a map of knowledge.
- Strong mode distinction: **Fast mode** feels immediate and minimal; **Research mode** feels layered and exploratory.

## Colors

### Brand & Accent
- **Beam Blue / Primary** (`{colors.primary}` — #2f6df6): The main Beem accent. Used on primary CTAs, active search states, selected tabs, progress indicators, and focus rings.
- **Beam Blue Active** (`{colors.primary-active}` — #1f56cb): Darker press state.
- **Beam Blue Soft** (`{colors.primary-soft}` — #dfe9ff): Tinted selection background, active chips, lightweight highlighted containers.
- **Aurora Gold** (`{colors.accent-gold}` — #f2b84b): Used for AI-highlighted passages, insight badges, relevance moments, and “best snippet” indicators.
- **Aurora Gold Active** (`{colors.accent-gold-active}` — #dc9d2f): Darker interaction state.
- **Signal Mint** (`{colors.accent-mint}` — #4ec7a1): Reserved for successful actions, “verified answer” moments, and positive system indicators.
- **Prism Violet** (`{colors.accent-violet}` — #7c63ff): Used rarely for advanced / experimental / worldwide-search indicators. Never a main brand color.

### Surface
- **Canvas** (`{colors.canvas}` — #f6f4ee): Default page background; warm-neutral with a soft atmospheric cast.
- **Surface Soft** (`{colors.surface-soft}` — #fbfaf6): Light section bands and empty states.
- **Surface Card** (`{colors.surface-card}` — #f1efe7): Search cards, article cards, input modules.
- **Surface Card Strong** (`{colors.surface-card-strong}` — #e9e5da): Hover-adjacent or emphasized card tone.
- **Surface Frost** (`{colors.surface-frost}` — #fffdf8): High-priority cards, floating search input, answer modules.
- **Hairline** (`{colors.hairline}` — #ddd7c9): Borders on light surfaces.
- **Hairline Soft** (`{colors.hairline-soft}` — #e8e3d7): Subtle dividers within light cards.
- **Surface Deep** (`{colors.surface-deep}` — #111827): Research panels, preview drawers, citation maps, command/search overlays.
- **Surface Deep Elevated** (`{colors.surface-deep-elevated}` — #1a2436): Nested cards and controls inside dark research surfaces.
- **Surface Deep Soft** (`{colors.surface-deep-soft}` — #202c41): Code-style previews, metadata strips, tab rows within deep surfaces.

### Text
- **Ink** (`{colors.ink}` — #171717): Main heading and primary text on light surfaces.
- **Ink Strong** (`{colors.ink-strong}` — #0f1115): High-emphasis headings and selected labels.
- **Body** (`{colors.body}` — #35383f): Default reading text.
- **Muted** (`{colors.muted}` — #6d727c): Secondary labels, metadata, supporting text.
- **Muted Soft** (`{colors.muted-soft}` — #8f948f): Captions, timestamps, secondary UI chrome.
- **On Primary** (`{colors.on-primary}` — #ffffff): Text on beam-blue actions.
- **On Deep** (`{colors.on-deep}` — #f7f8fb): Main text on deep surfaces.
- **On Deep Soft** (`{colors.on-deep-soft}` — #a8b0c0): Secondary text on deep surfaces.

### Semantic
- **Success** (`{colors.success}` — #2fa36b): Successful completion, synced/ready states.
- **Warning** (`{colors.warning}` — #d58a24): Warning states and caveats.
- **Error** (`{colors.error}` — #d14b5a): Validation and error states.
- **Highlight** (`{colors.highlight}` — #fff0c7): Passive highlight fill for relevant article lines on light surfaces.
- **Highlight Deep** (`{colors.highlight-deep}` — #5f4b1d): Highlight accent for deep reading mode.

## Typography

### Font Family
The Beem system uses a **modern grotesk pairing**. Headlines should use **Satoshi** or **General Sans** at medium-to-bold weights for clarity and confidence. Body copy should use **Inter** or **Satoshi** for excellent screen readability. **JetBrains Mono** handles citations, URLs, paper metadata, and any technical inline content.

This system should feel highly legible, interface-native, and slightly optimistic:
- Satoshi / General Sans → h1, h2, h3, feature titles, section labels
- Inter / Satoshi → body, nav, buttons, metadata, reading text
- JetBrains Mono → search operators, citations, URLs, code-like metadata, article-source identifiers

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 700 | 1.02 | -2px | Hero headlines, major product statements |
| `{typography.display-lg}` | 48px | 700 | 1.06 | -1.2px | Section headers, key CTAs |
| `{typography.display-md}` | 36px | 650 | 1.1 | -0.8px | Sub-section heads, research mode headings |
| `{typography.display-sm}` | 28px | 650 | 1.15 | -0.4px | Card hero labels, empty-state titles |
| `{typography.title-lg}` | 22px | 600 | 1.3 | -0.2px | Search result titles, answer module titles |
| `{typography.title-md}` | 18px | 600 | 1.35 | 0 | Feature card titles, panel headers |
| `{typography.title-sm}` | 16px | 600 | 1.4 | 0 | Labels, list titles, sub-panels |
| `{typography.body-md}` | 16px | 400 | 1.6 | 0 | Default body text |
| `{typography.body-sm}` | 14px | 400 | 1.55 | 0 | Metadata, secondary body, support copy |
| `{typography.caption}` | 13px | 500 | 1.4 | 0 | Badges, helper labels, inline annotations |
| `{typography.caption-uppercase}` | 12px | 600 | 1.35 | 1.2px | FAST MODE / RESEARCH MODE / NEW |
| `{typography.code}` | 13px | 400 | 1.55 | 0 | Source identifiers, citations, URLs |
| `{typography.button}` | 14px | 600 | 1.0 | 0 | Buttons and segmented controls |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Top-nav items |

### Principles
The Beem typographic system should feel **clean, dense enough for serious work, but never cramped**. Headlines are bold and crisp rather than elegant or literary. Body text must remain extremely readable because much of the product’s value is in reading assistance and comprehension.

The system should avoid “default startup app” blandness by relying on spacing, sharp hierarchy, and a small amount of negative tracking on larger display sizes. Do not use serif display faces. Do not use overly geometric sans fonts that feel cold or artificial.

### Note on Font Substitutes
Preferred open fonts:
- **Satoshi** → primary display/body candidate
- **General Sans** → display alternative
- **Inter Tight** → compact display alternative
- **Inter** → body default
- **JetBrains Mono** → technical mono

If Satoshi is unavailable, **Inter Tight + Inter** is the safest fallback pairing.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 88px.
- **Section padding:** `{spacing.section}` (88px) — slightly tighter than marketing-heavy SaaS products, more product-focused.
- **Card internal padding:** `{spacing.xl}` (32px) for major cards, `{spacing.lg}` (24px) for result cards and reading modules, `{spacing.md}` (16px) for compact utility panels.
- **Search cluster spacing:** generous vertical spacing between search, answer, and results; compact spacing inside result metadata.

### Grid & Container
- **Max content width:** ~1240px centered.
- **Primary app shell:** 12-column grid with a strong center spine.
- **Hero / landing layout:** 6/6 split or 5/7 split, depending on whether the right side shows a product demo.
- **Search results layout:** Main column + optional right context rail.
- **Research mode:** 3-panel possibility at wide breakpoints — query/result list/article preview.
- **Article reading mode:** 2-column structure — content plus source/citation/AI insight rail.

### Whitespace Philosophy
Beem should feel **calm, but not slow**. Surfaces need breathing room so the product feels premium, but density must still support serious search and research tasks. The right model is not a landing page; it is a **beautiful instrument panel**.

Whitespace should be used to separate levels of thinking:
- the query,
- the answer,
- the evidence,
- the deeper exploration.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Large background bands, shell surfaces |
| Hairline | 1px `{colors.hairline}` border | Inputs, segmented controls, metadata rows |
| Soft card | `{colors.surface-card}` background, optional low shadow | Result cards, feature cards, article previews |
| Frost card | `{colors.surface-frost}` background, subtle shadow | Primary answer cards, command palette, floating input |
| Deep surface | `{colors.surface-deep}` background | Research mode, citation drawer, article reader |
| Deep elevated | `{colors.surface-deep-elevated}` background | Nested controls inside deep panels |

The elevation philosophy is **light as structure, depth as focus**. Light mode should feel open and breathable. Dark/deep mode should feel immersive and concentrated, like entering a higher-attention state.

### Decorative Depth
- Soft beam gradients can appear in hero or empty states, but only as restrained directional washes.
- Relevance lines, path indicators, and subtle map/grid overlays can reinforce the “knowledge navigation” identity.
- Highlighted snippets should feel like illuminated passages, not like yellow marker scribbles.
- Motion should imply guiding, tracing, surfacing, and converging.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Tiny tags, compact metadata chips |
| `{rounded.sm}` | 8px | Small controls, pills, compact buttons |
| `{rounded.md}` | 12px | Standard buttons, inputs, tabs |
| `{rounded.lg}` | 16px | Result cards, feature cards, preview panels |
| `{rounded.xl}` | 20px | Hero containers, major answer cards |
| `{rounded.pill}` | 9999px | Mode chips, badges, compact labels |
| `{rounded.full}` | 9999px / 50% | Circular icon buttons, avatars |

The shape language should feel **rounded with intent**. Not bubbly, not sharp-corporate. Corners should suggest approachability and polish, while keeping enough precision to feel technical.

### Illustration & Visual Language
Beem should avoid generic SaaS illustrations and also avoid editorial hand-drawn aesthetics. Its visual language should come from:
- Search/result interfaces as the hero imagery
- Subtle maps, beams, node paths, and focus windows
- Highlighted article excerpts
- Source cards, citation graphs, and structured research previews
- Occasional abstract light-path compositions for marketing moments

Think: **a map of understanding lit from within**.

## Components

### Top Navigation

**`top-nav`** — Lightweight top navigation on luminous canvas. 68px tall. Brand mark at left, mode-aware navigation in the middle or right, primary CTA on the far right. Feels lighter and more product-native than a marketing navbar.

### Buttons

**`button-primary`** — Main beam-blue CTA. Background `{colors.primary}` (#2f6df6), text `{colors.on-primary}` (#ffffff), type `{typography.button}`, height 42px, padding 12px × 18px, radius `{rounded.md}` (12px).

**`button-secondary`** — Neutral surface button. Background `{colors.surface-frost}`, text `{colors.ink}`, border 1px `{colors.hairline}`, same sizing as primary.

**`button-secondary-on-deep`** — Used on dark research surfaces. Background `{colors.surface-deep-elevated}`, text `{colors.on-deep}`, border using a soft deep-surface separator.

**`button-ghost`** — Transparent button with text emphasis only. Used for low-priority actions and contextual controls.

**`button-icon`** — 36px or 40px rounded icon button. Can be neutral, deep, or selected with beam-blue soft fill.

### Search & Query

**`search-hero-input`** — The centerpiece of the product. Large rounded search field, luminous/frosted surface, strong placeholder, optional mode chips inline, supports command-like tokens and filters. This is the most important component in the system.

**`mode-segmented-control`** — Toggles between Fast / Research / Scholar / Worldwide. Rounded segmented switch. Active state uses beam-blue soft background and beam-blue text.

**`query-chip`** — Small pill for applied filters, engines, regions, years, or modes. Light background on light surfaces, deep-elevated background on dark surfaces.

### Answers & Results

**`answer-card-primary`** — A large frost or deep card for direct answers. Should feel immediate, high-confidence, and minimal. Includes main answer, short explanation, and linked evidence.

**`result-card`** — Standard result unit. Title, source, snippet, metadata, AI-highlight affordance, save/share controls. Background `{colors.surface-card}`, radius `{rounded.lg}`, padding `{spacing.lg}`.

**`result-card-featured`** — Best-match or most relevant result. Uses a stronger border or soft beam-blue tint, never a loud ribbon.

**`highlighted-snippet-block`** — A passage preview with highlighted lines, relevance chips, and “jump to source” action. Gold or warm-highlight accent should appear here.

**`source-rail-card`** — Small metadata card for domain, source quality, date, citations, or language. Used in side rails.

### Reading & Research

**`article-preview-panel`** — A reading-focused card or panel with article title, AI-highlighted excerpts, structural navigation, and jump links. Exists in both light and deep variants.

**`citation-drawer`** — A slide-over or side panel listing sources, references, or related papers. Deep surface by default.

**`insight-card`** — AI-generated synthesis card. Carries summary points, related questions, or next-step suggestions. Should feel assistive, not flashy.

**`worldwide-comparison-card`** — Structured result comparison across regions/languages. Shows translated headline/snippet, source country/language, and thematic difference.

### Scholar-Specific

**`paper-card`** — Specialized result card for academic sources. Includes title, authors, publication venue, year, citation count, abstract preview, and actions like cite/save/open.

**`abstract-highlight-panel`** — A compact card or side panel that shows the most relevant abstract sentences for the current query. This is one of Beem’s signature features.

**`citation-network-mini-map`** — Small visual module showing related papers or source relationships. Subtle, information-rich, and never gimmicky.

### Inputs & Forms

**`text-input`** — Standard rounded product input. Height 42px, frost or light-card background, 1px hairline border.

**`text-input-focused`** — Beam-blue border + faint blue outer ring.

**`command-palette`** — Floating search/command surface. Frost card in light mode, deep surface in dark mode.

### Tags / Badges

**`badge-mode`** — FAST / RESEARCH / WORLDWIDE. Uppercase label, pill shape.

**`badge-insight`** — Gold-toned insight badge for AI-supported highlights or synthesis.

**`badge-source`** — Neutral metadata pill for article type, language, journal, or domain.

### CTA / Footer

**`cta-band`** — A polished light or deep band showing a product walkthrough, feature teaser, or conversion CTA. Should feel product-led, not marketing-loud.

**`footer`** — Minimal, structured, and elegant. Light by default, with optional deep variant on immersive pages. The footer should reinforce precision and calm.

## Do's and Don'ts

### Do
- Make the search bar the visual hero of the product.
- Let the interface feel like a tool for understanding, not just link retrieval.
- Use beam-blue to indicate action, focus, and active paths.
- Use aurora-gold for relevance, highlights, and insight moments.
- Let deep surfaces signal entry into a more concentrated research state.
- Show structure clearly: question, answer, evidence, exploration.
- Keep cards readable and premium with strong spacing and crisp typography.
- Let AI feel embedded and assistive, not mascotted or over-personified.

### Don't
- Don’t copy Claude’s editorial-literary warmth too closely.
- Don’t use serif headlines or “magazine” pacing.
- Don’t make the product look like a generic blue SaaS dashboard.
- Don’t overuse gradients, glassmorphism, glowing blobs, or neon AI clichés.
- Don’t turn highlights into bright yellow marker chaos.
- Don’t make Research mode feel heavy or intimidating.
- Don’t make Fast mode feel empty or cheap.
- Don’t let the AI chat become the visual center of the product.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Search stays dominant, rails collapse below content, result cards become single-column, reading panels open as sheets |
| Tablet | 768–1024px | Two-column search/research layouts, compact side rail, wider cards |
| Desktop | 1024–1440px | Full search shell, side-by-side result + context layouts, scholar/research workflows feel spacious |
| Wide | > 1440px | Expanded research shell, optional third panel, more breathing room with capped content widths |

### Touch Targets
- Standard buttons: minimum 42px height.
- Icon buttons: minimum 40px.
- Search actions and filters must remain thumb-friendly on mobile.
- Result cards should make primary actions easily tappable without clutter.

### Collapsing Strategy
- Search stays pinned near the top on all viewports.
- Side rails collapse into drawers or sheets on mobile.
- Research mode’s multi-panel layout reduces progressively: 3-column → 2-column → stacked.
- Article preview becomes a full-width reading module on mobile.
- Citation and source details become expandable modules rather than persistent sidebars.

### Content Behavior
- Snippets should clamp elegantly, then expand on demand.
- Highlighted passages should preserve legibility at every breakpoint.
- Scholar metadata can wrap into stacked rows on mobile.
- Dense technical information should reflow rather than shrink below readable sizes.

## Iteration Guide

1. Focus first on the **search-hero-input**, **answer-card-primary**, and **result-card**. These define the product.
2. Treat **Fast mode** and **Research mode** as different emotional states of the same system.
3. Use `{token.refs}` consistently — never inline raw colors or sizes in component specs.
4. Keep emphasis hierarchical: stronger layout and spacing before stronger color.
5. Prefer soft contrast and strong information architecture over decorative effects.
6. When adding delight, use subtle motion and reveal — not loud visuals.
7. Make every new feature answer this question: does it help the user understand something faster or deeper?

## Known Gaps

- This document defines the **feel and system direction**, not a full production token spec.
- Motion language is not fully formalized here; it should later define beam-tracing, reveal, and focus-shift transitions.
- The Beem brand mark/logo is not defined here and should be designed to fit the “guided discovery / beam” metaphor.
- Exact chart/data-visualization tokens for citation graphs and worldwide comparisons are not specified yet.
- Product marketing surfaces and in-app surfaces are covered by one shared identity here, but they may later require separate refinements.
- AI chat components are intentionally not central in this system and would need a smaller sub-spec if shipped.

