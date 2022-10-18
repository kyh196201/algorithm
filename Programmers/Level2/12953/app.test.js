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
 * - 첫번째는 비교할 이전 최소공배수가 없으므로 첫번째 숫자를 최소공배수로 설정한다.
 * - 배열의 길이가 1일 경우에 첫번째값을 바로 리턴한다.
 * - 두번째 숫자부터 이전에 구한 최소공배수와의 최소 공배수를 구한다.
 * - 마지막 최소공배수와 n번째 숫자의 최소 공배수를 구한다.
 *
 * 반성
 * - 최소공배수를 구하고 계속 저장할 변수를 선언한다는 것 까지는 생각했는데, 초기 값을 어떻게 설정해야할지 고민되었다.
 * - null 또는 0으로 설정하고, 값이 없을 경우에 이전 인덱스의 값과 비교할까라고 생각했는데, 첫번째 숫자를 초기값으로 설정하면 되겠다라고 떠올라서 문제를 풀 수 있었다.
 * - 다른 사람들의 풀이를 참고했는데, reduce를 이용해서도 문제를 풀 수 있었다.
 */

function getGcd(num1, num2) {
  const modulas = num1 % num2;

  if (modulas === 0) {
    return num2;
  }

  return getGcd(num2, modulas);
}

function getLcm(num1, num2) {
  const gcd = getGcd(num1, num2);

  return (num1 * num2) / gcd;
}

function solution(numbers = []) {
  let lcm = numbers[0];

  if (numbers.length < 2) return lcm;

  for (let i = 1; i < numbers.length; i += 1) {
    lcm = getLcm(lcm, numbers[i]);
  }

  return lcm;
}

describe('N개의 최소공배수', () => {
  it('test', () => {
    expect(solution([100])).toBe(100);

    expect(solution([2, 6, 8, 14])).toBe(168);

    expect(solution([1, 2, 3])).toBe(6);
  });
});
