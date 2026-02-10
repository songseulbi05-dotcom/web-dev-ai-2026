const imgs = document.querySelectorAll(".container img");
const clickBtn = document.querySelector("#clickBtn");
const restartBtn = document.querySelector("#restarBtn");
const result = document.querySelector("#result");

const imgArr = ["./essets/spy1.jpg", "./essets/spy2.jpg", "./essets/spy3.jpg"];

let clickCount = 0;

clickBtn.addEventListener("click", () => {
  clickCount++;
  clickBtn.textContent = "Click " + clickCount;
  let values = [];

  for (let i = 0; i < imgs.length; i++) {
    const rand = Math.floor(Math.random() * imgArr.length);
    imgs[i].src = imgArr[rand];
    values.push(imgArr[rand]);
  }

  if (values[0] === values[1] && values[1] === values[2]) {
    result.textContent = "축하합니다!다시 시작하려면 재시작 버튼을 눌러주세요!";
    clickBtn.setAttribute("disabled", "disabled");
    clickBtn.setAttribute("disabled", "true");
  } else {
    result.textContent = "";
  }
});

restartBtn.addEventListener("click", () => {
  location.reload();
});
