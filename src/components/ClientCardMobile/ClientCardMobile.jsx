/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { AuthorImages } from "../AuthorImages";
import { RateStars } from "../RateStars";
import "./style.css";

export const ClientCardMobile = ({
  className,
  authorImagesPropertyAuthorClassName,
  rateStarsStarStar = "/img/star-40.png",
  rateStarsStarImg = "/img/star-40.png",
  rateStarsStarStar1 = "/img/star-40.png",
  rateStarsStarStar2 = "/img/star-40.png",
  rateStarsStarStar3 = "/img/star-40.png",
  authorImagesProperty = "author-image-1",
}) => {
  return (
    <div className={`client-card-mobile ${className}`}>
      <div className="client-card">
        <p className="text-wrapper-4">
          This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
        </p>
        <div className="client-info">
          <AuthorImages className={authorImagesPropertyAuthorClassName} property={authorImagesProperty} />
          <div className="rate">
            <RateStars
              className="rate-stars-instance"
              starImg={rateStarsStarStar2}
              starStar={rateStarsStarImg}
              starStar1={rateStarsStarStar1}
              starStar2={rateStarsStarStar}
              starStar3={rateStarsStarStar3}
            />
            <div className="gemma-nolen-google">
              Gemma Nolen, <br />
              Google
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ClientCardMobile.propTypes = {
  rateStarsStarStar: PropTypes.string,
  rateStarsStarImg: PropTypes.string,
  rateStarsStarStar1: PropTypes.string,
  rateStarsStarStar2: PropTypes.string,
  rateStarsStarStar3: PropTypes.string,
  authorImagesProperty: PropTypes.string,
};
