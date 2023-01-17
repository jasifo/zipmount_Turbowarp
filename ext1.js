TurboWarp.extensions.register('line-direction', {
  blocks: [
    {
      name: 'Check Line Direction',
      func: (x1, y1, x2, y2) => {
        const slope = (y2 - y1) / (x2 - x1);
        let direction;
        if (slope > 0) {
          direction = "positive";
        } else if (slope < 0) {
          direction = "negative";
        } else {
          direction = "undefined";
        }
        return direction;
      }
    }
  ]
});
