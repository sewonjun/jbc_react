import { useState } from "react";
const Greeting = () => {
  const [message, setMessage] = useState("heyhey it's here");

  const onMouseEnter = () => {
    setMessage("hi");
  };
  const onMouseLeave = () => {
    setMessage("bye");
  };
  return (
    <h1 onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {message}
    </h1>
  );
};

export default Greeting;
