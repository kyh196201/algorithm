function solution(nums) {
  let answer = -1;

  function isPrime(value) {
    for (let i = 2; i <= Math.sqrt(value); i++) {
      if (value % i === 0) return false;
    }

    return value > 1;
  }

  const {length} = nums;
  let count = 0;

  for (let i = 0; i < length - 2; i++) {
    for (let j = i + 1; j < length - 1; j++) {
      for (let k = j + 1; k < length; k++) {
        const sum = nums[i] + nums[j] + nums[k];

        if (isPrime(sum)) {
          count += 1;
        }
      }
    }
  }

  answer = count;

  return answer;
}

// result : 4
console.log(solution([1, 2, 7, 6, 4]));
