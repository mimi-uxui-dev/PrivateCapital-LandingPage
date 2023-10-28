import React from "react";
import { Button } from "./Button";

function HowItWorksSection() {
  return (
    <article id="MaximumValue" className="stats">
      <div className="div-14">
        <div className="div-15">
          <div className="text-wrapper-3">How It Works</div>
          <p className="text-wrapper-14">Maximum Value in 3 Steps</p>
        </div>
        <div className="div-16">
          <div className="div-17">
            <div className="div-wrapper">
              <div className="text-wrapper-15">1</div>
            </div>
            <div className="text-wrapper-16">Raise Maximum Interest</div>
            <p className="text-wrapper-17">
              Bring as many interested parties to the table, push them to their
              limits of their maximum willingness to pay and put them in line
              for fast deal execution.
            </p>
          </div>
          <div className="div-17">
            <div className="div-wrapper-2">
              <div className="text-wrapper-15">2</div>
            </div>
            <div className="text-wrapper-16">Streamlined Sales Process</div>
            <p className="text-wrapper-17">
              Crystal clear and proactive communication throughout the whole
              process, clear division into sequential phases of the process with
              diligent preparation and proper execution before starting the next
              step of the process. This ensures maximum competition between the
              parties and therefore best possible outcomes.
            </p>
          </div>
          <div className="div-17">
            <div className="div-wrapper-2">
              <div className="text-wrapper-15">3</div>
            </div>
            <div className="text-wrapper-16">Negotiate!</div>
            <p className="text-wrapper-17">
              Research in order to understand what your counterpart's goals and
              motivations are, read your counter part's mind, foresee their next
              actions and proactively block them by anticipation. Ask questions
              and remove potential roadblocks before even going into
              negotiation.
            </p>
          </div>
        </div>
        <Button href="#Contact" className="button-instance" text="Let’s Talk" />
      </div>
    </article>
  );
}

export default HowItWorksSection;
