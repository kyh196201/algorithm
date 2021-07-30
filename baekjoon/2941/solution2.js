(function () {
  const regex = /c=|c-|dz=|d-|lj|nj|s=|z=/g;

  function solution(input) {
    return input.replace(regex, '1').length;
  }

  const input = 'ddz=z=';

  console.log(solution(input));
})();
