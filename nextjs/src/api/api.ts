const BASE_URL = 'https://bootcamp-api.codeit.kr';

export async function getApiInfo(apiAddress: string, errorMessage: string) {
  const response = await fetch(`${BASE_URL}${apiAddress}`);

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

export async function postSignInfo(
  apiAddress: string,
  errorMessage: string,
  tryConnectUser: { email: string; password?: string }
) {
  const response = await fetch(`${BASE_URL}${apiAddress}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(tryConnectUser),
  });

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
