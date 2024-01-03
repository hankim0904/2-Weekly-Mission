import { useState, useCallback, useEffect } from "react";

function useAsync(asyncFunction) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState("");

  const execute = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await asyncFunction();
      setData(res);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [asyncFunction]);

  useEffect(() => {
    execute();
  }, []);

  return { isLoading, error, data, execute };
}

export default useAsync;
