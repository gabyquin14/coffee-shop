import React, { FC, useEffect, useState } from "react";
import "./details.css";
import CoffeeDetails from "../../components/details-page/coffee-details";
import axios from "axios";
import { Coffee } from "../../types/types";
import CoffeeDescription from "../../components/details-page/coffee-description";
import RelatedProducts from "../../components/details-page/related-products";

export const Details: FC = () => {
  const [data, setData] = useState<Coffee>();
  const [id, setId] = useState<String>();

  const getData = async () => {
    try {
      const resp = await axios.get(
        `https://coffee-api-gabyquin14.onrender.com/api/coffees/${id}`
      );
      setData(resp.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    id && getData();
  }, [id]);
  return (
    <>
      <CoffeeDetails data={data} setId={setId} />
      <CoffeeDescription data={data} />
      <RelatedProducts />
    </>
  );
};

export default Details;
