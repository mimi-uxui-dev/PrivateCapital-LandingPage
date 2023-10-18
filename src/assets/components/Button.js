import PropTypes from "prop-types";
import React from "react";
import "./Button.css";

export const Button = ({ href = "#", text = "Our Expertise" }) => {
  return (
    <a href={href} className={`button`}>
      <div>{text}</div>
    </a>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};
