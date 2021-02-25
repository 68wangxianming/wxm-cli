import React, {FC, useEffect} from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import useAsyncTask from "../../hooks/useAsyncTask";

const Storage: FC<{}> = () => {
  const [name, setName] = useLocalStorage<string>("name", "小明");
  const task = useAsyncTask(async (data: string) => await myApiRequest(data));
  useEffect(() => {
    console.log(task.status);
  }, [task.status]);
  return (
    <div>
      <span>{name}</span>
      <h2>{task.status}</h2>
      <button onClick={() => task.run("🏮")}>测试</button>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

function myApiRequest(data: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("⏰" + data);
      const rnd = Math.random() * 10;
      rnd <= 5 ? resolve("⏰" + data) : reject("😭");
    }, 2000);
  });
}

export default Storage;
