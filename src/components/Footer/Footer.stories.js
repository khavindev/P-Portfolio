import { Footer } from ".";

export default {
  title: "Components/Footer",
  component: Footer,
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
    nstagram: "/img/nstagram-1.png",
    behance: "/img/behance-1.png",
    dribbble: "/img/dribbble-1.png",
    facebook: "/img/facebook-1.png",
    discord: "/img/discord-1.png",
    text:
      "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    socialIconsClassName: {},
    nstagramClassName: {},
    behanceClassName: {},
    hasDribbble: true,
    facebookClassName: {},
    hasDiscord: true,
  },
};
