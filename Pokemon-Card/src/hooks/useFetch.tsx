import { useState, useEffect } from "react";
import { driver } from "../api/api";

type Method = "get" | "post" | "put" | "delete";

export function useFetch<T>(url: string, method: Method) {
  const [data, setData] = useState<T | null >(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    driver(url, method)
      .then((res) => {
        if (res.status === 200) {
          setData(res.data as T);
          setLoading(false);
        }
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);
  return { data, loading, error };
};
