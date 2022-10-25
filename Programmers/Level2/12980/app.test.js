/**
 * 이해
 *
 * - 구해야하는 것: N만큼의 거리를 가기위해 사용해야하는 건전지의 최소값
 *
 * - 주어지는 것: 이동할 거리 N
 *
 * - 조건
 *
 * 1) N의 거리를 이동하면 건전지를 N만큼 소모한다.
 * 2) 순간이동을 하면 건전지를 소모하지 않고 (현재까지 온 거리) * 2만큼의 거리를 이동할 수 있다.
 *
 * 계획
 *
 * 1) N이 짝수일 경우 이동하는데 필요한 건전지는 N/2를 이동하는덴 필요한 건전지와 같다.
 * 2) N이 홀수일 경우 이동하는덴 필요한 건전지는 Math.floor(N/2)만큼 이동한 거리에 + 1한 것과 같다.
 *
 * 실행
 *
 * 1) N이 1일 경우 1을 리턴한다.
 * 2) N이 2이상일 경우 N이 0이 될때까지 계속 2로 나눈다.
 * 3) 이때, 2로 나눈 나머지는 결과에 합산하고, N = Math.floor(N/2)
 *
 * 재귀로 풀어보기
 *
 * 1) N이 1일 경우 1을 리턴한다.
 * 2) N이 짝수일 경우 return solution(N / 2)
 * 3) N이 홀수일 경우 return solution((N - 1) / 2) + 1
 *
 * 반성
 *
 * 1) while문으로 우선 풀이하고, 재귀적으로 문제를 한번 더 풀어보았다.
 * 2) 재귀로 풀었을 때 입력 값이 1 ~ 10억이라서 효율성 테스트를 통과하지 못할 것 같았는데 통과했다.
 */

function solution(n = 1) {
  if (n === 1) return 1;

  let battery = 0;

  while (n > 0) {
    battery += n % 2;
    n = (n - (n % 2)) / 2;
  }

  return battery;
}

function solutionRecursive(n = 1) {
  if (n === 1) return 1;

  if (n % 2 === 0) {
    return solution(n / 2);
  }

  return solution((n - 1) / 2) + 1;
}

describe('점프와 순간 이동', () => {
  it('test', () => {
    expect(solution(5)).toBe(2);
    expect(solution(6)).toBe(2);
    expect(solution(5000)).toBe(5);

    expect(solutionRecursive(5)).toBe(2);
    expect(solutionRecursive(6)).toBe(2);
    expect(solutionRecursive(5000)).toBe(5);
  });
});
