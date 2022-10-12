import { useState, useRef } from "react";

const App = () => {
  const inputName = useRef(null);
  const inputId = useRef(null);
  const [userInfo, serUserInfo] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const getNum = (li) => {
    console.log("렌더링");
    return li.length;
  };
};
export default App;
