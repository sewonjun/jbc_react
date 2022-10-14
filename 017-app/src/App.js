import React, { createContext } from "react";

const UserInfo = createContext({ name: "gray", id: "grayIsfree" });

const App = () => {
  return <HelloLicat />;
};

const HelloLicat = () => {
  return (
    <UserInfo.Consumer>
      {(value) => (
        <div>
          <h2>{value.id}</h2>
          <strong>{value.name}</strong>
          <HelloLicatTwo />
        </div>
      )}
    </UserInfo.Consumer>
  );
};

const HelloLicatTwo = () => {
  return (
    <UserInfo.Consumer>
      {(value) => (
        <div>
          <h2>Two : {value.name}</h2>
          <strong>Two : {value.id}</strong>
        </div>
      )}
    </UserInfo.Consumer>
  );
};

export default App;
