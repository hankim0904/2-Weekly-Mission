import { errorMessages } from "../tags.js";
import { removeRedMessage, createRedMessage } from "./common.js";

// 이메일과 비밀번호 유효성을 검증하는 함수
export function enterMessage(input, eventType) {
  const inputType = input.id;
  const inputValue = input.value;

  removeRedMessage(input);

  if (!inputValue) {
    if (inputType === "useremail")
      createRedMessage(input, errorMessages.enterEmail);
    else if (inputType === "password")
      createRedMessage(input, errorMessages.enterPassword);
  }

  if (eventType === "click") {
    if (inputType === "useremail")
      createRedMessage(input, errorMessages.wrongEmail);
    else if (inputType === "password")
      createRedMessage(input, errorMessages.wrongPassword);
  }
}
