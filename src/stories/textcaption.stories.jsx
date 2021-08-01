import { TextCaption } from "../components";

export default {
  component: TextCaption,
  title: "Atom/TextCaption",
  argTypes: {
    status: {
      options: ["required", "warning", "success", "default"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <TextCaption {...args} />;
export const TextCaptions = Template.bind({});
