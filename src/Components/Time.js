import { Fragment } from "react";

function Time() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const hour = today.getHours();
  const minute = today.getMinutes();
  const sec = today.getSeconds();

  const black = {
    backgroundColor: "black",
    color: "white",
  };
  return (
    <Fragment>
      <h1>hello time</h1>
      <div style={black}>
        <h1>년: {year}</h1>
      </div>
    </Fragment>
  );
}

export default Time;
