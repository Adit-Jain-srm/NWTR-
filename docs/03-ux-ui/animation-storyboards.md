# Animation Storyboards

---
title: Animation Storyboards & Sequences
version: 1.0
audience: designer, frontend
last-updated: 2026-05-21
status: draft
cross-references:
  - docs/03-ux-ui/motion-design-system.md
  - docs/03-ux-ui/ui-design-direction.md
  - docs/03-ux-ui/ux-strategy.md
---

## TL;DR

Detailed storyboards for NWTR's key animated sequences — from the marketing "How It Works" explainer to dashboard micro-interactions. Each storyboard defines triggers, durations, easing, keyframes, and implementation notes. These are the narrative moments that differentiate NWTR from generic listing portals and establish the platform's premium identity.

---

## 1. "How It Works" Explainer Animation

### Overview

A scroll-pinned 5-scene storytelling sequence on the marketing homepage. The section pins to viewport and progresses through scenes as the user scrolls. Total scroll distance: ~3000px (5 viewport heights). Implementation: GSAP ScrollTrigger with pinning.

---

### Scene 1: The Problem

**Concept**: Split-screen showing tenant frustration (rent burning away) vs. owner anxiety (vacancy eroding wealth).

| Property | Value |
|----------|-------|
| Trigger | Section enters viewport + 200px scroll |
| Duration | Scroll-linked (0% → 20% of total scroll) |
| Easing | Linear (scroll-scrubbed) |

**Keyframes**:

```
0%   — Blank canvas, deep navy background
5%   — Split line draws from center (vertical divider, gold stroke)
10%  — Left side: Rupee symbols float upward and fade (burning money)
       Text fades in: "Your deposit sits idle"
15%  — Right side: Empty property outline draws in
       Text fades in: "Your property sits vacant"
20%  — Both sides pulse gently, problem established
```

**Implementation Notes**:
- Rupee symbols: 8-12 ₹ glyphs, randomized x-position, float up with opacity fade
- Property outline: SVG path draw animation (stroke-dashoffset)
- Split line: 2px gold, draws from center outward (top and bottom)
- Text: Inter 600, 24px, fades up with 20px translate

---

### Scene 2: The NWTR Way

**Concept**: The deposit amount enters a glowing secure vault, communicating protection and purposeful management.

| Property | Value |
|----------|-------|
| Trigger | 20% → 40% of total scroll |
| Duration | Scroll-linked |
| Easing | Linear (scroll-scrubbed) |

**Keyframes**:

```
20%  — Split screen merges (divider fades out)
25%  — Deposit amount (₹15,00,000) appears center-screen, gold text
       Vault door outline draws in below (geometric, minimal)
30%  — Amount animates downward into vault opening
       Subtle gold particle trail follows the amount
35%  — Vault door closes (rotation animation)
       Lock icon appears and clicks shut (spring animation)
40%  — "Secured by NBFC-grade infrastructure" text fades up
       RBI + bank partner logos fade in below
```

**Implementation Notes**:
- Vault: Custom SVG, geometric Art Deco style, gold stroke on navy
- Deposit movement: translate-Y with gold particle system (canvas or CSS)
- Lock animation: Lottie file, triggered at 35% scroll position
- Partner logos: Fade in staggered, 100ms apart, grayscale → color

---

### Scene 3: The Magic

**Concept**: Money particles flow from the vault into investment instruments (FDs, bonds, liquid funds), visually showing yield being generated.

| Property | Value |
|----------|-------|
| Trigger | 40% → 60% of total scroll |
| Duration | Scroll-linked |
| Easing | Linear (scroll-scrubbed) |

**Keyframes**:

```
40%  — Vault in center, sealed
45%  — Vault glows, energy particles emerge from sides
       Three investment instrument cards appear (left, right, top)
       Labels: "Fixed Deposits", "Government Bonds", "Liquid Funds"
50%  — Gold particle streams flow from vault to each instrument
       Each stream has different density (allocation proportional)
55%  — Yield percentages appear next to each instrument
       "7.2%", "8.1%", "6.5%" — counting up from 0
60%  — All instruments pulse with earned returns
       Center text: "Your deposit works while you live"
```

**Implementation Notes**:
- Particle streams: Canvas-based for performance, 20-30 particles per stream
- Instrument cards: Glassmorphism cards with icon + label + yield
- Yield counter: Animated number increment (see motion-design-system.md §9)
- Flow direction: Bezier curves from vault center to each card corner
- Color coding: Gold particles for principal, emerald particles for yield

---

### Scene 4: Everyone Wins

**Concept**: Simultaneous split showing all stakeholders benefiting — owner receives payout, tenant lives worry-free, platform earns fees.

| Property | Value |
|----------|-------|
| Trigger | 60% → 80% of total scroll |
| Duration | Scroll-linked |
| Easing | Linear (scroll-scrubbed) |

**Keyframes**:

```
60%  — Previous scene fades, three columns emerge
65%  — Left column: Owner icon + "Monthly Payout: ₹45,000"
       Payout amount counts up, green checkmark appears
       Center column: Tenant icon + property illustration
       "Living worry-free" text, subtle ambient animation
       Right column: NWTR logo + "Platform secured"
       Shield icon with gentle pulse
70%  — Connecting lines draw between all three (triangle)
       Gold gradient flows along the lines (circular flow)
75%  — Text below: "A system where everyone wins"
80%  — System stabilizes, gentle idle animation
```

**Implementation Notes**:
- Three columns: Flexbox layout, fade + slide in from respective sides
- Connecting lines: SVG paths with animated stroke-dashoffset
- Circular flow: Gold gradient moves along paths using SVG `animateMotion`
- Idle state: Minimal ambient movement (floating icons, 3s cycle)

---

### Scene 5: The Return

**Concept**: Deposit flows back to tenant at lease end — full circle moment with celebration.

| Property | Value |
|----------|-------|
| Trigger | 80% → 100% of total scroll |
| Duration | Scroll-linked |
| Easing | Linear with ease-out at final frames |

**Keyframes**:

```
80%  — Previous scene compresses to center
85%  — Timeline graphic draws: "Lease Start" → "Lease End"
       Progress fills along timeline (gold fill)
90%  — Vault reopens (reverse of Scene 2 lock animation)
       Full deposit amount emerges: "₹15,00,000 + ₹1,23,000 returns"
       Amount floats upward toward a bank icon
95%  — Confetti burst (restrained: 20-30 particles, gold + navy)
       Final text: "Full deposit returned. Plus earnings."
100% — CTA button fades in: "Start Your Journey"
       Gentle gold glow on button (shadow-gold animation)
```

**Implementation Notes**:
- Timeline: SVG with animated fill, gold gradient
- Confetti: Lightweight CSS-based (no library), 25 particles max
- CTA button: Framer Motion entry with springGentle easing
- Return amount: Split display showing original + returns (color-coded)
- Section unpins after 100%, allowing natural scroll to continue

---

## 2. Hero Section Animation

### Floating Property Cards

| Property | Value |
|----------|-------|
| Trigger | Page load (above the fold) |
| Duration | Continuous ambient (infinite loop) |
| Easing | Sine wave (smooth oscillation) |

**Behavior**:
- 3-4 property card thumbnails floating at different depths
- Each card has unique float parameters:
  - Card 1: y ±8px, rotation ±1.5°, period 4s
  - Card 2: y ±12px, rotation ±2°, period 5.5s
  - Card 3: y ±6px, rotation ±1°, period 3.5s
- Parallax response to mouse movement (desktop only, ±20px range)
- Cards are slightly blurred at edges (depth-of-field simulation)

**Implementation**:
```typescript
const floatingCard = {
  animate: {
    y: [0, -8, 0],
    rotate: [0, 1.5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
```

### Ambient Particles

- 15-20 small gold dots (2-4px diameter)
- Slow random drift (speed: 0.2-0.5px/frame)
- Opacity: 0.2-0.5 range, fading in/out over 3-5s
- Canvas-based for performance
- Disabled on mobile and reduced-motion

---

## 3. Deposit Simulator Animation

| Property | Value |
|----------|-------|
| Trigger | User interacts with deposit slider |
| Duration | Real-time (instant response) |
| Easing | Spring (stiffness: 300, damping: 25) |

**Behavior**:

```
User drags slider: ₹5,00,000 → ₹25,00,000
├── Amount display updates in real-time (spring interpolation)
├── Projected returns recalculate (200ms debounce, then animate)
├── Pie chart rebalances (smooth arc transitions, 400ms)
├── Monthly income estimate updates (counter animation, 300ms)
└── "Per day earnings" micro-stat updates (fade transition, 200ms)
```

**Visual Details**:
- Slider thumb: 24px circle, gold fill, shadow-gold on drag
- Track fill: Gold gradient from left edge to thumb position
- Value tooltip: Floats above thumb, shows formatted amount
- Result cards: Spring animation when values change
- Breakpoint markers on track: "5L", "10L", "25L", "50L"

---

## 4. Trust Section Animation

| Property | Value |
|----------|-------|
| Trigger | Section scrolls into viewport (IntersectionObserver, 30% threshold) |
| Duration | 2000ms total sequence |
| Easing | dramaticOut [0.0, 0.9, 0.1, 1] for entries |

**Sequence**:

```
0ms    — Section enters viewport
200ms  — "Your money is protected by" headline fades up
500ms  — Layer 1: Shield outline draws (SVG stroke, 400ms)
900ms  — Layer 2: Lock icon appears inside shield (scale in, 200ms)
1200ms — Layer 3: Encryption pattern radiates outward (opacity pulse)
1500ms — Partner logos fade in below (staggered, 100ms each)
1800ms — "NBFC Registered | SEBI Compliant | Bank-Grade Security" text
2000ms — Subtle ambient pulse begins on shield (3s loop)
```

**Implementation Notes**:
- Shield: Custom SVG with 3 nested layers (outline, fill, icon)
- Encryption pattern: CSS radial gradient with animated opacity
- Partner logos: Grayscale → color transition on reveal
- Trigger once only (no re-animation on scroll back up)

---

## 5. Onboarding Flow Animations

### Step Transition

| Property | Value |
|----------|-------|
| Trigger | User completes a step and proceeds |
| Duration | 400ms |
| Easing | springGentle |

**Forward transition**:
- Current step: slides left + fades out (300ms, easeIn)
- Next step: slides in from right + fades in (400ms, springGentle)
- Progress bar: fills to next position (500ms, easeInOut)
- Step indicator: current dot scales up, previous dot checks

**Backward transition**:
- Reverse direction (right-to-left for current, left-to-right for previous)
- Same timing values

### Step Completion Celebrations

| Step | Celebration |
|------|-------------|
| KYC Verified | Checkmark draw + green pulse ring |
| Bank Linked | Lock click animation + "Secured" badge |
| Profile Complete | Progress ring fills to 100% + gold confetti (minimal) |
| First Deposit | Full celebration: confetti + "Welcome" + dashboard reveal |

### Progress Bar

```typescript
const progressVariants = {
  animate: (step: number) => ({
    width: `${(step / totalSteps) * 100}%`,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  }),
};
```

---

## 6. Dashboard Data Animations

### Initial Dashboard Load

```
0ms    — Skeleton screens visible (already showing from SSR)
300ms  — Data arrives, skeleton starts transition
400ms  — Top metric cards: staggered fade-up (50ms apart)
600ms  — Chart section: axis labels appear, then data draws in
800ms  — Table section: rows fade in (staggered 30ms, max 10 rows)
1000ms — Sidebar widgets: fade in (last priority)
```

### Chart Data Loading

**Area/Line Chart**:
- Axes appear first (fade, 200ms)
- Line draws from left to right (stroke-dashoffset, 800ms, easeOut)
- Area fill fades in after line completes (opacity 0→1, 300ms)
- Data points scale in at the end (staggered 50ms)

**Bar Chart**:
- Bars grow from bottom (scaleY 0→1, transform-origin bottom)
- Staggered 50ms per bar
- Duration: 500ms per bar, easeOut
- Values appear above bars after growth completes

**Donut Chart**:
- Total center number counts up (1.2s)
- Segments rotate in from 12 o'clock position (staggered)
- Each segment: 300ms, easeOut
- Legend items fade in as corresponding segment appears

### Number Counting Up

```typescript
// Triggered when dashboard metric enters viewport
const counterConfig = {
  duration: 1500,
  easing: "easeOut",
  format: "indian", // ₹1,42,50,000
  decimals: 0,
  prefix: "₹",
  startDelay: 200, // After card fade-in completes
};
```

---

## 7. Property Card Hover Animations

### Desktop Hover Sequence

| Property | Value |
|----------|-------|
| Trigger | Mouse enters card boundary |
| Duration | 300ms enter, 400ms leave |
| Easing | easeOut for enter, easeInOut for leave |

**Hover-in sequence**:
```
0ms   — Card begins lifting (translateY: 0 → -4px)
       Shadow deepens (shadow-sm → shadow-lg)
50ms  — Image begins subtle zoom (scale: 1 → 1.03)
100ms — Price badge gets gold background highlight
150ms — "View Details" text appears (opacity + translateY)
300ms — All settled at hover state
```

**Hover-out sequence**:
```
0ms   — Card begins descending (translateY: -4px → 0)
       Shadow recedes (shadow-lg → shadow-sm)
       Image zoom reverses (1.03 → 1)
100ms — Price badge reverts
200ms — "View Details" fades out
400ms — Fully at rest state
```

### Mobile Touch Interaction

- No hover state (tap-based)
- Tap: brief scale pulse (1.0 → 0.98 → 1.0, 150ms) then navigate
- Long-press: context menu with quick actions (save, share, compare)

### Implementation

```typescript
<motion.div
  className="property-card"
  whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
>
  <motion.div
    className="card-image"
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.4 }}
  >
    <Image src={property.image} />
  </motion.div>
  <motion.span
    className="view-details"
    initial={{ opacity: 0, y: 8 }}
    whileHover={{ opacity: 1, y: 0 }}
  >
    View Details →
  </motion.span>
</motion.div>
```

---

## 8. Additional Storyboards

### Modal Open/Close

**Open**:
- Backdrop: opacity 0 → 0.5, 200ms, easeOut
- Modal: scale 0.95 → 1.0, opacity 0 → 1, 300ms, springGentle
- Content: staggered fade-up after modal settles (+100ms delay)

**Close**:
- Content: instant hide
- Modal: scale 1.0 → 0.97, opacity 1 → 0, 200ms, easeIn
- Backdrop: opacity 0.5 → 0, 200ms, easeIn

### Toast Notification

- Enter: slide in from top-right, y: -20 → 0, opacity 0 → 1, 300ms spring
- Idle: 4s visible (progress bar shrinks)
- Exit: opacity 1 → 0, x: 0 → 20, 200ms easeIn
- Stack: new toasts push existing down (layout animation)

### Tab Switch

- Old content: opacity 1 → 0, x: 0 → -16 (if going right), 200ms
- New content: opacity 0 → 1, x: 16 → 0 (from direction of tab), 300ms
- Tab indicator: translateX to new position, 300ms, spring

### Dropdown Menu

- Open: scaleY 0.9 → 1, opacity 0 → 1, 200ms, easeOut, transform-origin top
- Items: staggered opacity (30ms each, max 8)
- Close: opacity 1 → 0, 150ms, easeIn (no scale — faster exit)

### Data Refresh

- Existing data: subtle opacity pulse (1 → 0.7 → 1, 300ms)
- New data: crossfade in place (200ms)
- If value changed: brief highlight background flash (gold at 10% opacity, 500ms fade)

---

## Cross-References

- Motion specs and timing: [Motion Design System](./motion-design-system.md)
- Visual design context: [UI Design Direction](./ui-design-direction.md)
- Component states: [Design Language](./design-language.md)
- UX principles driving these decisions: [UX Strategy](./ux-strategy.md)
