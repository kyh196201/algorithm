const fs = require('fs');

const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

const plates = [1, 2, 3];
let count = 0;
let result = '';

function hanoi(num = 1, start = 1, end = 3) {
  if (num === 1) {
    result += `${start} ${end}\n`;
    count += 1;
    return;
  }

  const currentPlates = [start, end];
  const mid = plates.filter(p => !currentPlates.includes(p))[0];

  hanoi(num - 1, start, mid);
  hanoi(1, start, end);
  hanoi(num - 1, mid, end);
}

hanoi(N, 1, 3);

console.log(`${count}\n${result}`);
