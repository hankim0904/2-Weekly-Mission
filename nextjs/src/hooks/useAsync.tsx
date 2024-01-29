import { useState, useCallback, useEffect } from 'react';

type UseAsyncReturnType<T> = {
  isLoading: boolean;
  error: Error | null;
  apiData: T;
  execute: () => Promise<T | undefined>;
};

function useAsync<T extends () => Promise<void>>(
  asyncFunction: () => Promise<T>,
  lazyMode: boolean = false
): UseAsyncReturnType<T> {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [apiData, setApiData] = useState<T>({} as T);

  const execute = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await asyncFunction();
      setApiData(res);
      return res;
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      }
    } finally {
      setIsLoading(false);
    }
  }, [asyncFunction]);

  useEffect(() => {
    if (!lazyMode) {
      execute();
    }
  }, [lazyMode]);

  return { isLoading, error, apiData, execute };
}

export default useAsync;
