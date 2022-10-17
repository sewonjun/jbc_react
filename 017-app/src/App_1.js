import React from "react";

const App = () => {
  return <HelloLicat name="gary" id="garyIsFree" />;
  //구조분해 할당 사용한다고.. 겁나 해맸다 ㅠ
};

const HelloLicat = ({ name, id }) => {
  return (
    <div>
      <h2>{id}</h2>
      <strong>{name}</strong>
      {/* 당연히 props를 전달하기 위해서 여기다가 다시 명시를 해줘야 한다. */}
      <HelloLicatTwo name={name} id={id} />
    </div>
  );
};

const HelloLicatTwo = ({ name, id }) => {
  return (
    <div>
      <h2>Two : {name}</h2>
      <strong>Two : {id}</strong>
    </div>
  );
};

export default App;
