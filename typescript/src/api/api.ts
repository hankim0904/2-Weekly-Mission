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

  let body;
  try {
    body = await response.json();
  } catch (error) {
    throw new Error(`Error parsing JSON: ${(error as Error).message}`);
  }

  return body;
}
