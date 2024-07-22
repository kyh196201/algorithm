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
 * @param {number[]} heights
 * @return {number}
 */
function bruteForce(heights = []) {
  let max = -Infinity;
  let maxL = 0;
  let maxR = 1;

  const getArea = (l, r) => {
    const x = r - l;
    const y = Math.min(heights[l], heights[r]);
    return x * y;
  };

  for (let i = 0; i < heights.length - 1; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      const area = getArea(i, j);

      if (area > max) {
        max = area;
        maxL = i;
        maxR = j;
      }
    }
  }

  console.log({
    maxL,
    maxR,
  });

  return max;
}

/**
 * @param {number[]} height
 * @return {number}
 */
function twoPointer(height) {
  const getArea = (l, r) => {
    const x = r - l;
    // 높이 값은 둘 중에 더 작은 값이 사용
    const y = Math.min(height[l], height[r]);
    return x * y;
  };

  let left = 0;
  let right = height.length - 1;
  let max = -Infinity;

  while (left < right) {
    const currentArea = getArea(left, right);
    if (currentArea > max) max = currentArea;

    // 높이가 더 작은 쪽을 옮긴다
    // 왜? 넓이를 구하는 데 두 높이 중에 더 작은 값이 사용되므로,
    // 높이가 작은 쪽을 옮겨야지 더 큰 넓이를 구할 확률이 올라간다
    if (height[left] < height[right]) {
      left += 1;
    } else if (height[left] > height[right]) {
      right -= 1;
    } else {
      // 높이가 같을 경우 left, right 모두 이동
      // 왜? 만약 left나 right 둘 중에 하나만 옮긴다고 가정했을 때
      // 넓이는 1이 줄어든다 만약 left가 오른쪽으로 이동하고, 기존보다 더 큰 높이 값을
      // 갖는다 치더라도 둘 중에 더 작은 값인 right가 사용되므로 기존 넓이보다 더 큰 값을 얻을 수 없다
      // 따라서, 둘 중 한 쪽만 옮기는 의미가 없으므로 양 쪽 모두 한 칸씩 이동한다
      left += 1;
      right -= 1;
    }
  }

  return max;
}

describe('container-with-most-water', () => {
  it('bruteForce', () => {
    expect(bruteForce([1, 3, 2, 5, 25, 24, 5])).toBe(24);
  });

  it('twoPointer', () => {
    expect(twoPointer([1, 3, 2, 5, 25, 24, 5])).toBe(24);
  });
});
