import React, {FC} from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const Storage: FC<{}> = () => {
  const [name, setName] = useLocalStorage<string>("name", "小明");
  return (
    <div>
      <input
        type="text"
        placeholder="请输入姓名"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  )
}

export default Storage;
