import { Meta, StoryObj } from "@storybook/react";
import { CheckBox, CheckBoxProps } from "./CheckBox"; // Import your CheckBox component
import { MdCheck, MdFavorite } from "react-icons/md";

export default {
  title: "Components/CheckBox/CheckBox",
  component: CheckBox,
  argTypes: {
    label: {
      control: "text",
    },
    checkedColor: {
      control: "color",
    },
    uncheckedColor: {
      control: "color",
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
    checkedIcon: {
      control: "boolean", // You can modify this to allow icon selection if needed
    },
    checkedIconColor: {
      control: "color",
    },
  },
} as Meta;

export const Default: StoryObj<CheckBoxProps> = {
  args: {
    label: "Check me",
    size: "md",
    checkedColor: "bg-green-500",
    uncheckedColor: "border-gray-400",
    checkedIconColor: "text-white",
  },
};

export const CustomColors: StoryObj<CheckBoxProps> = {
  args: {
    label: "Custom Colors",
    checkedColor: "bg-blue-500", // Cor de fundo quando marcado
    uncheckedColor: "border-red-400", // Cor de borda quando não marcado
    size: "md",
  },
};

export const Disabled: StoryObj<CheckBoxProps> = {
  args: {
    label: "Disabled CheckBox",
    size: "md",
    disabled: true, // Definindo como desabilitado
  },
};

export const DifferentSizes: StoryObj<CheckBoxProps> = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <CheckBox {...args} size="sm" label="Small CheckBox" />
      <CheckBox {...args} size="md" label="Medium CheckBox" />
      <CheckBox {...args} size="lg" label="Large CheckBox" />
    </div>
  ),
  args: {
    checkedColor: "bg-green-500",
    uncheckedColor: "border-gray-400",
  },
};

export const WithCustomIcon: StoryObj<CheckBoxProps> = {
  args: {
    label: "With Custom Icon",
    checkedIcon: <MdFavorite />,
    checkedIconColor: "text-white",
    size: "md",
  },
};

export const WithoutLabel: StoryObj<CheckBoxProps> = {
  args: {
    checkedColor: "bg-green-500",
    uncheckedColor: "border-gray-400",
    size: "md",
  },
};
