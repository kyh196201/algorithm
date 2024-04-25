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
 *
 * 반성
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function bruteForce(nums) {
  let max = -Infinity;
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    let sum = 0;

    for (let j = i; j < len; j++) {
      sum += nums[j];
      if (sum > max) {
        max = sum;
      }
    }
  }

  return max;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function solution(nums) {
  let curMax = nums[0];
  let maxTillNow = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // curMax는 startIndex: 0, endIndex: i 까지 가질 수 있는 모든 부분 배열의 최댓값을 저장
    // 즉, i까지의 최대 부분 합
    // i 번째의 부분 합의 최댓값 = i - 1번째의 부분 합의 최댓값과 nums[i] 중에 더 큰 값
    curMax = Math.max(nums[i], nums[i] + curMax);

    // maxTillNow는 현재까지의 최대 부분 합
    maxTillNow = Math.max(curMax, maxTillNow);
  }

  return maxTillNow;
}

describe('maximum-subarray', () => {
  it('brute force', () => {
    expect(bruteForce([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    expect(bruteForce([1])).toBe(1);
    expect(bruteForce([5, 4, -1, 7, 8])).toBe(23);
  });

  it('카데인 알고리즘', () => {
    expect(solution([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    expect(solution([1])).toBe(1);
    expect(solution([5, 4, -1, 7, 8])).toBe(23);
  });
});
