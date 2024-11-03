// import type { Meta, StoryObj } from '@storybook/react';
// import Switch from './Switch'; 

// const meta: Meta<typeof Switch> = {
//   title: 'Components/Switch/Switch', 
//   component: Switch,
//   args: {
//     checked: false,
//     size: 'md',
//     onColor: 'bg-green-500',
//     offColor: 'bg-gray-300',
//     labels: { on: 'Ligado', off: 'Desligado' },
//   },
//   argTypes: {
//     size: {
//       control: 'radio',
//       options: ['sm', 'md', 'lg'],
//       description: 'Define o tamanho do switch',
//       defaultValue: 'md',
//     },
//     onColor: {
//       control: 'text',
//       description: 'Classe Tailwind para a cor ativa',
//     },
//     offColor: {
//       control: 'text',
//       description: 'Classe Tailwind para a cor inativa',
//     },
//     checked: {
//       control: 'boolean',
//       description: 'Define se o switch inicia ativado ou desativado',
//     },
//     onChange: { action: 'changed' }, 
//   },
// };

// export default meta;

// type Story = StoryObj<typeof Switch>;

// export const Default: Story = {};

// export const Checked: Story = {
//   args: {
//     checked: true,
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'lg',
//   },
// };

// export const CustomColors: Story = {
//   args: {
//     onColor: 'bg-blue-500',
//     offColor: 'bg-red-400',
//   },
// };
