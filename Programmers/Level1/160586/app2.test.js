/**
 * 이해
 * -
 *
 * 구해야할 것
 * -
 *
 * 조건
 * -
 *
 * 계획
 * -
 */

function solution(keymaps = [], targets = []) {
  const keyCounts = new Map();

  // 자판을 모두 순회하면서 각 알파벳을 사용하는데 필요한 키 입력 횟수의 최솟값을 구함
  keymaps.forEach(keymap => {
    keymap.split('').forEach((key, index) => {
      const count = keyCounts.get(key);

      if (count === undefined) {
        // 횟수 = index = 1
        keyCounts.set(key, index + 1);
        return;
      }

      // count < index + 1 ? count : index + 1;
      keyCounts.set(key, Math.min(count, index + 1));
    });
  });

  const result = targets.map(target => {
    let totalCount = 0;

    for (let i = 0; i < target.length; i += 1) {
      const count = keyCounts.get(target[i]);

      if (count === undefined) return -1;

      totalCount += count;
    }

    return totalCount;
  });

  return result;
}

describe('대충 만든 자판', () => {
  it('test', () => {
    const keymaps1 = ['ABACD', 'BCEFD'];
    const targets1 = ['ABCD', 'AABB'];

    expect(solution(keymaps1, targets1)).toEqual([9, 4]);
  });
});
