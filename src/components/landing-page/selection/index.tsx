import React, { FC, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Separator from "../../separator";
import "./selection.css";
import { NavLink } from "react-router-dom";
import { Coffee } from "../../../types/types";
import Card from "../../product card";
import Button from "../../button";

export const Selection: FC = () => {
  const [data, setData] = useState<Array<Coffee>>();
  const getData = async () => {
    try {
      const resp = await axios.get(
        "https://coffee-api-gabyquin14.onrender.com/api/coffees"
      );
      const selectedCoffees = (resp.data as Array<Coffee>).filter(
        (coffe) => coffe.id < 5
      );
      setData(selectedCoffees);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="selection">
      <div className="selection-title fade-up">
        <h1>GabsCS' featured coffee</h1>
        <Separator color="#3c2828" />
      </div>

      <Button text="Shop now!" />
      <div className="selection-coffees fade-up">
        {data && data.map((item) => <Card product={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default Selection;
