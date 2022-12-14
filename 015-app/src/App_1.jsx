import React, { useState, useEffect, useRef } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  let countThree = useRef(0);
  let countFour = 0;

  //랜더링됨. useState 사용 useEffect 사용
  const handleCountUp = (e) => {
    setCount(count + 1);
    console.log(count); // 비동기 -> useEffect로 추적함
  };
  //랜더링됨. useSate 사용
  const handleCountUpTwo = (e) => {
    setCountTwo(countTwo + 1);
    console.log(countTwo); // 비동기 -> useEffect로 추적하면 동기 가능
  };
  //클릭하면 변수의 값은 증가하지만 랜더링은 되지 않음
  //useEffect로 감시당하는 count를 실행시키면 current가 출력됨.
  //useRef 사용
  const handleCountUpThree = (e) => {
    countThree.current = countThree.current + 1;
    console.log(countThree.current);
  };
  //useState 사용안함..
  const handleCountUpFour = (e) => {
    countFour = countFour + 1;
    console.log(countFour);
  };

  useEffect(() => {
    console.log("count가 감시되고 있습니다");
    console.log(`감시된 변수 : ${count}`);
    // console.log(`감시된 변수 ${countTwo}`);
  }, [count]); // count가 변경되는 것을 감시

  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>1. up!</button>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>2 Up!</button>
      <div>{countThree.current}</div>
      <button onClick={handleCountUpThree}>3 up!</button>
      <div>{countFour}</div>
      <button onClick={handleCountUpFour}>4 up!</button>
    </>
  );
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}
export default App;
