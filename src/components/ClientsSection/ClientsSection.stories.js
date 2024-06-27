import { ClientsSection } from ".";

export default {
  title: "Components/ClientsSection",
  component: ClientsSection,
  argTypes: {
    property: {
      options: ["desktop", "mobile"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property: "desktop",
    className: {},
    clientCardMobileRateStarsStarStar: "/img/star-40.png",
    clientCardMobileRateStarsStarImg: "/img/star-40.png",
    clientCardMobileRateStarsStarStar1: "/img/star-40.png",
    clientCardMobileAuthorImagesPropertyAuthorClassName: {},
    clientCardMobileRateStarsStarStar2: "/img/star-40.png",
    clientCardMobileRateStarsStarStar3: "/img/star-40.png",
    clientCardMobileRateStarsStarStar4: "/img/star-40.png",
    clientCardMobileRateStarsStarStar5: "/img/star-40.png",
    clientCardMobileRateStarsStarStar6: "/img/star-40.png",
    clientCardMobileAuthorImagesPropertyAuthorClassNameOverride: {},
    clientCardMobileRateStarsStarStar7: "/img/star-40.png",
    clientCardMobileRateStarsStarStar8: "/img/star-40.png",
    clientCardMobileRateStarsStarStar9: "/img/star-40.png",
    clientCardMobileRateStarsStarStar10: "/img/star-40.png",
    clientCardMobileRateStarsStarStar11: "/img/star-40.png",
    clientCardMobileAuthorImagesDivClassName: {},
    clientCardMobileRateStarsStarStar12: "/img/star-40.png",
    clientCardMobileRateStarsStarStar13: "/img/star-40.png",
  },
};
