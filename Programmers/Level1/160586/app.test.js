/**
 * 이해
 * -
 *
 * 구해야할 것
 * - targets에 담긴 문자열을 만들기 위해서 키를 눌러야할 횟수의 최소값
 *
 * 조건
 * - keymap = [];
 * - targets = [];
 * - 주어진 keymap으로 문자열을 완성할 수 없을 경우 -1
 *
 * 계획
 * -
 */

function findKeyCount(keymaps = [], char = '') {
  const counts = keymaps
    .map(keymap => keymap.indexOf(char) + 1)
    .filter(count => count > 0);

  // keymaps에서 문자를 찾을 수 없는 경우
  if (!counts.length) {
    return 0;
  }

  return Math.min(...counts);
}

function solution(keymaps = [], targets = []) {
  const keyCounts = new Map();

  const result = targets.map(target => {
    let totalCount = 0;

    for (let j = 0; j < target.length; j += 1) {
      const char = target[j];

      if (keyCounts.get(char) === undefined) {
        keyCounts.set(char, findKeyCount(keymaps, char));
      }

      const count = keyCounts.get(char);

      if (count <= 0) {
        return -1;
      }

      totalCount += count;
    }

    return totalCount;
  });

  return result;
}

describe('findKeyCount', () => {
  it('특정 문자를 사용하기 위해 필요한 키 횟수의 최소값', () => {
    const keymaps = ['ABACD', 'BCEFD'];

    expect(findKeyCount(keymaps, 'A')).toBe(1);
    expect(findKeyCount(keymaps, 'Z')).toBe(0);
    expect(findKeyCount(keymaps, 'D')).toBe(5);
  });
});

describe('대충 만든 자판', () => {
  it('test', () => {
    const keymaps1 = ['ABACD', 'BCEFD'];
    const targets1 = ['ABCD', 'AABB'];

    expect(solution(keymaps1, targets1)).toEqual([9, 4]);

    const keymaps2 = ['AGZ', 'BSSS'];
    const targets2 = ['ASA', 'BGZ'];

    expect(solution(keymaps2, targets2)).toEqual([4, 6]);

    expect(solution(['AA'], ['B'])).toEqual([-1]);
  });
});
