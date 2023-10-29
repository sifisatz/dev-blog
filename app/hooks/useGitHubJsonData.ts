import { useState } from 'react';

function useGitHubJsonData(url:string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (err:any) {
      setError(err);
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
}

export default useGitHubJsonData;
