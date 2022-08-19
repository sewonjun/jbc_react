import React from "react";
import { Fragment } from "react";

function Hello(props) {
  const black = {
    backgroundColor: "black",
    color: "white",
  };
  const white = {
    backgroundColor: "white",
    color: "black",
    padding: "10px 0px",
  };
  const blackTwo = {
    height: "30px",
    backgroundColor: "black",
  };
  return (
    <Fragment>
      <h1 style={black}>안녕, {props.name}1호</h1>
      <h1 style={white}>안녕, {props.name}2호</h1>
      <div style={blackTwo}></div>
    </Fragment>
  );
}

export default Hello;
