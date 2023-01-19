/**
 * 이해
 * - 한 상자에 m개씩 사과를 담는다.
 * - 사과 한 상자의 가격은 상자에 담긴 사과 중 가장 낮은 점수 * 사과의 개수 m
 *
 * - 이익이 발생하지 않는 경우? score.length < m
 *
 * - 만들 수 있는 상자의 개수 = 전체 사과의 개수 / 한 상자에 들어가는 사과의 수 = score.length / m의 몫
 *
 * - 만들 수 있는 상자의 개수가 0이면 이익이 발생하지 않으므로 0을 반환
 *
 * 조건
 *
 * 구해야할 것
 *
 * 계획
 * - score를 내림차순으로 정렬한다.
 * - 모든 상자의 개수를 구한다. count = Math.floor(score.length / m);
 * - count가 0일 경우
 *  - 0을 반환한다.
 *
 * - count가 0보다 클 경우
 *  - i = 0 -> i가 count보다 작을때까지 반복
 *  - 상자 = score.slice(i * count, (i + 1) * count);
 *  - 상자의 최솟값을 구한다.
 *  - 상자의 판매 금액 = 최솟값 * m
 *  - 상자의 판매 금액을 누적한다.
 */

function sortDescending(arr = []) {
  return arr.sort((a, b) => b - a);
}

test('내림차순 정렬', () => {
  expect(sortDescending([1, 2, 3, 1, 2, 3, 1])).toEqual([3, 3, 2, 2, 1, 1, 1]);
  expect(sortDescending([4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])).toEqual([
    4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 1, 1,
  ]);
});

function solution(k, m, score = []) {
  const numberOfBoxes = Math.floor(score.length / m);

  if (numberOfBoxes < 1) {
    return 0;
  }

  let total = 0;

  const scoreDescending = sortDescending(score);

  for (let i = 0; i < numberOfBoxes; i += 1) {
    const box = scoreDescending.slice(i * m, (i + 1) * m);

    const min = Math.min(...box);

    total += min * m;
  }

  return total;
}

describe('과일 장수', () => {
  it('사과를 판마해서 얻는 최대의 이익을 구한다.', () => {
    expect(solution(3, 8, [1, 2, 3, 1, 2, 3, 1])).toBe(0);
    expect(solution(3, 4, [1, 2, 3, 1, 2, 3, 1])).toBe(8);
    expect(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])).toBe(33);
  });
});
