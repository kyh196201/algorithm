/**
 * ## 이해
 *
 * 주어지는 것
 *
 * 배낭 별 총 무게와 총 가치
 *
 * 구해야하는 것
 *
 * 가방에 담을 수 있는 무게가 정해졌을 때 최대로 높게 담을 수 있는 가치
 *
 * ## 계획
 *
 * 그리디 알고리즘을 사용
 *
 * 1. 물건 별 무게당 가치를 구한다.
 *
 * 2. 배낭에 물건을 담는다.
 * 담을 무게는 (현재 배낭의 무게, 물건의 무게)의 최솟값
 * 배낭의 무게에서 담은 물건의 무게만큼 뺀다.
 * 그리고 가치에 현재 담은 물건의 무게 * 물건의 무게당 가치 만큼 더한다.
 *
 * 3. 배낭에 남은 무게가 없을 경우 종료한다.
 *
 * ## 실행
 *
 * ## 반성
 */
function knapsack(items = [], weight = 0) {
  // 무게대비 가치 순 내림차순으로 정렬
  const sortedItems = items.sort((a, b) => b[1] / b[2] - a[1] / a[2]);

  let weightRemaining = weight;
  let totalValue = 0;

  for (let i = 0; i < sortedItems.length; i += 1) {
    if (weightRemaining <= 0) break;

    const item = sortedItems[i];

    // 배낭에 담을 수 있는 무게 = 남은 무게와 물건의 무게 중 최솟값
    const weightToLoad = Math.min(weightRemaining, item[2]);

    weightRemaining -= weightToLoad;
    totalValue += weightToLoad * (item[1] / item[2]);
  }

  return totalValue;
}

// [물건 번호, 총 가치, 총 무게]
const items = [
  [1, 60, 10],
  [2, 100, 20],
  [3, 120, 30],
];

describe('분할 가능 배낭 문제', () => {
  it('test', () => {
    expect(knapsack(items, 50)).toBe(240);
  });
});
