import React, { useState, useMemo } from "react";

function 부하() {
  let s = 0;
  for (let i = 0; i < 1000000000; i++) {
    s += i;
  }
  return s;
}

function App() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const handleCountUp = (e) => {
    setCount(count + 1);
    console.log(count);
  };
  const handleCountUpTwo = (e) => {
    setCountTwo(countTwo + 1);
    console.log(countTwo);
  };

  console.log("렌더링! ");
  const result = useMemo(() => {
    return 부하();
    //useMemo를 사용하자 up!버튼을 눌렀을시 렌더링되는 속도가 엄청 빠르다. []였을때
  }, [countTwo]); //countTwo가 바뀌면 렌더링이 된다.  그래서 countTwo는 엄청 느리게 숫자가 올라간다.[countTwo]일때

  return (
    <div className="App">
      <h1>계산결과 : {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>up!</button>
    </div>
  );
}
export default App;
