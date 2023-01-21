/**
 * 이해
 * - 두 수에 공통적으로 나타나는 수들을 구한다.
 * - 공통적으로 나타나는 수가 없을 경우 '-1'을 리턴한다.
 * - 공통적으로 나타나는 수를 통해 만들 수 있는 정수 중에서 가장 큰 수를 리턴한다.
 *
 * 조건
 * - 리턴 값은 문자열이다.
 * - X, Y는 3 ~ 3백만 자리수.
 *
 *
 * 구해야하는 것
 *
 * 계획
 * - 빈 배열(counts)을 선언한다. => 이 배열의 각 인덱스에 X, Y에 등장하는 각 숫자의 개수를 저장
 * - counts의 0번 인덱스부터 9번 index까지 탐색하면서, X와 Y에 등장하는 index의 개수를 센다.
 * - X와 Y에 등장하는 index의 개수의 최솟값을 구해서 counts[index]의 값을 설정한다.
 * - 이 과정을 반복하면 counts의 각 index에는 X, Y에 있는 각 숫자의 개수 중 최솟값이 담긴다.
 * - 가장 큰 정수를 구해야하므로, counts의 마지막 인덱스부터 탐색하면서 빈 문자열에 index를 counts[index]만큼 추가한다.
 * - 만약 결과가 빈 문자열일 경우 공통되는 숫자가 없다는 것이므로 -1을 리턴한다.
 *
 * 예외 케이스
 *
 * - 2번 테스트 케이스의 result가 '0'이어야하는데, '00'으로 나왔다.
 *  - 이 케이스 통과를 위해서 첫 글자가 0이면 무조건 '0'으로 리턴한도록 수정함
 */

function solution(x = '', y = '') {
  // 0 ~ 9 숫자가 x, y와 나오는 개수를 저장하기 위한 배열
  const counts = [];

  for (let i = 0; i < 10; i += 1) {
    const regex = new RegExp(`${i}`, 'g');

    // x, y에서 i 숫자의 개수를 센다.
    const countX = x.match(regex)?.length || 0;
    const countY = y.match(regex)?.length || 0;

    // 공통으로 나타나는 숫자중에서 서로 짝지을 수 있는 숫자만 짝꿍이므로
    // 나타나는 숫자의 개수 중에서 최솟값을 배열에 저장한다.
    counts.push(Math.min(countX, countY));
  }

  let result = '';

  // 가장 큰 정수를 구해야하므로 9번 인덱스에서 0번인덱스 순으로 문자열을 완성
  for (let index = counts.length - 1; index >= 0; index -= 1) {
    // index가 나타나는 개수만큼 문자열에 추가함
    result += index.toString().repeat(counts[index]);
  }

  if (!result) {
    return '-1';
  }

  // '00'일 경우'0'으로 리턴하기위한 조건
  return result.charAt(0) === '0' ? '0' : result;
}

describe('숫자 짝꿍', () => {
  it('test', () => {
    expect(solution('100', '2345')).toBe('-1');
    expect(solution('100', '203045')).toBe('0');
    expect(solution('100', '123450')).toBe('10');
    expect(solution('12321', '42531')).toBe('321');
    expect(solution('5525', '1255')).toBe('552');
  });
});
