import { AuthorImages } from ".";

export default {
  title: "Components/AuthorImages",
  component: AuthorImages,
  argTypes: {
    property: {
      options: ["author-image-1", "author-image-2", "author-image-3"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property: "author-image-1",
    className: {},
  },
};
