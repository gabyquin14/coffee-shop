import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import Separator from "../separator";
import "./selection.css";
import { NavLink } from "react-router-dom";

interface Coffee {
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  id: number;
}

export const Selection: FC = () => {
  const [data, setData] = useState<Array<Coffee>>();
  const getData = async () => {
    try {
      const resp = await axios.get("https://api.sampleapis.com/coffee/hot");
      console.log(resp.data[0].title);
      const res = resp.data.filter((item: any) => item.id < 5);
      setData(res);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="selection">
      <h1>GabsCS' featured coffee</h1>
      <Separator color="#3c2828" />
      <p className="selection-resume">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, minima.
        Maxime, dolorem impedit, nesciunt repellat dolores.
      </p>
      <button>
        <NavLink to={"/shop"}>Shop now!</NavLink>
      </button>
      <div className="selection-coffees">
        {data &&
          data.map((item) => (
            <div className="selection-coffee-container">
              <div
                className="selection-coffee-img"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="selection-coffee-info">
                <div>
                  <h3>{item.title}</h3>
                  <span>$5</span>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Selection;
