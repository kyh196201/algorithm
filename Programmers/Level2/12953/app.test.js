/**
 * 이해
 * - 구해야하는 것
 * 주어진 숫자들의 최소공배수
 *
 * - 주어지는 것
 * 숫자가 담긴 배열
 *
 * 조건
 * - arr의 길이는 1이상 15이하
 * - arr의 각 원소는 100 이하
 *
 * 계획
 * - 각 숫자를 소인수분해한다.
 * - 소인수끼리 곱한다.
 *
 * 반성
 */

function primeFactorization(number = 1) {
  if (number <= 2) {
    return [number];
  }

  const primes = [];
  let i = 2;

  while (number > 1) {
    if (number % i === 0) {
      number /= i;
      primes.push(i);
    } else {
      i += 1;
    }
  }

  return primes;
}

describe('primeFactorization', () => {
  it('입력된 숫자를 소인수 분해한다.', () => {
    expect(primeFactorization(8)).toEqual([2, 2, 2]);

    expect(primeFactorization(14)).toEqual([2, 7]);

    expect(primeFactorization(4)).toEqual([2, 2]);

    expect(primeFactorization(2)).toEqual([2]);

    expect(primeFactorization(1)).toEqual([1]);
  });
});
