const BASE_URL = 'https://bootcamp-api.codeit.kr';

export async function getApiInfo(
  apiAddress: string,
  errorMessage: string,
  folderId?: number
) {
  const folderAddress = folderId ? `?folderId=${folderId}` : '';
  const response = await fetch(`${BASE_URL}${apiAddress}${folderAddress}`);

  if (!response.ok) {
    throw new Error(errorMessage);
  }
  const body = await response.json();
  return body;
}
