const originArr = [5, 2, 3, 4, 1];

// 버블 정렬
function bubbleSort(arr = [], sortFn) {
  if (!arr.length) return arr;

  const sorted = arr.slice();
  const arrLength = arr.length;

  if (typeof sortFn !== 'function') {
    sortFn = (a, b) => a - b > 0;
  }

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
}

console.log(bubbleSort(originArr, (a, b) => b - a > 0));
