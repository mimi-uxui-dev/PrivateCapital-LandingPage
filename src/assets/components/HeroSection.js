import React from "react";
import { Button } from "./Button";
import scrollIcon from "../images/scroolar.svg";

function HeroSection() {
  return (
    <article className="hero-content">
      <p className="p">
        Lorem ipsum dolor sit amet consectetur viverra sed vitae posuere velit
        enim.
      </p>
      <p className="text-wrapper-2">
        Lorem ipsum dolor sit amet consectetur. Egestas sollicitudin non morbi
        feugiat ac cndimentum ac. Integer sed libero aliquam nam, eu iaculis
        nascetur tellus
      </p>
      <Button href="#MaximumValuation" text="Our Expertise" />
      <img className="scrollIcon" alt="Img" src={scrollIcon} />
    </article>
  );
}

export default HeroSection;
