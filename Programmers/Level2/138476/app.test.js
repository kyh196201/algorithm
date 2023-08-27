/**
 * 이해
 * - 수확한 귤 중에서 K개를 고른다.
 * - 서로 다른 종류의 수가 최소가 되도록 귤을 고른다.
 *
 * 구해야할 것
 * - 크기가 서로 다른 종류의 수의 최솟값
 *
 * 조건
 *
 * 계획
 * - 각 귤의 개수를 센다.
 * - 모든 귤의 종류를 배열에 담고, 귤의 개수 기준으로 내림차순 정렬한다.
 * - 가장 많은 귤을 고른다. (담아야할 개수 = 담아야할 개수 - 고른 귤의 개수)
 * - 종류의 수를 1 증가한다.
 * - 담아야할 개수가 0이 될때까지 귤을 하나씩 담는다.
 */
function solution(k = 1, tangerines = []) {
  if (k === 1) {
    return 1;
  }

  // 크기 별 개수 저장
  const countMap = new Map();
  let count = 0;

  for (let i = 0; i < tangerines.length; i += 1) {
    const tangerine = tangerines[i];

    const current = countMap.get(tangerine) ?? 0;
    countMap.set(tangerine, current + 1);
  }

  let uniqueTangerines = [...new Set(tangerines)];

  uniqueTangerines = uniqueTangerines.sort(
    (a, b) => countMap.get(b) - countMap.get(a),
  );

  for (let j = 0; j < uniqueTangerines.length; j += 1) {
    k -= countMap.get(uniqueTangerines[j]);
    count += 1;

    if (k <= 0) break;
  }

  return count;
}

describe('귤 고르기', () => {
  it('test', () => {
    expect(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])).toBe(3);
    expect(solution(4, [1, 3, 2, 5, 4, 5, 2, 3])).toBe(2);
    expect(solution(2, [1, 1, 1, 1, 2, 2, 2, 3])).toBe(1);
  });
});
