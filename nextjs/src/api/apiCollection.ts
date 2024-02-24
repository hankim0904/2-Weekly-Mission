import { EnteredEmail, EnteredSigninInfo } from './apiType';
import { axiosInstance } from './axiosInstance';

export const postSigninApi = async (enteredSigninInfo: EnteredSigninInfo) => {
  const response = await axiosInstance.post('/auth/sign-in', enteredSigninInfo);

  return response.data;
};

export const postCheckEmailDuplicateApi = async (
  enteredEmail: EnteredEmail
) => {
  const response = await axiosInstance.post('/users/check-email', enteredEmail);

  return response.data;
};
