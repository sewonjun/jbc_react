import React from "react";
import "./productName.css";

export default function ProductName({ productNames }) {
  return <strong className="product-name sl-ellipsis">{productNames}</strong>;
}
