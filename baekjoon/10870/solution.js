// Bad
function fibonacci(n = 2) {
  if (n >= 2) return fibonacci(n - 1) + fibonacci(n - 2);

  if (n === 1) {
    return 1;
  }
  if (n <= 0) {
    return 0;
  }
}

// Good
function fib(n = 2) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

console.log(fibonacci(10), fib(10));
