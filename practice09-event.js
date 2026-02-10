const imgs = document.querySelectorAll(".container img");
const clickBtn = document.querySelector("#clickBtn");
const restartBtn = document.querySelector("#restartBtn");
const result = document.querySelector("#result");

const imgArr = ["./essets/spy1.jpg", "./essets/spy2.jpg", "./essets/spy3.jpg"];

clickBtn.addEventListener("click", () => {
  let values = [];

  for (let i = 0; i < imgs.length; i++) {
    const rand = Math.floor(Math.random() * imgArr.length);
    imgs[i].src = imgArr[rand];
    values.push(imgArr[rand]);
  }

  if (values[0] === values[1] && values[1] === values[2]) {
    result.textContent = "축하합니다!다시 시작하려면 재시작 버튼을 눌러주세요!";
  } else {
    result.textContent = "";
  }
});

restartBtn.addEventListener("click", () => {
  result.textContent = "";
});
