import { errorMessages } from "../tags.js";
import { removeRedMessage, createRedMessage } from "./common.js";

export let checkValid = false;

// 비밀번호 확인 유효성을 검증하는 함수
export function enterPasswordCheckMessage(input, inputPassword) {
  const passwordValue = inputPassword.value;
  const passwordCheckValue = input.value;

  removeRedMessage(input);

  if (passwordValue !== passwordCheckValue)
    createRedMessage(input, errorMessages.diffWithPassword);
  else checkValid = true;
}
