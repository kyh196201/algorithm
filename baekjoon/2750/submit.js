const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

// 오름차순 버블 정렬
const bubbleSort = (arr = [], sortFn = (a, b) => a - b > 0) => {
  if (!arr.length) return arr;

  const sorted = arr.slice();
  const arrLength = sorted.length;

  for (let i = 0; i < arrLength - 1; i += 1) {
    for (let j = i + 1; j < arrLength; j += 1) {
      if (sortFn(sorted[i], sorted[j])) {
        const temp = sorted[j];
        sorted[j] = sorted[i];
        sorted[i] = temp;
      }
    }
  }

  return sorted;
};

rl.on('line', line => {
  input.push(line);
}).on('close', () => {
  console.log(bubbleSort(input.slice(1).map(v => +v)).join('\n'));

  process.exit();
});
