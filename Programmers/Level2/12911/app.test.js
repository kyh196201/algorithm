/**
 * 이해
 *
 * 주어지는 것
 * - 자연수 n
 *
 * 구해야하는 것
 * - n의 다음 큰 숫자
 *
 * 조건
 * - 다음 큰 숫자는 n보다 큰 자연수이다.
 * - n과 다음 큰 숫자를 2진수로 변환하면, 1의 개수가 같다.
 * - 다음 큰 숫자는 위 2 조건을 만족하는 수 중에서 가장 작은 수이다.
 *
 * 계획
 * - n부터 1씩 증가하면서 2진수로 변환한다
 * - 1의 개수가 같은지 확인한다
 * - 같을 경우 정답
 *
 * 반성
 */
function toBinary(num = 0) {
  return num.toString(2);
}

describe('toBinary', () => {
  it('converts decimal to binary string', () => {
    expect(toBinary(42)).toBe('101010');
  });
});

function getNumberOfOneFromBinary(str = '') {
  return str.match(/1/g).length;
}

describe('getNumberOfOneFromBinary', () => {
  it('returns number of 1 chracter', () => {
    expect(getNumberOfOneFromBinary('1111')).toBe(4);

    expect(getNumberOfOneFromBinary('111')).toBe(3);
  });
});

function findNextBigNumber(num = 1, next = num + 1) {
  const numberOfOne = getNumberOfOneFromBinary(toBinary(num));
  const numberOfOneFromNext = getNumberOfOneFromBinary(toBinary(next));

  return numberOfOne === numberOfOneFromNext
    ? next
    : findNextBigNumber(num, next + 1);
}

describe('findNextBigNumber', () => {
  it('test', () => {
    expect(findNextBigNumber(78)).toBe(83);

    expect(findNextBigNumber(15)).toBe(23);
  });
});
