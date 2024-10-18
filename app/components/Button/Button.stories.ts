import { Meta, StoryObj } from "@storybook/react"
import Button, { ButtonProps } from "./Button"

const meta: Meta<ButtonProps> = {
  title: 'Button',
  component: Button,
  argTypes: {}
}

export default meta

export const Primary:StoryObj<ButtonProps> = {
  args:{
    children: 'Botão primary'
  }
}

export const Secundary:StoryObj<ButtonProps> = {
  args:{
    children: 'Botão primary',
    className: 'bg-red-500'
  }
}