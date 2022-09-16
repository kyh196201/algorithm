/**
 * 이해
 *
 * 주어지는 것
 * - 문자열 s
 *
 * 구해야하는 것
 * - 단어별로 짝수번째 문자는 대문자, 홀수번째 문자는 소문자로 변경한 문자열
 *
 * 조건
 *
 * 계획
 * - 공백을 기준으로 단어를 나눔
 * - 단어를 치환하는 함수 만들기
 * - map을 이용해서 단어를 모두 변경하고 join으로 합치기
 *
 * 반성
 */

function convertWord(word = '') {
  let newWord = '';

  for (let i = 0; i < word.length; i += 1) {
    if (i % 2 === 0) {
      newWord += word.charAt(i).toUpperCase();
    } else {
      newWord += word.charAt(i).toLocaleLowerCase();
    }
  }

  return newWord;
}

test('convertWord', () => {
  expect(convertWord('try')).toBe('TrY');

  expect(convertWord('hello')).toBe('HeLlO');

  expect(convertWord('world')).toBe('WoRlD');
});

function solution(str = '') {
  return str.split(' ').map(convertWord).join(' ');
}

describe('이상한 문자 만들기', () => {
  it('test', () => {
    expect(solution('try hello world')).toBe('TrY HeLlO WoRlD');
  });
});
