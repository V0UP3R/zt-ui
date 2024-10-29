import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown/Dropdown',
  component: Dropdown,
  argTypes: {
    options: {
      control: 'object',
    },
    placeholder: {
      control: 'text',
    },
  },
} as Meta;

const Template: StoryFn = (args) => <Dropdown options={[]} onSelect={(option) => console.log('Selected:', option)} {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  onSelect: (option: any) => console.log('Selected:', option),
};

// export const CustomPlaceholder = Template.bind({});
// CustomPlaceholder.args = {
//   ...Default.args,
//   placeholder: 'Escolha uma opção...',
// };

// export const PreselectedOption = Template.bind({});
// PreselectedOption.args = {
//   options: [
//     { value: 'option1', label: 'Option 1' },
//     { value: 'option2', label: 'Option 2' },
//     { value: 'option3', label: 'Option 3' },
//   ],
//   onSelect: (option: any) => console.log('Selected:', option),
//   placeholder: 'Selecione uma opção',
// };
// PreselectedOption.play = async ({ canvasElement }) => {
//   const option = { value: 'option2', label: 'Option 2' };
//   const dropdown = canvasElement.querySelector('button');
//   if (dropdown) dropdown.click();
//   await new Promise((resolve) => setTimeout(resolve, 500));
//   console.log('Automatically selected:', option);
// };

// export const NoOptions = Template.bind({});
// NoOptions.args = {
//   options: [],
//   placeholder: 'Nenhuma opção disponível',
// };
