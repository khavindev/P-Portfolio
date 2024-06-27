/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ImagePlaceholder = ({ property, className }) => {
  return <div className={`image-placeholder ${property} ${className}`} />;
};

ImagePlaceholder.propTypes = {
  property: PropTypes.oneOf(["image-placeholder-3", "image-placeholder-1", "image-placeholder-2"]),
};
