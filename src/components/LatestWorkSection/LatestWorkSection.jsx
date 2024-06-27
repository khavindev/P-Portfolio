/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { WorkCard } from "../WorkCard";
import "./style.css";

export const LatestWorkSection = ({
  property,
  className,
  workCardText = "Free Bird",
  workCardText1 = "Lynyrd Skynyrd",
  workCardWorkCardClassName,
  workCardText2 = "Purple Haze",
  workCardText3 = "Jimi Hendrix",
  workCardWorkCardClassNameOverride,
  workCardText4 = "You Really Got Me",
  workCardText5 = "The Kinks",
  workCardDivClassName,
  hasStripe = true,
}) => {
  return (
    <div className={`latest-work-section property-14-${property} ${className}`}>
      <div className="latest-work">
        {property === "mobile" && <>Latest work</>}

        {property === "desktop" && <>My latest work</>}
      </div>
      <div className="work-cards-mobile">
        {property === "mobile" && (
          <>
            <WorkCard
              className="work-card-instance"
              imageClassName="instance-node"
              text="Free Bird"
              text1="Lynyrd Skynyrd"
            />
            <WorkCard
              className="work-card-instance"
              imageClassName="instance-node"
              text="Purple Haze"
              text1="Jimi Hendrix"
            />
            <WorkCard
              className="work-card-instance"
              imageClassName="instance-node"
              text="You Really Got Me"
              text1="The Kinks"
            />
            <WorkCard
              className="work-card-instance"
              imageClassName="instance-node"
              text="American Girl"
              text1="Tom Petty"
            />
            <WorkCard
              className="work-card-instance"
              imageClassName="instance-node"
              text="Whole Lotta Love"
              text1="Led Zeppelin"
            />
            <WorkCard
              className="work-card-instance"
              imageClassName="instance-node"
              text="Under Pressure"
              text1="Queen"
            />
          </>
        )}

        {property === "desktop" && (
          <>
            <div className="stripe-3">
              <WorkCard
                className={workCardWorkCardClassName}
                imageClassName="instance-node"
                text={workCardText}
                text1={workCardText1}
              />
              <WorkCard
                className={workCardWorkCardClassNameOverride}
                imageClassName="instance-node"
                text={workCardText2}
                text1={workCardText3}
              />
              <WorkCard
                className={workCardDivClassName}
                imageClassName="instance-node"
                text={workCardText4}
                text1={workCardText5}
              />
            </div>
            <>
              {hasStripe && (
                <div className="stripe-3">
                  <WorkCard
                    className="work-card-instance"
                    imageClassName="instance-node"
                    text="American Girl"
                    text1="Tom Petty"
                  />
                  <WorkCard
                    className="work-card-instance"
                    imageClassName="instance-node"
                    text="Whole Lotta Love"
                    text1="Led Zeppelin"
                  />
                  <WorkCard
                    className="work-card-instance"
                    imageClassName="instance-node"
                    text="Under Pressure"
                    text1="Queen"
                  />
                </div>
              )}
            </>
          </>
        )}
      </div>
    </div>
  );
};

LatestWorkSection.propTypes = {
  property: PropTypes.oneOf(["desktop", "mobile"]),
  workCardText: PropTypes.string,
  workCardText1: PropTypes.string,
  workCardText2: PropTypes.string,
  workCardText3: PropTypes.string,
  workCardText4: PropTypes.string,
  workCardText5: PropTypes.string,
  hasStripe: PropTypes.bool,
};
