export const revealFromBottom = {
  initial: {
    opacity: 0,
  },
  animate: {
    transform: ["translateY(1rem)", "translateY(0)"],
    opacity: [0, 1],
  },
};

export const revealFromTop = {
  initial: {
    opacity: 0,
  },
  animate: {
    transform: ["translateY(-1rem)", "translateY(0)"],
    opacity: [0, 1],
  },
};

export const revealFromLeft = {
  initial: {
    opacity: 0,
  },
  animate: {
    transform: ["translateX(-1rem)", "translateX(0)"],
    opacity: [0, 1],
  },
};

export const revealFromRight = {
  initial: {
    opacity: 0,
  },
  animate: {
    transform: ["translateX(1rem)", "translateX(0)"],
    opacity: [0, 1],
  },
};
