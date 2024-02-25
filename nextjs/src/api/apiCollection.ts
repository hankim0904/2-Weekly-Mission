import {
  EnteredEmail,
  EnteredSignInfo,
  NewFolder,
  NewLink,
} from '../types/apiType';
import { axiosInstance } from './axiosInstance';
import { axiosInstanceWithToken } from './axiosInstanceWithToken';

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

export const postLinkToFolderApi = async (newLink: NewLink) => {
  const response = await axiosInstanceWithToken.post('/links', newLink);

  return response.data;
};

export const postAddFolderApi = async (newFolder: NewFolder) => {
  const response = await axiosInstanceWithToken.post('/folders', newFolder);

  return response.data;
};

export const getFolderApi = async (folderId: string | string[] | undefined) => {
  const response = await axiosInstance.get(`/folders/${folderId}`);

  return response.data;
};

export const getSignedUserApi = async (accessToken?: string | undefined) => {
  const response = accessToken
    ? await axiosInstance.get('/users', {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    : await axiosInstanceWithToken.get('/users');

  return response.data;
};

export const getFolderListApi = async (accessToken?: string | undefined) => {
  const response = accessToken
    ? await axiosInstance.get('/folders', {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
    : await axiosInstanceWithToken.get('/folders');

  return response.data;
};

export const getLinkListApi = async (
  folderId: string | string[] | undefined,
  accessToken?: string | undefined
) => {
  let response;

  if (folderId) {
    response = await axiosInstance.get(`/folders/${folderId}/links`);
  } else {
    response = accessToken
      ? await axiosInstance.get('/links', {
          headers: { Authorization: `Bearer ${accessToken}` },
        })
      : await axiosInstanceWithToken.get('/links');
  }

  return response.data;
};

export const putEditFolderApi = async (
  editedFolder: NewFolder,
  folderId: string
) => {
  const response = await axiosInstanceWithToken.put(
    `/folders/${folderId}`,
    editedFolder
  );

  return response.data;
};

export const deleteFolderApi = async (
  folderId: string | number | undefined
) => {
  const response = await axiosInstanceWithToken.delete(`/folders/${folderId}`);

  return response.data;
};

export const deleteLinkApi = async (linkId: string | number | undefined) => {
  const response = await axiosInstanceWithToken.delete(`/links/${linkId}`);

  return response.data;
};
