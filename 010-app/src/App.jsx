import React, { useState } from "react";

const ContentsContainer = ({ listName }) => {
  if (listName === "detail") {
    return <Detail />;
  } else if (listName === "qa") {
    return <Question />;
  } else if (listName === "review") {
    return <Review />;
  }
};

function NavBar() {
  const [listName, setListName] = useState("detail");
  const checkId = (e) => {
    setListName(e.target.id);
  };

  return (
    <>
      <nav>
        <ul>
          <li
            id="detail"
            style={
              listName === "detail" ? { color: "red" } : { color: "black" }
            }
            onClick={checkId}
          >
            상세정보
          </li>
        </ul>
      </nav>
    </>
  );
}
