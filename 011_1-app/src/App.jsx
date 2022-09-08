import { createGlobalStyle } from "styled-components";
import Nav from "./Components/Nav";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
li {
  list-style: none;
  color: red;
  margin:0 50px;
  text-align: center;
  line-height: 30px;
}

h2{
  color: #2e6fdf;
  font-size: 30px;
  margin-left: 5%;
  margin-right: 15%;
}

nav{
  display: flex;
  margin-top:50px
}

ul{
  display: flex;
  
}

*{
  background-color: black;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
    </>
  );
}

export default App;
