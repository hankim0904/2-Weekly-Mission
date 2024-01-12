import {
  inputEmail,
  inputPassword,
  inputPasswordCheck,
  submitFormatBtn,
  eyeBtn,
} from "../tags.js";
import {
  enterEmailMessage,
  enterPasswordMessage,
  enterPasswordCheckMessage,
  changePasswordVision,
  isValidAccess,
  emailValid,
  passwordValid,
  checkValid,
} from "./signup_functions.js";

// 로컬 스토리지에 accessToken이 있는 경우 “/folder” 페이지로 이동
const accessToken = localStorage.getItem("accessToken");
if (accessToken) window.open("/folder", "_self");

// 포커스아웃, 인풋, 클릭 시 이벤트 핸들링
inputEmail.addEventListener("focusout", ({ target }) =>
  enterEmailMessage(target),
);
inputPassword.addEventListener("focusout", ({ target }) =>
  enterPasswordMessage(target),
);
inputPasswordCheck.addEventListener("input", ({ target }) =>
  enterPasswordCheckMessage(target, inputPassword),
);
eyeBtn.forEach((el) =>
  el.addEventListener("click", ({ target }) => changePasswordVision(target)),
);

submitFormatBtn.addEventListener("click", async (e) => {
  const emailValue = inputEmail.value;
  const passwordValue = inputPassword.value;
  const tryConnectUser = {
    email: emailValue,
    password: passwordValue,
  };
  const requestLocal = "sign-up";

  e.preventDefault();

  enterEmailMessage(inputEmail);
  enterPasswordMessage(inputPassword);
  enterPasswordCheckMessage(inputPasswordCheck, inputPassword);

  if (emailValid && passwordValid && checkValid) {
    const responseStatus = await isValidAccess(tryConnectUser, requestLocal);
    if (responseStatus === 200) window.open("/folder", "_self");
  }
});
