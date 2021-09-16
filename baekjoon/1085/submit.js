const fs = require('fs');

const [x, y, w, h] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split(' ')
  .map(value => Number(value));

const min = Math.min(x, y, w - x, h - y);

console.log(min);
