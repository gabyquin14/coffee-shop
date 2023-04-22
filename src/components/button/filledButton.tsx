import React, { FC } from "react";
import "./button.css";

interface Props {
  text: string;
  type?: string;
  onclick?: () => void;
}

export const FilledButton: FC<Props> = ({ text, type, onclick }) => {
  const btnType = () => {
    return type === "accent"
      ? "accent"
      : type === "light"
      ? "light"
      : type === "danger"
      ? "danger"
      : "";
  };
  return (
    <button className={`filled-btn ${btnType()}`} onClick={onclick}>
      {text}
    </button>
  );
};

export default FilledButton;
