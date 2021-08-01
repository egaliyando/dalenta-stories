import { TextField } from "../components";

export default {
  component: TextField,
  title: "Atom/TextField",
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "large"],
      control: { type: "radio" },
    },
    status: {
      options: ["required", "warning", "success", "default"],
      control: { type: "select" },
    },
  },
};

const Template = (args) => <TextField {...args} />;
export const TextFields = Template.bind({});
