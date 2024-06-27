/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Star } from "../Star";
import "./style.css";

export const RateStars = ({
  className,
  starStar = "/img/star-40.png",
  starImg = "/img/star-40.png",
  starStar1 = "/img/star-40.png",
  starStar2 = "/img/star-40.png",
  starStar3 = "/img/star-40.png",
}) => {
  return (
    <div className={`rate-stars ${className}`}>
      <Star star={starStar} />
      <Star star={starImg} />
      <Star star={starStar1} />
      <Star star={starStar2} />
      <Star star={starStar3} />
    </div>
  );
};

RateStars.propTypes = {
  starStar: PropTypes.string,
  starImg: PropTypes.string,
  starStar1: PropTypes.string,
  starStar2: PropTypes.string,
  starStar3: PropTypes.string,
};
