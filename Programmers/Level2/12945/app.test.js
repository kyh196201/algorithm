/**
 * 이해
 *
 * 구해야하는 것
 * - n번째 피보나치 수를 1234597로 나눈 나머지
 *
 * 주어지는 것
 *
 * - 2이상의 수 n
 *
 * 조건
 *
 * 계획
 * - n 번째 피보나치 수를 구하는 함수를 생성
 * - n 번째 피보나치 수를 1234567로 나눈 나머지를 리턴
 *
 * 반성
 * - n이 큰 경우 n번째 피보나치 수는 자바스크립트 언어에서 표현할 수 있는 숫자의 범위를 넘어서 에러가 발생한다.(7 ~ 14번 케이스)
 * - 재귀함수로 피보나치 수를 구할 경우 n이 50이상일 경우 시간 초과가 발생함! for 문으로 구하는 것이 좋다.
 * - 나머지 연산자의 특징을 알아야 풀 수 있는 문제였다.
 */

const fiboNumbers = [0, 1];

/**
 * n 번째 피보나치 수
 * @param {number} n
 * @returns
 */
function fibonacci(n = 0) {
  if (n < 2) return fiboNumbers[n];

  if (fiboNumbers[n]) {
    return fiboNumbers[n];
  }

  const number = fibonacci(n - 1) + fibonacci(n - 2);

  fiboNumbers[n] = number;

  return number;
}

test('fibonacci', () => {
  expect(fibonacci(3)).toBe(2);

  expect(fibonacci(5)).toBe(5);
});

function fibonacciClosure() {
  const memo = [0, 1];

  return (n = 0) => {
    if (n < 2) return memo[n];
    if (memo[n]) return memo[n];

    for (let i = 2; i <= n; i += 1) {
      memo[i] = (memo[i - 1] % 1234567) + (memo[i - 2] % 1234567);
    }

    return memo[n];
  };
}

test('fibonacciClosure', () => {
  expect(fibonacciClosure()(3)).toBe(2);

  expect(fibonacciClosure()(5)).toBe(5);
});

function solution(n = 2) {
  return fibonacci(n) % 1234567;
}

describe('피보나치 수', () => {
  it('test', () => {
    expect(solution(3)).toBe(2);

    expect(solution(5)).toBe(5);
  });
});
