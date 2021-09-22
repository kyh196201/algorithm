const fs = require('fs');

const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

const fibonacci = (n = 2) => {
  if (n < 2) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(input));
