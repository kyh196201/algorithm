function solution(left, right) {
  let answer = 0;

  /*
      1. 각 숫자별로 약수의 개수를 구한다.
      2. 약수의 개수가 짝수면 총 합에 +
      3. 약수의 개수가 홀수면 총 합에 -
  */

  function getDivisorCount(num) {
    if (num === 1) return 1;

    let count = 0;

    for (let i = 1, root = Math.sqrt(num); i <= root; i++) {
      if (num % i === 0) {
        if (i === root) count += 1;
        count += 2;
      }
    }

    return count;
  }

  for (let i = left; i <= right; i++) {
    const count = getDivisorCount(i);

    // 짝수
    if (count % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    }
  }

  return answer;
}

console.log(solution(13, 17)); // 43
