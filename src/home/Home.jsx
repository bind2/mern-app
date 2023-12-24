import React from "react";
import ProductSlider from "../components/product-slider/ProductSlider";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

function Home() {

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
    <React.Fragment>
      <header>
        <div className="container" id="header">
          <h1>header</h1>
        </div>
      </header>

      <section>
        <div className="container" id="product-carousel">

          <div className="carousel-wrapper">
            <h2>Mobile</h2>

            <Swiper
              slidesPerView={6}
              spaceBetween={15}
              navigation={true}
              modules={[Navigation]}
              breakpoints={breakpoints}
            >

              <SwiperSlide ><ProductSlider /></SwiperSlide>
              <SwiperSlide ><ProductSlider /></SwiperSlide>
              <SwiperSlide ><ProductSlider /></SwiperSlide>
              <SwiperSlide ><ProductSlider /></SwiperSlide>
              <SwiperSlide ><ProductSlider /></SwiperSlide>
              <SwiperSlide ><ProductSlider /></SwiperSlide>
              <SwiperSlide ><ProductSlider /></SwiperSlide>
              <SwiperSlide ><ProductSlider /></SwiperSlide>
              <SwiperSlide ><ProductSlider /></SwiperSlide>
              
            </Swiper>
          </div>
          
        </div>
      </section>
    </React.Fragment>
  );
}

export default Home;
