import { ImageField } from "../components";

export default {
  component: ImageField,
  title: "Atom/ImageField",
  argTypes: {
    status: {
      options: ["required", "warning", "success", "default"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <ImageField {...args} />;
export const ImageFields = Template.bind({});
