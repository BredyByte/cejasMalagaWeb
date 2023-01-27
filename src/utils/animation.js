const transition = {
  type: "tween",
  duration: 0.6,
  delay: 0.3
}

export const headerAnimation =  {
  offscreen: {
    x: 200
  },
  onscreen: {
    x: 0,
    transition
  }
};

export const textLineAppearance = {
  offscreen: {
    top: "100%"
  },
  onscreen: {
    top: "0",
  }
}