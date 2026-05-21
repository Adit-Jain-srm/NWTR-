export const EASING = {
  primary: [0.22, 1, 0.36, 1] as [number, number, number, number],
  entrance: [0, 0, 0.2, 1] as [number, number, number, number],
  exit: [0.4, 0, 1, 1] as [number, number, number, number],
  spring: { type: "spring" as const, stiffness: 300, damping: 30 },
  springGentle: { type: "spring" as const, stiffness: 200, damping: 25 },
};

export const DURATION = {
  micro: 0.15,
  standard: 0.3,
  dramatic: 0.6,
  storytelling: 1.5,
};

export const STAGGER = {
  list: 0.05,
  cards: 0.075,
  metrics: 0.1,
};

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.standard,
      ease: EASING.primary,
    },
  },
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATION.standard,
      ease: EASING.primary,
    },
  },
};

export const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER.cards,
    },
  },
};
