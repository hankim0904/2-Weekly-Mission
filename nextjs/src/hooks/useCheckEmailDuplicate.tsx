import { useCallback } from 'react';
import { postSignInfo } from '@/api/api';
import useAsync from './useAsync';
import { ENDPOINT, ERROR_MESSAGE } from '@/stores/constants';

export const useCheckEmailDuplicate = (email: string) => {
  const checkEmailDuplicate = useCallback(
    () =>
      postSignInfo(ENDPOINT.checkEmail, ERROR_MESSAGE.checkEmail, {
        email,
      }),
    [email]
  );
  const { isLoading, error, apiData, execute } = useAsync(checkEmailDuplicate, true);

  return {
    isLoading,
    error,
    apiData,
    execute,
  };
};
