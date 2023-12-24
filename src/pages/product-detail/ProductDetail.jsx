import React from 'react'
import img from '../../assets/mobile-img/redmi-k50i-img.webp'
import img1 from '../../assets/mobile-img/memory-card-img.webp'
import ProductDetailSlider from '../../components/product-detail-slider/ProductDetailSlider';
import { BiSolidCart } from "react-icons/bi";
import { ImPower } from "react-icons/im";
import { HashLink } from 'react-router-hash-link';

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { useStore } from '../../context/ContextProvider';
import { useNavigate } from 'react-router-dom';

function ProductDetail() {
  const { isLoggedIn, openOrCloseModal } = useStore()
  const navigate = useNavigate()

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
      <div className="container" id='product-detail'>
        <aside className='product-images'>
          
          <div className='all-images'>
            <div className='small-img'>
              <figure><img src={img1} alt="img" /></figure>
              <figure><img src={img} alt="img" /></figure>
              <figure><img src={img} alt="img" /></figure>
              <figure><img src={img} alt="img" /></figure>
            </div>
            <div className='big-img'>
              <figure><img src={img} alt="img" /></figure>
            </div>
          </div>

          <div className='buttons'>

            <button onClick={isLoggedIn ? () => navigate("/carts#") : openOrCloseModal} >
              <HashLink className='cart-btn'><BiSolidCart /> Add to Cart</HashLink>
            </button>

            <button >
              <HashLink className='buy-now-btn'><ImPower /> Buy Now</HashLink>
            </button>
          </div>

        </aside>

        <section className='product-details'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique reiciendis eos vero! Ut vero ratione ducimus, a doloremque iusto ea aliquam id dolorem perspiciatis distinctio modi excepturi ad. Atque, pariatur aut. Ea praesentium hic, voluptas amet voluptatum quos debitis temporibus enim aperiam recusandae eligendi voluptate. Impedit vero sint natus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique reiciendis eos vero! Ut vero ratione ducimus, a doloremque iusto ea aliquam id dolorem perspiciatis distinctio modi excepturi ad. Atque, pariatur aut. Ea praesentium hic, voluptas amet voluptatum quos debitis temporibus enim aperiam recusandae eligendi voluptate. Impedit vero sint natus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique reiciendis eos vero! Ut vero ratione ducimus, a doloremque iusto ea aliquam id dolorem perspiciatis distinctio modi excepturi ad. Atque, pariatur aut. Ea praesentium hic, voluptas amet voluptatum quos debitis temporibus enim aperiam recusandae eligendi voluptate. Impedit vero sint natus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique reiciendis eos vero! Ut vero ratione ducimus, a doloremque iusto ea aliquam id dolorem perspiciatis distinctio modi excepturi ad. Atque, pariatur aut. Ea praesentium hic, voluptas amet voluptatum quos debitis temporibus enim aperiam recusandae eligendi voluptate. Impedit vero sint natus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique reiciendis eos vero! Ut vero ratione ducimus, a doloremque iusto ea aliquam id dolorem perspiciatis distinctio modi excepturi ad. Atque, pariatur aut. Ea praesentium hic, voluptas amet voluptatum quos debitis temporibus enim aperiam recusandae eligendi voluptate. Impedit vero sint natus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique reiciendis eos vero! Ut vero ratione ducimus, a doloremque iusto ea aliquam id dolorem perspiciatis distinctio modi excepturi ad. Atque, pariatur aut. Ea praesentium hic, voluptas amet voluptatum quos debitis temporibus enim aperiam recusandae eligendi voluptate. Impedit vero sint natus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique reiciendis eos vero! Ut vero ratione ducimus, a doloremque iusto ea aliquam id dolorem perspiciatis distinctio modi excepturi ad. Atque, pariatur aut. Ea praesentium hic, voluptas amet voluptatum quos debitis temporibus enim aperiam recusandae eligendi voluptate. Impedit vero sint natus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique reiciendis eos vero! Ut vero ratione ducimus, a doloremque iusto ea aliquam id dolorem perspiciatis distinctio modi excepturi ad. Atque, pariatur aut. Ea praesentium hic, voluptas amet voluptatum quos debitis temporibus enim aperiam recusandae eligendi voluptate. Impedit vero sint natus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique reiciendis eos vero! Ut vero ratione ducimus, a doloremque iusto ea aliquam id dolorem perspiciatis distinctio modi excepturi ad. Atque, pariatur aut. Ea praesentium hic, voluptas amet voluptatum quos debitis temporibus enim aperiam recusandae eligendi voluptate. Impedit vero sint natus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique reiciendis eos vero! Ut vero ratione ducimus, a doloremque iusto ea aliquam id dolorem perspiciatis distinctio modi excepturi ad. Atque, pariatur aut. Ea praesentium hic, voluptas amet voluptatum quos debitis temporibus enim aperiam recusandae eligendi voluptate. Impedit vero sint natus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique reiciendis eos vero! Ut vero ratione ducimus, a doloremque iusto ea aliquam id dolorem perspiciatis distinctio modi excepturi ad. Atque, pariatur aut. Ea praesentium hic, voluptas amet voluptatum quos debitis temporibus enim aperiam recusandae eligendi voluptate. Impedit vero sint natus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique reiciendis eos vero! Ut vero ratione ducimus, a doloremque iusto ea aliquam id dolorem perspiciatis distinctio modi excepturi ad. Atque, pariatur aut. Ea praesentium hic, voluptas amet voluptatum quos debitis temporibus enim aperiam recusandae eligendi voluptate. Impedit vero sint natus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique reiciendis eos vero! Ut vero ratione ducimus, a doloremque iusto ea aliquam id dolorem perspiciatis distinctio modi excepturi ad. Atque, pariatur aut. Ea praesentium hic, voluptas amet voluptatum quos debitis temporibus enim aperiam recusandae eligendi voluptate. Impedit vero sint natus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique reiciendis eos vero! Ut vero ratione ducimus, a doloremque iusto ea aliquam id dolorem perspiciatis distinctio modi excepturi ad. Atque, pariatur aut. Ea praesentium hic, voluptas amet voluptatum quos debitis temporibus enim aperiam recusandae eligendi voluptate. Impedit vero sint natus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique reiciendis eos vero! Ut vero ratione ducimus, a doloremque iusto ea aliquam id dolorem perspiciatis distinctio modi excepturi ad. Atque, pariatur aut. Ea praesentium hic, voluptas amet voluptatum quos debitis temporibus enim aperiam recusandae eligendi voluptate. Impedit vero sint natus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique reiciendis eos vero! Ut vero ratione ducimus, a doloremque iusto ea aliquam id dolorem perspiciatis distinctio modi excepturi ad. Atque, pariatur aut. Ea praesentium hic, voluptas amet voluptatum quos debitis temporibus enim aperiam recusandae eligendi voluptate. Impedit vero sint natus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique reiciendis eos vero! Ut vero ratione ducimus, a doloremque iusto ea aliquam id dolorem perspiciatis distinctio modi excepturi ad. Atque, pariatur aut. Ea praesentium hic, voluptas amet voluptatum quos debitis temporibus enim aperiam recusandae eligendi voluptate. Impedit vero sint natus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique reiciendis eos vero! Ut vero ratione ducimus, a doloremque iusto ea aliquam id dolorem perspiciatis distinctio modi excepturi ad. Atque, pariatur aut. Ea praesentium hic, voluptas amet voluptatum quos debitis temporibus enim aperiam recusandae eligendi voluptate. Impedit vero sint natus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique reiciendis eos vero! Ut vero ratione ducimus, a doloremque iusto ea aliquam id dolorem perspiciatis distinctio modi excepturi ad. Atque, pariatur aut. Ea praesentium hic, voluptas amet voluptatum quos debitis temporibus enim aperiam recusandae eligendi voluptate. Impedit vero sint natus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique reiciendis eos vero! Ut vero ratione ducimus, a doloremque iusto ea aliquam id dolorem perspiciatis distinctio modi excepturi ad. Atque, pariatur aut. Ea praesentium hic, voluptas amet voluptatum quos debitis temporibus enim aperiam recusandae eligendi voluptate. Impedit vero sint natus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique reiciendis eos vero! Ut vero ratione ducimus, a doloremque iusto ea aliquam id dolorem perspiciatis distinctio modi excepturi ad. Atque, pariatur aut. Ea praesentium hic, voluptas amet voluptatum quos debitis temporibus enim aperiam recusandae eligendi voluptate. Impedit vero sint natus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique reiciendis eos vero! Ut vero ratione ducimus, a doloremque iusto ea aliquam id dolorem perspiciatis distinctio modi excepturi ad. Atque, pariatur aut. Ea praesentium hic, voluptas amet voluptatum quos debitis temporibus enim aperiam recusandae eligendi voluptate. Impedit vero sint natus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique reiciendis eos vero! Ut vero ratione ducimus, a doloremque iusto ea aliquam id dolorem perspiciatis distinctio modi excepturi ad. Atque, pariatur aut. Ea praesentium hic, voluptas amet voluptatum quos debitis temporibus enim aperiam recusandae eligendi voluptate. Impedit vero sint natus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique reiciendis eos vero! Ut vero ratione ducimus, a doloremque iusto ea aliquam id dolorem perspiciatis distinctio modi excepturi ad. Atque, pariatur aut. Ea praesentium hic, voluptas amet voluptatum quos debitis temporibus enim aperiam recusandae eligendi voluptate. Impedit vero sint natus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique reiciendis eos vero! Ut vero ratione ducimus, a doloremque iusto ea aliquam id dolorem perspiciatis distinctio modi excepturi ad. Atque, pariatur aut. Ea praesentium hic, voluptas amet voluptatum quos debitis temporibus enim aperiam recusandae eligendi voluptate. Impedit vero sint natus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique reiciendis eos vero! Ut vero ratione ducimus, a doloremque iusto ea aliquam id dolorem perspiciatis distinctio modi excepturi ad. Atque, pariatur aut. Ea praesentium hic, voluptas amet voluptatum quos debitis temporibus enim aperiam recusandae eligendi voluptate. Impedit vero sint natus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique reiciendis eos vero! Ut vero ratione ducimus, a doloremque iusto ea aliquam id dolorem perspiciatis distinctio modi excepturi ad. Atque, pariatur aut. Ea praesentium hic, voluptas amet voluptatum quos debitis temporibus enim aperiam recusandae eligendi voluptate. Impedit vero sint natus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique reiciendis eos vero! Ut vero ratione ducimus, a doloremque iusto ea aliquam id dolorem perspiciatis distinctio modi excepturi ad. Atque, pariatur aut. Ea praesentium hic, voluptas amet voluptatum quos debitis temporibus enim aperiam recusandae eligendi voluptate. Impedit vero sint natus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique reiciendis eos vero! Ut vero ratione ducimus, a doloremque iusto ea aliquam id dolorem perspiciatis distinctio modi excepturi ad. Atque, pariatur aut. Ea praesentium hic, voluptas amet voluptatum quos debitis temporibus enim aperiam recusandae eligendi voluptate. Impedit vero sint natus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique reiciendis eos vero! Ut vero ratione ducimus, a doloremque iusto ea aliquam id dolorem perspiciatis distinctio modi excepturi ad. Atque, pariatur aut. Ea praesentium hic, voluptas amet voluptatum quos debitis temporibus enim aperiam recusandae eligendi voluptate. Impedit vero sint natus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui similique reiciendis eos vero! Ut vero ratione ducimus, a doloremque iusto ea aliquam id dolorem perspiciatis distinctio modi excepturi ad. Atque, pariatur aut. Ea praesentium hic, voluptas amet voluptatum quos debitis temporibus enim aperiam recusandae eligendi voluptate. Impedit vero sint natus.</p>
        </section>
      </div>


      <div className='container' id='similar-products'>
        <div className="carousel-wrapper">
          <h2>Similar Products</h2>
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

export default ProductDetail