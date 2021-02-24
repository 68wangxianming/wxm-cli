import {useState, useEffect} from "react";
import {tuplify} from "../tools";

export function useFetch(requst: RequestInfo, init?: RequestInit) {
  const [response, setResponse] = useState<null | Response>();
  const [error, setError] = useState<null | Error>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const abortController = new AbortController();
    setIsLoading(true);
    (async () => {
      try {
        const response = await fetch(requst, {
          ...init,
          signal: abortController.signal
        })
        setResponse(await response?.json());
        setIsLoading(false)
      } catch (e) {
        // e is AbortError
        if (e.name === "AbortError") {
          return;
        }
        setError(e);
        setIsLoading(false);
      }
    })();
    return () => {
      abortController.abort();
    };
  }, [init, requst]);
  tuplify(response, error, isLoading)
}
