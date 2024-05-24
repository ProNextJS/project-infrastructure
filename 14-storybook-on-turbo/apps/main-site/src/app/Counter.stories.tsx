import type { Meta, StoryObj } from "@storybook/react";
import Counter from "./Counter";

const meta = {
  title: "Example/Counter",
  component: Counter,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
