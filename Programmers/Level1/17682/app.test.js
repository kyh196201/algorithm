/**
 * 이해
 *
 * 주어지는 것
 * 점수|보너스|옵션으로 이루어진 문자열 총 3개로 이루어짐
 *
 * 구해야하는 것
 * 계산한 총 점수
 *
 * 조건
 * 보너스 S, D, T는 각각 _, 제곱, 세제곱을 의미함
 * 옵션 *은 현재 점수와 이전 점수를 각각 두배, #은 음수로 만듬(곱하기 -1)
 *
 * 계획
 * - 숫자를 기준으로 3개의 배열로 나눈다.
 * - 배열의 각 항목을 탐색하면서 옵션을 제외한 값을 이용해 계산
 * - 옵션을 확인
 *  - 옵션이 없을 경우
 *
 *  - 옵션이 *일 경우
 *
 *  - 옵션이 #일 경우
 *
 * 반성
 * - 점수가 10일 경우에 대한 케이스를 잘 처리하지 못해서 답안을 보고 정규식을 작성해서 풀이했다.
 * - 정규식에서 []와 ()의 차이를 잘 몰랐고, change를 구할때 match를 사용했는데, change[0]을 왜 사용하지 않는지 이해가 잘 되지 않았다.
 */

function split(str = '') {
  const regex = /(\d{1,})[S|D|T][*|#]?/g;

  return str.match(regex);
}

describe('split', () => {
  it('split dart result to array', () => {
    expect(split('1S2D*3T')).toEqual(['1S', '2D*', '3T']);

    expect(split('1S*2T*3S')).toEqual(['1S*', '2T*', '3S']);

    expect(split('1T2D3D#')).toEqual(['1T', '2D', '3D#']);

    expect(split('1D2S#10S')).toEqual(['1D', '2S#', '10S']);
  });
});

function solution(dartResult = '') {
  const BONUS = {
    S: 1,
    D: 2,
    T: 3,
  };

  const results = [];

  const splitted = split(dartResult);

  for (let i = 0; i < splitted.length; i += 1) {
    const chance = splitted[i].match(/(^\d{1,})(S|D|T)(\*|#)?/);
    const point = (+chance[1]) ** BONUS[chance[2]];
    const opt = chance[3];

    if (!opt) {
      results.push(point);
    }

    if (opt === '#') {
      results.push(point * -1);
    }

    if (opt === '*') {
      results.push(point * 2);

      if (i > 0) {
        results[i - 1] *= 2;
      }
    }
  }

  return results.reduce((total, cur) => total + cur, 0);
}

describe('solution', () => {
  it('test', () => {
    expect(solution('1D2S#10S')).toBe(9);

    expect(solution('1S2D*3T')).toBe(37);

    expect(solution('1S*2T*3S')).toBe(23);
  });
});
