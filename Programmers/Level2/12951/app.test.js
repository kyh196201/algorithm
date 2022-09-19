/**
 * 이해
 *
 * 주어지는 것
 * - 알파벳, 숫자, 공백으로 이루어진 문자열 S
 *
 * 구해야하는 것
 * - JadenCase 변경한 문자열
 *
 * 조건
 * - 단어의 첫 글자는 반드시 대문자, 나머지는 모두 소문자
 * - 단어의 첫 글자가 알파벳이 아닐 경우에는 대문자로 변경할 필요가 없음
 *
 * 실행
 * - JadenCase로 변환하는 함수를 선언
 * - 공백을 기준으로 원본 문자열을 배열로 만든 뒤
 * - map을 이용해서 단어를 변환
 * - 마지막에 변환된 배열을 join으로 합치기
 *
 * 반성
 */
function convertToJadenCase(str = '') {
  return str.charAt(0).toUpperCase() + str.substring(1).toLocaleLowerCase();
}

describe('convertToJadenCase', () => {
  it('converts string to JadenCase', () => {
    expect(convertToJadenCase('3people')).toBe('3people');

    expect(convertToJadenCase('unFollowed')).toBe('Unfollowed');
  });
});

function solution(str = '') {
  return str.split(' ').map(convertToJadenCase).join(' ');
}

describe('JadenCase 문자열 만들기', () => {
  it('test', () => {
    expect(solution('3people unFollowed me')).toBe('3people Unfollowed Me');

    expect(solution('for the last week')).toBe('For The Last Week');
  });
});
