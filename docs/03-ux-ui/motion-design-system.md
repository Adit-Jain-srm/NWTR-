# Motion Design System

---
title: Motion Design System
version: 1.0
audience: designer, frontend
last-updated: 2026-05-21
status: draft
cross-references:
  - docs/03-ux-ui/animation-storyboards.md
  - docs/03-ux-ui/ui-design-direction.md
  - docs/03-ux-ui/design-language.md
---

## TL;DR

NWTR's motion language follows a "Quiet Luxury" philosophy — every animation is deliberate, purposeful, and restrained. Motion reinforces trust by signaling precision and control. The system uses Framer Motion for UI transitions, GSAP ScrollTrigger for scroll storytelling, and Lottie/Rive for complex illustrations. All animations respect reduced-motion preferences and maintain 60fps on target devices.

---

## 1. Motion Philosophy: "Quiet Luxury"

### Core Principles

| Principle | Meaning | Anti-Pattern |
|-----------|---------|-------------|
| **Deliberate** | Every animation has a clear purpose | Random bounces, unnecessary movement |
| **Purposeful** | Motion guides attention and confirms actions | Decorative-only animation |
| **Restrained** | Less is more; absence of motion is premium | Flashy, attention-seeking effects |
| **Precise** | Smooth, exact, no jitter or overshoot | Wobbly, imprecise, playful bouncing |
| **Confident** | Decisive motion that doesn't hesitate | Slow fades that feel uncertain |

### Motion Communicates Trust

In financial products, motion signals operational quality:
- Smooth transitions → "This platform is well-engineered"
- Precise timing → "Precision in handling my money"
- No janky frames → "Reliable systems behind the scenes"
- Purposeful animation → "Nothing wasteful, everything intentional"

### When NOT to Animate

- Data that updates frequently (real-time balances — just swap)
- Repeated user actions (closing the same modal 50 times — keep it snappy)
- Dense tables and lists (scroll performance > entry animation)
- Error states (show immediately, no reveal delay)

---

## 2. Timing System

### Duration Tiers

| Tier | Duration | Usage |
|------|----------|-------|
| **Micro** | 150–200ms | Button press, toggle, checkbox, tooltip |
| **Standard** | 300–400ms | Card transitions, dropdown open, tab switch |
| **Dramatic** | 500–800ms | Page transitions, hero reveals, onboarding steps |
| **Storytelling** | 1000–3000ms | Scroll animations, explainer sequences, celebrations |

### Duration Decision Tree

```
Is it a direct response to user input?
├── Yes → Is it a small element (<100px)?
│   ├── Yes → Micro (150-200ms)
│   └── No → Standard (300-400ms)
└── No → Is it decorative/ambient?
    ├── Yes → Dramatic (500-800ms)
    └── No → Standard (300-400ms)
```

### Stagger Timing

- List items: 50ms stagger between each (max 8 items animated)
- Card grids: 75ms stagger (max 6 items)
- Dashboard metrics: 100ms stagger (all cards)
- After 8 items: remaining items appear instantly (no infinite stagger)

---

## 3. Easing Curves

### Primary Curves

```typescript
const easings = {
  // Elements entering the viewport — fast start, gentle settle
  easeOut: [0.16, 1, 0.3, 1],

  // Elements leaving the viewport — slow start, fast exit
  easeIn: [0.4, 0, 1, 1],

  // Bidirectional — layout changes, repositioning
  easeInOut: [0.4, 0, 0.2, 1],

  // Interactive feedback — buttons, toggles (subtle bounce)
  spring: { type: "spring", stiffness: 400, damping: 30 },

  // Soft spring — cards, modals
  springGentle: { type: "spring", stiffness: 200, damping: 24 },

  // Dramatic entrance — hero elements, celebrations
  dramaticOut: [0.0, 0.9, 0.1, 1],
};
```

### Easing Rules

| Context | Curve | Rationale |
|---------|-------|-----------|
| Enter/appear | `easeOut` | Fast acknowledgment, gentle settle |
| Exit/disappear | `easeIn` | Quick removal, don't linger |
| Layout shift | `easeInOut` | Smooth bidirectional movement |
| Button feedback | `spring` | Physicality without bounciness |
| Modal/drawer | `springGentle` | Weight and substance |
| Scroll-triggered | `dramaticOut` | Theatrical but controlled |

---

## 4. Framer Motion Variants Library

### fadeUp (Default page element entrance)

```typescript
export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.3, ease: [0.4, 0, 1, 1] },
  },
};
```

### slideIn (Sidebars, drawers, panels)

```typescript
export const slideInRight = {
  initial: { x: "100%", opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 24 },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.3, ease: [0.4, 0, 1, 1] },
  },
};

export const slideInLeft = {
  initial: { x: "-100%", opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 24 },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: { duration: 0.3, ease: [0.4, 0, 1, 1] },
  },
};
```

### scaleIn (Modals, popovers, tooltips)

```typescript
export const scaleIn = {
  initial: { scale: 0.95, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    scale: 0.95,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] },
  },
};
```

### staggerContainer (Lists, grids)

```typescript
export const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};
```

### revealSection (Scroll-triggered content blocks)

```typescript
export const revealSection = {
  initial: { opacity: 0, y: 40 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.0, 0.9, 0.1, 1] },
  },
  viewport: { once: true, margin: "-100px" },
};
```

---

## 5. Page Transitions

### Route Change Pattern

```typescript
// Layout-level AnimatePresence
<AnimatePresence mode="wait">
  <motion.main
    key={pathname}
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.main>
</AnimatePresence>
```

### Transition Rules

- **Same section**: Crossfade only (opacity swap, 250ms)
- **Different section**: Crossfade + subtle vertical shift (8px, 350ms)
- **Portal switch**: Full fade out/in with brief blank (200ms black screen)
- **Back navigation**: Reverse direction (slide from left instead of right)

### Shared Layout Animations

- Property cards → detail page: expand animation using `layoutId`
- Tab content: horizontal slide in direction of tab selection
- List item → expanded view: scale + reposition

---

## 6. Scroll-Triggered Animations

### GSAP ScrollTrigger Integration

Used exclusively for marketing page storytelling sequences:

```typescript
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// "How It Works" section pin + progress
ScrollTrigger.create({
  trigger: ".how-it-works",
  start: "top top",
  end: "+=3000",
  pin: true,
  scrub: 1,
  onUpdate: (self) => {
    updateScene(self.progress);
  },
});
```

### Scroll Animation Patterns

| Pattern | Trigger | Behavior |
|---------|---------|----------|
| Fade-in on scroll | Element enters viewport | Once, 70% threshold |
| Parallax layers | Continuous scroll | Background moves at 0.5x |
| Pinned storytelling | Section reaches top | Pinned until sequence completes |
| Progress-linked | Scroll position | Animation progress = scroll % |
| Counter increment | Section visible | Count from 0 to value over 1.5s |

### Performance Rules for Scroll Animations

- Only animate `transform` and `opacity` (GPU-accelerated)
- Use `will-change: transform` sparingly (max 3 elements simultaneously)
- Disable scroll animations on mobile if >3 pinned sections
- Kill ScrollTrigger instances on route change (memory cleanup)
- Test on 60Hz and 120Hz displays

---

## 7. Micro-Interactions

### Button Press

```typescript
const buttonVariants = {
  idle: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.2 } },
  tap: { scale: 0.98, transition: { duration: 0.1 } },
};
```

### Hover Lift (Cards)

```typescript
const cardHover = {
  rest: {
    y: 0,
    boxShadow: "0 1px 3px rgba(10,22,40,0.06)",
  },
  hover: {
    y: -4,
    boxShadow: "0 12px 24px rgba(10,22,40,0.1)",
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
};
```

### Input Focus

```css
.input-field {
  border-color: transparent;
  transition: border-color 200ms ease-out, box-shadow 200ms ease-out;
}

.input-field:focus {
  border-color: #C9A961;
  box-shadow: 0 0 0 3px rgba(201, 169, 97, 0.12);
}
```

### Toggle Switch

```typescript
const toggleVariants = {
  off: { x: 0, backgroundColor: "#E5E7EB" },
  on: {
    x: 20,
    backgroundColor: "#C9A961",
    transition: { type: "spring", stiffness: 500, damping: 30 },
  },
};
```

### Checkbox Check

- Stroke-dasharray animation drawing the checkmark
- Duration: 200ms, easeOut
- Slight scale pop (1.0 → 1.1 → 1.0) at completion

### Tooltip Appear

```typescript
const tooltipVariants = {
  initial: { opacity: 0, y: 4, scale: 0.97 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.15, ease: [0.16, 1, 0.3, 1] },
  },
};
```

---

## 8. Loading Animations

### Skeleton Shimmer

```css
.skeleton {
  background: linear-gradient(
    90deg,
    #F0F0F0 25%,
    #E0E0E0 50%,
    #F0F0F0 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite ease-in-out;
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### Progress Indicators

- **Linear progress bar**: Smooth fill with gold gradient, indeterminate mode for unknown duration
- **Circular spinner**: Custom SVG, rotating with ease-in-out, 1.2s per revolution
- **Step indicator**: Sequential dot fill with connecting line progression

### Button Loading State

```typescript
const buttonLoadingVariants = {
  idle: { width: "auto" },
  loading: {
    width: "48px",
    borderRadius: "24px",
    transition: { duration: 0.3 },
  },
};
// Label fades out, spinner fades in (crossfade 200ms)
```

---

## 9. Data Visualization Animations

### Chart Entry

- Bars: grow from bottom, staggered 50ms each, easeOut 600ms
- Lines: draw from left to right using stroke-dashoffset, 800ms
- Area fill: fade in after line completes, 300ms
- Pie/donut: rotate each segment in from 0°, staggered

### Counter Increment

```typescript
function AnimatedCounter({ value, duration = 1500 }) {
  // Eased interpolation from 0 to target value
  // Format with Indian numbering: ₹1,42,50,000
  // Triggers when element enters viewport
}
```

- Duration: 1.5s for standard values, 2s for large numbers
- Easing: easeOut (fast start, slow finish for dramatic effect)
- Format updates in real-time during animation

### Progress Fill

- Circular progress: SVG stroke-dashoffset animation, clockwise
- Linear progress: width animation with subtle gradient movement
- Both use easeOut, 800ms duration

---

## 10. Trust Indicator Animations

### Shield Pulse

```typescript
const shieldPulse = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};
// Subtle ambient pulse on security badges — barely noticeable but conveys "active protection"
```

### Lock Secure Animation

- Triggered when user completes security action (KYC, 2FA setup)
- Lock shackle drops down and clicks into place (300ms, spring)
- Brief gold glow radiates outward (400ms, fade)

### Verification Checkmark

- Green circle scales in (200ms, spring)
- Checkmark draws via stroke-dasharray (300ms, easeOut)
- Subtle particle burst from center (4 particles, 400ms)
- Used for: KYC verified, payment confirmed, deposit secured

---

## 11. Reduced Motion Support

### Implementation

```typescript
import { useReducedMotion } from "framer-motion";

function AnimatedComponent() {
  const shouldReduceMotion = useReducedMotion();

  const variants = shouldReduceMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

  return <motion.div variants={variants} />;
}
```

### Reduced Motion Behavior

| Original Animation | Reduced Alternative |
|-------------------|---------------------|
| Fade + slide | Instant appear (or very fast fade, 100ms) |
| Scroll-triggered parallax | Static positioning |
| Counter increment | Show final value immediately |
| Skeleton shimmer | Static gray placeholder |
| Page transition | Instant swap |
| Hover lift | Border/shadow change only |
| Loading spinner | Static "Loading..." text |

### CSS Fallback

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 12. Performance Budget

### Targets

| Metric | Budget | Measurement |
|--------|--------|-------------|
| Frame rate | 60fps minimum | Chrome DevTools Performance |
| Layout thrashing | 0 forced reflows | Performance tab "Layout" events |
| Paint area | <30% of viewport per frame | Paint profiler |
| JS animation cost | <4ms per frame | requestAnimationFrame timing |
| Simultaneous animations | ≤5 elements | Code review discipline |

### GPU-Accelerated Properties Only

Allowed animated properties:
- `transform` (translate, scale, rotate)
- `opacity`
- `filter` (blur, brightness — use sparingly)
- `clip-path` (for reveal effects)

Forbidden animated properties:
- `width`, `height` (use `scale` instead)
- `top`, `left`, `right`, `bottom` (use `translate` instead)
- `margin`, `padding` (causes layout recalculation)
- `border-radius` (on large elements)
- `box-shadow` (use opacity-animated pseudo-element instead)

### Optimization Techniques

- Use `will-change` only during animation, remove after
- Prefer `transform: translateZ(0)` for layer promotion
- Batch DOM reads before writes (avoid layout thrashing)
- Use `requestAnimationFrame` for JS-driven animations
- Debounce scroll listeners (or use IntersectionObserver)
- Lazy-load animation libraries (GSAP only on marketing pages)

---

## 13. Code Examples

### Animated Page Wrapper

```typescript
import { motion } from "framer-motion";

const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25 },
  },
};

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
```

### Staggered Grid

```typescript
import { motion } from "framer-motion";

const container = {
  animate: { transition: { staggerChildren: 0.06 } },
};

const item = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

export function PropertyGrid({ properties }: { properties: Property[] }) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={container}
      initial="initial"
      animate="animate"
    >
      {properties.map((property) => (
        <motion.div key={property.id} variants={item}>
          <PropertyCard property={property} />
        </motion.div>
      ))}
    </motion.div>
  );
}
```

### Scroll-Triggered Section

```typescript
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.0, 0.9, 0.1, 1] }}
    >
      <SecurityBadges />
      <PartnerLogos />
    </motion.section>
  );
}
```

---

## Cross-References

- Storyboard sequences: [Animation Storyboards](./animation-storyboards.md)
- Visual context: [UI Design Direction](./ui-design-direction.md)
- Component states: [Design Language](./design-language.md)
- UX principles: [UX Strategy](./ux-strategy.md)
