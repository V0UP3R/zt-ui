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
        options: [
          "fill",
          "faded",
          "ghost",
          "light",
          "bordered",
          "flat",
          "shadow",
          "animated",
          "carousel",
        ],
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
    rounded: {
      control: {
        type: "select",
        options: [
          "none",
          "xs",
          "sm",
          "md",
          "lg",
          "xl",
          "2xl",
          "3xl",
          "4xl",
          "5xl",
          "full",
        ],
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

export const RoundedVariants = () => (
  <div className="flex flex-col gap-4">
    <Button size="md" variant="fill" rounded="none">No Rounded</Button>
    <Button size="md" variant="fill" rounded="sm">Small Rounded</Button>
    <Button size="md" variant="fill" rounded="md">Medium Rounded</Button>
    <Button size="md" variant="fill" rounded="lg">Large Rounded</Button>
    <Button size="md" variant="fill" rounded="xl">Extra Large Rounded</Button>
    <Button size="md" variant="fill" rounded="2xl">2X Large Rounded</Button>
    <Button size="md" variant="fill" rounded="full">Fully Rounded</Button>
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
    <Button variant="carousel">Carousel Button</Button>
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

export const DisabledButton = () => (
  <div className="flex flex-col gap-4">
    <Button color="primary" rounded="md" disabled>
      Disabled Button
    </Button>
    <Button color="secondary" rounded="md" disabled>
      Disabled Faded Button
    </Button>
  </div>
);

export const CustomButtonWithAllProps = () => (
  <div className="flex flex-col gap-4">
    <Button
      variant="shadow"
      color="warning"
      size="lg"
      rounded="3xl"
    >
      Custom Shadow Button
    </Button>
    <Button
      variant="ghost"
      color="danger"
      size="md"
      rounded="full"
    >
      Custom Ghost Button
    </Button>

    <Button isIconOnly>
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
      </svg>
    </Button>

  </div>
);
