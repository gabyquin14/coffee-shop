import { FC } from "react";
import "./related-products.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper";
import SelectionCard from "../../shop-page/selection-card";
import { useAppSelector } from "../../../redux/store";

export const RelatedProducts: FC = () => {
  const coffees = useAppSelector((state) => state.info.coffees);

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
        {coffees?.map((coffee) => (
          <SwiperSlide key={coffee.id}>
            <SelectionCard coffee={coffee} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedProducts;
