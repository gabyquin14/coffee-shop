import { FC, useEffect, useRef, useState } from "react";
import axios from "axios";
import Separator from "../../separator";
import "./selection.css";
import { Coffee } from "../../../types/types";
import Card from "../product card";
import Button from "../../button";
import { useAppSelector } from "../../../redux/store";
import LoadingScreen from "../../loading";

export const Selection: FC = () => {
  const coffees = useAppSelector((state) => state.info.coffees);
  const status = useAppSelector((state) => state.info.status);
  const [data, setData] = useState<Array<Coffee>>();
  const fadeUpRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const selectedCoffees = [coffees[0], coffees[1], coffees[2], coffees[3]];
    setData(selectedCoffees);

    fadeUpRefs.current.forEach((el) => {
      if (el) {
        fadeUpObserver.observe(el);
      }
    });

    return () => {
      fadeUpObserver.disconnect();
    };
  }, [coffees]);

  const fadeUpObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("faded");
          fadeUpObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  useEffect(() => {
    const selectedCoffees = [coffees[0], coffees[1], coffees[2], coffees[3]];
    setData(selectedCoffees);
  }, []);

  return (
    <div className="selection">
      {status === "loading" ? (
        <div className="fade-up">
          <LoadingScreen loading={status === "loading"} />
        </div>
      ) : (
        <div>
          <div
            className="selection-title fade-up"
            ref={(el) => (fadeUpRefs.current[0] = el)}
          >
            <h1>GabsCS' featured coffee</h1>
            <Separator color="var( --darker-brown)" />
          </div>
          <Button text="Shop now!" />
          <div
            className="selection-coffees fade-up"
            ref={(el) => (fadeUpRefs.current[1] = el)}
          >
            {data && data.map((item) => <Card product={item} key={item.id} />)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Selection;
