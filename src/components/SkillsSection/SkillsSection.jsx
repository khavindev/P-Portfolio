/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Skill } from "../Skill";
import "./style.css";

export const SkillsSection = ({
  property,
  className,
  skillClassName,
  skillImagePlaceholderPropertyImageClassName,
  skillText = "Main Title",
  skillClassNameOverride,
  skillImagePlaceholderPropertyImageClassNameOverride,
  skillText1 = "Main Title",
  skillWrapperClassName,
  skillImagePlaceholderDivClassName,
  skillText2 = "Main Title",
  skillText3 = "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  skillImagePlaceholderDivClassNameOverride,
  skillText4 = "Main Title",
  skillText5 = "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  skillImagePlaceholderPropertyImageClassName1,
  skillText6 = "Main Title",
  skillText7 = "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
  skillImagePlaceholderPropertyImageClassName2,
  skillText8 = "Main Title",
}) => {
  return (
    <div className={`skills-section property-10-${property} ${className}`}>
      <div className="skills">
        <div className="skill-wrapper">
          {property === "mobile" && (
            <div className={`skill-instance-wrapper ${skillClassName}`}>
              <Skill
                className="skill-instance"
                imagePlaceholderProperty="image-placeholder-1"
                imagePlaceholderPropertyImageClassName={skillImagePlaceholderPropertyImageClassName}
                text={skillText}
                text1="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
              />
            </div>
          )}

          {property === "desktop" && (
            <Skill
              className="skill-instance"
              imagePlaceholderProperty="image-placeholder-1"
              imagePlaceholderPropertyImageClassName={skillImagePlaceholderDivClassNameOverride}
              text={skillText4}
              text1={skillText3}
            />
          )}
        </div>
        <div className="skill-2">
          {property === "mobile" && (
            <div className={`skill-instance-wrapper ${skillClassNameOverride}`}>
              <Skill
                className="skill-instance"
                imagePlaceholderProperty="image-placeholder-2"
                imagePlaceholderPropertyImageClassName={skillImagePlaceholderPropertyImageClassNameOverride}
                text={skillText1}
                text1="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
              />
            </div>
          )}

          {property === "desktop" && (
            <Skill
              className="skill-instance"
              imagePlaceholderProperty="image-placeholder-2"
              imagePlaceholderPropertyImageClassName={skillImagePlaceholderPropertyImageClassName1}
              text={skillText6}
              text1={skillText5}
            />
          )}
        </div>
        <div className="skill-3">
          {property === "mobile" && (
            <div className={`skill-instance-wrapper ${skillWrapperClassName}`}>
              <Skill
                className="skill-instance"
                imagePlaceholderProperty="image-placeholder-3"
                imagePlaceholderPropertyImageClassName={skillImagePlaceholderDivClassName}
                text={skillText2}
                text1="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
              />
            </div>
          )}

          {property === "desktop" && (
            <Skill
              className="skill-instance"
              imagePlaceholderProperty="image-placeholder-3"
              imagePlaceholderPropertyImageClassName={skillImagePlaceholderPropertyImageClassName2}
              text={skillText8}
              text1={skillText7}
            />
          )}
        </div>
      </div>
    </div>
  );
};

SkillsSection.propTypes = {
  property: PropTypes.oneOf(["desktop", "mobile"]),
  skillText: PropTypes.string,
  skillText1: PropTypes.string,
  skillText2: PropTypes.string,
  skillText3: PropTypes.string,
  skillText4: PropTypes.string,
  skillText5: PropTypes.string,
  skillText6: PropTypes.string,
  skillText7: PropTypes.string,
  skillText8: PropTypes.string,
};
