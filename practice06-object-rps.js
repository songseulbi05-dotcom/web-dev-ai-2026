// 가위 : 0, 바위 : 1, 보 : 2
const rps = ["가위", "바위", "보"];

const player = {
  choice: "",
  setChoice() {
    this.choice = prpmpt("가위, 바위, 보 중 하나를 입력하세요");
  },
};

const computer = {
  choice: 0,
  setChoice() {
    this.choice = Math.floor(Math.random() * 3);
  },
  getChoice() {
    return this.choice;
  },
};

const game = {
  win: 0,
  lose: 0,
  draw: 0,
  computer: 0,
  player: "",
  play() {
    while (true) {
      this.computer = computer.choice; //랜덤값 하나!
      computer.choice = console.log(computer); // 0 ~ 2

      let player = prpmpt("가위, 바위, 보 중 하나를 입력하세요");
      player.setChoice();
      this.player = player.getChoice();

      if (this.player === null) {
        alert(
          `게임을 종료합니다! ${this.win} 승 / ${this.lost} 패 / ${this.deaw} 무`,
        );
        break;
      }

      if (
        this.player !== "가위" &&
        this.player !== "바위" &&
        this.player !== "보"
      ) {
        alert("가위,바위, 보 중에서만 입력해주세요");
        continue;
      }

      this.player = rps.indexOf(this.player);
      console.log(this.player);

      // 무승부
      if (this.computer === this.player) {
        alert("무승부!");
        this.draw++;
      } else if (
        (this.player === 0 && this.computer === 2) ||
        (this.player === 1 && this.computer === 0) ||
        (this.player === 2 && this.computer === 1)
      ) {
        // 이겼을 때 : 가위(0) > 보(2), 바위(1) > 가위(0), 보(2) > 바위(1)
        alert(
          `이겼다! 내가 낸 건 ${rps[this.player]}, 컴퓨터가 낸 건 ${rps[this.computer]}`,
        );
        this.win++;
      } else {
        // 졌을 때!
        alert(
          `졌음 ㅠ 내가 낸 건 ${rps[this.player]}, 컴퓨터가 낸 건 ${rps[this.computer]}`,
        );
        this.lost++;
      }
    }
  },
};

game.play();
