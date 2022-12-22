import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./context/UserContext";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import Home from "./pages/Home/Home";
// import data from "./data/data.json";

export default function App() {
  const [userId, setUserId] = useState(2);
  const [isLogin, setIsLogin] = useState(false);
  // console.log({ data });
  return (
    <UserContext.Provider value={{ userId, isLogin }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog/:id" element={<BlogDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
