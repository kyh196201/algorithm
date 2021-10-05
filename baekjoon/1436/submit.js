const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result = 0;

rl.on('line', line => {
  const regEx = new RegExp('6{3,}');
  const N = Number(line.trim());
  let start = 666;
  let count = 0;

  while (count < N) {
    if (regEx.test(start.toString())) {
      count += 1;
    }

    start += 1;
  }

  result = start - 1;
}).on('close', () => {
  console.log(result);
  process.exit();
});
