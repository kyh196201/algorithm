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
function solution(nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  nums.sort((a, b) => a - b);

  return nums[0];
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = nums => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
};

describe('find-minimum-in-rotated-sorted-array', () => {
  it('test', () => {
    expect(solution([3, 4, 5, 1, 2])).toBe(1);
  });

  it('test2', () => {
    expect(findMin([3, 4, 5, 1, 2])).toBe(1);
    expect(findMin([4, 5, 6, 7, 0, 1, 2])).toBe(0);
    expect(findMin([11, 13, 15, 17])).toBe(11);
  });
});
