function solution(s) {
  let answer = '';
  let currentIndex = -1;

  function convertLetter(letter, index) {
    return index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
  }

  for (let i = 0; i < s.length; i += 1) {
    const letter = s.charAt(i);

    if (letter === ' ') {
      currentIndex = -1;
      answer += letter;
    } else {
      currentIndex += 1;
      answer += convertLetter(letter, currentIndex);
    }
  }

  return answer;
}

console.log(solution('try hello world'));
