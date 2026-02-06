// 1 ~ 45 숫자 중 중복 없이 6개 + 보너스 1개
let lotto = [];

// includes를 사용해서 기존 배열에 없는 숫자만 push
while (lotto.length < 7) {
const random = Math.floor(Math.random() * 45) + 1;
if (!lotto.includes(random)) {
lotto.push(random);
}
}
const bonus = lotto[lotto.length - 1];
lotto = lotto.slice(0, 6);
console.log(`lotto : ${lotto}, bonus : ${bonus}`);



while (true) {
// 내가 맞출 때까지!
const my = [];
while (my.length < 6) {
const random = Math.floor(Math.random() * 45) + 1;
if (!my.includes(random)) {
my.push(random);
}
}
console.log(my);
break;
}