import axios from "axios";
import { useState, useEffect, FC } from "react";
import { Coffee } from "../types/types";

interface Props {
  url: string;
}

const useGetItem = ({ url }: Props) => {
  const [data, setData] = useState<Coffee>();
  const baseUrl = "https://api.sampleapis.com";

  useEffect(() => {
    (async () => {
      try {
        const resp = await axios.get(`${baseUrl}/${url}`);
        setData(resp.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [url]);

  return data;
};

export default useGetItem;
