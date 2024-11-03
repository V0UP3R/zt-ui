// import { Meta, StoryObj } from "@storybook/react";
// import Checkbox, { CheckboxProps } from "./Checkbox"; // Import your CheckBox component
// import { MdCheck, MdFavorite } from "react-icons/md";

// export default {
//   title: "Components/Checkbox/Checkbox",
//   component: Checkbox,
//   argTypes: {
//     label: {
//       control: "text",
//     },
//     checkedColor: {
//       control: "color",
//     },
//     uncheckedColor: {
//       control: "color",
//     },
//     size: {
//       control: {
//         type: "select",
//         options: ["sm", "md", "lg"],
//       },
//     },
//     checkedIcon: {
//       control: "boolean", // You can modify this to allow icon selection if needed
//     },
//     checkedIconColor: {
//       control: "color",
//     },
//   },
// } as Meta;

// export const Default: StoryObj<CheckboxProps> = {
//   args: {
//     label: "Check me",
//     size: "md",
//     checkedColor: "bg-green-500",
//     uncheckedColor: "border-gray-400",
//     checkedIconColor: "text-white",
//   },
// };

// export const CustomColors: StoryObj<CheckboxProps> = {
//   args: {
//     label: "Custom Colors",
//     checkedColor: "bg-blue-500", // Cor de fundo quando marcado
//     uncheckedColor: "border-red-400", // Cor de borda quando não marcado
//     size: "md",
//   },
// };

// export const Disabled: StoryObj<CheckboxProps> = {
//   args: {
//     label: "Disabled CheckBox",
//     size: "md",
//     disabled: true, // Definindo como desabilitado
//   },
// };

// export const DifferentSizes: StoryObj<CheckboxProps> = {
//   render: (args) => (
//     <div className="flex flex-col gap-4">
//       <Checkbox {...args} size="sm" label="Small CheckBox" />
//       <Checkbox {...args} size="md" label="Medium CheckBox" />
//       <Checkbox {...args} size="lg" label="Large CheckBox" />
//     </div>
//   ),
//   args: {
//     checkedColor: "bg-green-500",
//     uncheckedColor: "border-gray-400",
//   },
// };

// export const WithCustomIcon: StoryObj<CheckboxProps> = {
//   args: {
//     label: "With Custom Icon",
//     checkedIcon: <MdFavorite />,
//     checkedIconColor: "text-white",
//     size: "md",
//   },
// };

// export const WithoutLabel: StoryObj<CheckboxProps> = {
//   args: {
//     checkedColor: "bg-green-500",
//     uncheckedColor: "border-gray-400",
//     size: "md",
//   },
// };
