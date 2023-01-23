import React, { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ReviewCard from "./ui/card";
import "./reviews.css";
import { EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import Zanahoria from "../../icons/reviews-icons/carrot_125262134.jpg";
import Alambre from "../../icons/reviews-icons/alan brito.jpg";
import Cambur from "../../icons/reviews-icons/Bananas.jpg";
import Polvora from "../../icons/reviews-icons/juegos_pirotecnicos.jpg";
import Basurero from "../../icons/reviews-icons/basurero.webp";
import Separator from "../separator";

export const Reviews: FC = () => {
  const reviews = [
    {
      name: "Susana Horia",
      image: Zanahoria,
      review:
        "What do you call an elephant that doesn't matter? An irrelephant",
      region: "Montreal, Canadá",
      rate: [1, 1, 1, 1, 0],
    },
    {
      name: "Alan Brito",
      image: Alambre,
      review: "What did a plate said to another plate? Dinner's on me",
      region: "Bogotá, Colombia",
      rate: [1, 1, 1, 0, 0],
    },
    {
      name: "Elba Nanero",
      image: Cambur,
      review: "What kind of tree fits in a hand? A palm tree",
      region: "Táchira, Venezuela",
      rate: [1, 1, 1, 1, 1],
    },
    {
      name: "Alex Plosivo",
      image: Polvora,
      review: "What did the blanket said when it fell off the bed? Oh sheet!",
      region: "Buenos Aires, Argentina",
      rate: [1, 1, 1, 1, 1],
    },
    {
      name: "Elba surero",
      image: Basurero,
      review: "What has 5 toes and it's not my foot? Your foot",
      region: "Paris, Francia",
      rate: [1, 1, 1, 1, 1],
    },
  ];

  return (
    <div className="reviews">
      <div className="reviews-presentation">
        <h1>Reviews</h1>
        <Separator color="#3c2828" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          exercitationem incidunt error quaerat. Provident recusandae blanditiis
          nostrum minus, totam unde.
        </p>
      </div>
      <Swiper
        modules={[Pagination, Navigation]}
        navigation
        loop
        speed={800}
        spaceBetween={50}
        slidesPerView={1}
        autoplay
        pagination={{ clickable: true }}
        className="reviews-myswiper"
      >
        {reviews.map((review, id) => (
          <SwiperSlide key={id}>
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
