/**
 * 이해
 *
 * 구해야하는 것
 * - 3진법으로 변환한 수를 뒤집고, 다시 10진법으로 표현한 결과
 *
 * 주어지는 것
 * - 변환할 숫자
 *
 * 조건
 *
 * 계획
 * - 3진법으로 표현 후 문자열로 변환
 * - reverse를 이용해서 문자열을 거꾸로 뒤집음
 * - 10진법으로 표현
 *
 * 반성
 * - 테스트 케이스 10번이 실패했다. Number를 이용해서 문자열 3진법 수를 숫자로 변환했는데, 이때 10번 케이스의 3진법 수의 1의자리가 변경되었다.
 */
function toTenary(num = 0) {
  if (num < 1) return num.toString();

  const remainders = [];

  while (num > 0) {
    remainders.push(num % 3);
    num = Math.floor(num / 3);
  }

  return remainders.reverse().join('');
}

describe('toTenary', () => {
  it('10진법 숫자를 3진법으로 변환한다.', () => {
    expect(toTenary(45)).toBe('1200');
    expect(toTenary(125)).toBe('11122');
  });
});

function reverseText(str = '') {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i -= 1) {
    reversed += str.charAt(i);
  }

  return reversed;
}

describe('reverseText', () => {
  it('문자열을 거꾸로 뒤집는다.', () => {
    expect(reverseText('1200')).toBe('0021');
    expect(reverseText('apple')).toBe('elppa');
  });
});

function toDecimal(tenary = '') {
  /**
   * 실패 케이스 테스트 케이스 10번
   * Number(21200011221101121) => 21200011221101120
   */
  let result = 0;
  let index = 0;

  let numbered = Number(tenary);

  while (numbered > 0) {
    const divisor = numbered % 10;
    result += divisor * 3 ** index;

    index += 1;
    numbered = Math.floor(numbered / 10);
  }

  return result;
}

function toDecimalString(tenary = '') {
  let result = 0;

  const len = tenary.length;

  for (let i = len - 1; i >= 0; i -= 1) {
    const number = +tenary.charAt(i);

    result += number * 3 ** (len - 1 - i);
  }

  return result;
}

describe('toDecimal', () => {
  it('3진법 수를 10진법으로 변환한다.', () => {
    expect(toDecimal('0021')).toBe(7);
    expect(toDecimal('22111')).toBe(229);
  });
});

describe('toDecimalString', () => {
  it('3진법 수를 문자열 방식을 이용해서 10진법으로 변환한다.', () => {
    expect(toDecimalString('0021')).toBe(7);
    expect(toDecimalString('22111')).toBe(229);
  });
});

function solution(num = 0) {
  const tenary = toTenary(num);
  const reversed = reverseText(tenary);

  return toDecimalString(reversed);
}

describe('3진법 뒤집기', () => {
  it('test', () => {
    expect(solution(45)).toBe(7);
    expect(solution(125)).toBe(229);
    expect(solution(1)).toBe(1);
    expect(solution(78413450)).toBe(110105530);
  });
});
