const fs = require('fs');

const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

const factorial = (n = 0) => {
  if (n <= 0) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(input));
