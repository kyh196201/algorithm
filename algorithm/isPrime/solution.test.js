/**
 * 주어진 수가 소수인지 확인합니다
 * @param {number} num
 * @returns {boolean} 소수일 경우 true 반환
 */
function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }

  return num > 1;
}

describe('isPrime', () => {
  it('test', () => {
    expect(isPrime(-1)).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(1)).toBe(false);
    expect(isPrime(2)).toBe(true);
    expect(isPrime(4)).toBe(false);
    expect(isPrime(11)).toBe(true);
    expect(isPrime(199)).toBe(true);
    expect(isPrime(997)).toBe(true);
  });
});
