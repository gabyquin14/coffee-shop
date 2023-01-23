import React, { FC } from "react";
import { TbPlant2 } from "react-icons/tb";
import "./separator.css";

interface Props {
  color?: string;
}

export const Separator: FC<Props> = ({ color }) => {
  return (
    <div className="separator">
      <hr style={{ background: `${color}` }} />
      <TbPlant2 />
      <hr style={{ background: `${color}` }} />
    </div>
  );
};

export default Separator;
