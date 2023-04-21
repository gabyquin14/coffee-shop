import React, { FC, useEffect, useState } from "react";
import "./selection-all.css";
import SelectionCard from "../selection-card";
import axios from "axios";
import { Coffee } from "../../../types/types";
import useGetItems from "../../../utils/useGetItems";
import { ToastContainer, toast } from "react-toastify";

export const Selection: FC = () => {
  const data = useGetItems();

  return (
    <>
      <div className="selection-all selection-grid">
        {data?.map((coffee) => (
          <SelectionCard coffee={coffee} key={coffee.id} />
        ))}
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default Selection;
