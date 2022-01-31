// 첫번째 풀이
function solution(n, arr1, arr2) {
  // 2진수 배열 만들기
  function getBinaryString(num) {
    const binary = [];

    while (num > 0) {
      binary.unshift(num % 2);
      num = Math.floor(num / 2);
    }

    // 길이가 n과 같아질 때까지 앞에 0 추가
    while (binary.length < n) {
      binary.unshift(0);
    }

    return binary;
  }

  const tmp = arr1.map((num, index) => {
    const hint = num | arr2[index];

    return getBinaryString(hint)
      .map(binary => (binary > 0 ? '#' : ' '))
      .join('');
  });

  return tmp;
}

// 다른 풀이 참고
function solution2(n, arr1, arr2) {
  function addZero(len = 1, string = '') {
    return '0'.repeat(len - string.length) + string;
  }

  const tmp = arr1.map((num, index) => {
    const binary = addZero(n, (num | arr2[index]).toString(2));

    return binary.replace(/1|0/g, a => (+a > 0 ? '#' : ' '));
  });

  return tmp;
}

const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];
const n = 5;
console.log(solution(n, arr1, arr2));
console.log(solution2(n, arr1, arr2));
