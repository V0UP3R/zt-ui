// NavBar.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import NavBar from "./NavBar";

export default {
  title: "Components/NavBar/NavBar",
  component: NavBar,
  argTypes: {
    logo: {
      control: "text",
    },
    links: {
      control: {
        type: "object",
      },
    },
    bgColor: {
      control: {
        type: "select",
        options: [
          "bg-gray-800",
          "bg-blue-600",
          "bg-red-600",
          "bg-green-600",
        ],
      },
    },
    textColor: {
      control: {
        type: "select",
        options: [
          "text-white",
          "text-gray-800",
          "text-blue-800",
          "text-red-800",
        ],
      },
    },
    hoverColor: {
      control: {
        type: "select",
        options: [
          "hover:text-gray-300",
          "hover:text-blue-300",
          "hover:text-red-300",
        ],
      },
    },
  },
} as Meta;

const Template: StoryFn = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo: "MyApp",
  links: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ],
  bgColor: "bg-gray-800",
  textColor: "text-white",
  hoverColor: "hover:text-gray-300",
};

// Outras histórias permanecem as mesmas
