import React, { FC, CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";

interface Props {
  loading: boolean;
}

const override: CSSProperties = {
  margin: "20vh auto",
};

export const LoadingScreen: FC<Props> = ({ loading }) => {
  return (
    <HashLoader
      cssOverride={override}
      size={100}
      color={"var(--darker-brown)"}
      loading={loading}
    />
  );
};

export default LoadingScreen;
