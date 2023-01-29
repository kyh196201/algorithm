/**
 * 이해
 *
 * 조건
 *
 * - 4가지 발음 "aya", "ye", "woo", "ma"
 * - 발음할 수 있는 단어 = 4가지 발음으로만 이루어져 있어야하고, 연속된 발음이 있으면 안된다.
 *
 * 구해야하는 것
 *
 * - babbling의 각 원소 중에서 발음할 수 있는 원소의 개수
 *
 * 계획
 *
 * - babbling[i]에서 연속되는 발음이 있는지 찾는다.
 *
 * - 연속되는 발음이 있을 경우
 *
 *  - 발음 불가능
 *
 * - 연속되는 발음이 없을 경우
 *
 *  - 발음할 수 있는 단어를 replace를 이용해서 모두 빈 문자열로 변경한다.
 *
 *  - 남아있는 문자가 있을 경우
 *
 *    - 발음하지 못하는 단어가 있으므로 발음 불가능
 *
 *  - 남아있는 문자가 없을 경우
 *
 *    - 발음 가능
 */
function hasContinuosWord(word = '') {
  const regex = /((aya){2,}|(ye){2,}|(woo){2,}|(ma){2,})/g;

  return (word.match(regex) || []).length > 0;
}

describe('hasContinuosWord', () => {
  it('연속된 단어가 있는지 여부를 반환한다..', () => {
    expect(hasContinuosWord('ayayewooma')).toBe(false);
    expect(hasContinuosWord('ayayeayayewoomawooma')).toBe(false);
    expect(hasContinuosWord('ayaaya')).toBe(true);
    expect(hasContinuosWord('woomama')).toBe(true);
  });
});

function hasWrongChar(word = '') {
  return word.replace(/(aya|ye|woo|ma)/g, '').length > 0;
}

describe('hasWrongChar', () => {
  it('발음할 수 없는 단어가 있는지 여부를 반환한다..', () => {
    expect(hasWrongChar('uuu')).toBe(true);
    expect(hasWrongChar('woowo')).toBe(true);
    expect(hasWrongChar('wooma')).toBe(false);
  });
});

function solution(babbling = []) {
  const result = babbling.reduce((total, word) => {
    if (hasContinuosWord(word)) return total;

    if (hasWrongChar(word)) return total;

    return total + 1;
  }, 0);

  return result;
}

describe('옹알이 (2)', () => {
  it('머쓱이가 발음할 수 있는 단어의 개수를 반환한다.', () => {
    expect(solution(['aya', 'yee', 'u', 'maa'])).toBe(1);
    expect(solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa'])).toBe(2);
  });
});
