import { SkillsSection } from ".";

export default {
  title: "Components/SkillsSection",
  component: SkillsSection,
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
    skillClassName: {},
    skillImagePlaceholderPropertyImageClassName: {},
    skillText: "Main Title",
    skillClassNameOverride: {},
    skillImagePlaceholderPropertyImageClassNameOverride: {},
    skillText1: "Main Title",
    skillWrapperClassName: {},
    skillImagePlaceholderDivClassName: {},
    skillText2: "Main Title",
    skillText3: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    skillImagePlaceholderDivClassNameOverride: {},
    skillText4: "Main Title",
    skillText5: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    skillImagePlaceholderPropertyImageClassName1: {},
    skillText6: "Main Title",
    skillText7: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    skillImagePlaceholderPropertyImageClassName2: {},
    skillText8: "Main Title",
  },
};
