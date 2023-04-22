import React, { FC, useEffect, useState } from "react";
import "./details.css";
import CoffeeDetails from "../../components/details-page/coffee-details";
import axios from "axios";
import { Coffee } from "../../types/types";
import CoffeeDescription from "../../components/details-page/coffee-description";
import RelatedProducts from "../../components/details-page/related-products";

export const Details: FC = () => {
  const [coffee, setCoffee] = useState<Coffee>();
  const [id, setId] = useState<String>();

  const getcoffee = async () => {
    try {
      const resp = await axios.get(
        `https://coffee-api-gabyquin14.onrender.com/api/coffees/${id}`
      );
      setCoffee(resp.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    id && getcoffee();
  }, [id]);
  return (
    <>
      <CoffeeDetails coffee={coffee} setId={setId} />
      <CoffeeDescription coffee={coffee} />
      <RelatedProducts />
    </>
  );
};

export default Details;
