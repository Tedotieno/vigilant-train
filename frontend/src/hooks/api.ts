import { useState, useEffect } from 'react';

const BASE_URL = 'http://localhost:4000';

interface UseApiResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

interface ApiResponse<T> {
  data: T;
}

export const useApi = <T>(query: string): UseApiResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const response = await fetch(BASE_URL, {
          headers: {
            'apollo-require-preflight': 'true',
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({
            query,
          }),
        });

        if (!response.ok) {
          setError(new Error(`HTTP error! Status: ${response.status}`));
          return;
        }

        const json: ApiResponse<T> = await response.json();
        setData(json.data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return {
    data,
    loading,
    error,
  };
};
