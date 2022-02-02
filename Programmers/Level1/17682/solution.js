function solution(dartResult) {
  const bonus = {
    S: 1,
    D: 2,
    T: 3,
  };

  const stack = [];
  let top = -1;

  [...dartResult].forEach((c, index) => {
    // number
    if (!Number.isNaN(+c)) {
      // 바로 전 문자도 숫자인 경우
      if (index > 0 && !Number.isNaN(+dartResult.charAt(index - 1))) {
        stack[top] = Number(`${stack[top]}${Number(c)}`);
      } else {
        top += 1;
        stack.push(Number(c));
      }
    }

    // S, D, T
    if (/[S|D|T]/.test(c)) {
      stack[top] **= bonus[c];
    }

    //         if(c === 'D') {
    //             stack[top] = Math.pow(stack[top], 2);
    //         }

    //         if(c === 'T') {
    //             stack[top] = Math.pow(stack[top], 3);
    //         }

    // *
    if (c === '*') {
      let t = top;

      while (t >= top - 1) {
        if (t < 0) break;

        stack[t] *= 2;
        t -= 1;
      }
    }

    // #
    if (c === '#') {
      stack[top] *= -1;
    }
  });

  return stack.reduce((total, num) => total + num, 0);
}

const dartResult = '1D2S#10S';

console.log(solution(dartResult));
