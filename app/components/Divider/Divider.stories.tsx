// import React from "react";
// import { Meta, StoryFn } from "@storybook/react";
// import Divider from "./Divider";

// export default {
//   title: "Components/Divider/Divider",
//   component: Divider,
//   argTypes: {
//     text: {
//       control: "text",
//     },
//     textColor: {
//       control: {
//         type: "select",
//         options: [
//           "text-gray-500",
//           "text-blue-500",
//           "text-red-500",
//           "text-green-500",
//         ],
//       },
//     },
//     borderColor: {
//       control: {
//         type: "select",
//         options: [
//           "border-gray-300",
//           "border-blue-300",
//           "border-red-300",
//           "border-green-300",
//         ],
//       },
//     },
//     thickness: {
//       control: {
//         type: "select",
//         options: [
//           "border-t-2",
//           "border-t-4",
//           "border-t-8",
//         ],
//       },
//     },
//     marginY: {
//       control: {
//         type: "select",
//         options: [
//           "my-2",
//           "my-4",
//           "my-8",
//         ],
//       },
//     },
//   },
// } as Meta;

// const Template: StoryFn = (args) => <Divider {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   text: "Default Divider",
// };

// export const CustomTextColor = Template.bind({});
// CustomTextColor.args = {
//   text: "Custom Text Color",
//   textColor: "text-blue-500",
// };

// export const CustomBorderColor = Template.bind({});
// CustomBorderColor.args = {
//   text: "Custom Border Color",
//   borderColor: "border-red-300",
// };

// export const ThickDivider = Template.bind({});
// ThickDivider.args = {
//   text: "Thick Divider",
//   thickness: "border-t-8",
// };

// export const WideMargin = Template.bind({});
// WideMargin.args = {
//   text: "Wide Margin Divider",
//   marginY: "my-8",
// };

// export const NoText = Template.bind({});
// NoText.args = {
//   text: undefined,
// };
