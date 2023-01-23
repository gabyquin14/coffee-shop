import React, { FC, useEffect, useState } from "react";
import "./about.css";
import Separator from "../separator";

export const About: FC = () => {
  return (
    <div className="about">
      <div className="about-wrapper">
        <div className="about-content">
          <h1>About us</h1>
          <Separator />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            consequuntur odio iusto doloribus obcaecati fugit dolorum at vel
            iure, aliquam modi expedita tenetur, similique beatae ipsam
            doloremque optio voluptates voluptatibus iure, aliquam modi expedita
            tenetur, similique beatae ipsam doloremque optio voluptates
            voluptatibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            consequuntur odio iusto doloribus obcaecati fugit dolorum at vel
            iure, aliquam modi expedita tenetur, similique beatae ipsam
            doloremque optio voluptates voluptatibus iure.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            consequuntur odio iusto doloribus obcaecati fugit. orro consequuntur
            odio iusto doloribus obcaecati fugit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
