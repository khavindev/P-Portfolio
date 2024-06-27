/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ImagePlaceholder } from "../ImagePlaceholder";
import "./style.css";

export const Skill = ({
  className,
  imagePlaceholderPropertyImageClassName,
  text = "Main Title",
  imagePlaceholderProperty = "image-placeholder-1",
  text1 = "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
}) => {
  return (
    <div className={`skill ${className}`}>
      <ImagePlaceholder className={imagePlaceholderPropertyImageClassName} property={imagePlaceholderProperty} />
      <div className="headline-subhead-3">
        <div className="main-title">{text}</div>
        <p className="p">{text1}</p>
      </div>
    </div>
  );
};

Skill.propTypes = {
  text: PropTypes.string,
  imagePlaceholderProperty: PropTypes.string,
  text1: PropTypes.string,
};
