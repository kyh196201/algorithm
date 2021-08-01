(function () {
  function checkGroupWord(word) {
    const checkedChars = [];
    const wordLength = word.length;

    for (let i = 0; i < wordLength; i += 1) {
      const char = word[i];

      if (checkedChars.length) {
        const lastChar = checkedChars[checkedChars.length - 1];
        if (lastChar !== char && checkedChars.includes(char)) {
          return false;
        }
      }

      checkedChars.push(char);
    }

    return true;
  }

  function solution(word) {
    const result = checkGroupWord(word);

    console.log(result);
  }
})();
