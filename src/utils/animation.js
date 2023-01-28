const transition = {
  type: "tween",
  duration: 0.6,
  delay: 0.3
}

export const scaleAnimation = {
  offscreen: {
    transform: "scale(1.3)"
  },
  onscreen: {
    transform: "scale(1)",
  }
}

export const opacityAnimation = {
  offscreen: {
    opacity: 0
  },
  onscreen: {
    opacity: 1,
    transition
  }
}

export const opacityImgAnimation = {
  offscreen: {
    opacity: 0
  },
  onscreen: {
    opacity: 1,
  }
}

export const headerAnimation =  {
  offscreen: {
    opacity: 0,
    x: 200
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition
  }
};

export const textFromBottomAppearance = {
  offscreen: {
    top: "100%"
  },
  onscreen: {
    top: "0",
  }
}

export const textFromTopAppearance = {
  offscreen: {
    top: "-100%"
  },
  onscreen: {
    top: "0"
  }
}