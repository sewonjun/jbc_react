import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number");
const quantity = document.getElementById("quantity");
const totalPrice = document.getElementById("total");

const PRICE = 17500;

//Action
const addNumber = () => {
  store.dispatch({ type: "ADD" });
};

//Action
const subStractNumber = () => {
  store.dispatch({ type: "SUBSTRACT" });
};

//Reducer
const countReducer = (state = 0, action) => {
  //state 초기화
  switch (
    action.type //switch문
  ) {
    case "ADD":
      minus.disabled = false;
      return state + 1;
    case "SUBSTRACT":
      minus.disabled = false;
      return state - 1;
    default:
      return state;
  }
  // reducer에서 if else 문을 사용해도 되지만 switch문을 더 많이 사용한다.
  //   if (action.type === "ADD") { // if - else문
  //     return state + 1;
  //   } else if (action.type === "SUBSTRACT") {
  //     return state - 1;
  //   } else {
  //     return state;
  //   }
};

//create store
const store = createStore(countReducer);

const handleWrite = () => {
  number.innerText = store.getState();
  quantity.innerText = store.getState();
  totalPrice.innerText = store.getState() * PRICE;
  console.log(store.getState());
};

//Update UI
store.subscribe(handleWrite);

//Event
plus.addEventListener("click", addNumber);
minus.addEventListener("click", subStractNumber);
