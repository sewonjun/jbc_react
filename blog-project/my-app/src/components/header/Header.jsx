import React from "react";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/Logo.svg";
// import imgProfile from "../../assets/profile.jpg";
import Login from "../header/login/Login";
import Logout from "../header/logout/Logout";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

export default function Header() {
  const { isLogin } = useContext(UserContext);
  // console.log(isLogin);
  return (
    <div className="max-width">
      <h1>
        <Link to="/">
          <img src={imgLogo} alt="My Blog" />
        </Link>
      </h1>
      <ul>{isLogin ? <Login /> : <Logout />}</ul>
    </div>
  );
}
