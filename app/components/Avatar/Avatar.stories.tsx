// import { Meta, StoryObj } from "@storybook/react";
// import Avatar, { AvatarProps } from "./Avatar";

// export default {
//   title: "Components/Avatar/Avatar",
//   component: Avatar,
//   argTypes: {
//     name: {
//       control: "text",
//     },
//     src: {
//       control: "text",
//     },
//     rounded: {
//       control: {
//         type: "select",
//         options: [true, false],
//       },
//     },
//     size: {
//       control: {
//         type: "select",
//         options: ["sm", "md", "lg"],
//       },
//     },
//   },
// } as Meta;

// export const Default: StoryObj<AvatarProps> = {
//   args: {
//     name: "João Silva",
//     size: "md",
//     rounded: true,
//   },
// };

// export const ObjectFitCover: StoryObj<AvatarProps> = {
//   args: {
//     src: "/avatar_image.jpeg",
//     objectFit: "cover",
//     objectPosition: "right",
//     size: "lg",
//     rounded: true,
//   },
// };

// export const WithImage: StoryObj<AvatarProps> = {
//   args: {
//     src: "/avatar_image.jpeg",
//     name: "Maria Oliveira",
//     size: "lg",
//     rounded: true,
//   },
// };

// export const WithoutNameOrImage: StoryObj<AvatarProps> = {
//   args: {
//     rounded: true,
//     size: "sm",
//   },
// };

// export const DifferentSizes: StoryObj<AvatarProps> = {
//   render: (args:AvatarProps) => (
//     <div className="flex gap-4">
//       <Avatar {...args} size="sm" />
//       <Avatar {...args} size="md" />
//       <Avatar {...args} size="lg" />
//     </div>
//   ),
//   args: {
//     src: "/avatar_image.jpeg",
//     rounded: true,
//   },
// };

// export const SquareAvatar: StoryObj<AvatarProps> = {
//   args: {
//     name: "Thiago Miranda",
//     rounded: false,
//     size: "md",
//   },
// };
