/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const AuthorImages = ({ property, className }) => {
  return <div className={`author-images ${property} ${className}`} />;
};

AuthorImages.propTypes = {
  property: PropTypes.oneOf(["author-image-1", "author-image-2", "author-image-3"]),
};
