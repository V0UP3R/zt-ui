// import { Meta, StoryObj } from "@storybook/react";
// import Button, { ButtonProps } from "./Button";
// import { AiOutlinePlus, AiOutlineArrowRight } from "react-icons/ai";

// export default {
//   title: "Components/Button/Button",
//   component: Button,
//   argTypes: {
//     variant: {
//       control: {
//         type: "select",
//         options: [
//           "fill",
//           "faded",
//           "ghost",
//           "light",
//           "bordered",
//           "flat",
//           "shadow",
//           "animated",
//           "carousel",
//         ],
//       },
//     },
//     color: {
//       control: "color",
//     },
//     size: {
//       control: {
//         type: "select",
//         options: ["sm", "md", "lg", "xl"],
//       },
//     },
//     rounded: {
//       control: {
//         type: "select",
//         options: [
//           "none",
//           "sm",
//           "md",
//           "lg",
//           "xl",
//           "2xl",
//           "3xl",
//           "4xl",
//           "5xl",
//           "full",
//         ],
//       },
//     },
//     disabled: {
//       control: "boolean",
//     },
//     isIconOnly: {
//       control: "boolean",
//     },
//   },
// } as Meta;

// export const Primary: StoryObj<ButtonProps> = {
//   args: {
//     children: "Botão Primário",
//     variant: "fill",
//     color: "primary",
//   },
// };

// export const Disabled: StoryObj<ButtonProps> = {
//   args: {
//     children: "Botão Desativado",
//     disabled: true,
//   },
// };

// export const IconButton: StoryObj<ButtonProps> = {
//   args: {
//     children: <AiOutlinePlus />,
//     isIconOnly: true,
//     variant: "ghost",
//     color: "primary",
//   },
// };

// export const Animated: StoryObj<ButtonProps> = {
//   args: {
//     children: "Clique Aqui",
//     variant: "animated",
//   },
// };

// export const Carousel: StoryObj<ButtonProps> = {
//   args: {
//     children: "Avançar",
//     variant: "carousel",
//   },
// };

// export const WithIcon: StoryObj<ButtonProps> = {
//   args: {
//     children: (
//       <>
//         Avançar <AiOutlineArrowRight className="ml-2" />
//       </>
//     ),
//     variant: "fill",
//     color: "success",
//   },
// };

// export const DifferentSizes: StoryObj<ButtonProps> = {
//   render: (args) => (
//     <div className="flex gap-4 w-full">
//       <Button {...args} size="sm">
//         Pequeno
//       </Button>
//       <Button {...args} size="md">
//         Médio
//       </Button>
//       <Button {...args} size="lg">
//         Grande
//       </Button>
//       <Button {...args} size="xl">
//         Extra Grande
//       </Button>
//     </div>
//   ),
//   args: {
//     variant: "fill",
//     color: "primary",
//   },
// };
