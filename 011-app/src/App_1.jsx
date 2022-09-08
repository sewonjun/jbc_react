import React from "react";
import styled from "styled-components";

const ContentOne = styled.div`
  margin: 40px;
`;

const ContentH1 = styled.h1`
  color: ${(props) => (props.name === "hello" ? "red" : "black")};
  width: 200px;
  margin: 0 auto;
  text-align: center;
`;

function App() {
  return (
    <ContentOne>
      <ContentH1 name="hello">Q&A</ContentH1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        mollitia illum officiis, earum facere, sequi recusandae eveniet labore
        est quis possimus illo laborum doloremque molestias. Voluptatum
        consequuntur fugiat repellendus explicabo.
      </p>
    </ContentOne>
  );
}

export default App;
