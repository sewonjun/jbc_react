import React from "react";
import ProductImage from "../ProductImage/ProductImage";
import ProductName from "../ProductName/ProductName";
import ProductPrice from "../ProductPrice/ProductPrice";
import "./productCard.css";

export default function ProductCard(productName, price, thumbnailImg) {
  console.log({ productName });
  return (
    <li className="product-item">
      <div className="product-img">
        <ProductImage
          thumbnailImg={productName.thumbnailImg}
          productName={productName.productName}
        />
      </div>
      <ProductName productName={productName.productName} />
      <button className="like-btn"></button>
      <div className="product-price">
        <ProductPrice price={productName.price} />
      </div>
    </li>
  );
}

// export default function ProductCard(props) {
//   console.log(props);
//   return <div>ProductCard</div>;
// }
