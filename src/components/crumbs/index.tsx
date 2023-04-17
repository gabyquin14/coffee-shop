import React, { FC } from "react";
import "./crumbs.css";
import { useParams, useNavigate } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";

interface Props {
  coffee: string;
}

export const CoffeeDetails: FC<Props> = ({ coffee }) => {
  const history = useNavigate();

  return (
    <aside className="crumbs">
      <button className="crumbs-back" onClick={(): void => history("/shop")}>
        Shop
      </button>
      <GoChevronRight />
      <span className="crumbs-active">{coffee}</span>
    </aside>
  );
};

export default CoffeeDetails;
