/**
 * 이해
 *
 * 주어지는 것
 * - bandage = [시전 시간, 1초당 회복량, 추가 회복량]
 * - attacks = [공격 시간, 피해량][]
 *
 * 구해야하는 것
 * - 남은 체력 or -1(죽었을 경우)
 *
 * 조건
 *
 * 계획
 * - 첫 공격 후 체력 계산
 * - 두 번쨰 공격부터 체력 계산
 * 	- 1. 회복 가능한 시간 = 현재 공격[0] - 이전 공격[0] - 1
 * 	- 2. 공격당하기 전까지 회복한 체력 = 1번에서 구한 값 * 초당 회복량 + (1번에서 구한 값 / 시전 시간)의 몫
 * 	- 3. 체력 = 현재 체력 + 2번에서 구한 값
 * 	- 4. 체력은 최대 체력(health)를 초과하지 못함
 *
 * 반성
 */

function solution(bandage = [], health = 1, attacks = []) {
  const maxHealth = health;
  health -= attacks[0][1];

  for (let i = 1; i < attacks.length; i++) {
    const att = attacks[i];

    // 회복
    const prevAtt = attacks[i - 1];
    // 회복할 수 있는 시간
    const time = att[0] - prevAtt[0] - 1;
    // 회복량
    const heal = time * bandage[1] + Math.floor(time / bandage[0]) * bandage[2];
    health = Math.min(health + heal, maxHealth);

    // 공격
    health -= att[1];
    if (health <= 0) {
      return -1;
    }
  }

  return health > 0 ? health : -1;
}

describe('[PCCP 기출문제] 1번 / 붕대 감기', () => {
  it('test1', () => {
    const bandage = [5, 1, 5];
    const health = 30;
    const attacks = [
      [2, 10],
      [9, 15],
      [10, 5],
      [11, 5],
    ];

    expect(solution(bandage, health, attacks)).toBe(5);
  });

  it('test2', () => {
    const bandage = [3, 2, 7];
    const health = 20;
    const attacks = [
      [1, 15],
      [5, 16],
      [8, 6],
    ];

    expect(solution(bandage, health, attacks)).toBe(-1);
  });

  it('test3', () => {
    const bandage = [4, 2, 7];
    const health = 20;
    const attacks = [
      [1, 15],
      [5, 16],
      [8, 6],
    ];

    expect(solution(bandage, health, attacks)).toBe(-1);
  });

  it('test4', () => {
    const bandage = [1, 1, 1];
    const health = 5;
    const attacks = [
      [1, 2],
      [3, 2],
    ];

    expect(solution(bandage, health, attacks)).toBe(3);
  });
});
