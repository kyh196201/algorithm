const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(input) {
  const A_CODE = 97;
  const countArray = new Array(26).fill(0);
  let result;
  let i = 0;
  const inputLength = input.length;

  for (i; i < inputLength; i += 1) {
    const code = input.charCodeAt(i) - A_CODE;
    countArray[code] += 1;
  }

  const maxCount = Math.max(0, ...countArray);
  let countOfMaxChars = 0;

  for (let j = 0; j < countArray.length; j += 1) {
    if (countArray[j] === maxCount) {
      countOfMaxChars += 1;
      result = String.fromCharCode(j + A_CODE).toUpperCase();

      if (countOfMaxChars > 1) {
        result = '?';
        break;
      }
    }
  }

  return result;
}

let result;

rl.on('line', line => {
  result = solution(line.toLowerCase());

  rl.close();
}).on('close', () => {
  console.log(result);
  process.exit();
});
