/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Star = ({ star = "/img/star-40.png" }) => {
  return (
    <div className="star">
      <img className="img-2" alt="Star" src={star} />
    </div>
  );
};

Star.propTypes = {
  star: PropTypes.string,
};
