// Input.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Input, { InputProps } from "./Input";

export default {
  title: "Components/Input/Input",
  component: Input,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "default",
          "outline",
          "filled",
          "line",
          "floating",
        ],
      },
    },
    label: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
    placeholder: {
      control: "text",
    },
  },
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default Input",
  placeholder: "Type something...",
};

export const Outline = Template.bind({});
Outline.args = {
  label: "Outline Input",
  variant: "outline",
  placeholder: "Type something...",
};

export const Filled = Template.bind({});
Filled.args = {
  label: "Filled Input",
  variant: "filled",
  placeholder: "Type something...",
};

export const Line = Template.bind({});
Line.args = {
  label: "Line Input",
  variant: "line",
  placeholder: "Type something...",
};

export const Floating = Template.bind({});
Floating.args = {
  label: "Floating Input",
  variant: "floating",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Input",
  variant: "default",
  placeholder: "Type something...",
  disabled: true,
};

export const WithCustomLabel = Template.bind({});
WithCustomLabel.args = {
  label: "Custom Label",
  variant: "filled",
  placeholder: "Type with a custom label...",
};

export const FocusedState = Template.bind({});
FocusedState.args = {
  label: "Focused Input",
  variant: "outline",
  placeholder: "This input simulates being focused",
};

// Story for demonstrating the floating input effect
export const FloatingEffect = Template.bind({});
FloatingEffect.args = {
  label: "Floating Label Input",
  variant: "floating",
};
