import { postSignInfo } from '@/api/api';
import { ENDPOINT, ERROR_MESSAGE } from '@/stores/constants';
import { useCallback, useEffect } from 'react';
import useAsync from './useAsync';

function useSignin({ email, password }: { email: string; password: string }) {
  const getSigninResult = useCallback(
    () => postSignInfo(ENDPOINT.signin, ERROR_MESSAGE.signin, { email, password }),
    [email, password]
  );

  const { isLoading, error, apiData, execute } = useAsync(getSigninResult, true);

  useEffect(() => {
    if (apiData?.data?.accessToken) {
      localStorage.setItem('accessToken', apiData.data.accessToken);
      localStorage.setItem('refreshToken', apiData.data.refreshToken);
    }
  }, [apiData?.data?.accessToken, apiData?.data?.refreshToken]);

  return { isLoading, error, apiData, execute };
}

export default useSignin;
