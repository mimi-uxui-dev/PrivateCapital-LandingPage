import React from "react";
import { Button } from "./Button";
import scrollIcon from "../images/scroolar.svg";

function HeroSection() {
  return (
    <article className="hero-content">
      <p className="p">
        Our B2B DNA drives our omnipresent value maximization culture <br />
        your business is our business when it comes to selling
      </p>
      <p className="text-wrapper-2">
        B2B Capital Partners has advised 100+ company sales across the globe
        with 40+ billion total deal value
      </p>
      <Button href="#MaximumValue" text="Our Expertise" />
      <img className="scrollIcon" alt="Img" src={scrollIcon} />
    </article>
  );
}

export default HeroSection;
