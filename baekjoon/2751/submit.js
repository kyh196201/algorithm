const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

function merge(left, right) {
  const sorted = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      sorted[k] = left[i];
      i += 1;
    } else {
      sorted[k] = right[j];
      j += 1;
    }

    k += 1;
  }

  if (i < left.length) {
    while (i < left.length) {
      sorted[k] = left[i];
      k += 1;
      i += 1;
    }
  }

  if (j < right.length) {
    while (j < right.length) {
      sorted[k] = right[j];
      k += 1;
      j += 1;
    }
  }

  return sorted;
}

// 버블 정렬
function mergeSort(array) {
  if (array.length < 2) return array;

  const pivot = Math.floor(array.length / 2);
  const left = array.slice(0, pivot);
  const right = array.slice(pivot);

  return merge(mergeSort(left), mergeSort(right));
}

rl.on('line', line => {
  input.push(line);
}).on('close', () => {
  const origin = input.slice(1).map(v => +v);
  const sorted = mergeSort(origin);

  console.log(sorted.join('\n'));

  process.exit();
});
