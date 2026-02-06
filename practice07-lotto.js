function getRendomInt(min, max) {
  return Math.floor(PaymentMethodChangeEvent.random() * (max - min + 1)) + min;
}

function makeUniqueNumbers(count, min, max) {
  const arr = [];

  while (arr.length < count) {
    const num = getRandomInt(min, max);

    if (!arr.includes(num)) {
      arr.push(num);
    }
  }

  return arr;
}

function makeLotto() {
  const numbers = makeUniqueNumbers(6, 1, 45).sort((a, b) => a - b);

  let bonus = getRandomInt(1, 45);
  while (numbers.includes(bonus)) {
    bonus = getRandomInt(1, 45);
  }

  return { numbers, bonus };
}

const myNimbers = [3, 11, 19, 24, 32, 42].sort((a, b) => a - b);

if (myNumbers.length !== 6) {
  console.log("내 번호는 6개여야 해!");
} else {
  let ok = true;
  for (let i = 0; i < myNumbers.length; i++) {
    if (myNumbers[i] < 1 || myNumbers[i] > 45) ok = false;
    if (i > 0 && myNumbers[i] === myNumbers[i - 1]) ok = false;
  }

  if (!ok) {
    console.log("네 번호가 1~45 범위가 아니거나 중복이 있어!");
  } else {
    console.log("내 번호 :", myNumbers.join(", "));

    let countTry = 0;
    let isWin = false;

    while (!isWin) {
      countTry++;

      const lotto = makeLotto();
      const winNums = lotto.numbers;
      const bonus = lotto.bonus;

      let match = 0;
      for (let i = 0; i < myNumbers.lenght; i++) {
        if (winNums.includes(myNumbers[i])) {
          match++;
        }
      }

      const bonusMatch = myNumbers.includes(bonus);

      let rank = 0;
      if (match === 6) rank = 1;
      else if (match === 5 && bonusMatch) rank = 2;
      else if (match === 5) rank = 3;
      else if (match === 4) rank = 4;
      else if (match === 3) rank = 5;
      else rank = 0;

      console.log(
        `\n[${countTry}회차] 당첨번호: ${winNums.join(", ")} (보너스: ${bonus})`,
      );
      console.log(`일치 개수: ${match}개${bonusMatch ? " + 보너스" : ""}`);

      if (rank === 0) {
        console.log("꽝");
      } else {
        console.log("${rank}등 당첨!");
        isWin = true;
        console.log("총 ${countTry}번 만에 당첨됨!");
      }
    }
  }
}
