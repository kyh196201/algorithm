(function () {
  const inputString = 'baaa';

  function solution(input) {
    const A_CODE = 97;
    const countArray = new Array(26).fill(0);
    let result;
    let i = 0;
    const inputLength = input.length;
    const lowerCasedInput = input.toLowerCase();

    for (i; i < inputLength; i += 1) {
      const code = lowerCasedInput.charCodeAt(i) - A_CODE;
      countArray[code] += 1;
    }

    const maxCount = Math.max(0, ...countArray);
    let countOfMaxChars = 0;

    for (let j = 0; j < countArray.length; j += 1) {
      if (countArray[j] === maxCount) {
        countOfMaxChars += 1;
        result = String.fromCharCode(j + A_CODE).toUpperCase();

        if (countOfMaxChars > 1) {
          result = '?';
          break;
        }
      }
    }

    return result;
  }

  console.log(solution(inputString));
})();
