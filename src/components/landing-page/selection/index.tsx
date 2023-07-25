import { FC, useEffect, useRef, useState } from "react";
import Separator from "../../separator";
import "./selection.css";
import { Coffee } from "../../../types/types";
import Card from "../product card";
import Button from "../../button";
import { useAppSelector } from "../../../redux/store";

export const Selection: FC = () => {
  const coffees = useAppSelector((state) => state.info.coffees);
  const [data, setData] = useState<Array<Coffee>>();
  const fadeUpRefs = useRef<(HTMLDivElement | null)[]>([]);
  const loading = require("../../../icons/loading.gif");

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
      <div className="selection">
        <div
          className="selection-title fade-up"
          ref={(el) => (fadeUpRefs.current[0] = el)}
        >
          <h1>GabsCS' featured coffee</h1>
          <Separator color="var(--darker-brown)" />
        </div>
        <Button text="Shop now!" />
        <div
          className="selection-coffees fade-up"
          ref={(el) => (fadeUpRefs.current[1] = el)}
        >
          {data ? (
            data.map((item) => <Card product={item} key={item.id} />)
          ) : (
            <picture>
              <img src={loading} alt="" width="400" height="400" />
            </picture>
          )}
        </div>
      </div>
    </div>
  );
};

export default Selection;
