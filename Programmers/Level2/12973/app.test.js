/**
 * 이해
 *
 * 구해야하는 것
 * - 짝지어 제거하기를 수행할 수 있는지 여부
 * - 수행할 수 있을 경우 1
 * - 없을 경우 0
 *
 * 주어지는 것
 * - 알파벳 소문자로 이루어진 문자열
 *
 * 조건
 * - 같은 알파벳이 2개 붙어있는 경우 제거
 * - 다시 문자열 제일 처음으로 와서 검사 시작
 *
 * 계획
 * - 문자열의 길이가 홀수일 경우 무조건 실패하므로 0을 리턴
 * - 문자열의 길이가 1이상일 경우 'aa'부터 'zz'까지 일치하는 패턴이 있는지 검사한다.
 * - 일치하는 패턴이 있을 경우 해당 부분의 index를 찾고, 빈 문자열로 대체한다.
 * - 만약 'zz'까지 검사했는데, 일치하는 문자열을 찾지 못했을 경우 짝지어 제거하기를 못하므로 0을 리턴한다.
 * - 모든 문자를 제거했으면 1을 리턴한다.
 *
 * 반성
 *
 * - 시간 초과 발생, 질문하기에서 본 결과 입력이 100만 이상일 경우 n이나 nlogn의 풀이가 적합하다고함
 * - replace를 이용한 풀이 대신 스택을 이용한 풀이 시도
 */

const patterns = [
  'aa',
  'bb',
  'cc',
  'dd',
  'ee',
  'ff',
  'gg',
  'hh',
  'ii',
  'jj',
  'kk',
  'll',
  'mm',
  'nn',
  'oo',
  'pp',
  'qq',
  'rr',
  'ss',
  'tt',
  'uu',
  'vv',
  'ww',
  'xx',
  'yy',
  'zz',
];

const regex = new RegExp(patterns.join('|', 'g'));

function solution(str = '') {
  // 홀수일 경우
  if (str.length % 2 === 1) return 0;

  while (str.match(regex)) {
    str = str.replace(regex, '');
  }

  return str.length > 0 ? 0 : 1;
}

describe('짝지어 제거하기', () => {
  it('test', () => {
    expect(solution('aaa')).toBe(0);

    expect(solution('baabaa')).toBe(1);

    expect(solution('cdcd')).toBe(0);
  });
});
