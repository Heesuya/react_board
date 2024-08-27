import { useEffect, useState } from "react";

const Main = () => {
  const [num, setNum] = useState(0);
  console.log(1);
  useEffect(() => {
    console.log(0);
  }, [num]);
  console.log(2);
  const changeNum = () => {
    setNum(num + 1);
  };
  return (
    <div className="main-wrap">
      <h1>메인페이지</h1>
      <button onClick={changeNum}>클릭 : {num}</button>
    </div>
  );
};
export default Main;
