const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function createCharMap() {
  const charMap = new Map();
  let i = 0;
  let groupCount = 3;
  let charCode = String.prototype.charCodeAt.call('A');

  // i + 2 = 2 ~ 10
  for (i; i < 8; i += 1) {
    if (i === 5 || i === 7) {
      groupCount = 4;
    } else {
      groupCount = 3;
    }

    for (let j = 0; j < groupCount; j++) {
      charMap.set(String.fromCharCode(charCode), i + 2);
      charCode += 1;
    }
  }

  return charMap;
}

function solution(input) {
  const charMap = createCharMap();

  const sum = input
    .split('')
    .reduce((acc, cur) => acc + charMap.get(cur), input.length);

  return sum;
}

let result;

rl.on('line', line => {
  result = solution(line);

  rl.close();
}).on('close', () => {
  console.log(result);
  process.exit();
});
