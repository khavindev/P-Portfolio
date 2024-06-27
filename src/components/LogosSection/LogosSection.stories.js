import { LogosSection } from ".";

export default {
  title: "Components/LogosSection",
  component: LogosSection,
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
    google: "/img/google-1.png",
  },
};
