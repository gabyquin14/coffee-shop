import React, { FC } from "react";
import { TbPlant2 } from "react-icons/tb";
import "./separator.css";

interface Props {
  color?: string;
}

export const Separator: FC<Props> = ({ color }) => {
  return (
    <div className="separator">
      <div className="separator-hr">
        <hr style={{ background: `${color}` }} />
      </div>
      <TbPlant2 style={{ color: `${color}` }} />
      <div className="separator-hr">
        <hr style={{ background: `${color}` }} />
      </div>
    </div>
  );
};

export default Separator;
