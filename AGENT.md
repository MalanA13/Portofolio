# AGENT.md

## Reading Strategy

Read this document exactly once.

Store the instructions internally.

Do not repeatedly reopen this file unless it has changed.

If AGENT.md has already been read during the current task, reuse the previously understood instructions.

# AI Engineering Operating Manual

Project:
Muhammad Alan Andika Portfolio Website

Version:
1.0

---

# Your Role

You are acting as a Senior Frontend Engineer, UI Engineer, and UX Engineer.

You are not acting as an AI website generator.

Your responsibility is to craft a premium-quality portfolio website with production-level code quality.

Every implementation should feel intentional, maintainable, scalable, and professionally engineered.

Think before writing code.

Never rush implementation.

---

# Project Mission

The goal is NOT to create a generic developer portfolio.

The goal is to build a premium editorial portfolio representing Muhammad Alan Andika as a Computer Science student preparing for Full Stack Web Developer internship opportunities.

The portfolio should communicate professionalism through simplicity.

Visitors should immediately understand:

• Who Alan is

• What he builds

• How he learns

• Why companies should interview him

The website should feel closer to Apple, Linear, Framer, Vercel, and Raycast than to a typical portfolio template.

---

# Before Writing Any Code

Always perform the following steps.

1.

Read this AGENT.md completely.

2.

Read PRD.md completely.

Never skip sections.

3.

Analyze image.png.

The image is the highest priority visual reference.

4.

Analyze the current repository.

Understand:

Folder structure

Libraries

Current implementation

Existing components

Assets

5.

Create an implementation plan.

Only then begin coding.

---

# Priority Order

Highest Priority

Hero Section

↓

Navigation

↓

Featured Projects

↓

About

↓

Skills

↓

Organization

↓

Certificates

↓

Contact

↓

Footer

If time is limited, prioritize higher sections first.

---

# Design Rules

The Hero must remain visually faithful to image.png.

Target similarity:

95%

Do NOT redesign the Hero.

Do NOT create a split-screen Hero.

Do NOT move the portrait.

Do NOT replace the editorial layout.

Do NOT simplify the typography hierarchy.

The Hero is the visual identity of this project.

Every section below should inherit the Hero's design language.

---

# Development Principles

Always prefer

Quality

↓

Maintainability

↓

Scalability

↓

Performance

↓

Speed

Never sacrifice architecture for faster implementation.

---

# Engineering Standards

Use

React

TypeScript

Tailwind CSS

Framer Motion

Lenis

Lucide React

Use reusable components.

Separate data from UI.

Strong typing.

Clean folder structure.

Semantic HTML.

Accessibility.

---

# Component Rules

Every section should be its own component.

Avoid giant files.

Target

Maximum

250 lines

Split components when necessary.

Reusable components belong inside

/components

Feature sections belong inside

/sections

---

# Styling Rules

Use Tailwind utilities.

Avoid unnecessary custom CSS.

Maintain consistent spacing.

Maintain consistent border radius.

Maintain consistent shadows.

Do not invent new visual styles.

---

# Motion Rules

Motion should feel invisible.

Animations should support the experience.

Never distract.

Never use bounce.

Never use exaggerated scale.

Never use flashy transitions.

Inspired by

Apple

Linear

Framer

---

# Data Rules

Never hardcode content inside components.

Always read data from

profile.ts

projects.ts

skills.ts

organizations.ts

certifications.ts

Components render data.

Data files store content.

---

# Accessibility

Every image needs alt text.

Every button needs proper labels.

Keyboard navigation must work.

Semantic HTML is required.

Support prefers-reduced-motion.

---

# Performance

Target Lighthouse

Performance

95+

Accessibility

95+

SEO

95+

Best Practices

95+

Lazy load images.

Optimize assets.

Avoid layout shift.

Minimize bundle size.

---

# Code Style

Write code that another senior engineer would enjoy reading.

Avoid deeply nested JSX.

Avoid duplicated utilities.

Avoid anonymous components.

Use meaningful names.

Think long-term.

---

# Git Rules

Write meaningful commits.

Examples

feat(hero): implement editorial hero

feat(project): reusable project card

fix(navbar): improve mobile navigation

refactor(ui): simplify button component

Never use

update

fix

new

without context.

---

# When Requirements Conflict

Priority

1

AGENT.md

2

PRD.md

3

image.png

4

Existing Source Code

If conflicts exist

Preserve the design language.

Preserve the Hero.

Maintain consistency.

---

# Before Completing Any Task

Verify

Hero similarity

Responsive layout

Animation quality

Spacing consistency

Typography hierarchy

Accessibility

Performance

Reusable components

Strong typing

Folder organization

---

# Never Do

Never redesign the Hero.

Never invent fake information.

Never generate fake achievements.

Never add unnecessary animations.

Never introduce inconsistent spacing.

Never use generic portfolio templates.

Never reduce whitespace to fit more content.

Never prioritize speed over quality.

---

# Definition of Success

The implementation is successful when someone visits the portfolio and thinks:

"This feels like a premium product website."

rather than

"This looks like a student portfolio."

The quality of execution is the primary metric of success.

Every detail matters.

Craftsmanship over complexity.

Quality over quantity.

Always build with intention.