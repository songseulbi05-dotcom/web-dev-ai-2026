const coin = document.querySelector("#coin");

const fetchApi = async () => {
  const response = await fetch(
    "https://api.upbit.com/v1/market/all?quote_currencies=KRW",
  );
  const data = await response.json();
  const markets = data.map((value) => {
    return value.market;
  });
  const response2 = await fetch(
    `https://api.upbit.com/v1/ticker?markets=${markets.join(",")}`,
  );
  const data2 = await response2.json();

  // find 함수
  const resultData = data.map((value) => {
    const result = data2.find((item) => value.market === item.market);
    return { ...value, ...result };
  });

  // 화면에 그려내는 코드
  // 조건 ? 조건true : 조건false
  resultData.forEach((value) => {
    // console.log(value.market);
    // console.log(value.korean_name);
    coin.innerHTML += `
    <div class="card">
    <h2>${value.korean_name}</h2>
    <p>${value.trade_price.toFixed(8)}원</p>
    <p>전일대비 : 
        <span style="color: ${
          value.change === "EVEN"
            ? "gray"
            : value.change === "RISE"
              ? "blue"
              : "red"
        }">${
          value.change === "EVEN"
            ? "보합"
            : value.change === "RISE"
              ? "상승"
              : "하락"
        } 
    (${(value.change_rate * 100).toFixed(2)}%)
    </p>
    </div>`;
  });
};
fetchApi();
