import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import { createStore } from "redux";
import rootReducer from "./modules";
import { Provider } from "react-redux";

const store = createStore(rootReducer);
console.log(store.getState());

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  //Provider로 App을 감싸면 App에서 렌더링되는 컴포넌트에서 store에 접근할 수 있다.
  <Provider store={store}>
    <App tab="home" />
  </Provider>
);
