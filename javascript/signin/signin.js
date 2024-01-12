import { inputEmail, inputPassword, submitFormatBtn, eyeBtn } from "../tags.js";
import {
  enterMessage,
  changePasswordVision,
  isValidAccess,
} from "./signin_functions.js";

// 로컬 스토리지에 accessToken이 있는 경우 “/folder” 페이지로 이동
const accessToken = localStorage.getItem("accessToken");
if (accessToken) window.open("/folder", "_self");

// 포커스아웃, 클릭 시 이벤트 핸들링
inputEmail.addEventListener("focusout", ({ target, type }) =>
  enterMessage(target, type),
);
inputPassword.addEventListener("focusout", ({ target, type }) =>
  enterMessage(target, type),
);
eyeBtn[0].addEventListener("click", ({ target }) =>
  changePasswordVision(target),
);

submitFormatBtn.addEventListener("click", async (e) => {
  const emailValue = inputEmail.value;
  const passwordValue = inputPassword.value;
  const tryConnectUser = {
    email: emailValue,
    password: passwordValue,
  };
  const requestLocal = "sign-in";

  e.preventDefault();

  const responseStatus = await isValidAccess(tryConnectUser, requestLocal);

  if (responseStatus === 200) {
    window.open("/folder", "_self");
  } else {
    enterMessage(inputEmail, e.type);
    enterMessage(inputPassword, e.type);
  }
});
