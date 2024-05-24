import type { Meta, StoryObj } from "@storybook/react";
import Pokemon from "./Pokemon";

const meta = {
  title: "Example/Pokemon",
  component: Pokemon,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {
    id: { control: "text" },
  },
} satisfies Meta<typeof Pokemon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: 1,
  },
};
