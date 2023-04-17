import axios from "axios";
import { useState, useEffect, FC } from "react";
import { Coffee } from "../types/types";

const useAlphabeticSort = () => {
  const [data, setData] = useState<Array<Coffee>>();
  const baseUrl = "https://coffee-api-gabyquin14.onrender.com/api/coffees";

  useEffect(() => {
    (async () => {
      try {
        const resp = await axios.get(`${baseUrl}`);
        setData(resp.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return data;
};

export default useAlphabeticSort;
