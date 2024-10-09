import type { Meta, StoryObj } from '@storybook/react'

import { MatchCard } from './MatchCard.component'

const meta = {
  title: 'Molecules / MatchCard',
  component: MatchCard,
  args: {},
} satisfies Meta<typeof MatchCard>

export default meta
type Story = StoryObj<typeof meta>

export const Pre: Story = { args: { status: 'pre' } }

export const Live: Story = { args: { status: 'live' } }

export const Post: Story = { args: { status: 'post' } }
