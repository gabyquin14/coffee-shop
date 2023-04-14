import React, { FC } from "react";
import "./button.css";
import Separator from "../separator";

interface Props {
  text: string;
}

export const Button: FC<Props> = ({ text }) => {
  return <button className="main-btn">{text}</button>;
};

export default Button;
