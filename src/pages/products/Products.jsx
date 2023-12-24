import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import ProductItem from '../../components/product-item/ProductItem';
import ProductDetailSlider from '../../components/product-detail-slider/ProductDetailSlider';

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

function Products() {
  const [clickedItem, setClickedItem] = useState(null);


  const handleClick = (itemId) => {
    setClickedItem(clickedItem === itemId ? null : itemId);
  };


  const breakpoints = {
    0: {
      slidesPerView: 1
    },
    320: {
      slidesPerView: 1
    },
    375: {
      slidesPerView: 2
    },
    425: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 5,
    },
    1440: {
      slidesPerView: 6
    }
  }


  return (
    <section>
      <div className="container" id='products'>
        <aside className='filters'>
          <div className="filter-title">
            <h3>Filters</h3>
          </div>
          <ul className='filter-list'>

            <li className='price-list' >
              <div onClick={() => handleClick(1)}>PRICE <IoIosArrowDown className={clickedItem === 1 ? 'icon' : ''} /></div>

              <div className={clickedItem === 1 ? 'active-filter' : ''} >
                <div>
                  <input type="range" id="points" name="points" min="0" max="5"></input>
                </div>

                <div >
                  <select name="" id="">
                    <option disabled>min</option>
                    <option value="10_000">10,000</option>
                    <option value="15_000">15,000</option>
                    <option value="20_000">20,000</option>
                    <option value="30_000">30,000</option>
                  </select>
                  <div>to</div>
                  <select name="" id="">
                    <option disabled>max</option>
                    <option value="10_000">10,000</option>
                    <option value="15_000">15,000</option>
                    <option value="20_000">20,000</option>
                    <option value="30_000">30,000</option>
                    <option value="30_000">30,000+</option>
                  </select>
                </div>
              </div>
            </li>

            <li className='brand-list'  >
              <div onClick={() => handleClick(2)}>BRAND <IoIosArrowDown className={clickedItem === 2 ? 'icon' : ''} /></div>

              <div className={clickedItem === 2 ? 'active-filter' : ''}>
                <ul>
                  <li><input type="checkbox" name="" id="apple" /> <label htmlFor="apple">APPLE</label></li>
                  <li><input type="checkbox" name="" id="realme" /> <label htmlFor="realme">realme</label></li>
                  <li><input type="checkbox" name="" id="redmi" /> <label htmlFor="redmi">POCO</label></li>
                  <li><input type="checkbox" name="" id="samsung" /> <label htmlFor="samsung">SAMSUNG</label></li>
                  <li><input type="checkbox" name="" id="oneplus" /> <label htmlFor="oneplus">OnePlus</label></li>
                  <li><input type="checkbox" name="" id="oppo" /> <label htmlFor="oppo">OPPO</label></li>
                </ul>
              </div>
            </li>

            <li className='rating-list' >
              <div onClick={() => handleClick(3)}>RATING <IoIosArrowDown className={clickedItem === 3 ? 'icon' : ''} /></div>

              <div className={clickedItem === 3 ? 'active-filter' : ''}></div>
            </li>

            <li className='discount-list'  >
              <div onClick={() => handleClick(4)}>DISCOUNT <IoIosArrowDown className={clickedItem === 4 ? 'icon' : ''} /></div>

              <div className={clickedItem === 4 ? 'active-filter' : ''}></div>
            </li>

          </ul>

        </aside>
        <section className='filtered-product'>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </section>
      </div>

      <div className='container' id='recently-search'>
        <div className="carousel-wrapper">
          <h2>Recently View</h2>
          <Swiper
            slidesPerView={6}
            spaceBetween={15}
            navigation={true}
            modules={[Navigation]}
            breakpoints={breakpoints}
          >
            <SwiperSlide><ProductDetailSlider /></SwiperSlide>
            <SwiperSlide><ProductDetailSlider /></SwiperSlide>
            <SwiperSlide><ProductDetailSlider /></SwiperSlide>
            <SwiperSlide><ProductDetailSlider /></SwiperSlide>
            <SwiperSlide><ProductDetailSlider /></SwiperSlide>
            <SwiperSlide><ProductDetailSlider /></SwiperSlide>
            <SwiperSlide><ProductDetailSlider /></SwiperSlide>
            <SwiperSlide><ProductDetailSlider /></SwiperSlide>
            <SwiperSlide><ProductDetailSlider /></SwiperSlide>
            <SwiperSlide><ProductDetailSlider /></SwiperSlide>

          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Products