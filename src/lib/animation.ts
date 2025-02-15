export const revealFromBottom = {
  initial: {
    opacity: 0,
    transform: "translateY(1rem)",
  },
  animate: {
    transform: "translateY(0)",
    opacity: 1,
  },
};

export const revealFromTop = {
  initial: {
    opacity: 0,
    transform: "translateY(-1rem)",
  },
  animate: {
    transform: "translateY(0)",
    opacity: 1,
  },
};

export const fadeToTop = {
  initial: {
    opacity: 1,
    transform: "translateY(0)",
  },
  exit: {
    transform: "translateY(-1rem)",
    opacity: 0,
  },
};

export const revealFromLeft = {
  initial: {
    opacity: 0,
    transform: "translateX(-1rem)",
  },
  animate: {
    transform: "translateX(0)",
    opacity: 1,
  },
};

export const revealFromRight = {
  initial: {
    opacity: 0,
    transform: "translateX(1rem)",
  },
  animate: {
    transform: "translateX(0)",
    opacity: 1,
  },
};

export const grow = {
  initial: {
    opacity: 0,
    width: 0,
  },
  animate: {
    opacity: 1,
    width: "100%",
  },
};
