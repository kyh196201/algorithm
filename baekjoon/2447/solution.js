function solution() {
  let result = '';

  for (let i = 1; i <= 9; i++) {
    if (i === 5) {
      result += ' ';
    } else if (i % 3 === 0 && i < 9) {
      result += '*\n';
    } else {
      result += '*';
    }
  }

  console.log(result + result);

  return result;
}

solution();
