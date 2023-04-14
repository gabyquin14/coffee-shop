import React, { FC, useEffect, useState } from "react";
import SideBarFilter from "../../components/sidebar";
import Card from "../../components/product card";
import { Coffee } from "../../types/types";

export const ShopContainer: FC = () => {
  const [data, setData] = useState<Array<Coffee>>();

  return (
    <div className="shop-container">
      <SideBarFilter setData={setData} />
      <div className="content">
        {data && data.map((item) => <Card product={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default ShopContainer;
