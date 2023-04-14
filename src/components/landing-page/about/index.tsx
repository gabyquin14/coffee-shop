import React, { FC } from "react";
import "./about.css";
import Separator from "../../separator";
import Button from "../../button";

export const About: FC = () => {
  return (
    <section className="about">
      <div className="barista fade-up">
        <img src="https://i.ibb.co/gJW9Mg3/team-brewing.jpg" alt="barista" />
      </div>
      <div className="latte-art fade-up">
        <img src="https://i.ibb.co/YRbF6sc/late-art.jpg" alt="latte-art" />
      </div>

      <div className="about-description fade-up">
        <h3>Made with love to serve you</h3>
        <p>
          Over the past 15 years we've learned that it's more important to
          succeed on our own terms than on anyone else's. And when we focus on
          superior quality, from seed to cup, our business thrives.
        </p>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
          deserunt accusamus quisquam adipisci. Tempora necessitatibus dolorum
          asperiores quaerat nemo perspiciatis
        </p> */}
        <Button text="Learn more" />
      </div>
    </section>
  );
};

export default About;
