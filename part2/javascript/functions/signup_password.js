import { errorMessages } from "../tags.js";
import { removeRedMessage, createRedMessage } from "./common.js";

export let passwordValid = false;

// 비밀번호 유효성을 검증하는 함수
export function enterPasswordMessage(input) {
  const passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const passwordValue = input.value;

  removeRedMessage(input);

  if (!passwordValue) createRedMessage(input, errorMessages.enterPassword);
  else if (!passwordFormat.test(passwordValue))
    createRedMessage(input, errorMessages.checkFormPassword);
  else passwordValid = true;
}
