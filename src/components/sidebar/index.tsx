import React, { FC, useEffect, useState } from "react";
import "./sidebar.css";
import useGetItems from "../../utils/useGetItems";
import { Coffee } from "../../types/types";

interface Props {
  setData: React.Dispatch<React.SetStateAction<Coffee[] | undefined>>;
}

export const SideBarFilter: FC<Props> = ({ setData }) => {
  const [current, setCurrent] = useState("hot");
  const data = useGetItems({ url: `coffee/${current}` });

  useEffect(() => {
    setData(data);
  }, [current, data]);

  return (
    <div className="sidebar-filter">
      <div>
        <h1>Browse by:</h1>
        <hr />
        <h2>Coffee</h2>
        <ul>
          <li onClick={() => setCurrent("hot")}>Hot Coffee</li>
          <li onClick={() => setCurrent("iced")}>Iced Coffee</li>
        </ul>

        <h2>Cake</h2>
        <ul>
          <li>All Cakes</li>
          <li>Butter Cakes</li>
          <li>Foam Cakes</li>
        </ul>
      </div>

      <br />
      <br />
      <div>
        <h1>Filter by:</h1>
        <hr />
        <ul>
          <li>Alphabetical</li>
          <li>Price: Low to High</li>
          <li>Price: High to Low</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBarFilter;
