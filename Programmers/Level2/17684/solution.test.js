/**
 * 이해
 *
 * 주어지는 것
 *
 * 구해야하는 것
 *
 * 조건
 *
 * 계획
 *
 * 반성
 */

function solution(msg) {
  const answer = [];

  const dictionary = {
    // A: 1, // 65
    // Z: 26 // 110
  };

  // 1글자로 이루어진 사전 색인 생성
  for (let i = 0; i < 26; i++) {
    const char = String.fromCharCode(i + 65);
    dictionary[char] = i + 1;
  }

  let startIndex = 0;
  let 다음색인 = 27;

  while (startIndex < msg.length) {
    let currentIndex = startIndex;

    // 사전에 색인이 등록된 가장 긴 문자열 찾기
    while (currentIndex < msg.length) {
      const w = msg.substring(startIndex, currentIndex + 1);

      if (dictionary[w]) {
        currentIndex += 1;
      } else {
        break;
      }
    }

    // 사전에 등록되지 않은 문자열을 찾았을 때 반복문이 종료되므로 startIndex ~ currentIndex 까지의 문자열이 w
    // substring은 종료 index의 글자를 포함하지 않음
    const w = msg.substring(startIndex, currentIndex);
    answer.push(dictionary[w]);

    // 처리되지 않은 글자가 있을 경우
    if (currentIndex < msg.length) {
      const c = msg.charAt(currentIndex);
      dictionary[w + c] = 다음색인++;
    }

    startIndex = currentIndex;
  }

  return answer;
}

describe('[3차] 압축', () => {
  it('test', () => {
    expect(solution('KAKAO')).toEqual([11, 1, 27, 15]);
    expect(solution('TOBEORNOTTOBEORTOBEORNOT')).toEqual([
      20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34,
    ]);
  });
});
