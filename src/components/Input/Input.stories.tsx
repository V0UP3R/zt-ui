import { Meta, StoryFn } from '@storybook/react';
import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    label: { control: 'text', description: 'Label for the input field' },
    containerClassName: { control: 'text', description: 'CSS classes for the container element' },
    labelClassName: { control: 'text', description: 'CSS classes for the label element' },
    inputClassName: { control: 'text', description: 'CSS classes for the input element' },
    variant: { 
      control: 'select', 
      options: ['default', 'outline', 'filled', 'line', 'floating'], 
      description: 'The visual variant of the input field' 
    },
    id: { control: 'text', description: 'Unique identifier for the input element' },
    placeholder: { control: 'text', description: 'Placeholder text for the input field' },
    type: { control: 'text', description: 'Type of the input field (e.g., text, password, email)' },
    disabled: { control: 'boolean', description: 'Whether the input is disabled' },
    onChange: { action: 'changed', description: 'Callback when the input value changes' },
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

// Default variant
export const Default = Template.bind({});
Default.args = {
  label: 'Default Input',
  placeholder: 'Enter text...',
  variant: 'default',
  id: 'default-input',
};

// Outline variant
export const Outline = Template.bind({});
Outline.args = {
  label: 'Outline Input',
  placeholder: 'Enter text...',
  variant: 'outline',
  id: 'outline-input',
};

// Filled variant
export const Filled = Template.bind({});
Filled.args = {
  label: 'Filled Input',
  placeholder: 'Enter text...',
  variant: 'filled',
  id: 'filled-input',
};

// Line variant
export const Line = Template.bind({});
Line.args = {
  label: 'Line Input',
  placeholder: 'Enter text...',
  variant: 'line',
  id: 'line-input',
};

// Floating Label variant
export const Floating = Template.bind({});
Floating.args = {
  label: 'Floating Input',
  variant: 'floating',
  id: 'floating-input',
};

// Disabled input
export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Input',
  placeholder: 'Cannot type here',
  variant: 'default',
  id: 'disabled-input',
  disabled: true,
};

// Documentation for the Input component
Floating.parameters = {
  docs: {
    description: {
      component: `
### Input Component

This Input component is highly customizable and can be used in various styles like **default**, **outline**, **filled**, **line**, and **floating label**. It supports several props to control its appearance and behavior:

- **label**: Adds a label to the input field.
- **variant**: The style of the input (default, outline, filled, line, or floating).
- **containerClassName**: Custom classes for the container div.
- **labelClassName**: Custom classes for the label.
- **inputClassName**: Custom classes for the input element.
- **placeholder**: The placeholder text for the input.
- **id**: Unique identifier for accessibility.
- **disabled**: Disables the input field.

### Usage

\`\`\`tsx
<Input 
  label="Your Name" 
  placeholder="Enter your name" 
  variant="outline" 
  id="name-input" 
/>
\`\`\`

You can also handle onChange events by passing an event handler through props. This allows you to control the value of the input programmatically:

\`\`\`tsx
<Input 
  label="Email" 
  placeholder="Enter your email" 
  variant="line" 
  id="email-input" 
  onChange={(e) => console.log(e.target.value)} 
/>
\`\`\`

### Floating Label

The \`floating\` variant provides a floating label effect. When the input is focused or has content, the label moves above the input.

\`\`\`tsx
<Input 
  label="Username" 
  placeholder="Enter username" 
  variant="floating" 
  id="username-input" 
/>
\`\`\`
      `,
    },
  },
};
