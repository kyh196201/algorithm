const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }

  return num > 1;
};

/**
 *
 * @param {number} n - 변환할 수
 * @param {number} k - 진법
 * @returns {number} - 소수의 개수
 */
function solution(n, k) {
  return n
    .toString(k)
    .split('0')
    .filter(Boolean)
    .map(num => parseInt(num, 10))
    .filter(isPrime).length;
}

describe('k진수에서 소수 개수 구하기', () => {
  it('test1', () => {
    expect(solution(437674, 3)).toBe(3);
  });

  it('test2', () => {
    expect(solution(110011, 10)).toBe(2);
  });
});
