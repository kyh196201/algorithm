const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

// 오름차순
const sorting = (arr = [], sortFn = (a, b) => a - b > 0) => {
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

// 버블 정렬 오름 차순
const bubbleSort = arr => {
  const sorted = arr.slice();
  const arrLength = sorted.length;
  let temp = null;

  for (let i = 0; i < arrLength - 1; i += 1) {
    for (let j = 0; j < arrLength - (i + 1); j += 1) {
      if (sorted[j] > sorted[j + 1]) {
        temp = sorted[j + 1];
        sorted[j + 1] = sorted[j];
        sorted[j] = temp;
      }
    }
  }

  return sorted;
};

// 삽입 정렬
const insertionSort = arr => {
  const copied = arr.slice();
  const arrLength = copied.length;

  for (let i = 1; i < arrLength; i += 1) {
    const temp = copied[i];
    let j = i - 1;

    for (j; j >= 0 && copied[j] > temp; j -= 1) {
      copied[j + 1] = copied[j];
    }

    copied[j + 1] = temp;
  }

  return copied;
};

rl.on('line', line => {
  input.push(line);
}).on('close', () => {
  const origin = input.slice(1).map(v => +v);
  // const sorted = bubbleSort(origin);
  const sorted = insertionSort(origin);

  console.log(sorted.join('\n'));

  process.exit();
});
