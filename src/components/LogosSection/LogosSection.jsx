/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const LogosSection = ({ property, className, google = "/img/google-1.png" }) => {
  return (
    <div className={`logos-section property-7-${property} ${className}`}>
      <div className="logos">
        {property === "mobile" && (
          <>
            <div className="stripe">
              <img className="behance" alt="Behance" src="/img/behance-2.png" />
              <img className="google" alt="Google" src="/img/google.png" />
            </div>
            <div className="stripe-2">
              <img className="apple" alt="Apple" src="/img/apple.png" />
              <img className="dribbble" alt="Dribbble" src="/img/dribbble-2.png" />
            </div>
          </>
        )}

        <img className="img" alt="Behance" src={property === "mobile" ? "/img/awwwards.png" : "/img/behance-3.png"} />
        {property === "desktop" && (
          <>
            <img className="google-2" alt="Google" src={google} />
            <img className="apple-2" alt="Apple" src="/img/apple-1.png" />
            <img className="dribbble-2" alt="Dribbble" src="/img/dribbble-3.png" />
            <img className="awwwards" alt="Awwwards" src="/img/awwwards-1.png" />
          </>
        )}
      </div>
    </div>
  );
};

LogosSection.propTypes = {
  property: PropTypes.oneOf(["desktop", "mobile"]),
  google: PropTypes.string,
};
