

# Mr Renovate — Landing Page Animation & Visual Strategy

This document details every animation, transition, and visual effect planned for the landing page. The goal is a premium, Dubai-luxury feel that rivals top agency sites while maintaining 60fps performance and accessibility.

---

## Animation Library

**Framer Motion** — chosen for its declarative API, layout animations, scroll-triggered animations via `useInView` and `useScroll`, and GPU-accelerated transforms. No heavy runtime like GSAP needed.

---

## Section-by-Section Breakdown

### 1. Hero Section
- **Text reveal**: Each word of the headline staggers in with `clipPath` wipe animation (left-to-right reveal), 0.08s delay per word
- **Subtitle**: Fades up with 0.4s delay after headline completes
- **CTA buttons**: Scale-in with spring physics (`type: "spring", stiffness: 200, damping: 20`), staggered 0.1s apart
- **Background**: Subtle Ken Burns effect on hero image — slow 15s zoom from `scale(1.0)` to `scale(1.08)` with CSS animation for zero JS cost
- **Floating particles/shapes**: 3-4 subtle gold geometric shapes (SVG) floating with CSS `@keyframes` using `translateY` and `rotate` — purely decorative, no JS overhead
- **Gradient overlay**: Animated gradient that subtly shifts hue using CSS `background-position` animation

### 2. Trusted By / Stats Counter
- **Number counter**: `useMotionValue` + `useTransform` from Framer Motion to animate numbers from 0 to target when section enters viewport. Easing: `easeOut` over 2s
- **Suffix animation**: "+", "%" symbols pop in with scale spring after counter completes
- **Icons**: Each stat icon does a subtle bounce-in (`y: [20, -5, 0]` keyframes) staggered by 0.15s

### 3. How It Works (3-Step Process)
- **Connection line**: SVG path that draws itself using `pathLength` animation as user scrolls (Framer Motion `useScroll` + `useTransform` mapping scroll progress to `pathLength: [0, 1]`)
- **Step cards**: Each card fades up and slides in from alternating sides (left, right, left) with `whileInView` trigger, 0.3s stagger
- **Step numbers**: Large number backgrounds scale in with a rotation (`rotate: [10, 0]`, `scale: [0.5, 1]`)
- **Icons in steps**: Lottie-style micro-animations using CSS keyframes (e.g., a house icon that "builds" itself, a handshake that animates)

### 4. Service Categories Grid
- **Card entrance**: Staggered grid reveal — each card fades in with `y: 40 → 0` and `opacity: 0 → 1`, using `staggerChildren: 0.08`
- **Card hover**: 
  - Card lifts with `translateY(-8px)` and `boxShadow` expansion
  - Background gradient shifts (gold accent slides in from corner)
  - Icon scales up 1.1x with color transition
  - "Learn more" arrow slides right by 4px
- **Card border**: Subtle animated gradient border using `background: conic-gradient()` with CSS `@keyframes` rotating the gradient angle on hover

### 5. Featured Projects / Gallery
- **Before/After slider**: Custom component with draggable divider — `onDrag` with Framer Motion, smooth handle that follows cursor
- **Image entrance**: Masonry items fade in with scale (`scale: [0.9, 1]`) using `whileInView` with stagger
- **Category filter tabs**: Active tab indicator slides horizontally with `layoutId` animation (Framer Motion's shared layout) — the underline smoothly glides between tabs
- **Image hover**: Slight zoom (`scale: 1.05`) with overlay fading in showing project details

### 6. Testimonials Carousel
- **Auto-scroll**: Smooth infinite scroll using Embla Carousel (already in dependencies)
- **Card transitions**: `AnimatePresence` with slide + fade for entering/exiting cards
- **Star ratings**: Stars fill in sequentially with gold color transition, 0.1s stagger
- **Quote mark**: Large decorative quote SVG with subtle floating animation

### 7. Trust & Safety Badges
- **Badge entrance**: Pop-in with spring animation, staggered. Each badge does `scale: [0, 1.1, 1]` with spring physics
- **Hover**: Gentle pulse glow effect using `box-shadow` animation
- **Checkmark icons**: Draw-on SVG stroke animation (`pathLength: [0, 1]`) when entering viewport

### 8. Final CTA Section
- **Parallax background**: Background image moves at 0.5x scroll speed using `useScroll` + `useTransform`
- **Text**: Large headline with word-by-word fade-up reveal (similar to hero but with different timing)
- **CTA button**: Pulsing glow effect (subtle `box-shadow` pulse every 2s) to draw attention, plus hover scale

### 9. Navigation
- **Scroll-triggered**: Navbar background transitions from transparent to solid with backdrop blur on scroll (using scroll event listener with `requestAnimationFrame`)
- **Mobile menu**: Full-screen overlay that slides in from right with staggered menu item reveals
- **Active link indicator**: Smooth underline animation on hover using `::after` pseudo-element with `scaleX` transform
- **Logo**: Subtle scale spring on page load

### 10. Page Transitions
- **Route changes**: `AnimatePresence` wrapping routes — pages fade in with slight upward motion, exit with fade down

---

## Performance Guardrails

These are non-negotiable technical constraints:

1. **All animations use `transform` and `opacity` only** — never animate `width`, `height`, `top`, `left`, or `margin`. These trigger layout recalculation
2. **`will-change: transform`** applied to animated elements to promote to GPU layer
3. **Intersection Observer** (via Framer Motion's `whileInView`) — animations only trigger when visible, nothing runs off-screen
4. **`prefers-reduced-motion` media query** — all animations respect user accessibility settings with a global check that disables motion
5. **No animation on mobile scroll** for elements below fold — only entrance animations, no continuous scroll-linked effects on mobile (battery + performance)
6. **Image optimization** — all gallery/hero images lazy-loaded with blur placeholder technique
7. **Bundle size**: Framer Motion tree-shakes well. No additional animation libraries. SVG animations use CSS `@keyframes` where possible
8. **60fps target** — all animations tested against Chrome DevTools Performance panel standards

---

## Visual Design Elements

### Color System (CSS Variables)
```text
Primary:      Deep Navy (#1A1F36) — trust, professionalism
Accent:       Gold (#C9A84C) — luxury, Dubai aesthetic  
Secondary:    Warm White (#FAF8F5) — clean, spacious
Text:         Charcoal (#2D2D2D) — readable
Success:      Emerald (#10B981) — trust badges
Gradient:     Navy → Deep Purple subtle gradient backgrounds
```

### Typography
- **Headlines**: Bold, large (48-72px desktop), tight letter-spacing (-0.02em)
- **Body**: 16-18px, generous line-height (1.6)
- **Accent text**: Gold color for emphasis words within headlines

### Micro-interactions
- All buttons: subtle `scale(0.98)` on press (`whileTap`), `scale(1.02)` on hover
- Form inputs: border color transition + subtle glow on focus
- Links: underline draws in from left on hover
- Scroll progress indicator: thin gold bar at top of viewport

### SVG/Graphic Elements
- Custom SVG patterns as section dividers (wave, angular cuts)
- Geometric shapes (circles, hexagons) as floating decorative elements with CSS animation
- Gold gradient accents on section borders

---

## Technical Implementation Approach

```text
src/
├── components/
│   ├── landing/
│   │   ├── Hero.tsx              — hero with text reveal + Ken Burns
│   │   ├── HowItWorks.tsx        — 3-step with SVG path draw
│   │   ├── ServiceCategories.tsx  — animated card grid
│   │   ├── FeaturedProjects.tsx   — gallery with before/after
│   │   ├── Testimonials.tsx       — carousel
│   │   ├── TrustBadges.tsx        — badge animations
│   │   ├── StatsCounter.tsx       — animated counters
│   │   ├── CTASection.tsx         — parallax CTA
│   │   └── Footer.tsx
│   ├── layout/
│   │   └── Navbar.tsx             — scroll-aware nav
│   └── animations/
│       ├── AnimatedCounter.tsx    — reusable counter
│       ├── TextReveal.tsx         — word-by-word reveal
│       ├── ScrollReveal.tsx       — whileInView wrapper
│       ├── BeforeAfterSlider.tsx  — draggable comparison
│       └── ParallaxSection.tsx    — scroll-speed wrapper
```

Each animation component is isolated and reusable. The landing page composes them together. This makes individual animations easy to audit, test, and tune.

