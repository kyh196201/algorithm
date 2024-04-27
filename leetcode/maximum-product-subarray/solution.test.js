/**
 * 이해
 *
 * 주어지는 것
 *
 * 구해야하는 것
 * - 모든 원소의 곱(product)가 가장 큰 subarray와 그때 구한 product의 값을 리턴
 *
 * 조건
 * - 1 <= nums.length <= 2 * 10^4
 * - -10 <= nums[i] <= 10
 *
 * 계획
 *
 * 반성
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function bruteForce(nums) {
  let answer = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let product = 1;

    for (let j = i; j < nums.length; j++) {
      product *= nums[j];
      if (product > answer) {
        answer = product;
      }
    }
  }

  // Object.is(answer, -0)
  if (answer === 0) {
    return 0;
  }

  return answer;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function solution(nums) {
  let answer = nums[0];
  let prevMax = nums[0];
  let prevMin = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    // given the new number, the new maximum can have 3 conditions
    // 1. number(+) * prevMax(+) is the largest
    // 2. number(+) it self is the largest
    // 3. number(-) * prevMin(-) is the largest
    const curMax = Math.max(prevMax * num, num, prevMin * num);

    const curMin = Math.min(prevMax * num, num, prevMin * num);

    prevMax = curMax;
    prevMin = curMin;

    if (prevMax > answer) {
      answer = prevMax;
    }
  }

  return answer;
}

describe('maximum-product-subarray', () => {
  it('brute force', () => {
    expect(bruteForce([2, 3, -2, 4])).toBe(6);
    expect(bruteForce([-2, 0, -1])).toBe(0);
    expect(bruteForce([-2, 3, -4])).toBe(24);
  });

  it('test', () => {
    expect(solution([2, 3, -2, 4])).toBe(6);
    expect(solution([-2, 0, -1])).toBe(0);
    expect(solution([-2, 3, -4])).toBe(24);
  });
});
