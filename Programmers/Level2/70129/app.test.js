/**
 * 이해
 *
 * 주어지는 것
 * - 0, 1로 이루어진 문자열 x
 *
 * 구해야하는 것
 * - 이진 변환의 횟수, 변환 과정에서 제거된 모든 0의 개수
 *
 * 이진변환
 * - x의 모든 0을 제거
 * - x의 길이를 c라하면, x = c를 2진법으로 표현한 문자열
 *
 * 조건
 * - 이진 변환:
 *
 * 실행
 * - 변환한 결과를 담을 x를 선언
 * - 횟수 count, 제거한 0의 개수 zeros를 선언
 * - s가 1인지 확인
 * - s가 1이 아닐 경우 이진변환 실행
 * - count 1 증가
 * - 제거한 0의 개수만큼 zeros에 더함
 * - 반복
 *
 * 반성
 */
function toBinary(num = 1) {
  if (num < 2) {
    return num.toString();
  }

  const numbers = [];

  while (num > 0) {
    numbers.push(num % 2);
    num = Math.floor(num / 2);
  }

  return numbers
    .map(v => v.toString())
    .reverse()
    .join('');
}

describe('toBinary', () => {
  it('converts decimal to binary string', () => {
    expect(toBinary(1)).toBe('1');

    expect(toBinary(2)).toBe('10');

    expect(toBinary(6)).toBe('110');
  });
});

function text2binary(str = '') {
  const stringWithoutZero = str.replace(/0/g, '');

  return {
    result: toBinary(stringWithoutZero.length),
    // removedZeros: str.length - stringWithoutZero.length,
    removedZeros: (str.match(/0/g) || []).length,
  };
}

describe('text2binary', () => {
  it('문자열을 2진 변환한다.', () => {
    expect(text2binary('110010101001')).toEqual({
      result: '110',
      removedZeros: 6,
    });

    expect(text2binary('110')).toEqual({
      result: '10',
      removedZeros: 1,
    });

    expect(text2binary('10')).toEqual({
      result: '1',
      removedZeros: 1,
    });

    expect(text2binary('01110')).toEqual({
      result: '11',
      removedZeros: 2,
    });

    expect(text2binary('11')).toEqual({
      result: '10',
      removedZeros: 0,
    });

    expect(text2binary('10')).toEqual({
      result: '1',
      removedZeros: 1,
    });
  });
});

function solution(str = '') {
  const results = [0, 0];

  if (str === '1') {
    return results;
  }

  let x = str;

  while (x !== '1') {
    const {result, removedZeros} = text2binary(x);

    x = result;
    results[0] += 1;
    results[1] += removedZeros;
  }

  return results;
}

describe('이진 변환 반복하기', () => {
  it('test', () => {
    expect(solution('1')).toEqual([0, 0]);

    expect(solution('110010101001')).toEqual([3, 8]);

    expect(solution('01110')).toEqual([3, 3]);

    expect(solution('1111111')).toEqual([4, 1]);
  });
});
