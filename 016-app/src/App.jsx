import { useState, useRef, useMemo } from "react";

const App = () => {
  const inputName = useRef(null);
  const inputId = useRef(null);
  const [userInfo, setUserInfo] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  //바뀌는 부분은 input창인데 바뀌는 부분만 렌더링 되어야 하는데 자꾸 전체 렌더링이 된다.
  //React는 가상돔을 이용해서 필요없는 부분들은 빼버린 가상 돔을 이용해 실제 비교에 필요한 부분들만 비교한다.
  const getNum = (li) => {
    console.log("렌더링");
    return li.length;
  };

  const n = useMemo(() => getNum(userInfo), [userInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // userInfo.push({name:inputName.current.value, id: inputId.current.value});
    //push가 배열에 추가하는 것이라.. userInfo에서 참조하는 배열의 주소는 바뀌지 않는다. 고로 주소값이 변경되지 않아서 렌더링되지 않는다..
    //그래서 새로운 배열을 만들어서 = newInfo setUserInfo에 전달해줘야 한다.
    const newInfo = [...userInfo, { name: name, id: id }];
    inputName.current.value = "";
    inputId.current.value = "";
    inputName.current.focus();
    setUserInfo(newInfo); // onChange 이벤트가 발생될 떄마다 상태값 변경됨
    console.log("렌더링 3");
  };

  const handleInputName = (e) => {
    setName(e.target.value);
    console.log("렌더링-1");
  };

  const handleInputId = (e) => {
    setId(e.target.value);
    console.log("렌더링-2");
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="이름을 입력하세요"
          onChange={handleInputName}
          ref={inputName}
        />
        <input
          type="text"
          placeholder="아이디를 입력하세요"
          onChange={handleInputId}
          ref={inputId}
        />
        <button onClick={handleSubmit}>버튼</button>
      </form>
      <ul>
        {userInfo.map((value, index) => (
          <li key={index}>
            <h3>{value.name}</h3>
            <strong>@{value.id}</strong>
          </li>
        ))}
      </ul>
      <span>{n}</span>
    </>
  );
};
export default App;
