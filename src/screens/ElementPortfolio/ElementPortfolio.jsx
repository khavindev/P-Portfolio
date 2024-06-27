import React from "react";
import { useWindowWidth } from "../../breakpoints";
import { ClientsSection } from "../../components/ClientsSection";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LatestWorkSection } from "../../components/LatestWorkSection";
import { LogosSection } from "../../components/LogosSection";
import { Navigation } from "../../components/Navigation";
import { SkillsSection } from "../../components/SkillsSection";
import "./style.css";

export const ElementPortfolio = () => {
  const screenWidth = useWindowWidth();

  return (
    <div className="element-portfolio">
      {screenWidth < 1280 && (
        <>
          <Navigation className="navigation-instance" menuMenuClassName="navigation-2" property="mobile" />
          <Header className="instance-node-2" property="mobile" />
          <div className="logos-wrapper">
            <div className="logos-2">
              <div className="stripe-4">
                <img className="behance-3" alt="Behance" src="/img/behance-4.png" />
                <img className="google-3" alt="Google" src="/img/google-2.png" />
              </div>
              <img className="stripe-5" alt="Stripe" src="/img/stripe-2.png" />
              <img className="awwwards-2" alt="Awwwards" src="/img/awwwards-2.png" />
            </div>
          </div>
          <SkillsSection
            className="instance-node-2"
            property="mobile"
            skillClassName="skills-section-instance"
            skillClassNameOverride="skills-section-instance"
            skillImagePlaceholderDivClassName="skills-section-4"
            skillImagePlaceholderPropertyImageClassName="skills-section-2"
            skillImagePlaceholderPropertyImageClassNameOverride="skills-section-3"
            skillText="Product design"
            skillText1="Art direction"
            skillText2="Visual design"
            skillWrapperClassName="skills-section-instance"
          />
          <LatestWorkSection className="instance-node-2" property="mobile" />
        </>
      )}

      {screenWidth >= 1280 && (
        <>
          <Navigation
            className="navigation-instance"
            divClassName="navigation-3"
            href="https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-portfolio22&utm_medium=figma-samples"
            href1="https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-portfolio22&utm_medium=figma-samples"
            logoText="Puja.Creates"
            property="desktop"
            text="My Blogs"
          />
          <Header
            andIMadeItMyselfClassName="header-2"
            className="instance-node-2"
            divClassName="header-instance"
            imageClassName="header-3"
            property="desktop"
            text="Puja.creates | Profressional copywriter"
            text1="A Writing Agency"
            text2="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(With a twist.......)"
          />
          <LogosSection className="logos-section-instance" google="/img/google-3.png" property="desktop" />
          <SkillsSection
            className="instance-node-2"
            property="desktop"
            skillImagePlaceholderDivClassNameOverride="skills-section-5"
            skillImagePlaceholderPropertyImageClassName1="skills-section-6"
            skillImagePlaceholderPropertyImageClassName2="skills-section-7"
            skillText3="We&#39;re strategists, brand consultants, and content architects who understand the power of words to create lasting impressions."
            skillText4="We&#39;re more than just writers:"
            skillText5="We don&#39;t shy away from bold ideas, unique voices, and unconventional approaches."
            skillText6="We embrace the unexpected:"
            skillText7="We don&#39;t just write, we write to convert, engage, and inspire action."
            skillText8="We&#39;re obsessed with results:"
          />
          <LatestWorkSection
            className="instance-node-2"
            hasStripe={false}
            property="desktop"
            workCardDivClassName="latest-work-section-instance"
            workCardText="Creative Copywriter"
            workCardText1="Thirteen-ideation"
            workCardText2="Web content writer"
            workCardText3="Akaybee media studios"
            workCardText4="Social Media Stratergist"
            workCardText5="AAA Tech Services"
            workCardWorkCardClassName="latest-work-section-instance"
            workCardWorkCardClassNameOverride="latest-work-section-instance"
          />
        </>
      )}

      <ClientsSection
        className="instance-node-2"
        clientCardMobileAuthorImagesDivClassName={`${screenWidth < 1280 && "class-3"} ${
          screenWidth >= 1280 && "class-4"
        }`}
        clientCardMobileAuthorImagesPropertyAuthorClassName={`${screenWidth < 1280 && "class-7"} ${
          screenWidth >= 1280 && "class-8"
        }`}
        clientCardMobileAuthorImagesPropertyAuthorClassNameOverride={`${screenWidth < 1280 && "class-5"} ${
          screenWidth >= 1280 && "class-6"
        }`}
        clientCardMobileRateStarsStarImg={
          screenWidth < 1280 ? "/img/star-55.png" : screenWidth >= 1280 ? "/img/star-70.png" : undefined
        }
        clientCardMobileRateStarsStarStar={
          screenWidth < 1280 ? "/img/star-55.png" : screenWidth >= 1280 ? "/img/star-70.png" : undefined
        }
        clientCardMobileRateStarsStarStar1={
          screenWidth < 1280 ? "/img/star-55.png" : screenWidth >= 1280 ? "/img/star-70.png" : undefined
        }
        clientCardMobileRateStarsStarStar10={
          screenWidth < 1280 ? "/img/star-55.png" : screenWidth >= 1280 ? "/img/star-70.png" : undefined
        }
        clientCardMobileRateStarsStarStar11={
          screenWidth < 1280 ? "/img/star-55.png" : screenWidth >= 1280 ? "/img/star-70.png" : undefined
        }
        clientCardMobileRateStarsStarStar12={
          screenWidth < 1280 ? "/img/star-55.png" : screenWidth >= 1280 ? "/img/star-70.png" : undefined
        }
        clientCardMobileRateStarsStarStar13={
          screenWidth < 1280 ? "/img/star-55.png" : screenWidth >= 1280 ? "/img/star-70.png" : undefined
        }
        clientCardMobileRateStarsStarStar2={
          screenWidth < 1280 ? "/img/star-55.png" : screenWidth >= 1280 ? "/img/star-70.png" : undefined
        }
        clientCardMobileRateStarsStarStar3={
          screenWidth < 1280 ? "/img/star-55.png" : screenWidth >= 1280 ? "/img/star-70.png" : undefined
        }
        clientCardMobileRateStarsStarStar4={
          screenWidth < 1280 ? "/img/star-55.png" : screenWidth >= 1280 ? "/img/star-65.png" : undefined
        }
        clientCardMobileRateStarsStarStar5={
          screenWidth < 1280 ? "/img/star-55.png" : screenWidth >= 1280 ? "/img/star-65.png" : undefined
        }
        clientCardMobileRateStarsStarStar6={
          screenWidth < 1280 ? "/img/star-55.png" : screenWidth >= 1280 ? "/img/star-65.png" : undefined
        }
        clientCardMobileRateStarsStarStar7={
          screenWidth < 1280 ? "/img/star-55.png" : screenWidth >= 1280 ? "/img/star-65.png" : undefined
        }
        clientCardMobileRateStarsStarStar8={
          screenWidth < 1280 ? "/img/star-55.png" : screenWidth >= 1280 ? "/img/star-65.png" : undefined
        }
        clientCardMobileRateStarsStarStar9={
          screenWidth < 1280 ? "/img/star-55.png" : screenWidth >= 1280 ? "/img/star-70.png" : undefined
        }
        property={screenWidth < 1280 ? "mobile" : screenWidth >= 1280 ? "desktop" : undefined}
      />
      {screenWidth >= 1280 && (
        <Footer
          behance="/img/facebook-3.png"
          behanceClassName="footer-3"
          className="instance-node-2"
          facebook="/img/facebook-3.png"
          facebookClassName="footer-4"
          hasDiscord={false}
          hasDribbble={false}
          href="https://www.instagram.com/animaapp/?hl=en"
          href1="https://www.behance.net/Anima_design"
          href3="https://www.facebook.com/animaapp/"
          nstagram="/img/nstagram-3.png"
          nstagramClassName="footer-2"
          property="desktop"
          socialIconsClassName="footer-instance"
          text={
            <>
              <br />
              Puja.Creates is a creative writing agency that goes beyond the ordinary. We craft words that spark joy,
              ignite conversations, and drive results. Contact us for a free consultation.
            </>
          }
        />
      )}

      {screenWidth < 1280 && (
        <Footer
          behance="/img/behance-5.png"
          className="instance-node-2"
          discord="/img/discord-2.png"
          dribbble="/img/dribbble-4.png"
          facebook="/img/facebook-2.png"
          href="https://www.instagram.com/animaapp/?hl=en"
          href1="https://www.behance.net/Anima_design"
          href2="https://dribbble.com/animaapp"
          href3="https://www.facebook.com/animaapp/"
          href4="https://discord.com/invite/eQxkYTNxSp"
          nstagram="/img/nstagram-2.png"
          property="mobile"
        />
      )}
    </div>
  );
};
