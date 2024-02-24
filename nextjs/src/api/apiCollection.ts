import { EnteredSigninInfo } from "./apiType";
import { axiosInstance } from "./axiosInstance";

export const postSigninApi = async (enteredSigninInfo: EnteredSigninInfo) => {
  const response = await axiosInstance.post("/auth/sign-in", enteredSigninInfo);

  return response.data;
};
