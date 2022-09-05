import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
span {
  color: red;
  font-size: 12px;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>hello world1</h1>
      <span>hello world2</span>
    </>
  );
}

export default App;
