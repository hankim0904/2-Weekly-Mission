const inputEmail = document.querySelector("#useremail");
const inputPassword = document.querySelector("#password");
const inputPasswordCheck = document.querySelector("#password-check");
const submitFormatBtn = document.querySelector(".sign-button");
const eyeBtn = document.querySelectorAll(".eye-button");
const errorMessages = {
  enterEmail: "이메일을 입력해주세요.",
  enterPassword: "비밀번호를 입력해주세요.",
  wrongEmail: "이메일을 확인해주세요.",
  wrongPassword: "비밀번호를 확인해주세요.",
  takenEmail: "이미 사용 중인 이메일입니다.",
  checkFormEmail: "올바른 이메일 주소가 아닙니다.",
  checkFormPassword: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
  diffWithPassword: "비밀번호가 일치하지 않아요.",
};

export {
  inputEmail,
  inputPassword,
  inputPasswordCheck,
  submitFormatBtn,
  eyeBtn,
  errorMessages,
};
