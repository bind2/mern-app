import React from "react";
import img from "../../assets/mobile-img/redmi-k50i-img.webp";
import { HashLink } from "react-router-hash-link";



function ProductDetailSlider() {

  return (
      <HashLink to={`/product-detail#`}>
        <div className="product-image">
          <div className="image-wrapper">
            <img src={img} alt="img" />
          </div>
        </div>
        <div className="product-detail">
          <p>Redmi k50i</p>
          <h4>Price ₹23,000</h4>
        </div>
      </HashLink>
  );
}

export default ProductDetailSlider;
