export const widthIncrementAnimation = {
  offscreen: {
    width: 0
  },
  onscreen: {
    width: '100%',
    transition: {
      duration: 0.6,
      type: 'tween',
      delay: 1.1,
    }
  }
};

export const scaleAnimation = {
  offscreen: {
    transform: "scale(1.3)"
  },
  onscreen: {
    transform: "scale(1)",
  }
};

export const opacityAnimation = (delay = 0.4, duration = 0.4) => (
  {
    offscreen: {
      opacity: 0
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration,
        type: 'tween',
        delay
      }
    }
  }
);

export const xFromRightAnimation =  {
  offscreen: {
    opacity: 0,
    x: 200
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 0.4,
      delay: 0.4
    }
  }
};

export const textFromBottomAppearance = (delay = 0.2, duration = 0.4) => (
  {
    offscreen: {
      top: '100%'
    },
    onscreen: {
      top: '0',
      transition: {
        duration,
        type: 'tween',
        delay
      }
    }
  }
);

export const textFromTopAppearance = (delay = 0.2, duration = 0.4) => (
  {
    offscreen: {
      top: '-100%'
    },
    onscreen: {
      top: '0',
      transition: {
        duration,
        type: 'tween',
        delay
      }
    }
  }
);