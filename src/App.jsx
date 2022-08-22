import React, { Fragment } from "react";
import Hello from "./Components/Hello";
import Time from "./Components/Time";

function App() {
  return (
    <Fragment>
      <Hello name="gray" />
      <Time />
    </Fragment>
  );
}
export default App;
