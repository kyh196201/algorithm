function solution(s) {
  let answer = 0;
  let str = s;

  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  let i = 9;

  for (i; i >= 0; i--) {
    const num = numbers[i];

    if (str.indexOf(num) > -1) {
      const newStr = str.split(num).join(i);
      str = newStr;
    }
  }

  answer = Number(str);

  return answer;
}
