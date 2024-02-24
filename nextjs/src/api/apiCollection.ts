import { EnteredEmail, EnteredSignInfo } from './apiType';
import { axiosInstance } from './axiosInstance';

export const postSigninApi = async (enteredSigninInfo: EnteredSignInfo) => {
  const response = await axiosInstance.post('/auth/sign-in', enteredSigninInfo);

  return response.data;
};

export const postSignupApi = async (enteredSignupInfo: EnteredSignInfo) => {
  const response = await axiosInstance.post('/auth/sign-up', enteredSignupInfo);

  return response.data;
};

export const postCheckEmailDuplicateApi = async (
  enteredEmail: EnteredEmail
) => {
  const response = await axiosInstance.post('/users/check-email', enteredEmail);

  return response.data;
};
