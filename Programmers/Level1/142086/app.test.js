/**
 * 이해
 *
 * 문자열을 탐색하면서 처음 나온 글자일 경우 -1
 *
 * 두번 이상 나온 문자일 경우 (현재 인덱스 - 마지막 인덱스)의 값을 배열에 저장
 *
 * 조건
 *
 * 구해야할 것
 *
 * 계획
 *
 * - 각 문자의 마지막 인덱스(위치)를 저장할 Map 변수를 선언한다.
 *
 * - 결과를 저장할 배열을 선언한다.
 *
 * - 문자열을 한 글자씩 탐색한다.
 *
 * - 처음 나온 글자일 경우(map에 저장된 값이 없을 경우)
 *
 *  - 배열에 -1을 push하고, map에 현재 인덱스 값을 저장한다.
 *
 * - 두번 이상 나온 글자일 경우
 *  - 배열에 (현재 인덱스 - map에 저장된 마지막 인덱스) 값을 저장하고, map의 값을 현재 인덱스로 업데이트한다.
 *
 * - 마지막 문자까지 반복한다.
 */
function solution(str = '') {
  const charMap = new Map();
  const result = [];

  for (let index = 0; index < str.length; index += 1) {
    const char = str.charAt(index);

    if (charMap.has(char)) {
      const lastIndex = charMap.get(char);
      result.push(index - lastIndex);
    } else {
      result.push(-1);
    }

    charMap.set(char, index);
  }

  return result;
}

describe('가장 가까운 같은 글자', () => {
  it('test', () => {
    expect(solution('banana')).toEqual([-1, -1, -1, 2, 2, 2]);
    expect(solution('foobar')).toEqual([-1, -1, 1, -1, -1, -1]);
  });
});
