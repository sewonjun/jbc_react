import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sale, soldout } from "../modules/stockCounter";

function StockCounter() {
  const { message } = useSelector((state) => ({
    message: state.stockReducer.message,
  }));
  console.log(message);

  const { stock } = useSelector((state) => ({
    stock: state.goodsReducer.stock,
  }));
  console.log(message);
  //useDispatch : store의
  const dispatch = useDispatch();
  const onSoldOut = () => dispatch(soldout());
  const onSale = () => dispatch(sale());
  useEffect(() => {
    if (stock <= 0) {
      onSoldOut();
    } else {
      onSale();
    }
  }, [stock]);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}
export default StockCounter;
