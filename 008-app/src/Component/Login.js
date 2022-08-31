import { useState } from "react";

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    if (id === "") {
      alert("you didnt insert id ");
    }
  };
  const handleLoginInput = (e) => {
    console.log("id", e.target.value);
  };
  const handlePasswordInput = (e) => {
    console.log("pw", e.target.value);
  };
  return (
    <form onSubmit={handleLoginSubmit}>
      <label>
        아이디: <input type="text" onChange={handleLoginInput} />
      </label>
      <br />
      <label>
        비밀번호: <input type="password" onChange={handlePasswordInput} />
      </label>
      <button type="submit">로그인</button>
    </form>
  );
}

export default Login;
