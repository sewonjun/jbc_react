import React, { useState, useRef } from "react";

const App = () => {
  const [emailValue, setEmailValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const emailInput = useRef(null);
  const pwInput = useRef(null);

  const inputCheck = (e) => {
    e.preventDefault();
    setEmailValue(emailInput.current.value);
    setPwValue(pwInput.current.value);
    if (emailInput.current.value === "") {
      alert("이메일을 입력해주세요.");
      emailInput.current.focus();
      return;
    } else if (pwInput.current.value === "") {
      alert("비번을 입력하세용!!");
      pwInput.current.focus();
    }
  };

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        {/* 이메일: <input type="email" /> */}
        {/* 이메일: <input type="email" ref={a} /> */}
        이메일: <input type="email" ref={emailInput} />
      </label>
      <label>
        {/* 비밀번호: <input type="password" /> */}
        {/* 비밀번호: <input type="password" ref={b}/> */}
        비밀번호: <input type="password" ref={pwInput} />
      </label>
      <button type="submit" style={{ width: "100px" }} onClick={inputCheck}>
        로그인
      </button>
      <span>입력한 이메일: {emailValue}</span>
      <span>입력한 비밀번호: {pwValue}</span>
    </form>
  );
};

export default App;
