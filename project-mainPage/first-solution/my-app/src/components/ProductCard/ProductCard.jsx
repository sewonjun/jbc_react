import React from "react";
import ProductImage from "../ProductImage/ProductImage";
import ProductName from "../ProductName/ProductName";
import ProductPrice from "../ProductPrice/ProductPrice";
import "./productCard.css";

export default function ProductCard({ productName, price, img }) {
  return (
    <li className="product-item">
      <div className="product-img">
        <ProductImage thumbnailImg={img} productName={productName} />
      </div>
      <ProductName productNames={productName} />
      <button className="like-btn"></button>
      <div className="product-price">
        <ProductPrice price={price} />
      </div>
    </li>
  );
}

// export default function ProductCard(props) {
//   console.log(props);
//   return <div>ProductCard</div>;
// }
