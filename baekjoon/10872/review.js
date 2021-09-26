// For문을 이용한 풀이
function forLoop(num = 0) {
  if (num <= 1) {
    return 1;
  }

  let result = 1;

  for (let i = 2; i <= num; i += 1) {
    result *= i;
  }

  return result;
}

// 재귀를 이용한 풀이
function recursive(num = 0) {
  if (num <= 1) {
    return 1;
  }

  return num * recursive(num - 1);
}

const N = 10;

console.log('forLoop', forLoop(N));

console.log('recursive', recursive(N));
