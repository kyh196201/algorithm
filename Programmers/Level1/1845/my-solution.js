function solution1(nums) {
  const selectCount = nums.length / 2;

  const poketmonCounts = [...new Set(nums)].length;

  return Math.min(selectCount, poketmonCounts);
}

function solution2(nums) {
  const selectCount = nums.length / 2;

  const poketmonMap = new Map();

  const numberOfPoketmons = nums.reduce((total, poketmon) => {
    if (poketmonMap.has(poketmon)) {
      return total;
    }

    poketmonMap.set(poketmon, true);

    return total + 1;
  }, 0);

  return Math.min(numberOfPoketmons, selectCount);
}

const nums = [3, 3, 3, 2, 2, 4];

console.log(solution1(nums)); //  3
console.log(solution2(nums)); //  3
