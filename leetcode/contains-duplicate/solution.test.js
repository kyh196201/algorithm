/**
 * 이해
 *
 * 주어지는 것
 *
 * 구해야하는 것
 *
 * 조건
 *
 * 계획
 * - 검사한 숫자를 담을 Set 선언
 * - 배열의 숫자를 하나 씩 탐색한다.
 * - 이미 검사한 숫자인지 확인한다
 * - 이미 검사했을 경우
 * 	- 중복된 숫자를 찾았으므로 true 반환
 * - 검사하지 않았을 경우
 * 	- Set에 숫자를 추가한다
 *
 * 반성
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function solution(nums) {
  const seen = new Set();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (seen.has(num)) {
      return true;
    }

    seen.add(num);
  }

  return false;
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function solution2(nums) {
  return nums.length !== new Set(nums).size;
}

describe('contains-duplicate', () => {
  it('test1', () => {
    expect(solution([1, 2, 3, 1])).toBe(true);
    expect(solution([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });
  it('test2', () => {
    expect(solution2([1, 2, 3, 1])).toBe(true);
    expect(solution2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
    expect(solution2([1, 2, 3, 4])).toBe(false);
  });
});
