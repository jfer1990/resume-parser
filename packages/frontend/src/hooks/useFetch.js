import { useEffect, useState } from 'react';

export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { method = 'GET', body } = options;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, { method, body });
        const json = await response.json();
        setData(json);
      } catch (e) {
        setError(e);
      }
    };

    fetchData();
  }, [url, method, body]);

  return { data, error };
};
