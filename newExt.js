(function (TurboWarp) {
  'use strict';
  TurboWarp.extensions.register('line-direction', {
    blocks: [
      {
        name: 'Check Line Direction',
        func: (x1, y1, x2, y2) => {
          //calculate slope
          const slope = (y2 - y1) / (x2 - x1);
          let direction;
          // check if slope is positive, negative or undefined
          if (slope > 0) {
            direction = "positive";
          } else if (slope < 0) {
            direction = "negative";
          } else {
            direction = "undefined";
          }
          //return the direction
          return direction;
        }
      }
    ]
  });
})(TurboWarp);
