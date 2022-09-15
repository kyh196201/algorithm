/* eslint-disable consistent-return */
/**
 * 이해
 *
 * 주어지는 것
 * - 부서별 필요한 예산이 담긴 배열
 * - 총 예산
 *
 * 구해야하는 것
 * - 최대로 지원해줄 수 있는 부서의 개수
 *
 * 조건
 * - 부서가 원하는 금액을 모두 지원해야한다.
 *
 * 계획
 * - 예산이 적은 부서부터 차례대로 지원한다.
 * - 지원을 할 경우 총 예산해서 현재 지원한 금액 만큼 차감한다.
 *
 * - budgets을 오름차순으로 정렬한다.
 * - budgets을 탐색하면서 지원할 수 있는지 판단한다
 * - 지원할 수 있을 경우 count를 하나 증가하고, 총 예산에서 현재 지원한 금액을 차감한다.
 * - 지원할 수 있는 금액이 없을 경우 함수를 종료하고, 현재 count를 반환한다.
 *
 * 반성
 */
function solution(d = [], budget = 1) {
  const ascendingBudgets = d.sort((a, b) => a - b);

  let count = 0;
  let remainsBudget = budget;

  ascendingBudgets.forEach(b => {
    if (remainsBudget < b) return count;

    count += 1;
    remainsBudget -= b;
  });

  return count;
}

test('예산', () => {
  expect(solution([1, 3, 2, 5, 4], 9)).toBe(3);

  expect(solution([2, 2, 3, 3], 10)).toBe(4);
});
