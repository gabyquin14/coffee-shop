import React, { FC, useEffect, useState } from "react";
import "./related-products.css";
import useGetItems from "../../../utils/useGetItems";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper";
import SelectionCard from "../../shop-page/selection-card";

export const RelatedProducts: FC = () => {
  const data = useGetItems();

  return (
    <div className="related-products">
      <h2>Related Products</h2>
      <Swiper
        modules={[Pagination, Navigation]}
        navigation
        loop
        speed={800}
        spaceBetween={20}
        slidesPerView={1}
        autoplay
        pagination={{ clickable: true }}
        breakpoints={{
          700: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {data?.map((coffee, id) => (
          <SwiperSlide key={coffee.id}>
            <SelectionCard coffee={coffee} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedProducts;
