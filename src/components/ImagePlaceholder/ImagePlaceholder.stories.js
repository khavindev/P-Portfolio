import { ImagePlaceholder } from ".";

export default {
  title: "Components/ImagePlaceholder",
  component: ImagePlaceholder,
  argTypes: {
    property: {
      options: ["image-placeholder-3", "image-placeholder-1", "image-placeholder-2"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property: "image-placeholder-3",
    className: {},
  },
};
