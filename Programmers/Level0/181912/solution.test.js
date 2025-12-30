/**
 *
 * @param {Array<string>} intStrs
 * @param {number} k
 * @param {number} s
 * @param {number} l
 * @returns {Array<number>}
 */
function solution(intStrs, k, s, l) {
  return intStrs
    .map(str => {
      const partial = str.slice(s, s + l);
      return +partial;
    })
    .filter(num => num > k);
}

describe('', () => {
  it('test', () => {
    expect(
      solution(['0123456789', '9876543210', '9999999999999'], 50000, 5, 5),
    ).toEqual([56789, 99999]);
  });
});
