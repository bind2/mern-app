import React from 'react'
import img from '../../assets/mobile-img/redmi-k50i-img.webp'
import { FaStar } from "react-icons/fa6";
import { HashLink } from 'react-router-hash-link';

function ProductItem() {
  return (
    <div className='product-cart'>
      <HashLink to={`/product-detail#`}>
        <div className="product-img-container">
          <div className="product-img">
            <img src={img} alt="img" />
          </div>
        </div>

        <div className="product-info">
          <div className="product-name">
            <p>Redmi K50i 5G </p>
          </div>

          <div className='product-content'>
            <div className='price-and-offer'>
              <span className='price'><h5>₹4,50,000</h5></span>
              <span className='rating'><h6>4.5 <FaStar /></h6></span>
            </div>

            <div className='rating-and-reviews'>
              <span className='offer'><h5>23% off</h5><p>₹4,50,000</p></span>
              <span className='reviews'><p>22143 Reviews</p></span>
            </div>
          </div>
        </div>
      </HashLink>
    </div>
  )
}

export default ProductItem