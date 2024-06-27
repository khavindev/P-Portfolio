/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ClientCardMobile } from "../ClientCardMobile";
import "./style.css";

export const ClientsSection = ({
  property,
  className,
  clientCardMobileRateStarsStarStar = "/img/star-40.png",
  clientCardMobileRateStarsStarImg = "/img/star-40.png",
  clientCardMobileRateStarsStarStar1 = "/img/star-40.png",
  clientCardMobileAuthorImagesPropertyAuthorClassName,
  clientCardMobileRateStarsStarStar2 = "/img/star-40.png",
  clientCardMobileRateStarsStarStar3 = "/img/star-40.png",
  clientCardMobileRateStarsStarStar4 = "/img/star-40.png",
  clientCardMobileRateStarsStarStar5 = "/img/star-40.png",
  clientCardMobileRateStarsStarStar6 = "/img/star-40.png",
  clientCardMobileAuthorImagesPropertyAuthorClassNameOverride,
  clientCardMobileRateStarsStarStar7 = "/img/star-40.png",
  clientCardMobileRateStarsStarStar8 = "/img/star-40.png",
  clientCardMobileRateStarsStarStar9 = "/img/star-40.png",
  clientCardMobileRateStarsStarStar10 = "/img/star-40.png",
  clientCardMobileRateStarsStarStar11 = "/img/star-40.png",
  clientCardMobileAuthorImagesDivClassName,
  clientCardMobileRateStarsStarStar12 = "/img/star-40.png",
  clientCardMobileRateStarsStarStar13 = "/img/star-40.png",
}) => {
  return (
    <div className={`clients-section property-15-${property} ${className}`}>
      <div className="client-cards">
        <div className="text-wrapper-5">Clients</div>
        <div className="clients-cards">
          <ClientCardMobile
            authorImagesProperty="author-image-1"
            authorImagesPropertyAuthorClassName={clientCardMobileAuthorImagesPropertyAuthorClassName}
            className={`${property === "mobile" && "class"}`}
            rateStarsStarImg={clientCardMobileRateStarsStarImg}
            rateStarsStarStar={clientCardMobileRateStarsStarStar2}
            rateStarsStarStar1={clientCardMobileRateStarsStarStar1}
            rateStarsStarStar2={clientCardMobileRateStarsStarStar}
            rateStarsStarStar3={clientCardMobileRateStarsStarStar3}
          />
          <ClientCardMobile
            authorImagesProperty="author-image-2"
            authorImagesPropertyAuthorClassName={clientCardMobileAuthorImagesPropertyAuthorClassNameOverride}
            className={`${property === "mobile" && "class"}`}
            rateStarsStarImg={clientCardMobileRateStarsStarStar4}
            rateStarsStarStar={clientCardMobileRateStarsStarStar7}
            rateStarsStarStar1={clientCardMobileRateStarsStarStar6}
            rateStarsStarStar2={clientCardMobileRateStarsStarStar5}
            rateStarsStarStar3={clientCardMobileRateStarsStarStar8}
          />
          <ClientCardMobile
            authorImagesProperty="author-image-3"
            authorImagesPropertyAuthorClassName={clientCardMobileAuthorImagesDivClassName}
            className={`${property === "mobile" && "class"}`}
            rateStarsStarImg={clientCardMobileRateStarsStarStar9}
            rateStarsStarStar={clientCardMobileRateStarsStarStar12}
            rateStarsStarStar1={clientCardMobileRateStarsStarStar11}
            rateStarsStarStar2={clientCardMobileRateStarsStarStar10}
            rateStarsStarStar3={clientCardMobileRateStarsStarStar13}
          />
        </div>
      </div>
    </div>
  );
};

ClientsSection.propTypes = {
  property: PropTypes.oneOf(["desktop", "mobile"]),
  clientCardMobileRateStarsStarStar: PropTypes.string,
  clientCardMobileRateStarsStarImg: PropTypes.string,
  clientCardMobileRateStarsStarStar1: PropTypes.string,
  clientCardMobileRateStarsStarStar2: PropTypes.string,
  clientCardMobileRateStarsStarStar3: PropTypes.string,
  clientCardMobileRateStarsStarStar4: PropTypes.string,
  clientCardMobileRateStarsStarStar5: PropTypes.string,
  clientCardMobileRateStarsStarStar6: PropTypes.string,
  clientCardMobileRateStarsStarStar7: PropTypes.string,
  clientCardMobileRateStarsStarStar8: PropTypes.string,
  clientCardMobileRateStarsStarStar9: PropTypes.string,
  clientCardMobileRateStarsStarStar10: PropTypes.string,
  clientCardMobileRateStarsStarStar11: PropTypes.string,
  clientCardMobileRateStarsStarStar12: PropTypes.string,
  clientCardMobileRateStarsStarStar13: PropTypes.string,
};
