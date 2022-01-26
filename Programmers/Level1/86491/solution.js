// 첫번째 풀이
function solution(sizes) {
  let i = 0;
  let maxWidth = 0;
  let maxHeight = 0;
  const len = sizes.length;

  for (i; i < len; i += 1) {
    const [width, height] = sizes[i];

    // width가 height보다 더 클 경우
    if (width > height) {
      if (width > maxWidth) {
        maxWidth = width;
      }

      if (height > maxHeight) {
        maxHeight = height;
      }
    } else {
      if (height > maxWidth) {
        maxWidth = height;
      }

      if (width > maxHeight) {
        maxHeight = width;
      }
    }
  }
  return maxWidth * maxHeight;
}

// 두번째 풀이(다른사람 풀이 참고)
function solution2(sizes = []) {
  let width = 0;
  let height = 0;

  sizes.forEach(s => {
    const [w, h] = s;

    width = Math.max(width, Math.max(w, h));
    height = Math.max(height, Math.min(w, h));
  });

  return width * height;
}

// 세번째 풀이(다른사람 풀이 참고)
function solution3(sizes) {
  let w = 0;
  let h = 0;
  sizes.forEach(s => {
    const [a, b] = s.sort((a, b) => a - b);
    if (a > h) h = a;
    if (b > w) w = b;
  });

  return w * h;
}

const sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];
console.log(solution(sizes)); // 4000
console.log(solution2(sizes));
