import { Meta, StoryFn } from '@storybook/react';
import { ButtonProps, Button } from './Button';

// Configuração geral do Storybook para o componente
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg'],
    },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
} as Meta;

// Template base para criar diferentes histórias
const Template: StoryFn<ButtonProps> = (args:ButtonProps) => <Button {...args} />;

// Histórias para diferentes variantes do Button

// Botão padrão
export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  size: 'default',
  children: 'Default Button',
};

// Botão destrutivo (vermelho)
export const Destructive = Template.bind({});
Destructive.args = {
  variant: 'destructive',
  size: 'default',
  children: 'Delete',
};

// Botão com borda (outline)
export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  size: 'default',
  children: 'Outline Button',
};

// Botão secundário
export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'default',
  children: 'Secondary Button',
};

// Botão fantasma (ghost)
export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  size: 'default',
  children: 'Ghost Button',
};

// Botão de link
export const Link = Template.bind({});
Link.args = {
  variant: 'link',
  size: 'default',
  children: 'Link Button',
};

// Histórias para tamanhos diferentes

// Botão pequeno
export const Small = Template.bind({});
Small.args = {
  variant: 'default',
  size: 'sm',
  children: 'Small Button',
};

// Botão grande
export const Large = Template.bind({});
Large.args = {
  variant: 'default',
  size: 'lg',
  children: 'Large Button',
};

// Botão desabilitado
export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'default',
  size: 'default',
  children: 'Disabled Button',
  disabled: true,
};
