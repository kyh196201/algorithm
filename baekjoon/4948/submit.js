const fs = require('fs');

const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .split('\n')
  .map(v => Number(v));

input.forEach(start => {
  if (start === 0) return;

  const end = start * 2;
  const numbers = Array.from(Array(end + 1), () => true);
  let count = 0;

  for (let d = 2, s = Math.sqrt(end); d <= s; d += 1) {
    if (numbers[d]) {
      for (let j = 2 * d; j <= end; j += d) {
        numbers[j] = false;
      }
    }
  }

  for (let k = start + 1; k <= end; k += 1) {
    if (k > 1 && numbers[k]) {
      count += 1;
    }
  }

  console.log(count);
});
