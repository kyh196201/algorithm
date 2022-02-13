function solution(s, n) {
  function convertUpper(char, n) {
    const code = char.charCodeAt(0) + n - 65;

    return String.fromCharCode((code % 26) + 65);
  }

  function convertLower(char, n) {
    const code = char.charCodeAt(0) + n - 97;

    return String.fromCharCode((code % 26) + 97);
  }

  let answer = '';

  for (let i = 0; i < s.length; i += 1) {
    const char = s.charAt(i);

    if (char === ' ') {
      answer += char;
      continue;
    }

    const code = char.charCodeAt(0);

    const isCapital = code <= 90;

    answer += isCapital ? convertUpper(char, n) : convertLower(char, n);
  }

  return answer;
}

console.log(`s는 "a B z", n은 4인 경우: ${solution('a B z', 4)}`);
