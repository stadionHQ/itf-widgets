import type { Meta, StoryObj } from '@storybook/react'

import { Button as Btn } from '.'

const meta = {
  title: 'Atoms / Button',
  component: Btn,
  args: {
    text: 'Click me',
    onClick: () => console.log('Button clicked!'),
  },
} satisfies Meta<typeof Btn>

export default meta
type Story = StoryObj<typeof meta>

export const Button: Story = {}
