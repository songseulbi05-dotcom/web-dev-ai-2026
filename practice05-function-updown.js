// 랜덤 숫자 생성
function makeRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// 사용자 입력 받기
function getUserInput() {
  const input = prompt("1부터 100까지 숫자를 입력하세요");

  // 취소 버튼
  if (input === null) return null;

  // String 내장 객체
  return input.trim();
}

// 입력값 판별
function checkNumber(input, answer) {
  if (input === null) return "cancel";

  // 빈 문자열
  if (input === "") return "invalid";

  // Number 내장 객체
  const num = Number(input);

  // 숫자가 아닐 때
  if (isNaN(num)) return "invalid";

  // 범위 초과

  if (num < 1 || num > 100) return "invalid";

  if (num > answer) return "down";
  if (num < answer) return "up";

  return "correct";
}

// 결과 출력
function printResult(result, count) {
  if (result === "invalid") {
    alert("제대로 입력해주세요");
  } else if (result === "up") {
    alert("해당 숫자보다 큽니다");
  } else if (result === "down") {
    alert("해당 숫자보다 작습니다");
  } else if (result === "correct") {
    alert(`정답입니다! ${count}번 만에 맞췄습니다`);
  } else if (result === "cancel") {
    alert("게임을 종료합니다");
  }
}

// 게임 실행
function startGame() {
  const answer = makeRandomNumber(85);
  let count = 0;

  while (true) {
    const input = getUserInput();
    const result = checkNumber(input, answer);

    if (result === "up" || result === "down" || result === "correct") {
      count++;
    }

    printResult(result, count);

    if (result === "correct" || result === "cancel") {
      break;
    }
  }
}

// 실행
startGame();
