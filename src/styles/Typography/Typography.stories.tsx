import type { Meta, StoryObj } from '@storybook/react'

import TypographyDisplay from './Typography.component'

const meta = {
  title: 'Styles / Typography',
  component: TypographyDisplay,
} satisfies Meta<typeof TypographyDisplay>

export default meta
type Story = StoryObj<typeof meta>

export const Typography: Story = {}
