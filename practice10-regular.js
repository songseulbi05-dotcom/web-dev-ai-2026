const userId = document.querySelector("#userId");
const pw = document.querySelector("#pw");
const pwCheck = document.querySelector("#pwCheck");
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");

const submitBtn = document.querySelector(".submit");
const cancelBtn = document.querySelector(".cancel");

const idMsg = document.querySelector("#idMsg");
const pwMsg = document.querySelector("#pwMsg");
const pwCheckMsg = document.querySelector("#pwCheckMsg");
const nameMsg = document.querySelector("#nameMsg");
const emailMsg = document.querySelector("#emailMsg");
const phoneMsg = document.querySelector("#phoneMsg");

submitBtn.disabled = true;

function checkAll() {
  const idValid = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/.test(userId.value);
  const pwValid = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{8,15}$/.test(pw.value);
  const pwMatch = pw.value === pwCheck.value && pw.value !== "";
  const nameValid = /^[가-힣]{2,}$/.test(nameInput.value);
  const emailValid = /^[\w.-]+@[\w.-]+\.\w+$/.test(email.value);
  const phoneValid = /^010-\d{4}-\d{4}$/.test(phone.value);

  if (idValid && pwValid && pwMatch && nameValid && emailValid && phoneValid) {
    submitBtn.disabled = false;
    submitBtn.style.background = "#8e8e8e";
  } else {
    submitBtn.disabled = true;
    submitBtn.style.background = "#ccc";
  }
}

userId.addEventListener("input", () => {
  const reg = /^[a-zA-Z][a-zA-Z0-9]{3,11}$/;
  if (reg.test(userId.value)) {
    idMsg.textContent = "사용 가능한 아이디입니다";
    idMsg.style.color = "green";
  } else {
    idMsg.textContent = "영문자로 시작, 4~12자";
    idMsg.style.color = "red";
  }
  checkAll();
});

pw.addEventListener("input", () => {
  const reg = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{8,15}$/;
  if (reg.test(pw.value)) {
    pwMsg.textContent = "사용 가능한 비밀번호입니다";
    pwMsg.style.color = "green";
  } else {
    pwMsg.textContent = "영문+숫자+특수문자 8~15자";
    pwMsg.style.color = "red";
  }
  checkAll();
});

pwCheck.addEventListener("input", () => {
  if (pw.value === pwCheck.value && pw.value !== "") {
    pwCheckMsg.textContent = "비밀번호가 일치합니다";
    pwCheckMsg.style.color = "green";
  } else {
    pwCheckMsg.textContent = "비밀번호가 다릅니다";
    pwCheckMsg.style.color = "red";
  }
  checkAll();
});

nameInput.addEventListener("input", () => {
  const reg = /^[가-힣]{2,}$/;
  if (reg.test(nameInput.value)) {
    nameMsg.textContent = "확인 완료";
    nameMsg.style.color = "green";
  } else {
    nameMsg.textContent = "한글 2자 이상 입력";
    nameMsg.style.color = "red";
  }
  checkAll();
});

email.addEventListener("input", () => {
  const reg = /^[\w.-]+@[\w.-]+\.\w+$/;
  if (reg.test(email.value)) {
    emailMsg.textContent = "올바른 이메일 형식입니다";
    emailMsg.style.color = "green";
  } else {
    emailMsg.textContent = "이메일 형식이 아닙니다";
    emailMsg.style.color = "red";
  }
  checkAll();
});

phone.addEventListener("input", () => {
  const reg = /^010-\d{4}-\d{4}$/;
  if (reg.test(phone.value)) {
    phoneMsg.textContent = "확인 완료";
    phoneMsg.style.color = "green";
  } else {
    phoneMsg.textContent = "010-0000-0000 형식";
    phoneMsg.style.color = "red";
  }
  checkAll();
});

submitBtn.addEventListener("click", () => {
  alert("회원가입이 완료되었습니다!");
});

cancelBtn.addEventListener("click", () => {
  userId.value = "";
  pw.value = "";
  pwCheck.value = "";
  nameInput.value = "";
  email.value = "";
  phone.value = "";

  idMsg.textContent = "";
  pwMsg.textContent = "";
  pwCheckMsg.textContent = "";
  nameMsg.textContent = "";
  emailMsg.textContent = "";
  phoneMsg.textContent = "";

  submitBtn.disabled = true;
  submitBtn.style.background = "#ccc";
});
