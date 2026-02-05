const player = {
  win: 0,
  draw: 0,
  lose: 0,
  choice: "",
};

const computer = {
  options: ["가위", "바위", "보"],
  choice: "",
  pick() {
    const randomIndex = Math.floor(Math.random() * this.options.length);
    this.choice = this.options[randomIndex];
  },
};

const game = {
  start() {
    while (true) {
      const userInput = prompt(
        "가위, 바위, 보 중 하나를 입력하세요\n(취소하면 종료)",
      );

      if (userInput === null) {
        this.result();
        break;
      }

      if (userInput !== "가위" && userInput !== "바위" && userInput !== "보") {
        alert("가위, 바위, 보 중에서만 입력하세요!");
        continue;
      }

      player.choice = userInput;
      computer.pick();

      this.judge();
    }
  },

  judge() {
    const p = player.choice;
    const c = computer.choice;

    if (p === c) {
      player.draw++;
      alert(`무승부!\n플레이어: ${p}\n컴퓨터: ${c}`);
    } else if (
      (p === "가위" && c === "보") ||
      (p === "바위" && c === "가위") ||
      (p === "보" && c === "바위")
    ) {
      player.win++;
      alert(`승리!\n플레이어: ${p}\n컴퓨터: ${c}`);
    } else {
      player.lose++;
      alert(`패배!\n플레이어: ${p}\n컴퓨터: ${c}`);
    }
  },
  result() {
    alert(
      `게임 종료!\n\n승: ${player.win}\n무: ${player.draw}\n패: ${player.lose}`,
    );
  },
};

game.start();
