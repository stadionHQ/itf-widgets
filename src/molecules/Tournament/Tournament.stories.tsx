import type { Meta, StoryObj } from '@storybook/react'

import { Tournament as TournamentComponent } from './Tournament.component'

const meta = {
  title: 'Molecules / Tournament',
  component: TournamentComponent,
  args: {},
} satisfies Meta<typeof TournamentComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Tournament: Story = {}
