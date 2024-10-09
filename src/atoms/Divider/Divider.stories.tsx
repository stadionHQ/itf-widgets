import type { Meta, StoryObj } from '@storybook/react'

import { Divider } from '.'
import { DividerDirection } from './Divider.types'

const meta = {
  title: 'Atoms / Divider',
  component: Divider,
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  args: {
    direction: DividerDirection.HORIZONTAL,
  },
}

export const Vertical: Story = {
  args: {
    direction: DividerDirection.VERTICAL,
  },
}
