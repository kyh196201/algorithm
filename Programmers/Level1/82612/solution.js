function solution(price, money, count) {
  // 필요한 총 액수
  const totalAmount = (price * count * (count + 1)) / 2;

  // 가진 금액과의 차이
  const diff = totalAmount - money;

  // 부족한 금액
  return diff > 0 ? diff : 0;
}

console.log(solution(3, 20, 4)); // 10
