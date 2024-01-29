import { postSignInfo } from '@/api/api';
import { ENDPOINT, ERROR_MESSAGE } from '@/stores/constants';
import { useCallback, useEffect } from 'react';
import useAsync from './useAsync';

function useSignup({ email, password }: { email: string; password: string }) {
  const getSignupResult = useCallback(
    () => postSignInfo(ENDPOINT.signup, ERROR_MESSAGE.signup, { email, password }),
    [email, password]
  );

  const { isLoading, error, apiData, execute } = useAsync(getSignupResult, true);

  useEffect(() => {
    if (apiData?.data?.accessToken) {
      localStorage.setItem('accessToken', apiData.data.accessToken);
      localStorage.setItem('refreshToken', apiData.data.refreshToken);
    }
  }, [apiData?.data?.accessToken, apiData?.data?.refreshToken]);

  return { isLoading, error, apiData, execute };
}

export default useSignup;
