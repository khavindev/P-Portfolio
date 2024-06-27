import { Header } from ".";

export default {
  title: "Components/Header",
  component: Header,
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
    text: "Branding | Image making",
    divClassName: {},
    text1: "My awesome portfolio",
    andIMadeItMyselfClassName: {},
    text2: "And I made it myself! Yes. In Figma with Anima",
    imageClassName: {},
  },
};
