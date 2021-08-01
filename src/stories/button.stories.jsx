import { Button } from "../components";

export default {
  component: Button,
  title: "Atom/ButtonSmall",
  argTypes: {
    variant: {
      options: ["primary", "secondary", "outlined"],
      control: { type: "radio" },
    },
    theme: {
      options: ["red-dragon", "blue-hedgehog"],
      control: { type: "select" },
    },
    content: {
      options: ["icon-only", "icon-infront", "icon-behind", "label-only"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <Button {...args}>Button Small</Button>;
export const ButtonSmall = Template.bind({});
