(function () {
  const regex = /c=|c-|dz=|d-|lj|nj|s=|z=/g;

  function solution(input) {
    // return input.match(regex).length + input.replace(regex, '').length;
    const croatians = input.match(regex);

    return Array.isArray(croatians)
      ? croatians.length + input.replace(regex, '').length
      : input.length;
  }

  const input = 'ddz=z=';

  console.log(solution(input));
})();
