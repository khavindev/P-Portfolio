/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Logo } from "../Logo";
import { Menu } from "../Menu";
import "./style.css";

export const Navigation = ({
  property,
  className,
  menuMenuClassName,
  divClassName,
  text = "Work",
  logoText = "Logo",
  href,
  href1,
}) => {
  return (
    <div className={`navigation ${property} ${className}`}>
      {property === "desktop" && (
        <div className="nav-nav-menu">
          <div className="text-wrapper-2">About</div>
          <a className={`work ${divClassName}`} href={href} rel="noopener noreferrer" target="_blank">
            {text}
          </a>
          <a className="text-wrapper-3" href={href1} rel="noopener noreferrer" target="_blank">
            Contact
          </a>
        </div>
      )}

      <Logo className="logo-instance" text={property === "mobile" ? "Logo" : logoText} />
      {property === "mobile" && <Menu className={menuMenuClassName} />}
    </div>
  );
};

Navigation.propTypes = {
  property: PropTypes.oneOf(["desktop", "mobile"]),
  text: PropTypes.string,
  logoText: PropTypes.string,
  href: PropTypes.string,
  href1: PropTypes.string,
};
