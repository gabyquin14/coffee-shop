import { FC } from "react";
import "./button.css";

interface Props {
  text: string;
  type?: string;
  clickFunction?: () => void;
}

export const OutlinedButton: FC<Props> = ({ text, clickFunction, type }) => {
  return (
    <button
      className={`outlined-btn ${type === "light" ? "light" : ""}`}
      onClick={clickFunction}
    >
      {text}
    </button>
  );
};

export default OutlinedButton;
