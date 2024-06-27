import { LatestWorkSection } from ".";

export default {
  title: "Components/LatestWorkSection",
  component: LatestWorkSection,
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
    workCardText: "Free Bird",
    workCardText1: "Lynyrd Skynyrd",
    workCardWorkCardClassName: {},
    workCardText2: "Purple Haze",
    workCardText3: "Jimi Hendrix",
    workCardWorkCardClassNameOverride: {},
    workCardText4: "You Really Got Me",
    workCardText5: "The Kinks",
    workCardDivClassName: {},
    hasStripe: true,
  },
};
