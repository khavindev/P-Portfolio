/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button";
import { TextInputDesktop } from "../TextInputDesktop";
import "./style.css";

export const Footer = ({
  property,
  className,
  nstagram = "/img/nstagram-1.png",
  behance = "/img/behance-1.png",
  dribbble = "/img/dribbble-1.png",
  facebook = "/img/facebook-1.png",
  discord = "/img/discord-1.png",
  text = "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  socialIconsClassName,
  nstagramClassName,
  behanceClassName,
  hasDribbble = true,
  facebookClassName,
  hasDiscord = true,
  href,
  href1,
  href2,
  href3,
  href4,
}) => {
  return (
    <div className={`footer property-19-${property} ${className}`}>
      <div className="footer-info">
        <div className="footer-info-2">
          <div className="contact-info">
            <div className="footer-message">
              <div className="text-wrapper-7">Let’s work together</div>
              <p className="this-is-a-template-2">{text}</p>
            </div>
            <div className={`social-icons ${socialIconsClassName}`}>
              <a href={href} rel="noopener noreferrer" target="_blank">
                <img className={`nstagram ${nstagramClassName}`} alt="Nstagram" src={nstagram} />
              </a>
              <a href={href1} rel="noopener noreferrer" target="_blank">
                <img className={`behance-2 ${behanceClassName}`} alt="Behance" src={behance} />
              </a>
              {hasDribbble && (
                <a href={href2} rel="noopener noreferrer" target="_blank">
                  <img className="dribbble-3" alt="Dribbble" src={dribbble} />
                </a>
              )}

              <a href={href3} rel="noopener noreferrer" target="_blank">
                <img className={`facebook ${facebookClassName}`} alt="Facebook" src={facebook} />
              </a>
              {hasDiscord && (
                <a href={href4} rel="noopener noreferrer" target="_blank">
                  <img className="discord" alt="Discord" src={discord} />
                </a>
              )}
            </div>
          </div>
          <div className="text-fields">
            <div className="text-fields-2">
              <TextInputDesktop className={`${property === "mobile" ? "class-2" : "button-instance"}`} />
              <TextInputDesktop className={`${property === "mobile" ? "class-2" : "button-instance"}`} />
              <TextInputDesktop className={`${property === "mobile" ? "class-2" : "button-instance"}`} />
            </div>
            <Button className="button-instance" />
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  property: PropTypes.oneOf(["desktop", "mobile"]),
  nstagram: PropTypes.string,
  behance: PropTypes.string,
  dribbble: PropTypes.string,
  facebook: PropTypes.string,
  discord: PropTypes.string,
  text: PropTypes.string,
  hasDribbble: PropTypes.bool,
  hasDiscord: PropTypes.bool,
  href: PropTypes.string,
  href1: PropTypes.string,
  href2: PropTypes.string,
  href3: PropTypes.string,
  href4: PropTypes.string,
};
