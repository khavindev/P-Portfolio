/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Header = ({
  property,
  className,
  text = "Branding | Image making",
  divClassName,
  text1 = "My awesome portfolio",
  andIMadeItMyselfClassName,
  text2 = "And I made it myself! Yes. In Figma with Anima",
  imageClassName,
}) => {
  return (
    <div className={`header property-${property} ${className}`}>
      <div className="div-2">
        <div className="headline-subhead">
          <div className="headline-subhead-2">
            <div className="branding-image">{text}</div>
            <div className={`visual-designer ${divClassName}`}>
              {property === "mobile" && <>Visual Designer</>}

              {property === "desktop" && <>{text1}</>}
            </div>
          </div>
          <div className={`this-is-a-template ${andIMadeItMyselfClassName}`}>
            {property === "mobile" && (
              <p className="text-wrapper-8">
                This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
              </p>
            )}

            {property === "desktop" && <p className="text-wrapper-8">{text2}</p>}
          </div>
        </div>
        <div className={`image ${imageClassName}`} />
      </div>
    </div>
  );
};

Header.propTypes = {
  property: PropTypes.oneOf(["desktop", "mobile"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
};
