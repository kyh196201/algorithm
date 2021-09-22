function factorial(n) {
  if (n <= 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

const result = factorial(0);

console.log(result);
