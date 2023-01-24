/**
 * 이해
 * - 기사단원의 번호에 해당하는 약수의 개수를 구한다.
 * - 약수의 개수가 곧 무기의 공격력인데, limit을 초과할 경우 power로 대체한다.
 * - 각 기사단원의 공격력을 구하고, 이 공격력의 합이 필요한 철의 무게이다.
 *
 * - 1 ~ number까지 약수의 개수를 구한다.
 * - 약수의 개수가 limit보다 큰 경우 power로 대체한다.
 * -
 *
 * 조건
 *
 * 구해야할 것
 * - 모든 무기를 제작하는데 필요한 철의 무게
 *
 * 계획
 * - 숫자별로 약수의 개수를 저장할 배열을 선언한다.
 *  - [0, 1]
 *
 * - 1 ~ number까지 각 숫자의 약수의 개수를 구하고, 선언한 배열에 push한다.
 *
 * - 배열을 탐색하면서 모든 값을 합산하는데, 이때 약수의 개수가 limit보다 클 경우 power를 더한다.
 */

function getDivisorCount(number) {
  const root = Math.sqrt(number);

  let count = 0;

  for (let i = 1; i <= root; i += 1) {
    if (number % i === 0) {
      count += 2;
    }
  }

  // 4의 약수에서 2가 두번 카운트됨
  if (root === Math.floor(root)) {
    count -= 1;
  }

  return count;
}

describe('getDivisorCount', () => {
  it('약수의 개수를 구한다.', () => {
    expect(getDivisorCount(4)).toBe(3);
    expect(getDivisorCount(16)).toBe(5);
  });
});

function solution(number, limit, power) {
  const divisors = [0];

  for (let i = 1; i <= number; i += 1) {
    divisors.push(getDivisorCount(i));
  }

  const sum = divisors.reduce(
    (total, divisor) => total + (divisor > limit ? power : divisor),
    0,
  );

  return sum;
}

describe('기사단원의 무기', () => {
  it('test', () => {
    expect(solution(5, 3, 2)).toBe(10);
    expect(solution(10, 3, 2)).toBe(21);
  });
});
