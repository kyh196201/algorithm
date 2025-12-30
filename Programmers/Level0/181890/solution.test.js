/**
 *
 * @param {string[]} strList
 * @returns
 */
function solution(strList) {
  for (let i = 0; i < strList.length; i++) {
    // l이 먼저 나올 경우
    if (strList[i] === 'l') {
      return strList.slice(0, i);
    }

    // r이 먼저 나올 경우
    if (strList[i] === 'r') {
      return strList.slice(i + 1);
    }
  }

  // l과 r이 둘 다 없을 경우
  return [];
}

describe('왼쪽 오른쪽', () => {
  it('test', () => {
    expect(solution(['u', 'u', 'l', 'r'])).toEqual(['u', 'u']);
  });
});
