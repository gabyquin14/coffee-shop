import React, { FC, useEffect, useState } from "react";
import "./selection-all.css";
import SelectionCard from "../selection-card";
import axios from "axios";
import { Coffee } from "../../../types/types";
import useGetItems from "../../../utils/useGetItems";

export const Selection: FC = () => {
  const data = useGetItems();
  return (
    <div className="selection-all selection-grid">
      {data?.map((coffee) => (
        <SelectionCard coffee={coffee} />
      ))}
    </div>
  );
};

export default Selection;
