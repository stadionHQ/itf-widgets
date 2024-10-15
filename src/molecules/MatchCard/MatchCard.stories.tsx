import type { Meta, StoryObj } from '@storybook/react'

import { MatchCard } from './MatchCard.component'
import { liveMatchMock, postMatchMock, preMatchMock } from './MatchCard.mocks'

const meta = {
  title: 'Molecules / MatchCard',
  component: MatchCard,
  args: {},
} satisfies Meta<typeof MatchCard>

export default meta
type Story = StoryObj<typeof meta>

export const Pre: Story = { args: { data: preMatchMock } }

export const Live: Story = { args: { data: liveMatchMock } }

export const Post: Story = { args: { data: postMatchMock } }
