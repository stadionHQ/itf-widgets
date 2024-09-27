import type { Meta, StoryObj } from '@storybook/react'
// import { fn } from '@storybook/test'

import { MatchCard } from './MatchCard.component'

const meta = {
  title: 'Components / MatchCard',
  component: MatchCard,
  args: {
    id: 'TEST_ID',
    competitionType: 'competitionType',
    competitonStage: 'competitonStage',
    courtName: 'Centre Court',
    matchTime: '88hr 88m',
    // onLogin: fn(),
  },
} satisfies Meta<typeof MatchCard>

export default meta
type Story = StoryObj<typeof meta>

export const Completed: Story = {}

// export const Live: Story = {
//   args: {
//     user: {
//       name: 'Jane Doe',
//     },
//   },
// };
