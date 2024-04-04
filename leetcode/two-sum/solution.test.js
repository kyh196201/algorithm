// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}

/**
 * 투 포인터
 * 1. 배열을 오름차순으로 정렬한다.
 * 2. left = 0, right = nums.length - 1
 * 3. nums[left] + nums[right] = target일 경우 [left, right] 반환
 * 4. nums[left] + nums[right] > target 일 경우 right - 1
 * 5. nums[left] + nums[right] < target 일 경우 left + 1
 * 6. left >= right(두 포인터가 엇갈리는 순간) 값을 찾지 못했으므로 빈 배열 반환
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoPointer(nums, target) {
  const numsWithIndex = nums
    .map((num, index) => [num, index])
    .sort((a, b) => a[0] - b[0]);

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = numsWithIndex[left][0] + numsWithIndex[right][0];
    if (sum === target) {
      return [numsWithIndex[left][1], numsWithIndex[right][1]];
    }

    if (sum > target) {
      right--;
    } else {
      left++;
    }
  }

  return [];
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function hashmap(nums, target) {
  /**
   * hashmap을 준비 hashmap에는 숫자와 해당하는 인덱스를 저장
   * 숫자를 하나씩 탐색
   *  - complement = target - 현재 숫자
   *  - hashmap에 complement가 있을 경우 [hashmap[complement], 현재 인덱스] 반환
   *  - complement가 없을 경우 hashmap에 현재 숫자에 해당하는 인덱스를 기록
   */
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
}

describe('two-sum', () => {
  it('test', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoPointer([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(hashmap([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
});
