import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import pizza from "../../assets/icons/pizza.png";
import burger from "../../assets/icons/burger.png";
import salad from "../../assets/icons/salad.png";
import combo from "../../assets/icons/combo.png";
import { categoriesData } from "../../utils/data";

const PopularCategories = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const categories = categoriesData;

  const handleCategoryClick = (index) => {
    setActiveCategory(index);
  };

  return (
    <section className="container categories-section">
      <h1>
        Our Popular <span className="span-text">Categories</span>
      </h1>
      <div className="tabs">
        {categories.map((category, index) => (
          <button key={index} onClick={() => handleCategoryClick(index)}>
            <img
              src={
                index === 0
                  ? pizza
                  : index === 1
                  ? burger
                  : index === 2
                  ? salad
                  : combo
              }
              alt={category.category}
            />
            <h3>{category.category}</h3>
          </button>
        ))}
      </div>
      <div className="swiper-container">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {categories[activeCategory].items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-slide">
                <h4>{item.title}</h4>
                <p>{item.name}</p>
                <p>${item.price.toFixed(2)}</p>
                <button>Add to cart</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularCategories;
