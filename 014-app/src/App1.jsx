import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [checkRender, setCheckRender] = useState(false);
  const countUp = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (checkRender) {
      if (count % 2) {
        alert("홀수입니다"); //나머지가 1이면 true로 인식되니까!!! 제발 정신차려 멍청아!!
      } else {
        alert("짝수입니다.");
      }
    }
    setCheckRender(true);
  }, [count]); // count란 감시해야 할 요소
  return (
    <>
      <div>{count}</div>
      <button onClick={countUp}>up!</button>
    </>
  );
}

function Time(props) {
  const [today, setToday] = useState(new Date());
  const [hour, setHour] = useState(today.getHours());
  const [min, setMin] = useState(today.getMinutes());
  const [sec, setSec] = useState(today.getSeconds());
  console.log("렌더링 됩니다"); // 렌더링 잘 되는지 확인용. 꼭 넣으시오.

  useEffect(() => {
    let time = setInterval(() => {
      const t = new Date();
      setToday(t);
      setHour(t.getHours());
      setMin(t.getMinutes());
      setSec(t.getSeconds());
    }, 1000);
    return () => {
      //여기가 cleanup 코드 부분. useEffect에 return 부분에서 cleanup해줌
      clearInterval(time);
      console.log("시간이 멈춥니다");
    };
  }, [today]);
  return (
    <div>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
      <Time />
    </div>
  );
}

export default App;
