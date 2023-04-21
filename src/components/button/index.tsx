import React, { FC } from "react";
import "./button.css";
import Separator from "../separator";

interface Props {
  text: string;
  clickFunction?: () => void;
}

export const Button: FC<Props> = ({ text, clickFunction }) => {
  return (
    <button className="main-btn" onClick={clickFunction}>
      {text}
    </button>
  );
};

export default Button;
