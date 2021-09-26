/**
 * 1. 피보나치 수의 값을 저장할 배열을 하나 생성한다. (전역 변수)
 * 2. 함수 내부에서는 이 배열을 참조하면서, 값을 구할 때 마다 n번째 피보나치 수의 값을 배열에 저장한다.
 * 3. n이 1보다 작을 경우 n을 리턴한다.
 * 4. n이 2보다 클 경우 객체에 n을 인덱스 값으로해서 해당하는 값이 있는지 검사한다. 있으면 해당 값을 리턴,
 * 없으면 fn(n-1) + fn(n-2)를 구하고 배열에 저장한 다음에 리턴한다.
 */

const fibArr = new Array(21);
fibArr[0] = 0;
fibArr[1] = 1;

function fib(num = 0) {
  if (typeof fibArr[num] === 'number') {
    return fibArr[num];
  }

  fibArr[num] = fib(num - 1) + fib(num - 2);
  return fibArr[num];
}

console.log(fib(20));
console.log('fibArr', fibArr);
