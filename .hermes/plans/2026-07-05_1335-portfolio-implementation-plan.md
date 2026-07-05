# Portfolio Implementation Plan

> **For Hermes:** Planning only. Do not implement until the user approves this plan or answers open questions.

**Goal:** Build a premium editorial single-page portfolio for Muhammad Alan Andika that closely follows `image.png` while satisfying `AGENT.md`, `PRD.md`, and `.clinerules`.

**Architecture:** Use a small React + TypeScript + Tailwind component-driven architecture. Sections own layout, reusable UI components own repeated patterns, and all content lives in data files so Alan can maintain the site without editing JSX.

**Tech Stack:** React 19, Vite, TypeScript, Tailwind CSS v4, Framer Motion, Lenis, Lucide React, pnpm, ESLint, Prettier.

---

## 1. Analysis Summary

### Files read

- `AGENT.md` read completely.
- `.clinerules` read completely.
- `PRD.md` read completely from line 1 through 4879.
- `docs/PRD.md` was requested by the workflow but does not exist in this repository. The only PRD file present is root `PRD.md`, so this plan uses root `PRD.md` as the source of truth.
- `image.png` analyzed as the primary visual reference.
- Current repository structure analyzed.

### Current repository state

The repository currently contains only:

```txt
.
├── AGENT.md
├── PRD.md
├── .clinerules
└── image.png
```

There is no existing React/Vite project yet, so implementation starts from project initialization.

### Product vision

Build a premium editorial portfolio, not a generic resume site. The site should communicate:

- Alan is a Computer Science student.
- Alan is preparing for Full Stack Web Developer internship opportunities.
- Alan learns by building real-world projects.
- Alan is curious, responsible, friendly, and growth-oriented.

The site must feel closer to Apple, Linear, Framer, Vercel, Raycast, and Stripe than to a student template.

### Visual direction from `image.png`

Must preserve:

- White page on a dark/black surrounding showcase background when useful.
- Centered portrait hero with warm cream/yellow radial glow.
- Large italic serif decorative text behind the portrait.
- Huge bold uppercase identity text on the left.
- Stacked bold uppercase role text on the right.
- Small availability pill with warm accent dot.
- Minimal navigation with black rounded Contact button.
- Bold uppercase/editorial section headings.
- Large whitespace, strong hierarchy, rounded cards, warm orange/beige accents.
- Recent projects as large rounded two-column image cards.
- Later sections should continue the same editorial design language.

For Alan, adapt the Madison copy without changing the composition:

- Logo: `ALAN` or `Muhammad Alan Andika`.
- Availability: `Available for Internship`.
- Left hero block: `MUHAMMAD / ALAN / ANDIKA` or `I AM / ALAN` depending on responsive fit.
- Right block: `COMPUTER / SCIENCE / STUDENT` plus aspiring Full Stack description.

---

## 2. Folder Structure

Create the project with this structure:

```txt
src/
├── assets/
│   ├── profile/
│   │   └── alan.png              # user-provided transparent portrait, TODO if missing
│   ├── projects/
│   │   ├── healthpoint.png       # TODO placeholders until real images exist
│   │   ├── logistics.png
│   │   ├── wargi-kopi.png
│   │   ├── pancingin.png
│   │   ├── baqi.png
│   │   └── smart-waste-bin.png
│   └── certificates/
│       └── dicoding-backend.png  # TODO placeholder until real certificate exists
├── components/
│   ├── animations/
│   │   ├── FadeIn.tsx
│   │   └── Stagger.tsx
│   ├── common/
│   │   ├── Container.tsx
│   │   └── SectionHeader.tsx
│   ├── layout/
│   │   └── Navbar.tsx
│   └── ui/
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       └── TechPill.tsx
├── data/
│   ├── certifications.ts
│   ├── organizations.ts
│   ├── profile.ts
│   ├── projects.ts
│   └── skills.ts
├── hooks/
│   ├── useActiveSection.ts
│   ├── useLenis.ts
│   └── useReducedMotion.ts
├── lib/
│   └── motion.ts
├── sections/
│   ├── About/
│   │   └── About.tsx
│   ├── Certifications/
│   │   ├── CertificationCard.tsx
│   │   └── Certifications.tsx
│   ├── Contact/
│   │   └── Contact.tsx
│   ├── Footer/
│   │   └── Footer.tsx
│   ├── Hero/
│   │   └── Hero.tsx
│   ├── Organization/
│   │   ├── TimelineItem.tsx
│   │   └── Organization.tsx
│   ├── Projects/
│   │   ├── ProjectCard.tsx
│   │   └── Projects.tsx
│   └── Skills/
│       ├── SkillCard.tsx
│       └── Skills.tsx
├── styles/
│   └── globals.css
├── types/
│   └── portfolio.ts
├── utils/
│   └── cn.ts
├── App.tsx
└── main.tsx
```

Decision:
- Keep one folder per major section because PRD requires independent sections.
- Keep UI primitives small because repeated Button/Card/Badge patterns appear throughout.
- Avoid deeper nesting until real complexity exists.

Why better than alternatives:
- A flat single-file app would violate the PRD and be hard to teach.
- A too-deep enterprise structure would over-engineer a small portfolio.

How to extend later:
- Add future sections like Blog or Experience under `src/sections/`.
- Add future content by editing `src/data/*` first.

---

## 3. Component Hierarchy

```txt
App
├── Navbar
├── main
│   ├── Hero
│   ├── About
│   ├── Skills
│   ├── Projects
│   ├── Organization
│   ├── Certifications
│   └── Contact
└── Footer
```

Reusable components:

- `Container`: consistent max-width and horizontal padding.
- `SectionHeader`: consistent eyebrow/title/description pattern.
- `Button`: primary, secondary, ghost, icon variants.
- `Card`: shared white surface, border, radius, subtle shadow.
- `Badge`: availability/category/status labels.
- `TechPill`: project and skill tags.
- `FadeIn` and `Stagger`: consistent motion wrappers.

Decision:
- Use composition instead of a generic section factory.

Why:
- Each section has a different editorial layout, so forcing one abstraction would make JSX harder to read.

Maintain/extend:
- Reuse primitives for visual consistency, but let sections own their layout.

---

## 4. Data Structure

### `types/portfolio.ts`

Define interfaces only, no `any`:

```ts
export interface SocialLink {
  label: string;
  href: string;
}

export interface QuickFact {
  label: string;
  value: string;
}

export interface Profile {
  name: string;
  shortName: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  resumeUrl: string;
  availability: string;
  about: string[];
  quickFacts: QuickFact[];
  socials: SocialLink[];
}

export interface Project {
  title: string;
  role: string;
  category: string;
  type?: string;
  description: string;
  contributions: string[];
  stack: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  icon: string;
  technologies: string[];
}

export interface Organization {
  role: string;
  organization: string;
  date: string;
  type?: string;
  description: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  previewImage?: string;
}
```

### Data files

- `profile.ts`: hero copy, about copy, quick facts, contact/social links.
- `projects.ts`: six PRD projects.
- `skills.ts`: programming languages, frontend, backend, database, tools.
- `organizations.ts`: FORMACI UPI, UKM BAQI, MOKAKU UPI 2025.
- `certifications.ts`: Dicoding backend certificate.

Decision:
- Use static TypeScript data because the portfolio is content-light and does not need CMS/API complexity.

Why better than alternatives:
- JSON has weaker type checking for imports.
- A CMS or API is unnecessary for a student portfolio at this stage.

Maintain/extend:
- Add future projects/certificates by appending objects to data arrays.

---

## 5. Required Libraries

Install only PRD-required libraries:

```bash
pnpm create vite . --template react-ts
pnpm add framer-motion lenis lucide-react @tailwindcss/vite tailwindcss
pnpm add -D eslint prettier
```

Use native/browser features where possible:

- CSS/Tailwind responsive utilities for layout.
- Native anchors for links.
- IntersectionObserver through Framer Motion viewport features or a small hook only if needed.
- No Redux/Zustand/Context.
- No GSAP.
- No contact form library.

Open question:
- PRD mentions React Icons, but later rules say Lucide React only and avoid mixed icon libraries. Plan uses Lucide React only.

---

## 6. Design System Plan

### Colors

Map PRD tokens to Tailwind theme/custom CSS variables:

```txt
background: #FFFFFF
secondary background: #FAF8F6
surface: #FFFFFF
text primary: #111111
text secondary: #5F6368
text muted: #9AA0A6
border: #ECECEC
accent: #DCC8B3
hover accent: #C8AF96
success: #16A34A
```

### Typography

Use:

- Display/serif: Playfair Display or Cormorant Garamond.
- Body/sans: Inter or Geist.

Implementation decision:
- Use Google Fonts via `<link>` in `index.html` for simplicity unless offline/local font files are provided.
- Use CSS variables/Tailwind classes for font families.

Hero typography:

- Decorative script/italic behind portrait: Playfair Display italic, very large, low opacity.
- Main hero blocks: heavy uppercase sans-serif or condensed fallback using `font-black tracking-tight uppercase`.

Note:
- The reference uses a condensed sans-serif. If no extra font is added, Inter/Geist can approximate with tight tracking but will be less condensed. If exact visual similarity is required, ask whether adding a heading font such as Bebas Neue/Oswald/Archivo Black is acceptable.

### Spacing

Use PRD scale only:

```txt
4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160
```

Tailwind equivalents:

- `px-6 md:px-10 lg:px-16`
- `py-24 lg:py-40`
- `gap-4 md:gap-6 lg:gap-8`

### Radius and shadow

- Buttons/badges: `rounded-full`.
- Cards: approx `rounded-[28px]`.
- Images: approx `rounded-[32px]`.
- Shadows: subtle only.

---

## 7. Section-by-Section Plan

### 7.1 Navbar

Responsibilities:

- Fixed top navigation.
- Transparent over hero initially.
- White/blur/shadow after scroll.
- Smooth-scroll links.
- Active section highlight.
- Mobile menu.

Nav items:

```txt
Home -> #hero
About -> #about
Projects -> #projects
Experience -> #organization
Contact -> #contact
```

Implementation:

- `Navbar.tsx` with small local state for mobile menu and scrolled state.
- `useActiveSection` only if active highlight is not trivial.
- Mobile menu as an accessible button with `aria-expanded`.

Decision:
- Use local state only; no global state.

Why:
- Navbar state is isolated and does not need app-wide management.

Maintain/extend:
- Add nav items by editing one typed array inside the component or `profile.ts` if preferred.

### 7.2 Hero

Must preserve `image.png` most closely.

Layout desktop:

- `section#hero` min-h-screen.
- Warm radial gradient behind centered portrait.
- Absolute decorative serif text behind portrait.
- Center portrait image, large, z-index above decorative type.
- Left content block: availability pill and huge name.
- Right content block: role description, stacked role title, CTA buttons.
- CTA: View Projects, Download CV.

Responsive:

- Desktop: preserve image composition.
- Tablet: portrait still centered, text scales down, columns compress.
- Mobile: portrait stays central; name and role stack vertically around it without horizontal overflow. Never hide key content.

Asset issue:
- The repo does not currently contain Alan's transparent portrait. Use a TODO placeholder or ask user for the portrait before final hero implementation. Do not fake Alan's photo.

Decision:
- Use absolute positioning for desktop hero layers because the reference depends on overlapping composition.

Why better than normal grid:
- A pure grid would not reproduce the portrait/text layering accurately.

Maintain/extend:
- Keep copy in `profile.ts`; only layout stays in Hero component.

### 7.3 About

Layout:

- Two columns on desktop.
- Left: editorial heading `WHO I AM` / `Who I Am`.
- Right: short paragraph blocks from `profile.about`.
- Below/right: quick fact cards.

Use:

- `SectionHeader` for consistency if it does not weaken editorial layout.
- `Card` for quick facts.

Decision:
- Split long about copy into paragraph array.

Why:
- Easier to maintain and prevents giant text blocks.

### 7.4 Skills

Layout:

- Heading: `TECHNICAL SKILLS` or `TECHNOLOGIES I WORK WITH`.
- Responsive card grid.
- Categories from `skills.ts`.
- Each `SkillCard` has Lucide icon, category, tech list.

Hover:

- Lift 6px.
- Soft shadow.
- Icon scale 1.05.

Decision:
- Store icon names as strings and map to Lucide components in `SkillCard`.

Why:
- Data stays serializable while components control rendering.

### 7.5 Featured Projects

Layout:

- Heading: `FEATURED PROJECTS`.
- Subtitle from PRD.
- Six project cards in 2-column desktop/tablet, 1-column mobile.
- Each card has 16:9 image, category badge, title, role, short description, tech pills, GitHub/Demo buttons when URLs exist.

Project images:

- Real images are not present. Use neutral gradient placeholders with project titles only if needed, marked TODO. Better: ask user for project screenshots before final visual polish.

Decision:
- Keep cards image-first to match reference.

Why:
- The reference's projects section is visual/editorial, not text-heavy.

### 7.6 Organization

Layout:

- Heading: `ORGANIZATIONS & LEADERSHIP`.
- Minimal vertical timeline.
- Each item from `organizations.ts`.
- Description max two lines visually.

Decision:
- Use a single-column timeline even on desktop unless alternating adds real value.

Why:
- Simpler, more readable, and closer to premium editorial tables than busy resume timelines.

### 7.7 Certifications

Layout:

- Heading: `LEARNING JOURNEY`.
- 2-column desktop, 1-column mobile.
- Cards generated from `certifications.ts`.
- Credential button if URL exists.
- Preview optional.

Decision:
- Do not invent certificates beyond PRD.

Why:
- AGENT.md and PRD forbid fake achievements.

### 7.8 Contact

Layout:

- Centered, minimal section.
- Heading: `LET'S CONNECT`.
- Description from PRD.
- Direct link buttons: Email, LinkedIn, GitHub, Download CV, Portfolio if URL exists.
- No form.

Decision:
- Use direct links only.

Why:
- PRD explicitly says no contact form and it avoids backend/email complexity.

### 7.9 Footer

Layout:

- Thin top border.
- Name, copyright, closing text.
- Social links.
- Back-to-top button appears after scroll.

Decision:
- Keep footer plain white.

Why:
- PRD wants minimal footer; heavy footer would break the editorial calm.

---

## 8. Motion Strategy

Use Framer Motion for:

- Hero load sequence.
- Section fade-up on first viewport entry.
- Card stagger.
- Button/card hover states.

Use Lenis for:

- Smooth scrolling.
- Anchor scroll behavior.

Motion constants in `lib/motion.ts`:

```ts
export const easing = [0.16, 1, 0.3, 1];
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
```

Rules:

- No bounce.
- No elastic.
- No parallax.
- No rotating cards.
- Animate only `transform` and `opacity`.
- Respect `prefers-reduced-motion`.

Decision:
- Centralize animation variants.

Why:
- Prevents mismatched motion styles across sections.

Maintain/extend:
- Add new animation patterns only in `lib/motion.ts`.

---

## 9. Responsive Strategy

Desktop-first breakpoints:

- 1440px: full editorial composition.
- 1280px: slightly reduced hero text and portrait sizing.
- 768px: grid compresses, nav changes, text blocks stack more safely.
- 390px: single-column content, no horizontal scroll.

Hero:

- Keep portrait centered at all widths.
- Reduce decorative type opacity/size on smaller screens.
- Move left/right text into readable stacked flow on mobile while preserving visual identity.

Sections:

- About: 2 columns -> 1 column.
- Skills: 3/2 columns -> 1 column.
- Projects: 2 columns -> 1 column.
- Organization: timeline remains readable single column on mobile.
- Certifications: 2 columns -> 1 column.

Validation sizes:

- 1440 desktop.
- 1280 laptop.
- 768 tablet.
- 390 mobile.

---

## 10. Accessibility Strategy

Required checks:

- Semantic structure: `header`, `main`, `section`, `article`, `footer`.
- One `h1` in Hero.
- Logical heading order.
- Every image has `alt`.
- Decorative images use empty alt or `aria-hidden` when appropriate.
- Buttons/links have accessible labels.
- Mobile menu keyboard accessible.
- Visible focus rings.
- High contrast black/white text.
- Reduced motion support.

Decision:
- Use real anchors/buttons rather than div click handlers.

Why:
- Native semantics reduce code and improve accessibility.

---

## 11. Performance Strategy

Targets:

- Lighthouse Performance 95+.
- Accessibility 95+.
- SEO 95+.
- Best Practices 95+.

Implementation:

- Vite production build.
- Lazy-load non-hero images with `loading="lazy"`.
- Hero portrait uses eager/default priority behavior because it is above the fold.
- Provide explicit width/height/aspect containers to avoid CLS.
- Avoid unnecessary packages.
- Use Lucide only for icons.
- Keep animations transform/opacity only.

SEO:

- Set document title and meta description in `index.html`.
- Add Open Graph/Twitter metadata if assets exist.
- Add favicon if provided; otherwise use a simple text/icon fallback later.

---

## 12. Implementation Order

### Task 1: Initialize project

Objective: Create a Vite React TypeScript app with required dependencies.

Files:
- Create standard Vite project files.
- Create/update `package.json`, `vite.config.ts`, `tsconfig*.json`, `index.html`.

Commands:

```bash
pnpm create vite . --template react-ts
pnpm add framer-motion lenis lucide-react @tailwindcss/vite tailwindcss
pnpm add -D eslint prettier
pnpm install
pnpm build
```

Validation:

```bash
pnpm build
```

Expected: build succeeds.

### Task 2: Configure Tailwind and global styles

Objective: Establish fonts, tokens, global CSS, and base layout.

Files:
- Modify: `vite.config.ts`
- Modify: `src/styles/globals.css`
- Modify: `src/main.tsx`
- Modify: `index.html`

Validation:

```bash
pnpm build
```

Expected: build succeeds and styles load.

### Task 3: Add types and data files

Objective: Separate all content from UI.

Files:
- Create: `src/types/portfolio.ts`
- Create: `src/data/profile.ts`
- Create: `src/data/projects.ts`
- Create: `src/data/skills.ts`
- Create: `src/data/organizations.ts`
- Create: `src/data/certifications.ts`

Validation:

```bash
pnpm build
```

Expected: TypeScript accepts all data.

### Task 4: Add UI primitives

Objective: Create reusable Button, Card, Badge, TechPill, Container, SectionHeader.

Files:
- Create: `src/utils/cn.ts`
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/ui/Card.tsx`
- Create: `src/components/ui/Badge.tsx`
- Create: `src/components/ui/TechPill.tsx`
- Create: `src/components/common/Container.tsx`
- Create: `src/components/common/SectionHeader.tsx`

Validation:

```bash
pnpm build
```

Expected: no type errors.

### Task 5: Add motion and scroll foundations

Objective: Add Lenis and shared Framer Motion wrappers.

Files:
- Create: `src/lib/motion.ts`
- Create: `src/hooks/useLenis.ts`
- Create: `src/hooks/useReducedMotion.ts`
- Create: `src/components/animations/FadeIn.tsx`
- Create: `src/components/animations/Stagger.tsx`

Validation:

```bash
pnpm build
```

Expected: build succeeds; reduced-motion path does not crash.

### Task 6: Implement Navbar

Objective: Fixed accessible navigation with scroll styling and mobile menu.

Files:
- Create: `src/hooks/useActiveSection.ts` if needed.
- Create: `src/components/layout/Navbar.tsx`
- Modify: `src/App.tsx`

Validation:

```bash
pnpm build
```

Manual check:
- Links scroll to sections once sections exist.
- Mobile menu opens/closes by keyboard and click.

### Task 7: Implement Hero

Objective: Build the highest-priority reference-matching hero.

Files:
- Create: `src/sections/Hero/Hero.tsx`
- Add asset path under `src/assets/profile/` if user provides portrait.
- Modify: `src/App.tsx`

Validation:

```bash
pnpm build
```

Manual check:
- Portrait centered.
- Warm radial glow.
- Decorative serif text behind portrait.
- Large left heading.
- Right-side role description.
- CTA buttons visible.
- No horizontal overflow at 1440/1280/768/390.

### Task 8: Implement About

Objective: Add story and quick facts using data.

Files:
- Create: `src/sections/About/About.tsx`
- Modify: `src/App.tsx`

Validation:

```bash
pnpm build
```

Manual check:
- No long wall of text.
- Facts render from `profile.ts`.

### Task 9: Implement Skills

Objective: Render typed skill categories as cards.

Files:
- Create: `src/sections/Skills/SkillCard.tsx`
- Create: `src/sections/Skills/Skills.tsx`
- Modify: `src/App.tsx`

Validation:

```bash
pnpm build
```

Manual check:
- Cards generated from `skills.ts`.
- Hover effects subtle.

### Task 10: Implement Featured Projects

Objective: Render six editorial project cards from data.

Files:
- Create: `src/sections/Projects/ProjectCard.tsx`
- Create: `src/sections/Projects/Projects.tsx`
- Modify: `src/App.tsx`

Validation:

```bash
pnpm build
```

Manual check:
- 2-column desktop, 1-column mobile.
- Descriptions do not become long resume paragraphs.
- Missing URLs handled gracefully.

### Task 11: Implement Organization

Objective: Render organization/volunteer experience timeline.

Files:
- Create: `src/sections/Organization/TimelineItem.tsx`
- Create: `src/sections/Organization/Organization.tsx`
- Modify: `src/App.tsx`

Validation:

```bash
pnpm build
```

Manual check:
- Timeline is readable and minimal.
- Data from `organizations.ts` only.

### Task 12: Implement Certifications

Objective: Render learning/certification cards.

Files:
- Create: `src/sections/Certifications/CertificationCard.tsx`
- Create: `src/sections/Certifications/Certifications.tsx`
- Modify: `src/App.tsx`

Validation:

```bash
pnpm build
```

Manual check:
- Only supplied certificate data is shown.
- Credential button hidden if URL missing.

### Task 13: Implement Contact

Objective: Add direct contact links without a form.

Files:
- Create: `src/sections/Contact/Contact.tsx`
- Modify: `src/App.tsx`

Validation:

```bash
pnpm build
```

Manual check:
- All links have labels.
- No fake/empty links exposed unless clearly disabled.

### Task 14: Implement Footer

Objective: Add minimal footer with back-to-top behavior.

Files:
- Create: `src/sections/Footer/Footer.tsx`
- Modify: `src/App.tsx`

Validation:

```bash
pnpm build
```

Manual check:
- Back-to-top works.
- Footer stays visually quiet.

### Task 15: Responsive pass

Objective: Verify and fix layout at required breakpoints.

Files:
- Modify only files that overflow or break.

Validation:

```bash
pnpm build
```

Manual check:
- 1440, 1280, 768, 390 widths.
- No horizontal scroll.
- No clipped hero content.
- Important content remains visible.

### Task 16: Accessibility pass

Objective: Fix semantics, labels, heading hierarchy, focus, and reduced motion.

Validation:

```bash
pnpm build
```

Manual check:
- Keyboard navigation.
- Focus states visible.
- Images have alt text.
- Mobile menu accessible.
- Reduced motion preference respected.

### Task 17: Performance/SEO pass

Objective: Make the portfolio deployment-ready.

Files:
- Modify: `index.html`
- Modify image usage as needed.

Validation:

```bash
pnpm build
pnpm preview
```

Manual check:
- Lighthouse target: 95+ in Performance, Accessibility, SEO, Best Practices.

---

## 13. Potential Technical Challenges

1. Missing portrait asset
   - The hero requires a transparent PNG of Alan.
   - Without it, exact 95% similarity is impossible.
   - Best next step: ask user to provide `src/assets/profile/alan.png` or confirm use of a temporary placeholder.

2. Missing project screenshots
   - The reference relies heavily on premium project imagery.
   - Placeholder cards can preserve layout but not final polish.
   - Best next step: ask user for screenshots or allow temporary warm gradient placeholders.

3. Heading font mismatch
   - Reference uses a condensed bold sans-serif, while PRD lists Playfair/Inter.
   - Inter can approximate but may not match 95% visually.
   - Best next step: ask whether adding one heading font is allowed.

4. PRD conflict: React Icons vs Lucide only
   - PRD tech stack mentions React Icons, but icon rules say Lucide React only.
   - Plan follows Lucide only because later design-system rules are stricter and avoid mixed icon styles.

5. `docs/PRD.md` missing
   - User requested `docs/PRD.md`, but repository has `PRD.md` at root.
   - Plan treats root `PRD.md` as authoritative unless user adds a docs copy.

6. Tailwind CSS v4 setup
   - Tailwind v4 Vite plugin differs from older Tailwind setup.
   - Use the current `@tailwindcss/vite` path; avoid legacy config unless needed.

---

## 14. Suggested Improvements While Preserving Vision

1. Use a small typed data layer.
   - Why: Alan can update content without touching layout components.
   - Better than hardcoded JSX because it satisfies PRD and teaches separation of concerns.

2. Add TODO comments only where real assets/URLs are missing.
   - Why: avoids fake achievements while making unfinished content obvious.
   - Better than fabricated project links or images.

3. Use one motion system.
   - Why: all sections feel cohesive.
   - Better than hand-tuned one-off animations per component.

4. Use image-first project cards.
   - Why: preserves the reference's premium visual feeling.
   - Better than GitHub-style repository cards.

5. Keep contact direct-link only.
   - Why: PRD requires no form and it avoids backend complexity.
   - Better than adding unneeded email services.

---

## 15. Validation Against Requirements

### Against `AGENT.md`

- Read AGENT completely: yes.
- Read PRD completely: yes, root `PRD.md`.
- Analyze image: yes.
- Analyze repository: yes.
- Plan before code: yes.
- Hero highest priority: yes.
- React + TypeScript + Tailwind + Framer Motion + Lenis + Lucide: yes.
- Reusable components: yes.
- Data separated from UI: yes.
- Semantic HTML/accessibility/performance: planned.
- Avoid fake information: planned.

### Against `PRD.md`

- SPA section order preserved: Hero, About, Skills, Featured Projects, Organization, Certifications, Contact, Footer.
- Visual reference preserved: hero composition, centered portrait, warm glow, decorative typography, left/right text blocks.
- Design system tokens included.
- Motion rules respected: subtle, no bounce, no parallax, reduced motion.
- Responsive strategy included for 1440/1280/768/390.
- Performance and SEO passes included.
- Content strategy uses supplied PRD content only.

### Against `.clinerules`

- Simple/readable/maintainable architecture.
- Components kept small and purposeful.
- No giant files planned.
- No hardcoded data in components.
- Tailwind-first styling.
- Minimal state.
- Interfaces and explicit typing.
- Comments only for purpose/non-obvious logic.
- Teaching-mode explanations included in this plan.

### Against `image.png`

- Hero composition preserved.
- Portrait remains centered.
- Warm background glow preserved.
- Large decorative italic text preserved.
- Bold uppercase editorial typography preserved.
- Minimal nav with contact button preserved.
- Rounded project cards and warm imagery style preserved.
- Later sections inherit same editorial language.

---

## 16. Open Questions Before Implementation

1. `docs/PRD.md` does not exist. Should I continue using root `PRD.md` as the official PRD?

2. Do you have Alan's transparent portrait PNG for the hero? If yes, where should I place/read it from?

3. Do you have real screenshots/images for the six projects, or should I create clean temporary visual placeholders marked as TODO?

4. Should I add one condensed heading font to better match `image.png`, or strictly use only Playfair Display + Inter/Geist from the PRD?

5. Do you already have real links for GitHub, LinkedIn, email, CV, project demos, and certificates, or should missing links be hidden/TODO until provided?

---

## 17. Do Not Start Yet

Implementation should begin only after the user confirms the open questions or approves reasonable defaults.

Reasonable defaults if the user says “lanjut”:

- Use root `PRD.md` as official PRD.
- Use a temporary neutral profile placeholder with a clear TODO until Alan's portrait is provided.
- Use warm editorial placeholders for missing project images.
- Use Playfair Display + Inter only unless the user approves an extra condensed font.
- Hide missing external links instead of inventing URLs.
