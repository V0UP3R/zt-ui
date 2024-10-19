import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["fill", "faded", "ghost", "light", "bordered", "flat", "shadow"],
      },
    },
    color: {
      control: "color",
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg", "xl"],
      },
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default Button",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
  variant: "fill",
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary Button",
  variant: "faded",
  color: "secondary",
};

export const Sizes = () => (
  <div className="flex flex-col gap-4">
    <Button size="sm" variant="fill" color="primary">Small Button</Button>
    <Button size="md" variant="fill" color="primary">Medium Button</Button>
    <Button size="lg" variant="fill" color="primary">Large Button</Button>
    <Button size="xl" variant="fill" color="primary">Extra Large Button</Button>
  </div>
);

export const Variants = () => (
  <div className="flex flex-col gap-4">
    <Button variant="fill">Fill Button</Button>
    <Button variant="faded">Faded Button</Button>
    <Button variant="ghost">Ghost Button</Button>
    <Button variant="light">Light Button</Button>
    <Button variant="bordered">Bordered Button</Button>
    <Button variant="flat">Flat Button</Button>
    <Button variant="shadow">Shadow Button</Button>
    <Button variant="animated">Animated Button</Button>
    <Button variant="carousel">Animated Button</Button>
  </div>
);

export const Colors = () => (
  <div className="flex flex-col gap-4">
    <Button variant="fill" color="default">Default Color Button</Button>
    <Button variant="fill" color="primary">Primary Color Button</Button>
    <Button variant="fill" color="secondary">Secondary Color Button</Button>
    <Button variant="fill" color="tertiary">Tertiary Color Button</Button>
    <Button variant="fill" color="warning">Warning Color Button</Button>
    <Button variant="fill" color="success">Success Color Button</Button>
    <Button variant="fill" color="danger">Danger Color Button</Button>
    <Button variant="fill" color="#FF5733">Custom Color Button</Button>
  </div>
);
