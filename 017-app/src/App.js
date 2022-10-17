import React, { useContext, createContext } from "react";
import HelloLicatTwo from "./HelloLicatTwo";

const UserInfo = createContext({ name: "lusia", id: "lusiaIsfree" });

const App = () => {
  return <HelloLicat />;
};

const HelloLicat = () => {
  const { name, id } = useContext(UserInfo);
  return (
    <div>
      <h2>{name}</h2>
      <strong>{id}</strong>
      <HelloLicatTwo />
    </div>
  );
};

export default App;
