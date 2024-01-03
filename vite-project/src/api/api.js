const BASE_URL = "https://bootcamp-api.codeit.kr";

export const endpoints = {
  profile: "/api/sample/user",
  folder: "/api/sample/folder",
  user: "/api/users/1",
  userFolders: "/api/users/1/folders",
  userLinks: "/api/users/1/links",
};

export const errorMessages = {
  profile: "유저 정보를 불러오는데 실패했습니다.",
  folder: "폴더를 불러오는데 실패했습니다.",
  user: "유저 정보를 불러오는데 실패했습니다.",
  userFolders: "유저 폴더를 불러오는데 실패했습니다.",
  userLinks: "유저 링크를 불러오는데 실패했습니다.",
};

export async function getApiInfo(apiAddress, errorMessage, folderId) {
  const folderAddress = folderId ? `?folderId=${folderId}` : "";
  const response = await fetch(`${BASE_URL}${apiAddress}${folderAddress}`);

  if (!response.ok) {
    throw new Error(errorMessage);
  }
  const body = await response.json();
  return body;
}
