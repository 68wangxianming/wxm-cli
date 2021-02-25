import {useState, useCallback} from "react";

type TStatus = "IDLE" | "PROCESSING" | "ERROR" | "SUCCESS";

function useAsyncTask<T extends any[], R = any>(
  task: (...args: T) => Promise<R>
) {
  const [status, setStatus] = useState<TStatus>("IDLE");
  const [message, setMessage] = useState("");
  const run = useCallback(async (...arg: T) => {
    setStatus("PROCESSING");
    try {
      const resp = await task(...arg);
      setStatus("SUCCESS");
      return resp;
    } catch (e) {
      setMessage(e?.response?.data?.error?.message || e.message);
      setStatus("ERROR");
      throw e;
    }
  }, []);
  const reset = useCallback(() => {
    setMessage("");
    setStatus("IDLE");
  }, []);
  return {
    run,
    reset,
    message,
    status,
  };
}

export default useAsyncTask;
