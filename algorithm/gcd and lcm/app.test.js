/**
 * 최대공약수를 구하는 유클리드 호제법
 *
 * gcd(a, b) = gcd(b, a % b)에서 출발한다
 *
 * 이때, a % b가 0이 될때 b가 최대공약수
 *
 * 1) a를 b로 나눈 나머지를 구한다.
 * 2) 나머지가 0이면 b를 리턴한다.
 * 3) 나머지가 0이 아닐 경우 재귀함수 형식으로 gcd(b, a % b)를 리턴한ㄷ나
 */

function getGcd(num1, num2) {
  const modulas = num1 % num2;

  if (modulas === 0) {
    return num2;
  }

  return getGcd(num2, modulas);
}

describe('getGcd', () => {
  it('두 수의 최대 공약수를 구한다.', () => {
    expect(getGcd(24, 18)).toBe(6);
  });
});

function getLcm(num1, num2) {
  const gcd = getGcd(num1, num2);

  return (num1 * num2) / gcd;
}

describe('getLcm', () => {
  it('두 수의 최소공배수를 구한다.', () => {
    expect(getLcm(24, 18)).toBe(72);
  });
});
