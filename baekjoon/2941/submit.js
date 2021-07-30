const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const regex = /c=|c-|dz=|d-|lj|nj|s=|z=/g;

function solution(input) {
  const croatians = input.match(regex);

  return Array.isArray(croatians)
    ? croatians.length + input.replace(regex, '').length
    : input.length;
}

let result;

rl.on('line', line => {
  result = solution(line);

  rl.close();
}).on('close', () => {
  console.log(result);
  process.exit();
});
