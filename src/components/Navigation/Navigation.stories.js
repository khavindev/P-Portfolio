import { Navigation } from ".";

export default {
  title: "Components/Navigation",
  component: Navigation,
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
    menuMenuClassName: {},
    divClassName: {},
    text: "Work",
    logoText: "Logo",
  },
};
