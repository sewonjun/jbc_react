import React, { Fragment } from "react";
import { useState } from "react";
import Lunch from "./Components/Lunch";
import Dinner from "./Components/Dinner";
import Menu from "./Components/Menu";

export default function App() {
  const [listName, setListName] = useState("menu");
  const checkId = (e) => {
    setListName(e.target.id);
  };
  const ContentsContainer = ({ listName }) => {
    if (listName === "lunchSet") {
      return <Lunch />;
    } else if (listName === "dinnerSet") {
      return <Dinner />;
    } else if (listName === "menu") {
      return <Menu />;
    }
  };
  return (
    <Fragment>
      <nav>
        <ul>
          <li
            id="lunchSet"
            onClick={checkId}
            style={
              listName === "lunchSet" ? { color: "blue" } : { color: "black" }
            }
          >
            런치세트 메뉴
          </li>
          <li
            id="dinnerSet"
            onClick={checkId}
            style={
              listName === "dinnerSet" ? { color: "blue" } : { color: "black" }
            }
          >
            디너세트 메뉴
          </li>
          <li
            id="menu"
            onClick={checkId}
            style={listName === "menu" ? { color: "blue" } : { color: "black" }}
          >
            전체메뉴
          </li>
        </ul>
      </nav>
      <ContentsContainer listName={listName} />
    </Fragment>
  );
}
