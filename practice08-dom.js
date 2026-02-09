const quotes = [
  {
    en: "God doesn't require us to succeed: he only requires that you try.",
    ko: "신은 우리에게 성공을 요구하지 않는다. 우리가 노력할 것을 요구할 뿐이다.",
  },
  {
    en: "Hold faithfulness and sincerity as first principles.",
    ko: "충심과 성실을 첫 번째 원칙으로 삼아라.",
  },
  {
    en: "Only actions give life strength; only moderation gives it a charm.",
    ko: "행동만이 삶에 힘을 주고 절제만이 삶에 매력을 준다.",
  },
  {
    en: "No one has ever made a difference by being like everyone else.",
    ko: "그저 남들과 똑같이 살면서 차이를 만들어낸 사람은 없다.",
  },
];

const bgColors = ["#f0e6eb", "#efefef", "#f3e9ee", "#ececec"];

let quoteIndex = 0;
let bgIndex = 0;

function renderClock() {
  const clock = document.getElementById("clock");
  const today = document.getElementById("today");
  const remain = document.getElementById("remain");

  const now = new Date();
  // 숫자를 두 자리로 만들 때 사용
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");
  clock.textContent = `${hour}:${minute}:${second}`;

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const date = String(now.getDate()).padStart(2, "0");
  const weeks = ["일", "월", "화", "수", "목", "금", "토"];
  today.textContent = `${year}-${month}-${date} (${weeks[now.getDay()]})`;

  const end = new Date(year, 11, 31, 23, 59, 59);
  const diff = end - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  remain.textContent = `올해 남은 시간: ${d}일 ${h}시간 ${m}분 ${s}초`;
}

function renderQuote() {
  const box = document.getElementById("quoteBox");
  box.value = quotes[quoteIndex].en + "\n" + quotes[quoteIndex].ko;

  quoteIndex++;
  if (quoteIndex >= quotes.length) quoteIndex = 0;
}

function renderBg() {
  document.body.style.backgroundColor = bgColors[bgIndex];
  bgIndex++;
  if (bgIndex >= bgColors.length) bgIndex = 0;
}

renderClock();
renderQuote();
renderBg();

setInterval(renderClock, 1000);
setInterval(renderQuote, 1000);
setInterval(renderBg, 3000);
