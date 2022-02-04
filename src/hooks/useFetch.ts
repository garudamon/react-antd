import { useState, useEffect } from "react";

const useFetch = (url: string, options?: any) => {
  const [response, setResponse] = useState(null) as any;
  const [error, setError] = useState(null) as any;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(url, options);
        const json = await res.json();

        console.log('json', json);

        setResponse(json);
      } catch (error: any) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { response, error, isLoading };
};

export default useFetch;
