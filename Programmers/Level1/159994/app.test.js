/**
 * 이해
 *
 * 구해야할 것
 * - 두 카드뭉치를 이용해서 문장을 완성할 수 있으면 'yes' 아니면 'no'를 리턴
 *
 * 조건
 * - 카드 뭉치 2개
 * - 한 번 사용한 카드는 다시 사용 불가
 *
 * 계획
 * - cards1, cards2를 순회할 인덱스를 각각 0으로 초기화한다.
 * - goal을 0번째부터 순회한다.
 * - cards1, cards2 중에 goal[i]와 같은 값이 있는지 확인한다.
 *  - cards1에 같은 값이 있을 경우
 *    - cards1의 인덱스를 1 증가한다.
 *  - cards2에 같은 값이 있을 경우
 *    - cards2의 인덱스를 1 증가한다.
 *
 *  - 같은 값이 없을 경우
 *    - 문장을 완성할 수 없으므로 'No'를 리턴
 */
function solution(cards1 = [], cards2 = [], goal = []) {
  const indexes = [0, 0];

  for (let i = 0; i < goal.length; i += 1) {
    if (goal[i] === cards1[indexes[0]]) {
      indexes[0] += 1;
    } else if (goal[i] === cards2[indexes[1]]) {
      indexes[1] += 1;
    } else {
      return 'No';
    }
  }

  return 'Yes';
}

describe('카드 뭉치', () => {
  it('test1', () => {
    const cards1 = ['i', 'drink', 'water'];
    const cards2 = ['want', 'to'];
    const goal = ['i', 'want', 'to', 'drink', 'water'];

    expect(solution(cards1, cards2, goal)).toBe('Yes');
  });

  it('test2', () => {
    const cards1 = ['i', 'water', 'drink'];
    const cards2 = ['want', 'to'];
    const goal = ['i', 'want', 'to', 'drink', 'water'];

    expect(solution(cards1, cards2, goal)).toBe('No');
  });
});
