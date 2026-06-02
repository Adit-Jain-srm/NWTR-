export const EASING = {
  default: [0.22, 1, 0.36, 1] as [number, number, number, number],
  in: [0.4, 0, 1, 1] as [number, number, number, number],
  out: [0, 0, 0.2, 1] as [number, number, number, number],
  spring: { type: "spring" as const, stiffness: 300, damping: 30 },
  springGentle: { type: "spring" as const, stiffness: 200, damping: 25 },
  springBouncy: { type: "spring" as const, stiffness: 400, damping: 15 },
};

export const DURATION = {
  micro: 0.15,
  fast: 0.2,
  standard: 0.3,
  moderate: 0.4,
  dramatic: 0.6,
  slow: 0.8,
  storytelling: 1.5,
};

export const STAGGER = {
  fast: 0.03,
  list: 0.05,
  cards: 0.075,
  metrics: 0.1,
  sections: 0.15,
};

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.standard, ease: EASING.default },
  },
};

export const fadeDownVariants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.standard, ease: EASING.default },
  },
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.standard, ease: EASING.default },
  },
};

export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.standard, ease: EASING.default },
  },
};

export const slideInRightVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.standard, ease: EASING.default },
  },
};

export const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: STAGGER.cards },
  },
};
