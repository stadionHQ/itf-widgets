import type { Meta, StoryObj } from '@storybook/react'

import { IconDisplay } from './Icons.component'

const meta = {
  title: 'Atoms / Icons',
  component: IconDisplay,
} satisfies Meta<typeof IconDisplay>

export default meta
type Story = StoryObj<typeof meta>

export const Icons: Story = {}
